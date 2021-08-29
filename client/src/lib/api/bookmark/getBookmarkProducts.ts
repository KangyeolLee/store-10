import { IBookmarkProduct } from '@/types';
import client from '../client';

export const getBookmarkProducts = async () => {
  return await client.get<number[]>(`/bookmark`);
};
