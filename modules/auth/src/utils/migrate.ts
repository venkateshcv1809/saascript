/*
  Migration: Create users table if it doesn't exist
*/
import db from './db';

export async function migrate() {
  await db.none(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      hashed_password VARCHAR(255) NOT NULL,
      roles TEXT[] NOT NULL DEFAULT ARRAY['user']::TEXT[],
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
}
