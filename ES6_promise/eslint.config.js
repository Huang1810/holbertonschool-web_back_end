const { configs } = require('@eslint/js');

module.exports = [
  configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        require: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
        module: 'readonly',
        console: 'readonly',  // Add console here
      },
    },
    rules: {
      // Your ESLint rules here
    },
  },
];
