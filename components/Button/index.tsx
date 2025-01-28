import clsx from 'clsx';

interface ButtonProps {
  label?: string;
  className?: string;
  icon?: string;
  fullWidth?: boolean;
  onClick: () => void;
  variant?: 'accent' | 'danger' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
  label = 'Button',
  className = '',
  icon,
  fullWidth = false,
  onClick,
  variant = 'accent',
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium shadow-lg transition-all duration-300',
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
