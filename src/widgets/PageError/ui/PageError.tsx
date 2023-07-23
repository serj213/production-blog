import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

export function PageError() {
  const { t } = useTranslation();

  const reloadPage = () => {
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  };

  return (
    <div className={cls.PageError}>
      <h1>
        {
            t('произошла ошибка')
        }
      </h1>
      <Button onClick={reloadPage}>
        {t('обновить страницу')}
      </Button>
    </div>
  );
}
