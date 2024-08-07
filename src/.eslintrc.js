module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['react-app', 'airbnb', 'plugin:jsx-a11y/recommended'],
  plugins: ['jsx-a11y'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'global-require': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-dynamic-require': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
