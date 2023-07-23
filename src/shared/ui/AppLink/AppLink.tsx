import { type FC } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './AppLink.module.scss';

export enum EThemeLink {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  INVERTED_PRIMARY = 'inverted-primary'
}

interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: EThemeLink
}

export const AppLink: FC<IAppLinkProps> = (props) => {
  const {
    children,
    className,
    to,
    theme = EThemeLink.PRIMARY,
    ...otherProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.appLink, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
