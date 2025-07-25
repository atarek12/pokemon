import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { globalIgnores } from 'eslint/config'
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginRouter from '@tanstack/eslint-plugin-router'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
			eslintPluginPrettierRecommended,
			pluginRouter.configs['flat/recommended'],
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "prettier/prettier": ["warn", { endOfLine: "auto" }],
      "@typescript-eslint/no-empty-object-type": "off",
      "no-empty-pattern": "off",
      "@typescript-eslint/no-unused-vars": "warn",
    },
  },
])
