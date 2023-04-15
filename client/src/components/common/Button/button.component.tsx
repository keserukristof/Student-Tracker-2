import { FunctionComponent } from 'react';
import './button.component.scss';
import { ButtonVariant } from './types/button-variant.type';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: ButtonVariant;
}

export const Button: FunctionComponent<ButtonProps> = ({
  label,
  onClick,
  variant,
}) => {
  const handleClick = () => {
    if (variant !== 'disabled') {
      onClick();
    }
  };

  return (
    <button
      onClick={handleClick}
      className={variant}
      disabled={variant === 'disabled'}
    >
      {label}
    </button>
  );
};