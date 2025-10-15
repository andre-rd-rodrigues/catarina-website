import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/__tests__/__utils__/test-helpers.ts',
    '<rootDir>/__tests__/__mocks__/common.ts',
  ],
  transformIgnorePatterns: ['node_modules/(?!(lucide-react|@lucide)/)'],
  collectCoverageFrom: [
    'components/Button/**/*.{js,jsx,ts,tsx}',
    'components/ContactForm/**/*.{js,jsx,ts,tsx}',
    'components/Footer/**/*.{js,jsx,ts,tsx}',
    'components/Hero/**/*.{js,jsx,ts,tsx}',
    'components/FAQS/**/*.{js,jsx,ts,tsx}',
    // TODO: Uncomment when app coverage reaches 70%+
    // 'app/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '\\.(css|scss|sass|less)$': 'identity-obj-proxy',
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(customJestConfig);
