import { Routes } from './utils/consts';

import CategoriesPage from './pages/categories-page/CategoriesPage';
import MainPage from './pages/main-page/MainPage';
import ListPage from './pages/list-page/ListPage';
import DiagramPage from './pages/diagram-page/DiagramPage';
import AuthPage from './pages/auth-page/AuthPage';

export const publicRoutes = [
  {
    path: Routes.MAIN,
    component: MainPage,
  },
  {
    path: Routes.CATEGORIES,
    component: CategoriesPage,
  },
  {
    path: Routes.LIST,
    component: ListPage,
  },
  // {
  //   path: Routes.DIAGRAM,
  //   component: DiagramPage,
  // },
  {
    path: Routes.AUTH,
    component: AuthPage,
  },
];

export const authRoutes = [
  {
    path: Routes.DIAGRAM,
    component: DiagramPage,
  },
  {
    path: Routes.AUTH,
    component: AuthPage,
  },
];
