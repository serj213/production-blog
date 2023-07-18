import { ETheme, useTheme } from 'app/providers/ThemeProvider'
import { Button } from 'shared/ui/Button/Button'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from 'shared/lib/classNames/classNames'

import cls from './ThemeSwitchers.module.scss'

interface IThemeSwitchers {
  className?: string
}

export const ThemeSwitchers = (props: IThemeSwitchers) => {
  const { className = '' } = props
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames(cls.themeSwichers, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === ETheme.light ? <LightIcon /> : <DarkIcon />}
    </Button>
  )
}
