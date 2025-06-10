import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import db from './utils/db';
import { migrate } from './utils/migrate';
import { UserCreateSchema } from './types/user';
import bcrypt from 'bcryptjs';

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

// Registration endpoint
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
    const user = await db.one(
      'INSERT INTO users (username, email, hashed_password) VALUES ($1, $2, $3) RETURNING id, username, email, roles, created_at',
      [username, email, hashed_password],
    );
    res.status(201).json({ success: true, data: user });
  } catch (err) {
    logger.error('Registration error', err);
    res.status(500).json({ success: false, error: 'Internal server error' });
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
