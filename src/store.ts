import { create } from 'zustand'

type AuthState = {
  token: boolean;
  setToken: (token: boolean) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: false,
  setToken: (token) => set({ token }),
}));
