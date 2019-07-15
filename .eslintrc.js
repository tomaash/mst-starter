module.exports = {
  globals: {
    System: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 7,
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
      experimentalDecorators: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  rules: {
    semi: ['error', 'never'], 
    quotes: ['error', 'single'], 
    'react/prop-types': 0,
    'react/display-name': 0,
    'no-unused-vars': 1, 
    'no-console': 1, 
    'react/jsx-key': 1, 
    'max-len': ['error', 1100],
    'import/prefer-default-export': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': 0,
    camelcase: 0,
  },
  overrides: [
  ],
}
