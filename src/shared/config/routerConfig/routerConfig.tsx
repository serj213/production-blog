import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import { RouteProps } from "react-router-dom";

enum ERoutePath {
  MAIN = "main",
  ABOUT = "about",
}

const routerPath: Record<ERoutePath, string> = {
  [ERoutePath.MAIN]: "/",
  [ERoutePath.ABOUT]: "/about",
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
};
