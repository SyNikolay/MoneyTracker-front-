import { Routes } from './utils/consts';

import CategoriesPage from './pages/categories-page/CategoriesPage';
import ListPage from './pages/list-page/ListPage';
import DiagramPage from './pages/diagram-page/DiagramPage';
import AuthPage from './pages/auth-page/AuthPage';
import AccountPage from './pages/acount-page/AccountPage';

export const publicRoutes = [
  {
    path: Routes.AUTH,
    component: AuthPage,
  },
  {
    path: Routes.ACCOUNT,
    component: AccountPage,
  },
];

export const authRoutes = [
  {
    path: Routes.CATEGORIES,
    component: CategoriesPage,
  },
  {
    path: Routes.LIST,
    component: ListPage,
  },
  {
    path: Routes.DIAGRAM,
    component: DiagramPage,
  },
];
