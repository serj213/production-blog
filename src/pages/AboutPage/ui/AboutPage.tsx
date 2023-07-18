import { useTranslation } from 'react-i18next'

const AboutPage = () => {
  const { t } = useTranslation('AboutPage')

  return <div>{t('Главный текст')}</div>
}

export default AboutPage
