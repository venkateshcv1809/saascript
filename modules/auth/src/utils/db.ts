import pgPromise from 'pg-promise';

const pgp = pgPromise();

const db = pgp(process.env.DATABASE_URL || 'postgres://user:password@localhost:5432/authdb');

export default db;
