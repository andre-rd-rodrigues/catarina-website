import '@testing-library/jest-dom';
import { setupCommonMocks } from './__tests__/__mocks__/common';

// Setup all common mocks
setupCommonMocks();

// Mock CSS custom properties for testing
Object.defineProperty(window, 'getComputedStyle', {
  value: () => ({
    getPropertyValue: (prop: string) => {
      const properties: Record<string, string> = {
        '--color-secondary': '#1a1a1a',
        '--color-primary': '#000000',
        '--color-accent': '#3b82f6',
        '--color-danger': '#ef4444',
        '--color-border-primary': '#e5e7eb',
      };
      return properties[prop] || '';
    },
  }),
});
