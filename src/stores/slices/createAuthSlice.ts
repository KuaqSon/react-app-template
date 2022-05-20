import produce from 'immer';
import { StoreSlice } from 'stores';
import { IAuthState, IUser } from 'stores/types';

const createAuthSlice: StoreSlice<IAuthState> = (set, get) => ({
  isLoggedIn: false,
  user: null,
  authorize: (user: IUser) =>
    set(
      produce((state) => {
        state.isLoggedIn = true;
        state.user = user;
      })
    ),
  signOut: () =>
    set(
      produce((state) => {
        state.isLoggedIn = false;
        state.user = null;
      })
    ),
});

export default createAuthSlice;
