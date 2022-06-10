import create from "zustand";

interface DefaultState {
  count: number;
  increaseCount: () => void;
  increaseCount2x: () => void;
  decreaseCount: () => void;
  clear: () => void;
}

export const useCountStore = create<DefaultState>((set) => ({
  count: 0,
  increaseCount: () =>
    set((state) => ({
      ...state,
      count: state.count + 1,
    })),
  increaseCount2x: () =>
    set((state) => ({
      ...state,
      count: state.count + 2,
    })),
  decreaseCount: () =>
    set((state) => ({
      ...state,
      count: state.count - 1,
    })),
  clear: () =>
    set((state) => ({
      ...state,
      count: 0,
    })),
}));
