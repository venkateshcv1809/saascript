import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

describe('Password Hashing', () => {
  it('should hash and verify password', async () => {
    const password = 'testpassword';
    const hash = await bcrypt.hash(password, 10);
    expect(await bcrypt.compare(password, hash)).toBe(true);
    expect(await bcrypt.compare('wrong', hash)).toBe(false);
  });
});

describe('JWT Creation/Verification', () => {
  it('should sign and verify a JWT', () => {
    const payload = { id: 1, username: 'user', roles: ['user'] };
    const secret = 'testsecret';
    const token = jwt.sign(payload, secret, { expiresIn: '1h' });
    const decoded = jwt.verify(token, secret);
    expect(decoded).toMatchObject(payload);
  });
});
