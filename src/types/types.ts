import { AnySchema } from "yup";

export type Outlay = {
  id: number;
  name: string;
  balance: number;
  comment: string;
};

export type OutlayFormType = {
  name: string;
  balance: string;
  comment: string;
};

export type MainStore = {
  fullOutlay: number;
  categories: Outlay[];
  options: string[];
  outlays: Outlay[];
  loading: boolean;
  setReset: () => void;
  setOutlay: (val: number) => void;
  fetchAllCategories: (val?: any) => void;
  fetchAllOptions: (val?: any) => void;
  fetchAllOutlays: (val?: any) => void;
  setCategories: (val: Outlay[]) => void;
};

export type UserStore = {
  user: IUser | null;
  isAuth: boolean;
  fullOutlay: number;
  categories: Outlay[];
  options: string[];
  outlays: Outlay[];
  loading: boolean;
  setUser: (val: IUser | null, auth: boolean) => void;
  setReset: () => void;
  setOutlay: (val: number) => void;
  fetchAllCategories: (val?: any) => void;
  fetchAllOptions: (val?: any) => void;
  fetchAllOutlays: (val?: any) => void;
  setCategories: (val: Outlay[]) => void;
};

export type User = {
  email: string;
  password: string;
  ballance?: number;
  name?: string;
  surname?: string;
  work?: string;
  salary?: string;
  avatar?: string;
};

export interface IUser {
  email: string | null;
  id: number | null;
  role: string | null;
  ballance: number | null;
  avatar?: string | null;
  name?: string | null;
  surname?: string | null;
  work?: string | null;
  salary?: string | null;
}

export type Shape<Fields extends Record<string, any>> = {
  [Key in keyof Fields]: AnySchema;
};
