import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';

export function LangSwithers() {
  const { t, i18n } = useTranslation();

  const toggleLaguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button onClick={toggleLaguage}>
      {t('Перевод')}
    </Button>
  );
}
