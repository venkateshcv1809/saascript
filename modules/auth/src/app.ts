import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import db from './utils/db';
import { migrate } from './utils/migrate';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
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
