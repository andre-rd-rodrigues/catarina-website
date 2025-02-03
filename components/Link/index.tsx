import React from 'react';
import clsx from 'clsx';
import NextLink from 'next/link';
import { DynamicIcon, IconName } from 'lucide-react/dynamic';

export type LinkVariant = 'accent' | 'danger' | 'outline' | 'basic';

type LinkProps = {
  label?: string;
  className?: string;
  icon?: IconName;
  fullWidth?: boolean;
  href: string;
  variant?: LinkVariant;
  children?: React.ReactNode;
  iconPrefix?: boolean;
  iconSuffix?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: React.FC<LinkProps> = ({
  label = 'Link',
  className = '',
  icon,
  fullWidth = false,
  variant = 'accent',
  children,
  iconPrefix = true,
  iconSuffix,
  ...restProps
}) => {
  const getIconColor = () => {
    switch (variant) {
      case 'accent':
        return 'white';

      case 'danger':
        return 'white';

      case 'outline':
        return 'var(--color-primary)';

      case 'basic':
        return 'var( --color-accent)';

      default:
        break;
    }
  };

  const iconComponent = icon ? (
    <DynamicIcon
      name={icon}
      color={getIconColor()}
      size={16}
      className="hover:opacity-75"
    />
  ) : null;

  return (
    <NextLink
      className={clsx(
        // Base styles for the link
        'flex items-center gap-2 rounded-full px-7 py-3 text-sm font-normal transition-all duration-300 hover:opacity-75',
        {
          // Variant styles
          'bg-[var(--color-accent)] text-white': variant === 'accent',
          'bg-[var(--color-danger)] text-white': variant === 'danger',
          'border border-[var(--color-border-primary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white':
            variant === 'outline',
          'px-0 py-0 text-[var(--color-accent)] hover:opacity-75':
            variant === 'basic',
          'w-full': fullWidth,
        },
        className,
      )}
      {...restProps}
    >
      {iconPrefix && !!icon && iconComponent}
      {children || label}

      {iconSuffix && !!icon && iconComponent}
    </NextLink>
  );
};

export default Link;
