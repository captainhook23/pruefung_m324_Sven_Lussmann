import globals from 'globals';
import pluginJs from '@eslint/js';
//import mochaPlugin from 'eslint-plugin-mocha';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
      },
    },
    rules: {
      eqeqeq: 'error',
    },
  },
  pluginJs.configs.recommended,
];
