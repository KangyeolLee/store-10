import client from '../client';

export async function postEmailCheck(user_id: string) {
  return await client.post('/user/check', { user_id });
}
