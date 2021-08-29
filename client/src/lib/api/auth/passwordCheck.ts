import client from '../client';

export async function passwordCheck(password: string) {
  await client.post('/auth/passwordCheck', { password });
}
