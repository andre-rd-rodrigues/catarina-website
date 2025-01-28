import React from 'react';
import clsx from 'clsx';
import { default as NextLink } from 'next/link';

type LinkProps = {
  label?: string;
  className?: string;
  icon?: string;
  fullWidth?: boolean;
  variant?: 'accent' | 'danger' | 'outline';
  children?: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({
  label = 'Button',
  className = '',
  icon,
  fullWidth = false,
  href = '',
  variant = 'accent',
  children,
}) => {
  return (
    <NextLink
      href={href}
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
      {children || label}
    </NextLink>
  );
};

export default Link;
