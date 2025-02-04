import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  label?: string;
  className?: string;
  icon?: string;
  fullWidth?: boolean;
  variant?: 'accent' | 'danger' | 'outline';
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  className = '',
  icon,
  fullWidth = false,
  variant = 'accent',
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-normal shadow-lg transition-all duration-300',
        {
          'bg-[var(--color-accent)] text-white hover:bg-[var(--color-secondary)]':
            variant === 'accent',
          'bg-[var(--color-danger)] text-white hover:bg-[var(--color-danger)]':
            variant === 'danger',
          'border border-[var(--color-border-primary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white':
            variant === 'outline',
          'w-full': fullWidth,
        },
        className,
      )}
    >
      {icon && (
        <span
          className={clsx('material-icons', {
            'text-white': variant !== 'outline',
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
