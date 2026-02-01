import eslintConfigNext from "eslint-config-next/core-web-vitals";
import eslintConfigNextTypescript from "eslint-config-next/typescript";

const eslintConfig = [
  ...eslintConfigNext,
  ...eslintConfigNextTypescript,
  {
    ignores: [
      ".vercel/**",
      "dist/**",
      "public/**",
      "coverage/**",
      "*.config.js",
      "*.config.ts",
      "*.config.mjs",
    ],
  },
  {
    rules: {
      "react-hooks/set-state-in-effect": "off",
    },
  },
  {
    files: ["**/__tests__/**", "**/__mocks__/**", "jest.setup.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_|^fill$",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/refs": "off",
    },
  },
];

export default eslintConfig;
