import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Health check endpoint
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Start server
app.listen(PORT, () => {
  logger.info(`Auth service listening on port ${PORT}`);
});
