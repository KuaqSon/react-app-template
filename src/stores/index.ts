/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-param-reassign */

/* eslint-disable no-unused-vars */
import produce from 'immer';
import { IUser } from 'interfaces/auth';
import create from 'zustand';

export type AppStoreType = {
  isAuthenticated: boolean;
  currentUser: IUser;
  authorize: (user: IUser) => void;
};

export const store = (set: Function, get: Function) => ({
  isAuthenticated: false,
  currentUser: {} as IUser,
  authorize: (user: IUser) =>
    set(
      produce((state: AppStoreType) => {
        state.isAuthenticated = true;
        state.currentUser = user;
      })
    ),
});

export const useAppStore = create<AppStoreType>(store);
