import client from '../client';
import { IOrder, IOrderPost, IOrderUpdate, IOrderCheck } from '@/types';

export const postOrder = async (order: IOrderPost) => {
  return await client.post<IOrderPost>('/order', order);
};

export const getOrder = async (id: number) => {
  return await client.get<IOrder>(`/order/${id}`);
};

export const getOrders = async (year: number | null) => {
  return await client.get<IOrder[]>(`/order${year ? `?year=${year}` : ''}`);
};

export const getOrderByProductId = async (product_id: number) => {
  return await client.get<IOrderCheck>(`/order/product/${product_id}`);
};

export const updateOrder = async (order: IOrderUpdate) => {
  return await client.patch<IOrderUpdate>('/order', order);
};
