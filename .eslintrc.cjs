module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "indent": ["error", 2],
    "no-unused-vars": ["error", { "destructuredArrayIgnorePattern": "^_" }]
  },
};
