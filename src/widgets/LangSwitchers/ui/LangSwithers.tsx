import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

export function LangSwithers() {
  const { t, i18n } = useTranslation();

  const toggleLaguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={toggleLaguage}>
      {t('Перевод')}
    </Button>
  );
}
