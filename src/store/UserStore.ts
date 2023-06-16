import { create } from 'zustand';
import { UserStore } from '../types/types';

export const useUser = create<UserStore>((set) => ({
  user: {
    email: null,
    id: null,
    role: null,
    ballance: null,
  },
  isAuth: false,

  setUser: (user, auth) => {
    set({ user: user });
    set({ isAuth: auth });
  },
}));
