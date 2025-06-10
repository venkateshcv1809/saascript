import express, { Application } from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import db from './utils/db';
import { migrate } from './utils/migrate';
import { UserCreateSchema } from './types/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Registration endpoint (update to assign default role)
app.post('/register', async (req, res) => {
  try {
    const parsed = UserCreateSchema.safeParse(req.body);
    if (!parsed.success) {
      return res
        .status(400)
        .json({ success: false, error: 'Invalid input', details: parsed.error.errors });
    }
    const { username, email, password } = parsed.data;
    // Check if user exists
    const existing = await db.oneOrNone('SELECT id FROM users WHERE username = $1 OR email = $2', [
      username,
      email,
    ]);
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
});

// Login endpoint
app.post('/login', async (req, res) => {
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
});

// JWT authentication middleware
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ success: false, error: 'Missing token' });
  const secret = process.env.JWT_SECRET || 'dev_secret';
  try {
    const payload = jwt.verify(token, secret);
    // @ts-ignore
    req.user = payload;
    next();
  } catch {
    return res.status(401).json({ success: false, error: 'Invalid or expired token' });
  }
}

// Role-based authorization middleware
function authorizeRoles(roles) {
  return (req, res, next) => {
    // @ts-ignore
    const user = req.user;
    if (!user || !user.roles || !roles.some((role) => user.roles.includes(role))) {
      return res.status(403).json({ success: false, error: 'Forbidden: insufficient role' });
    }
    next();
  };
}

// User profile endpoint (protected)
app.get('/me', authenticateToken, async (req, res) => {
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
});

// Admin-only endpoint: assign role to user
app.post('/admin/assign-role', authenticateToken, authorizeRoles(['admin']), async (req, res) => {
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
      await db.none('UPDATE users SET roles = array_append(roles, $1) WHERE username = $2', [role, username]);
    }
    res.json({ success: true, message: `Role '${role}' assigned to user '${username}'` });
  } catch (err) {
    logger.error('Assign role error', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Augment Express Request type to include user
import 'express-serve-static-core';
declare module 'express-serve-static-core' {
  interface Request {
    user?: any;
  }
}

// Start server and run migrations
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
