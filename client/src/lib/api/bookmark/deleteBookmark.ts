import client from '../client';

export const deleteBookmark = async (ids: number[]) => {
  return await client.delete(`/bookmark?productIds=${JSON.stringify(ids)}`);
};
