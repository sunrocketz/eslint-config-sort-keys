module.exports = {
  extends: ['plugin:typescript-sort-keys/recommended', 'plugin:react/jsx-runtime', 'prettier'],
  plugins: [
    'typescript-sort-keys',
    'simple-import-sort',
    'sort-keys-fix',
    'sort-destructure-keys',
    'unused-imports',
  ],
  rules: {
    'indent': ['warn', 2],
    'linebreak-style': ['warn', 'unix'],
    'quotes': [
      'warn',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'semi': ['warn', 'never'],
    'quote-props': ['warn', 'consistent'],
    'jsx-quotes': ['warn', 'prefer-single'],
    'comma-dangle': ['warn', 'always-multiline'],
    'no-await-in-loop': 'error',
    'no-extra-parens': 'warn',
    'no-loss-of-precision': 'warn',
    'no-template-curly-in-string': 'warn',
    'accessor-pairs': 'warn',
    'block-scoped-var': 'error',
    'default-case': 'error',
    'default-case-last': 'warn',
    'default-param-last': 'error',
    'eqeqeq': 'error',
    'grouped-accessor-pairs': 'warn',
    'no-alert': 'warn',
    'no-eq-null': 'warn',
    'no-eval': 'error',
    'no-useless-concat': 'warn',
    'no-useless-return': 'warn',
    'require-await': 'error',
    'no-use-before-define': 'error',
    'no-trailing-spaces': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unneeded-ternary': 'warn',
    'no-whitespace-before-property': 'warn',
    'sort-vars': 'warn',
    'no-var': 'error',
    'no-unused-vars': 'off', // or "@typescript-eslint/no-unused-vars": "off",
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'symbol-description': 'error',
    'sort-keys-fix/sort-keys-fix': 'warn',
    'sort-destructure-keys/sort-destructure-keys': 'warn',
    'react/self-closing-comp': 'warn',
    'react/no-danger': 'error',
    'react/jsx-boolean-value': ['warn', 'never'],
    'react/jsx-fragments': ['warn', 'syntax'],
    'react/no-unused-state': 'warn',
    'react/jsx-sort-props': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
    'react/destructuring-assignment': ['warn', 'always'],
    'react/button-has-type': 'warn',
  },
}
