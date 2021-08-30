import client from '../client';
import { IUserCoupon } from '@/types';

export const getUserCoupons = async (valid?: string) =>
  await client.get<IUserCoupon[]>(
    `/user/coupon${valid ? '?is_valid=true' : ''}`
  );

export const useRegisterCoupon = async (coupon: string) =>
  await client.post('/user/coupon', { coupon });

export const getMissionCoupon = async () =>
  await client.get<{ coupon: string }>('/user/coupon/mission');
