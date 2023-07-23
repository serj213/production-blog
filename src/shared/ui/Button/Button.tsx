import { type ButtonHTMLAttributes, type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum EButtonTheme {
  CLEAR = 'clear',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: EButtonTheme
}

export const Button: FC<IButtonProps> = (props) => {
  const {
    className,
    children,
    theme = EButtonTheme.CLEAR,
    ...otherProps
  } = props;
  return (
    <button
      data-testid="button"
      type="button"
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
