import { getCateogries } from '@/lib/api/product';
import { IUser } from '@/types';
import { selector } from 'recoil';

export type UserState = IUser | null;

export const CategoryList = selector({
  key: 'CategoryList',
  get: async ({}) => {
    const response = await getCateogries();
    return response;
  },
});
