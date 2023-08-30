import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { type RouteProps } from 'react-router-dom';

export enum ERoutePath {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'notFound'
}

export const routerPath: Record<ERoutePath, string> = {
  [ERoutePath.MAIN]: '/',
  [ERoutePath.ABOUT]: '/about',
  [ERoutePath.NOT_FOUND]: '*',
};

export const routerConfig: Record<ERoutePath, RouteProps> = {
  [ERoutePath.MAIN]: {
    path: routerPath.main,
    element: <MainPage />,
  },
  [ERoutePath.ABOUT]: {
    path: routerPath.about,
    element: <AboutPage />,
  },
  [ERoutePath.NOT_FOUND]: {
    path: routerPath.notFound,
    element: <NotFoundPage />,
  },
};
