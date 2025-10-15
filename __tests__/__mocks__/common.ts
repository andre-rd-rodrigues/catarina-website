import React, { createElement } from 'react';

// Mock Next.js Image component
export const mockNextImage = () => {
  return function MockImage({
    src,
    alt,
    ...props
  }: React.ComponentProps<'img'>) {
    // eslint-disable-next-line @next/next/no-img-element
    return createElement('img', { src, alt, ...props });
  };
};

// Mock Next.js Link component
export const mockNextLink = () => {
  return function MockLink({
    href,
    children,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
    return createElement('a', { href, ...props }, children);
  };
};

// Mock Lucide React icons
export const mockLucideReact = () => {
  return new Proxy(
    {},
    {
      get:
        (_target, iconName: string) => (props: React.SVGProps<SVGSVGElement>) =>
          createElement('svg', { 'data-icon': String(iconName), ...props }),
    },
  );
};

// Mock Next.js navigation hooks
export const mockNextNavigation = () => ({
  usePathname: () => '/',
  useSearchParams: () => ({ get: () => null }),
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
    back: jest.fn(),
    forward: jest.fn(),
    refresh: jest.fn(),
  }),
});

// Mock AppLink component
export const mockAppLink = () => {
  return function MockAppLink({
    href,
    label,
    variant,
    icon,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    label?: string;
    variant?: string;
    icon?: string;
  }) {
    return createElement(
      'a',
      {
        href,
        'data-variant': variant,
        'data-icon': icon,
        ...props,
      },
      label,
    );
  };
};

// Setup all common mocks
export const setupCommonMocks = () => {
  jest.mock('next/image', () => mockNextImage());
  jest.mock('next/link', () => mockNextLink());
  jest.mock('lucide-react', () => mockLucideReact());
  jest.mock('next/navigation', () => mockNextNavigation());
  jest.mock('@/components/Link/index', () => mockAppLink());
};
