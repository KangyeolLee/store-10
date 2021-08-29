import client from '../client';

export async function changeNickName(nickname: string) {
  await client.post('/user/nickname', { nickname });
}
