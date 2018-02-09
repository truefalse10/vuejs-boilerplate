// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 'off',
    // don't require .vue extension when importing
    'import/extensions': 'off',
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-param-reassign': ["error", { "props": false }],
    // disabled for vue functions that need this syntax
    'func-names': 'off',
    'object-shorthand': 'off',
    'no-confusing-arrow': 'off',
    'arrow-parens': [1, 'as-needed'],
    'no-return-assign': 'off',
  }
}
