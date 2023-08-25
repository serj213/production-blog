import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';
import { LangSwithers } from 'widgets/LangSwitchers';
import { ThemeSwitchers } from 'widgets/ThemeSwitchers';

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
      <div>
        <Button theme={EButtonTheme.CLEAR_INVERTED} data-testid="sidebar-toggle" onClick={onToggleCollapsed}>
          {
            t('toggle')
          }
        </Button>
      </div>

      <div className={cls.switchers}>
        <ThemeSwitchers className={cls.switchers__first} />
        <LangSwithers />
      </div>
    </aside>
  );
}
