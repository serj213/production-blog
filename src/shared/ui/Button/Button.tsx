import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  CLEAR_INVERTED = 'clear-inverted',
  BACKGROUND = 'background',
  INVERTED_BACKGROUND = 'inverted-background'
}

export enum EButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}
interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EButtonTheme
  size?: EButtonSize;
  square?: boolean
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = EButtonTheme.CLEAR,
    square,
    size = EButtonSize.L,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };

  const classNamesArr:string[] = [className, cls[theme], cls[size]];

  return (
    <button
      data-testid="button"
      type="button"
      className={
        classNames(
          cls.button,
          mods,
          classNamesArr,
        )
}
      {...otherProps}
    >
      {children}
    </button>
  );
};
