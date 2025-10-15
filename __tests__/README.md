# Testing Setup

This directory contains the testing infrastructure for the project, including reusable mocks and test utilities.

## Structure

```
__tests__/
├── __mocks__/
│   └── common.ts          # Reusable mock functions
├── __utils__/
│   └── test-helpers.ts    # Common test utility functions
├── components/
│   └── Footer.test.tsx    # Component tests
└── README.md              # This file
```

## Reusable Mocks

All common mocks are automatically set up via `jest.setup.ts`. You don't need to manually import or configure them in individual test files.

### Available Mocks

- **Next.js Image** - Mocks `next/image` component
- **Next.js Link** - Mocks `next/link` component
- **Lucide React** - Mocks all Lucide React icons
- **Next.js Navigation** - Mocks `usePathname`, `useSearchParams`, `useRouter`
- **AppLink Component** - Mocks the custom `@/components/Link` component

## Test Utilities

Import helper functions from `../__utils__/test-helpers` to make your tests more readable and maintainable.

### Available Helpers

#### `findNavLink(linkText: string)`

Finds a navigation link when there are multiple links with the same text.

```typescript
const navLink = findNavLink('Home');
expect(navLink).toHaveAttribute('href', '/');
```

#### `findFooterBottomLink(linkText: string)`

Finds a footer bottom link when there are multiple links with the same text.

```typescript
const footerLink = findFooterBottomLink('Política de Privacidade');
expect(footerLink).toHaveAttribute('href', '/politica-de-privacidade');
```

#### `expectExternalLinksToOpenInNewTab(linkTexts: string[])`

Checks that multiple external links open in new tabs.

```typescript
expectExternalLinksToOpenInNewTab([
  'André Rodrigo',
  'Livro de Reclamações',
  'Agendar',
]);
```

#### `expectElementToHaveClasses(element: HTMLElement, expectedClasses: string[])`

Checks that an element has all expected CSS classes.

```typescript
const button = screen.getByRole('button');
expectElementToHaveClasses(button, [
  'bg-blue-500',
  'text-white',
  'px-4',
  'py-2',
]);
```

## Writing Component Tests

### Basic Test Structure

```typescript
import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';
import {
  findNavLink,
  expectElementToHaveClasses,
} from '../__utils__/test-helpers';

describe('MyComponent', () => {
  beforeEach(() => {
    render(<MyComponent />);
  });

  it('renders correctly', () => {
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Testing Links

When testing components with multiple links that have the same text, use the helper functions:

```typescript
// Instead of this:
const links = screen.getAllByRole('link', { name: 'Privacy Policy' });
const navLink = links.find((link) =>
  link.closest('nav')?.className.includes('main-nav'),
);

// Use this:
const navLink = findNavLink('Privacy Policy');
```

### Testing CSS Classes

Use the helper function for cleaner assertions:

```typescript
// Instead of this:
expect(element).toHaveClass('class1', 'class2', 'class3');

// Use this:
expectElementToHaveClasses(element, ['class1', 'class2', 'class3']);
```

## Benefits

1. **Consistency** - All tests use the same mocking strategy
2. **Maintainability** - Update mocks in one place
3. **Readability** - Helper functions make tests more expressive
4. **Reusability** - Easy to copy test patterns between components
5. **Type Safety** - All helpers are fully typed

## Adding New Mocks

To add a new mock, update `__tests__/__mocks__/common.ts`:

1. Create a new mock function
2. Add it to the `setupCommonMocks()` function
3. The mock will be automatically available in all tests

## Adding New Test Helpers

To add a new test helper, update `__tests__/__utils__/test-helpers.ts`:

1. Create a new helper function
2. Export it from the module
3. Import and use it in your tests
