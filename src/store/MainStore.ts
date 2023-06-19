import { create } from 'zustand';
import { MainStore } from '../types/types';
import { getCategories, getCategoriesOptions, getOutlays } from '../api/outlaysApi';

export const useMain = create<MainStore>((set) => ({
  fullOutlay: 0,
  loading: false,
  categories: [],
  outlays: [],
  options: [],

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
      console.log(res);
      set({
        outlays: res.outlays,
        fullOutlay: res.sumOutlays,
      });
    } catch (e) {
      console.log(e);
    }
  },
}));
