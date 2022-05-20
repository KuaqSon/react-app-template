import create from 'zustand';

export type loadingState = {
  loaders: string[];
  addLoader: (loading: string | null | undefined) => void;
  removeLoader: (loading: string | null | undefined) => void;
};

export const useLoadingStore = create<loadingState>((set) => ({
  loaders: [],
  addLoader: (loader: string | null | undefined) =>
    !!loader && set((state: loadingState) => ({ loaders: [loader, ...state.loaders] })),
  removeLoader: (loader: string | null | undefined) =>
    !!loader && set((state: loadingState) => ({ loaders: state.loaders.filter((x) => x !== loader) })),
}));
