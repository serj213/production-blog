import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation('MainPage');
  return (
    <div>
      {t('Главный текст')}
    </div>
  );
}

export default MainPage;
