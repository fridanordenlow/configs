import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"]}
  ,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'camelcase': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'curly': ['error', 'all'],
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'no-var': 'error',
      'prefer-const': 'error',
      'eqeqeq': ['error', 'always'],
      'no-multiple-empty-lines': ['warn', { max: 1 }],
      'arrow-body-style': ['error', 'as-needed'],
      'no-duplicate-imports': 'error',
      'no-template-curly-in-string': 'error',
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
];
