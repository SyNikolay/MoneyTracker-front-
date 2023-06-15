import axios from 'axios';
import { create } from 'zustand';
import { BASE_URL } from '../utils/consts';
import { MainStore } from '../types/types';

export const useMain = create<MainStore>((set) => ({
  fullBallance: 0,
  fullOutlay: 0,
  loading: false,
  categories: [],
  outlays: [],
  options: [],

  setReset: () => {
    set({
      fullBallance: 0,
      fullOutlay: 0,
      loading: false,
      categories: [],
      outlays: [],
      options: [],
    });
  },
  setBallance: (val) => {
    set({ fullBallance: val });
  },
  setOutlay: (val) => {
    set({ fullOutlay: val });
  },
  fetchAllCategories: async (userId) => {
    try {
      set({ loading: true });
      const res = await axios.post(BASE_URL + '/categories/get-all', { userId: userId });
      set((state) => {
        return { categories: res.data };
      });
    } catch (e) {
      console.log(e);
    } finally {
      set({ loading: false });
    }
  },
  fetchAllOptions: async (userId) => {
    try {
      const res = await axios.post(BASE_URL + '/categories/get-all-categories', { userId: userId });
      set({ options: res.data });
    } catch (e) {
      console.log(e);
    }
  },
  fetchAllOutlays: async (userId) => {
    try {
      const res = await axios.post(BASE_URL + '/outlays/get-all-outlays', { userId: userId });
      set({ outlays: res.data });
    } catch (e) {
      console.log(e);
    }
  },
}));
