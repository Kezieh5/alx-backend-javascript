module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'max-classes-per-file': ['error', 2],
    'no-underscore-dangle': ['error', { 'allow': ['_range', '_size', '_location', '_year', '_firstName', '_lastName', '_holbertonClass', '_brand', '_motor', '_color', '_maxStudentsSize'] }],
  },
  overrides: [
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    },
  ],
};
