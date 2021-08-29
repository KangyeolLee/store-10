import client from '../client';
import { ICart } from '@/types';

export const getCarts = async () => {
  return await client.get<ICart[]>('/cart');
};

export const deleteCart = async (ids: number[]) => {
  return await client.delete(`/cart?productIds=${JSON.stringify(ids)}`);
};

export const postCart = async ({
  count,
  productId,
}: {
  count: undefined | number;
  productId: string;
}) => {
  return await client.post('/cart', {
    count: count || 1,
    productId,
  });
};
