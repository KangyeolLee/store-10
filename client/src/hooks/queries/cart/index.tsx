import { useQuery, useQueryClient, useMutation } from 'react-query';
import { getCarts, deleteCart, postCart } from '@/lib/api/cart';
import { ICart } from '@/types';
import { notify } from '@/components/Shared/Toastify';

export const useGetCarts = () => {
  return useQuery<ICart[], Error>('carts', getCarts);
};

export const useDeleteCart = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteCart, {
    onMutate: async (ids) => {
      await queryClient.cancelQueries('carts');
      const previousCarts = queryClient.getQueryData('todos');

      queryClient.setQueryData<ICart[] | undefined>('todos', (oldCarts) => {
        if (!oldCarts) return [];
        return oldCarts.filter((cart) => !ids.includes(cart.id));
      });
      return { previousCarts };
    },
    onSuccess: () => {
      queryClient.invalidateQueries('carts');
    },
    onError: ({ context }) => {
      notify('error', '실패!');
      queryClient.setQueryData('carts', context.previousCarts);
    },
  });

  return mutation;
};

export const usePostCart = () => {
  const mutation = useMutation(postCart, {
    onError: () => {
      notify('error', '실패!');
    },
  });

  return mutation;
};
