import React from 'react';
import clsx from 'clsx';
import { default as NextLink } from 'next/link';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

type LinkProps = {
  label?: string;
  className?: string;
  icon?: IconName;
  fullWidth?: boolean;
  variant?: 'accent' | 'danger' | 'outline' | 'none';
  children?: React.ReactNode;
  unstyled?: boolean;
  iconPrefix?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Separate variant styles for better maintainability
const variantStyles = {
  accent:
    'bg-[var(--color-accent)] text-white hover:bg-[var(--color-secondary)]',
  danger: 'bg-[var(--color-danger)] text-white hover:bg-[var(--color-danger)]',
  outline:
    'border border-[var(--color-border-primary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white',
  none: 'text-[var(--color-primary)]',
} as const;

// Separate base styles
const baseStyles =
  'flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium transition-all duration-300';

const Link: React.FC<LinkProps> = ({
  label = 'Link',
  className = '',
  icon,
  fullWidth = false,
  href = '',
  variant = 'accent',
  unstyled = false,
  iconPrefix = true,
  children,
  ...restProps
}) => {
  const getIconColor = () =>
    unstyled && variant === 'accent'
      ? 'var(--color-accent)'
      : 'var(--color-primary)';

  const IconComponent = icon ? (
    <DynamicIcon name={icon} color={getIconColor()} size={16} />
  ) : null;

  return (
    <NextLink
      href={href}
      className={clsx(
        'text-sm font-medium',
        {
          [baseStyles]: !unstyled,
          [variantStyles[variant]]: !unstyled,
          'text-[var(--color-accent)]': variant === 'accent',
          'shadow-lg': variant !== 'none' && !unstyled,
          'w-full': fullWidth,
          'flex items-center gap-2': icon,
        },
        className,
      )}
      {...restProps}
    >
      {iconPrefix && IconComponent}
      {children || label}
      {!iconPrefix && IconComponent}
    </NextLink>
  );
};

export default Link;
