module.exports = {
    extends: [
      'react-app',
      'react-app/jest',
      'airbnb',
      'airbnb/hooks',
      'plugin:testing-library/react',
      'plugin:prettier/recommended'
    ],
    plugins: ['react', 'jest'],
    env: {
      browser: true,
      es2021: true,
      jest: true,
    },
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    rules: {
      'linebreak-style': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
        },
      ],
    },
  };