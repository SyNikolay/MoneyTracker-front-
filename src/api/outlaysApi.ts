import { authHost } from './index';

export const getCategories = async (userId: number) => {
  const { data } = await authHost.post('/categories/get-all', { userId: userId });
  return data;
};

export const getCategoriesOptions = async (userId: number) => {
  const { data } = await authHost.post('/categories/get-all-categories', { userId: userId });
  return data;
};

export const getOutlays = async (userId: number) => {
  const { data } = await authHost.post('/outlays/get-all-outlays', { userId: userId });
  return data;
};
