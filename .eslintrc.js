module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'prefer-const': 'off' ,
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.js', '.jsx'] }
    ],
    'import/prefer-default-export': 'off'
  },
};
