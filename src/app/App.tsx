import "./styles/app.scss";
import { Route, Routes } from "react-router-dom";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { MainPage } from "pages/MainPage";




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
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
