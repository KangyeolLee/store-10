import client from '../client';

export const addBookmark = async (id: number) => {
  return await client.post('/bookmark', { productId: id });
};
