import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, EThemeLink } from 'shared/ui/AppLink/AppLink';

import { useTranslation } from 'react-i18next';
import cls from './Header.module.scss';

export function Header() {
  const { t } = useTranslation();
  return (
    <header className={classNames(cls.header, {}, [])}>

      <div />
      <div className={cls.links}>
        <AppLink theme={EThemeLink.INVERTED_PRIMARY} to="/">
          {t('HeaderNav.главная')}
        </AppLink>
        <AppLink theme={EThemeLink.INVERTED_PRIMARY} to="/about">
          {t('HeaderNav.о нас')}
        </AppLink>
      </div>
    </header>
  );
}
