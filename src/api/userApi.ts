import { IUser } from '../types/types';
import { host, authHost } from './index';
import jwt_decode from 'jwt-decode';

type F = (email: string, password: string) => Promise<IUser>;
type S = (id: number, sum: number, inc: string) => Promise<number>;
type C = (id: number) => Promise<IUser>;
type U = (args: any) => Promise<IUser>;

export const registration: F = async (email, password) => {
  const { data } = await host.post('/user/registration', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const login: F = async (email, password) => {
  const { data } = await host.post('/user/login', { email, password });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const check: C = async (id) => {
  const { data } = await authHost.post('/user/auth', { id: id });
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const update: U = async (args) => {
  const { data } = await authHost.post('/user/update', args);
  localStorage.setItem('token', data.token);
  return jwt_decode(data.token);
};

export const getBallance = async (id: number) => {
  const { data } = await authHost.post('/user/set-ballance', { id: id });
  return data.ballance;
};

export const setBallance: S = async (id, sum, inc) => {
  const { data } = await authHost.post('/user/set-ballance', {
    id: id,
    sum: sum,
    inc: inc,
  });
  return data.ballance;
};
