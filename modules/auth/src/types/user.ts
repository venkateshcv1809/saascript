import { z } from 'zod';

export const UserCreateSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  password: z.string().min(8),
});

export type UserCreate = z.infer<typeof UserCreateSchema>;

export interface User {
  id: number;
  username: string;
  email: string;
  hashed_password: string;
  roles: string[];
  created_at: string;
}
