import { useMutation, useQuery, useQueryClient } from 'react-query';
import {
  getUserCoupons,
  useRegisterCoupon,
  getMissionCoupon,
} from '@/lib/api/user';
import { IUserCoupon } from '@/types';
import { notify } from '@/components/Shared/Toastify';

export const useGetUserCoupons = () => {
  return useQuery<IUserCoupon[], Error>('coupons', () => getUserCoupons());
};

export const useGetUserValidCoupons = () => {
  return useQuery<IUserCoupon[], Error>(['coupons', 'valid'], () =>
    getUserCoupons('valid')
  );
};

export const useRegisterUserCoupon = () => {
  const queryClient = useQueryClient();
  return useMutation(useRegisterCoupon, {
    onSuccess: () => {
      queryClient.invalidateQueries('coupons');
      notify('success', '쿠폰 등록에 성공하였습니다!');
    },
  });
};

export const useGetMissionCoupon = (isComplete: boolean) => {
  return useQuery('missionCoupon', () => getMissionCoupon(), {
    enabled: isComplete,
    cacheTime: 0,
  });
};
