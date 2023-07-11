import "./app.scss";
import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";
import { Link } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense, useState } from "react";
import { classNames } from "./helpers/classNames/classNames";
import { useTheme } from "./theme/useTheme";



export const App = () => {

  const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {hover:true, select:false}, [theme])}>
      <Suspense fallback={<div>Loading...</div>}>
        <Link to="/">Main page</Link>
        <Link to="/about">about page</Link>
        <button onClick={toggleTheme}>
          toggle
        </button>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
