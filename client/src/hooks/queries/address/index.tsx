import {
  getAddresses,
  postAddress,
  updateAddress,
  deleteAddress,
  getDefaultAddress,
} from '@/lib/api/address';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { IAddress } from '@/types/index';
import { notify } from '@/components/Shared/Toastify';

export const useGetAddresses = () => {
  return useQuery<IAddress[], Error>('address', getAddresses);
};

export const useGetDefaultAddress = () => {
  return useQuery<IAddress, Error>('defaultAddress', getDefaultAddress, {});
};

export const usePostAddress = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(postAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries('address');
      notify('success', '성공적으로 배송지를 추가하였습니다.');
    },
    onError: () => {
      notify('error', '실패!');
    },
  });

  return mutation;
};

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(updateAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries('address');
      notify('success', '성공적으로 배송지를 변경하였습니다.');
    },
    onError: () => {
      notify('error', '실패!');
    },
  });

  return mutation;
};

export const useDeleteAddress = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteAddress, {
    onSuccess: () => {
      queryClient.invalidateQueries('address');
      notify('success', '성공적으로 배송지를 삭제하였습니다.');
    },
    onError: () => {
      notify('error', '실패!');
    },
  });

  return mutation;
};
