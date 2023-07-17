import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import cls from "./LangSwithers.module.scss";

export const LangSwithers = () => {
  const { t, i18n } = useTranslation();

  const toggleLaguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return <Button onClick={toggleLaguage}>
    {t("Перевод")}
  </Button>;
};
