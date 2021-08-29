import client from '../client';
import { IUser } from '@/types';

export async function getCurrentUser() {
  return await client.get<IUser>('/auth/check');
}
