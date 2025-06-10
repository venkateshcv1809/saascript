import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import db from './utils/db';
import { migrate } from './utils/migrate';
import { UserCreateSchema } from './types/user';
import bcrypt from 'bcryptjs';
import { authenticateToken } from './middleware/auth';
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

// Registration endpoint
app.post('/register', async (req: Request, res: Response) => {
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
      return res.status(409).json({
        success: false,
        error: 'Username or email already exists',
        details: { email: email, username: username },
      });
    }
    const hashed_password = await bcrypt.hash(password, 10);
    const user = await db.one(
      'INSERT INTO users (username, email, hashed_password) VALUES ($1, $2, $3) RETURNING id, username, email, roles, created_at',
      [username, email, hashed_password],
    );
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    logger.error('Registration error:', err);
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Login endpoint
app.post('/login', async (req: Request, res: Response) => {
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

// User profile endpoint (protected)
app.get('/me', authenticateToken, async (req: Request, res: Response) => {
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
