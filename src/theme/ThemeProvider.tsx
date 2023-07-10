import { useState, FC, useMemo } from "react";
import { ETheme, LOCAL_STORAGE_THEME_KEY, ThemeContext } from "./ThemeContext";

interface IThemeProivderProps {
    children:React.ReactNode
}

const defaulTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ETheme) || ETheme.light;

export const ThemeProvider: FC<IThemeProivderProps> = ({children}) => {

  const [theme, setTheme] = useState<ETheme>(defaulTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev === ETheme.light ? ETheme.dark : ETheme.light));
  };

  const defaultProps = useMemo(() => {
    return {
      theme: theme,
      setTheme: setTheme,
    };
  }, [theme]);

  return <ThemeContext.Provider value={defaultProps}>
    {children}
  </ThemeContext.Provider>;
};
