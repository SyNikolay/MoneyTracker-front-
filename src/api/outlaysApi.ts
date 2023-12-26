import { IUser, Outlay, OutlayFormType } from '../types/types';
import { authHost } from './index';
import jwt_decode from 'jwt-decode';

type Create = (values: OutlayFormType, userId: number) => Promise<IUser>;
type Delete = (name: string, userId: number) => Promise<IUser>;
type DeleteCatrgory = (name: string, userId: number) => Promise<Outlay[]>;

export const getCategory: Create = async (values, userId) => {
  const { data } = await authHost.post('/categories/create', { ...values, userId: userId });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const deleteCategory: DeleteCatrgory = async (name, userId) => {
  const { data } = await authHost.post('/categories/delete', { name: name, userId: userId });
  return data;
};

export const deleteOutlay: Delete = async (name, userId) => {
  const { data } = await authHost.post('/outlays/delete', { name: name, userId: userId });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

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
