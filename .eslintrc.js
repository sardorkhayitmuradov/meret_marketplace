module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  extends: ['airbnb-base', 'prettier', 'eslint:recommended', 'react-app'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-param-reassign': 0,
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
  },
}