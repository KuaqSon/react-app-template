import { StoreSlice } from 'stores';
import { IAppState } from 'stores/types';

const createAppSlice: StoreSlice<IAppState> = (set, get) => ({
  isSideBarOpen: true,
  isFlyBarOpen: false,
  toggleSideBar: (isOpen: boolean) => set((prev) => ({ ...prev, isSideBarOpen: isOpen })),
  toggleFlyBar: (isOpen: boolean) => set((prev) => ({ ...prev, isFlyBarOpen: isOpen })),
});

export default createAppSlice;
