import { IUser } from '../types/types';
import { host, authHost } from './index';
import jwt_decode from 'jwt-decode';

type F = (email: string, password: string) => Promise<IUser>;

export const registration: F = async (email, password) => {
  const { data } = await host.post('/user/registration', { email, password, role: 'ADMIN' });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login: F = async (email, password) => {
  const { data } = await host.post('/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check = async () => {
  const { data } = await authHost.get('/user/auth');
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};
