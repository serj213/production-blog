import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { AppLink, EThemeLink } from "shared/ui/AppLink/AppLink";
import DarkIcon from "shared/assets/icons/theme-dark.svg";

import cls from "./Header.module.scss";

interface IHeaderProps {}

export const Header = (props: IHeaderProps) => {
  return (
    <header className={classNames(cls.header, {}, [])}>
      <DarkIcon />
      <div className={cls.links}>
        <AppLink theme={EThemeLink.INVERTED_PRIMARY} to="/">
          Main
        </AppLink>
        <AppLink theme={EThemeLink.INVERTED_PRIMARY} to="/about">
          about
        </AppLink>
      </div>
    </header>
  );
};
