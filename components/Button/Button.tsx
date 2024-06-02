import cn from 'classnames';
import { ReactNode } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  onClick?: () => void;
  children: ReactNode;
  outline?: boolean;
  size?: 'sm' | 'lg';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  outline,
  className,
  ...rest
}) => (
  <button
    {...rest}
    className={cn(size && styles[size], {
      [styles.outline]: outline,
    },
  className)}
  >
    {children}
  </button>
);
