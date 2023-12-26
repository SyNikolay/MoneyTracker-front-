import { create } from 'zustand';
import { UserStore } from '../types/types';
import { getCategories, getCategoriesOptions, getOutlays } from '../api/outlaysApi';

export const useUser = create<UserStore>((set) => ({
  user: {
    email: null,
    id: null,
    role: null,
    ballance: null,
    avatar: null,
    name: null,
    salary: null,
    work: null,
  },
  isAuth: false,
  fullOutlay: 0,
  loading: false,
  categories: [],
  outlays: [],
  options: [],

  setUser: (user, auth) => {
    set({ user: user });
    set({ isAuth: auth });
  },
  setReset: () => {
    set({
      fullOutlay: 0,
      loading: false,
      categories: [],
      outlays: [],
      options: [],
    });
  },
  setOutlay: (val) => {
    set({ fullOutlay: val });
  },
  setCategories: (val) => {
    set({ categories: val });
  },  
  fetchAllCategories: async (userId) => {
    try {
      set({ loading: true });
      const res = await getCategories(userId);
      set({ categories: res });
    } catch (e) {
      console.log(e);
    } finally {
      set({ loading: false });
    }
  },
  fetchAllOptions: async (userId) => {
    try {
      const res = await getCategoriesOptions(userId);
      set({ options: res });
    } catch (e) {
      console.log(e);
    }
  },
  fetchAllOutlays: async (userId) => {
    try {
      const res = await getOutlays(userId);
      set({
        outlays: res.outlays,
        fullOutlay: res.sumOutlays,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));
