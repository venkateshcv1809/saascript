import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import db from './utils/db';
import { migrate } from './utils/migrate';
import { UserCreateSchema } from './types/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Helper to wrap async route handlers to catch errors and pass to next()
function asyncHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

// Registration endpoint (update to assign default role)
app.post(
  '/register',
  asyncHandler(async (req: Request, res: Response) => {
    try {
      const parsed = UserCreateSchema.safeParse(req.body);
      if (!parsed.success) {
        return res
          .status(400)
          .json({ success: false, error: 'Invalid input', details: parsed.error.errors });
      }
      const { username, email, password } = parsed.data;
      // Check if user exists
      const existing = await db.oneOrNone(
        'SELECT id FROM users WHERE username = $1 OR email = $2',
        [username, email],
      );
      if (existing) {
        return res.status(409).json({ success: false, error: 'Username or email already exists' });
      }
      const hashed_password = await bcrypt.hash(password, 10);
      // Assign default role 'user'
      const user = await db.one(
        'INSERT INTO users (username, email, hashed_password, roles) VALUES ($1, $2, $3, $4) RETURNING id, username, email, roles, created_at',
        [username, email, hashed_password, ['user']],
      );
      res.status(201).json({ success: true, data: user });
    } catch (err) {
      logger.error('Registration error', err);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }),
);

// Login endpoint
app.post(
  '/login',
  asyncHandler(async (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ success: false, error: 'Username and password are required' });
    }
    try {
      const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);
      if (!user) {
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
      }
      const valid = await bcrypt.compare(password, user.hashed_password);
      if (!valid) {
        return res.status(401).json({ success: false, error: 'Invalid credentials' });
      }
      const payload = { id: user.id, username: user.username, roles: user.roles };
      const secret = process.env.JWT_SECRET || 'dev_secret';
      const expiresIn = '1h';
      const token = jwt.sign(payload, secret, { expiresIn });
      res.json({
        success: true,
        access_token: token,
        token_type: 'Bearer',
        expires_in: 3600,
      });
    } catch (err) {
      logger.error('Login error:', err);
      return res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }),
);

// JWT authentication middleware
function authenticateToken(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    res.status(401).json({ success: false, error: 'Missing token' });
    return;
  }
  const secret = process.env.JWT_SECRET || 'dev_secret';
  try {
    const payload = jwt.verify(token, secret);
    // @ts-ignore
    req.user = payload;
    next();
  } catch {
    res.status(401).json({ success: false, error: 'Invalid or expired token' });
  }
}

// Role-based authorization middleware
function authorizeRoles(roles: string[]) {
  return (req: Request, res: Response, next: NextFunction): void => {
    // @ts-ignore
    const user = req.user;
    if (!user || !user.roles || !roles.some((role: string) => user.roles.includes(role))) {
      res.status(403).json({ success: false, error: 'Forbidden: insufficient role' });
      return;
    }
    next();
  };
}

// User profile endpoint (protected)
app.get(
  '/me',
  authenticateToken,
  asyncHandler(async (req: Request, res: Response) => {
    try {
      // req.user is attached by the authenticateToken middleware
      const user = await db.oneOrNone(
        'SELECT id, username, email, roles, created_at FROM users WHERE id = $1',
        [req.user.id],
      );
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
      res.json({ success: true, data: user });
    } catch (err) {
      return res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }),
);

// Admin-only endpoint: assign role to user
app.post(
  '/admin/assign-role',
  authenticateToken,
  authorizeRoles(['admin']),
  asyncHandler(async (req: Request, res: Response) => {
    const { username, role } = req.body;
    if (!username || !role) {
      return res.status(400).json({ success: false, error: 'username and role are required' });
    }
    try {
      const user = await db.oneOrNone('SELECT * FROM users WHERE username = $1', [username]);
      if (!user) {
        return res.status(404).json({ success: false, error: 'User not found' });
      }
      // Add role if not present
      if (!user.roles.includes(role)) {
        await db.none('UPDATE users SET roles = array_append(roles, $1) WHERE username = $2', [
          role,
          username,
        ]);
      }
      res.json({ success: true, message: `Role '${role}' assigned to user '${username}'` });
    } catch (err) {
      logger.error('Assign role error', err);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }),
);

// Password reset request endpoint
app.post(
  '/reset-password-request',
  asyncHandler(async (req: Request, res: Response) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ success: false, error: 'Email is required' });
    }
    try {
      const user = await db.oneOrNone('SELECT id FROM users WHERE email = $1', [email]);
      // Always respond generically for security
      if (!user) {
        return res.json({
          success: true,
          message: 'If the email exists, a reset link will be sent.',
        });
      }
      const token = crypto.randomBytes(32).toString('hex');
      const expiresAt = new Date(Date.now() + 1000 * 60 * 30); // 30 minutes
      await db.none(
        'INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES ($1, $2, $3)',
        [user.id, token, expiresAt],
      );
      // Simulate sending email (log to console)
      logger.info(`Password reset token for user ${user.id}: ${token}`);
      return res.json({
        success: true,
        message: 'If the email exists, a reset link will be sent.',
      });
    } catch (err) {
      logger.error('Reset password request error', err);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }),
);

// Password reset endpoint
app.post(
  '/reset-password',
  asyncHandler(async (req: Request, res: Response) => {
    const { token, username, password } = req.body;
    if (!token || !username || !password) {
      return res
        .status(400)
        .json({ success: false, error: 'token, username, and new password are required' });
    }
    try {
      const user = await db.oneOrNone('SELECT id FROM users WHERE username = $1', [username]);
      if (!user) {
        return res.status(400).json({ success: false, error: 'Invalid token or user' });
      }
      const reset = await db.oneOrNone(
        'SELECT * FROM password_reset_tokens WHERE user_id = $1 AND token = $2 AND used = FALSE AND expires_at > NOW()',
        [user.id, token],
      );
      if (!reset) {
        return res.status(400).json({ success: false, error: 'Invalid or expired token' });
      }
      const hashed_password = await bcrypt.hash(password, 10);
      await db.tx(async (t) => {
        await t.none('UPDATE users SET hashed_password = $1 WHERE id = $2', [
          hashed_password,
          user.id,
        ]);
        await t.none('UPDATE password_reset_tokens SET used = TRUE WHERE id = $1', [reset.id]);
      });
      res.json({ success: true, message: 'Password has been reset.' });
    } catch (err) {
      logger.error('Reset password error', err);
      res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }),
);

// declare module augmentation for Express Request

declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}

// Add a global error handler for Express
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  logger.error('Unhandled error', err);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// Only run migrations and start server if not in test environment
if (process.env.NODE_ENV !== 'test') {
  (async () => {
    try {
      await migrate();
      app.listen(PORT, () => {
        logger.info(`Auth service listening on port ${PORT}`);
      });
    } catch (err) {
      logger.error('Failed to run migrations or start server', err);
      process.exit(1);
    }
  })();
}

export default app;
