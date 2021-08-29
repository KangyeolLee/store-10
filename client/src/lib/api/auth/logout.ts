import client from '../client';

export async function logout() {
  await client.post('/auth/logout');
}
