import { IBookmarkProduct } from '@/types';
import client from '../client';

export const getDetailBookmarkProducts = async ({
  pageParam = {
    start: 0,
  },
}) => {
  return await client.get<IBookmarkProduct[]>(
    `/bookmark/detail?start=${pageParam.start}`
  );
};
