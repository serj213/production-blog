import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ERoutePath, routerPath } from 'shared/config/routerConfig/routerConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, EThemeLink } from 'shared/ui/AppLink/AppLink';
import { Button, EButtonSize, EButtonTheme } from 'shared/ui/Button/Button';
import { LangSwithers } from 'widgets/LangSwitchers';
import { ThemeSwitchers } from 'widgets/ThemeSwitchers';
import HomeIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import cls from './Sidebar.module.scss';

interface ISidebarProps {
  className?: string
}

export function Sidebar(props: ISidebarProps) {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { t } = useTranslation();

  const onToggleCollapsed = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >

      <Button
        theme={EButtonTheme.BACKGROUND}
        size={EButtonSize.L}
        square
        data-testid="sidebar-toggle"
        className={cls.collapsedBtn}
        onClick={onToggleCollapsed}
      >
        {
            collapsed ? '<' : '>'
          }
      </Button>

      <div className={cls.menu}>
        <AppLink className={cls.menu__link} theme={EThemeLink.INVERTED_PRIMARY} to={routerPath.main}>
          <HomeIcon />
          <span>
            {t('HeaderNav.главная')}
          </span>
        </AppLink>
        <AppLink className={cls.menu__link} theme={EThemeLink.INVERTED_PRIMARY} to={routerPath.about}>
          <AboutIcon />
          <span>
            {t('HeaderNav.о нас')}
          </span>
        </AppLink>

      </div>

      <div className={cls.switchers}>
        <ThemeSwitchers className={cls.switchers__first} />
        <LangSwithers short={collapsed} />
      </div>
    </aside>
  );
}
