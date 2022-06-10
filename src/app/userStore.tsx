import create from "zustand";

interface DefaultState {
  fullName: string;
  firstName: string;
  lastName: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  submitName: (first: string, last: string) => void;
}

export const useUserStore = create<DefaultState>((set) => ({
  fullName: "",
  firstName: "",
  lastName: "",
  setFirstName: (input) =>
    set((state) => ({
      firstName: input,
    })),
  setLastName: (input) =>
    set((state) => ({
      lastName: input,
    })),
  submitName: (first, last) =>
    set((state) => ({
      ...state,
      fullName: `${first} ${last}`,
      firstName: "",
      lastName: "",
    })),
}));
