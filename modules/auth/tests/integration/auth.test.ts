import request from 'supertest';
import express from 'express';
import app from '../../src/app';

describe('Auth API Integration', () => {
  it('should register a new user', async () => {
    const res = await request(app)
      .post('/register')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password123' });
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty('username', 'testuser');
  });
  // Add more tests for /login, /me, /admin/assign-role, /reset-password-request, /reset-password
});
