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

export type UserStore = {
  fullBallance: number;
  fullOutlay: number;
  categories: Outlay[];
  options: string[];
  outlays: Outlay[];
  loading: boolean;
  setBallance: (val: number) => void;
  setOutlay: (val: number) => void;
  fetchAllCategories: (val?: any) => void;
  fetchAllOptions: () => void;
  fetchAllOutlays: () => void;
};
