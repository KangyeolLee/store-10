import client from '../client';
import { IAddress } from '@/types';

export const getAddresses = async () => {
  return await client.get<IAddress[]>('/address');
};

export const postAddress = async (address: IAddress) => {
  return await client.post<IAddress>('/address', address);
};

export const updateAddress = async (address: IAddress) => {
  return await client.put<IAddress>('/address', address);
};

export const deleteAddress = async (id: number) => {
  return await client.delete<IAddress>(`/address/${id}`);
};

export const getDefaultAddress = async () => {
  return await client.get<IAddress>('/address/default');
};
