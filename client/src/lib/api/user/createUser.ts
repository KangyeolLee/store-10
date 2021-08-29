import { ISignUpUser } from '@/types';
import client from '../client';

export async function createUser(data: ISignUpUser) {
  return await client.post<ISignUpUser>('/user', data);
}
