module.exports = {
  extends: ['eslint:recommended', 'react-app', 'plugin:jest/recommended'],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'max-len': ['error', 120],
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
};
