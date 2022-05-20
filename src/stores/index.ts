import createAppSlice from 'stores/slices/createAppSlice';
import createAuthSlice from 'stores/slices/createAuthSlice';
import create, { GetState, SetState } from 'zustand';

export type StoreSlice<T extends object> = (set: SetState<T>, get: GetState<T>) => T;

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
  ...createAppSlice(set, get),
  ...createAuthSlice(set, get),
});

export const useStore = create(createRootSlice);
