import { useTranslation } from 'react-i18next';
import { Button, EButtonTheme } from 'shared/ui/Button/Button';

export interface ILangSwithersProps {
  short?:boolean
}

export const LangSwithers = (props:ILangSwithersProps) => {
  const { t, i18n } = useTranslation();
  const { short } = props;

  const toggleLaguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button theme={EButtonTheme.CLEAR_INVERTED} onClick={toggleLaguage}>
      {short ? t('Короткий перевод') : t('Перевод')}
    </Button>
  );
};
