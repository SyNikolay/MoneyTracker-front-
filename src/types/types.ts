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
  fullBallance: number;
  fullOutlay: number;
  categories: Outlay[];
  options: string[];
  outlays: Outlay[];
  loading: boolean;
  setReset: () => void;
  setBallance: (val: number) => void;
  setOutlay: (val: number) => void;
  fetchAllCategories: (val?: any) => void;
  fetchAllOptions: (val?: any) => void;
  fetchAllOutlays: (val?: any) => void;
};

export type UserStore = {
  user: IUser | null;
  isAuth: boolean;
  setUser: (val: IUser | null, auth: boolean) => void;
};

export type UserAuth = {
  email: string;
  password: string;
};

export interface IUser {
  email: string | null;
  id: number | null;
  role: string | null;
}
