import { ILoginUser } from '@/types';
import client from '../client';

export async function normalLogin(data: ILoginUser) {
  return await client.post('/auth/login', data);
}
