import { ETheme, useTheme } from 'app/providers/ThemeProvider';
import { Button } from 'shared/ui/Button/Button';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { classNames } from 'shared/lib/classNames/classNames';

interface IThemeSwitchers {
  className?: string
}

export function ThemeSwitchers(props: IThemeSwitchers) {
  const { className = '' } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames('_', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === ETheme.light ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
}
