import axios from 'axios';
import { create } from 'zustand';
import { BASE_URL } from '../utils/consts';
import { UserStore } from '../types/types';

export const useUser = create<UserStore>((set) => ({
  fullBallance: 0,
  fullOutlay: 0,
  loading: false,
  categories: [],
  outlays: [],
  options: [],
  setBallance: (val) => {
    set({ fullBallance: val });
  },
  setOutlay: (val) => {
    set({ fullOutlay: val });
  },
  getUserInfo: async () => {
    try {
      const res = await axios.get(BASE_URL + '/categories/get-all');
      set((state) => {
        return { categories: res.data };
      });
    } catch (e) {
      console.log(e);
    }
  },
  fetchAllCategories: async () => {
    try {
      set({ loading: true });
      const res = await axios.get(BASE_URL + '/categories/get-all');
      set((state) => {
        return { categories: res.data };
      });
    } catch (e) {
      console.log(e);
    } finally {
      set({ loading: false });
    }
  },
  fetchAllOptions: async () => {
    try {
      const res = await axios.get(BASE_URL + '/categories/get-all-categories');
      set({ options: res.data });
    } catch (e) {
      console.log(e);
    }
  },
  fetchAllOutlays: async () => {
    try {
      const res = await axios.get(BASE_URL + '/outlays/get-all-outlays');
      set({ outlays: res.data });
    } catch (e) {
      console.log(e);
    }
  },
}));
