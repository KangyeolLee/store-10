import client from '../client';

export async function changePassword(password: string, rePassword: string) {
  await client.post('/user/password', { password, rePassword });
}
