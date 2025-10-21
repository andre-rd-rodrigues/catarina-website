import React, { createElement } from 'react';

// Mock Next.js Image component
export const mockNextImage = () => {
  return function MockImage({
    src,
    alt,
    ...props
  }: React.ComponentProps<'img'>) {
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

// Mock Section component
export const mockSection = () => {
  const MockSection = function MockSection({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) {
    return createElement('section', { className }, children);
  };

  // Add Title property to Section
  MockSection.Title = function MockSectionTitle({
    title,
    subtitle,
    className,
  }: {
    title: string;
    subtitle?: string;
    className?: string;
  }) {
    return createElement(
      'div',
      { className },
      subtitle && createElement('h2', {}, subtitle),
      createElement('h3', {}, title),
    );
  };

  return MockSection;
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

// Mock Lucide React Dynamic icons
export const mockLucideReactDynamic = () => {
  const DynamicIcon = ({
    name,
    color,
    size,
    ...props
  }: {
    name: string;
    color?: string;
    size?: number;
  } & React.SVGProps<SVGSVGElement>) =>
    createElement('svg', {
      'data-testid': name,
      'data-icon': name,
      color,
      width: size,
      height: size,
      ...props,
    });

  return {
    DynamicIcon,
    IconName: {} as Record<string, never>,
  };
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

// Mock SplitLeaf component
export const mockSplitLeaf = () => {
  return function MockSplitLeaf({ images }: { images: string[] }) {
    return createElement(
      'div',
      { 'data-testid': 'split-leaf' },
      ...images.map((image, index) =>
        createElement('img', {
          key: index,
          src: image,
          alt: `Split leaf ${index + 1}`,
        }),
      ),
    );
  };
};

// Mock FAQs component
export const mockFAQs = () => {
  return function MockFAQs({
    items,
  }: {
    items: Array<{ question: string; answer: string }>;
  }) {
    return createElement(
      'div',
      {
        'data-testid': 'faqs',
        className:
          'mx-auto w-full max-w-2xl divide-y rounded-lg border shadow-md',
      },
      ...items.map((item, index) =>
        createElement(
          'div',
          {
            key: index,
            className: 'group cursor-pointer px-8 py-6',
          },
          createElement(
            'div',
            { className: 'flex items-center justify-between' },
            createElement(
              'h3',
              {
                className:
                  'text-lg font-medium text-[var(--color-primary)] transition-all duration-200 group-hover:text-[var(--color-danger)]',
              },
              item.question,
            ),
            createElement(
              'span',
              { className: 'text-[var(--color-danger)]' },
              createElement('svg', { 'data-icon': 'ChevronDown', size: 20 }),
            ),
          ),
          createElement(
            'div',
            { className: 'overflow-hidden' },
            createElement(
              'div',
              { className: 'my-5 text-[var(--color-text)]' },
              createElement('p', {
                className: 'mb-4 last:mb-0',
                dangerouslySetInnerHTML: { __html: item.answer },
              }),
            ),
          ),
        ),
      ),
    );
  };
};

// Mock framer-motion with proper animation handling based on the article
export const mockFramerMotion = () => {
  const actual = jest.requireActual('motion/react');
  const { forwardRef, createElement, useContext, useEffect } = React;

  // Recursively zero out any duration props in motion configs
  function deepReplaceDurations(
    props: Record<string, unknown>,
    duration: number,
  ) {
    // extract only motion props
    const patch = Object.fromEntries(
      Object.entries(props).filter(
        ([key]) =>
          actual.isValidMotionProp?.(key) ||
          key.startsWith('animate') ||
          key.startsWith('initial') ||
          key.startsWith('exit') ||
          key.startsWith('while') ||
          key === 'transition' ||
          key === 'variants' ||
          key === 'viewport' ||
          key === 'custom',
      ),
    );
    const stack: Record<string, unknown>[] = [patch];
    while (stack.length) {
      const cur = stack.pop();
      if (!cur || typeof cur !== 'object') continue;
      for (const [key, val] of Object.entries(cur)) {
        if (key === 'duration') {
          cur[key] = duration;
        } else if (
          key === 'transition' &&
          typeof val === 'object' &&
          val !== null &&
          'duration' in val
        ) {
          cur[key] = { ...val, duration };
        } else if (val && typeof val === 'object' && val !== null) {
          stack.push(val as Record<string, unknown>);
        }
      }
    }
    // merge patched motion props back into original props
    return { ...props, ...patch };
  }

  // Layout animations don't actually run under Jest, so we "fake" them
  const mockOnLayoutAnimationComplete =
    (props: Record<string, unknown>) =>
    (...args: unknown[]) => {
      (props.onAnimationComplete as (...args: unknown[]) => void)?.(...args);
      (props.onLayoutAnimationComplete as (...args: unknown[]) => void)?.(
        ...args,
      );
    };

  // Proxy componentCache to wrap every motion.<el> on the fly
  const componentCache = new Map();
  const motion = new Proxy(actual.motion, {
    get(target: Record<string, unknown>, key: string) {
      const Comp = target[key];
      if (!Comp) return Comp;

      // Only create one wrapper per component name
      if (!componentCache.has(key)) {
        const Wrapped = forwardRef<unknown, Record<string, unknown>>(
          (props: Record<string, unknown>, ref: unknown) => {
            // pull duration override from MotionConfigContext
            const cfg = useContext(actual.MotionConfigContext);
            const dur = (cfg as { transition?: { duration?: number } })
              ?.transition?.duration;

            // Since Jest won't run Framer's layout animations, we
            // manually invoke the callback on every render
            useEffect(() => {
              if (props?.onLayoutAnimationComplete) {
                (props.onLayoutAnimationComplete as () => void)();
              }
            });

            // IFF dur is number, zero-out all durations
            const patched =
              typeof dur === 'number'
                ? deepReplaceDurations(props, dur)
                : props;

            return createElement(
              Comp as React.ComponentType<Record<string, unknown>>,
              {
                ...patched,
                // wire up both callbacks to unblock your
                // onLayoutAnimationComplete tests
                onAnimationComplete: mockOnLayoutAnimationComplete(patched),
                ref,
              },
              props.children as React.ReactNode,
            );
          },
        );
        Wrapped.displayName = `MockMotion${key}`;
        componentCache.set(key, Wrapped);
      }

      return componentCache.get(key);
    },
  });

  // re-export everything from framer-motion, but swap out motion
  return {
    ...actual,
    __esModule: true,
    motion,
  };
};

// Setup all common mocks
export const setupCommonMocks = () => {
  jest.mock('next/image', () => mockNextImage());
  jest.mock('next/link', () => mockNextLink());
  jest.mock('lucide-react', () => mockLucideReact());
  jest.mock('lucide-react/dynamic', () => mockLucideReactDynamic());
  jest.mock('next/navigation', () => mockNextNavigation());
  jest.mock('@/components/Link/index', () => mockAppLink());
  jest.mock('@/components/Section', () => mockSection());
  jest.mock('@/components/SplitLeaf', () => mockSplitLeaf());
  jest.mock('@/components/FAQS', () => mockFAQs());
  jest.mock('motion/react', () => mockFramerMotion());
  jest.mock('@/motion/variants', () => ({
    containerVariant: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    },
    fadeInSlideInVariant: {
      hidden: { opacity: 0, y: 60 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 2, ease: [0.35, 0, 0, 1] },
      },
    },
    fadeInSlideLeftVariant: {
      hidden: { opacity: 0, x: -50 },
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.35, 0, 0, 1] },
      },
    },
    motion: jest.requireActual('motion/react').motion,
    useScroll: jest.fn(),
    useTransform: jest.fn(),
  }));
};
