import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";
import { AppRouter } from "app/providers/router";
import { Header } from "widgets/Header";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar";

export const App = () => {
  const { theme } = useTheme();
  
  return (
    <div className={classNames("app", { hover: true, select: false }, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
