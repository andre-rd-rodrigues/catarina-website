import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  label?: string;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  variant?: 'fill' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  className = '',
  icon,
  fullWidth = false,
  onClick,
  variant = 'fill',
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all',
        {
          'bg-[var(--color-accent)] text-white hover:opacity-80':
            variant === 'fill',
          'border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white':
            variant === 'outline',
          'w-full': fullWidth,
        },
        className,
      )}
    >
      {icon && (
        <span
          className={clsx({
            'text-white': variant === 'fill',
            'text-[var(--color-accent)]': variant === 'outline',
          })}
        >
          {icon}
        </span>
      )}
      {label}
    </button>
  );
};

export default Button;
