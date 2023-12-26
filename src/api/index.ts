import axios from 'axios';

export * from './outlaysApi';
export * from './userApi';

const host = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const authHost = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
};

authHost.interceptors.request.use(authInterceptor);

export { host, authHost };
