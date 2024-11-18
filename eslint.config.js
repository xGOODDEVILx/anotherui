// import js from '@eslint/js';
// import globals from 'globals';
// import react from 'eslint-plugin-react';
// import reactHooks from 'eslint-plugin-react-hooks';
// import reactRefresh from 'eslint-plugin-react-refresh';
// import tseslint from '@typescript-eslint/eslint-plugin';
// import tseslintParser from '@typescript-eslint/parser';
// import prettier from 'eslint-plugin-prettier';

// export default [
//   {
//     ignores: ['dist'], // Ignore the build directory
//   },
//   {
//     files: ['**/*.{js,jsx,ts,tsx}'], // Specify the file types ESLint should lint
//     languageOptions: {
//       parser: tseslintParser, // Use TypeScript ESLint parser
//       ecmaVersion: 2021, // Enable modern ECMAScript features
//       sourceType: 'module', // Use ES modules
//       globals: {
//         ...globals.browser, // Include browser-specific globals
//         ...globals.es2021, // Include ES2021 globals
//       },
//     },
//     plugins: {
//       react, // Core React rules
//       'react-hooks': reactHooks,
//       'react-refresh': reactRefresh,
//       '@typescript-eslint': tseslint,
//       prettier,
//     },
//     extends: [
//       'eslint:recommended', // Base ESLint recommendations
//       'plugin:react/recommended', // React-specific recommendations
//       'plugin:react-hooks/recommended', // React Hooks rules
//       'plugin:@typescript-eslint/recommended', // TypeScript-specific rules
//       'plugin:prettier/recommended', // Prettier integration
//     ],
//     settings: {
//       react: {
//         version: 'detect', // Automatically detect the React version
//       },
//     },
//     rules: {
//       // General ESLint rules
//       'no-unused-vars': 'off', // Disable in favor of TypeScript's rule
//       '@typescript-eslint/no-unused-vars': [
//         'warn',
//         { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
//       ],

//       // React rules
//       'react/prop-types': 'off', // Not needed when using TypeScript
//       'react/react-in-jsx-scope': 'off', // Not needed for React 17+

//       // React Hooks rules
//       'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
//       'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

//       // React Refresh
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],

//       // Prettier rules
//       'prettier/prettier': [
//         'error',
//         {
//           singleQuote: true,
//           trailingComma: 'all',
//           printWidth: 80,
//           tabWidth: 2,
//         },
//       ],
//     },
//   },
// ];
