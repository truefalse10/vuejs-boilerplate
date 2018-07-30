module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
  },
  env: {
    node: true,
  },
  extends: ['airbnb-base', 'plugin:vue/recommended', '@vue/prettier'],
  rules: {
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-param-reassign': ['error', { props: false }],
    'func-names': 'off',
    'no-confusing-arrow': 'off',
    'arrow-parens': [1, 'as-needed'],
    'no-return-assign': 'off',
  },
};
