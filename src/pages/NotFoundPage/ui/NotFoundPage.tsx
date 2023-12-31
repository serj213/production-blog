import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

export function NotFoundPage() {
  const { t } = useTranslation();
  return (
    <div className={cls.NotFound}>
      {
        t('страница не найдена')
    }
    </div>
  );
}
