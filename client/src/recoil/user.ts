import { IUser } from '@/types';
import { atom } from 'recoil';

export type UserState = IUser | null;

export const userState = atom({
  key: 'userState',
  default: null as UserState,
});
