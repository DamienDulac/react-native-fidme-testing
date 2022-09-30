module.exports = {
    root: true,
    parser: 'babel-eslint',
    plugins: ['react', 'prettier', 'sonarjs'],
    extends: [
        'plugin:sonarjs/recommended',
        'prettier',
        '@react-native-community',
    ],
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    globals: {
        __DEV__: false,
        navigator: false,
        alert: false,
    },
    rules: {
        'import/prefer-default-export': 'off',
        'no-param-reassign': ['error', { props: false }],
        'no-return-assign': ['error', 'except-parens'],
        'no-use-before-define': 'off',
        'react/jsx-filename-extension': 'off',
        'react/prefer-stateless-function': 'off',
        'react/no-did-mount-set-state': 'off',
        'react/require-default-props': 'off',
        'react/prop-types': 'off',
        'linebreak-style': 0,
        'global-require': 0,
        'consistent-return': 0,
        'class-methods-use-this': 0,
        'no-unused-expressions': 0,
        'prettier/prettier': 'error',
        'react/sort-comp': 'off',
        'sonarjs/no-duplicate-string': 0,
        'lines-between-class-members': [
            'error',
            'always',
            { exceptAfterSingleLine: true },
        ],
        'no-console': 1,
        'no-alert': 1,
    },
    settings: {
        'import/resolver': {
            node: {
                moduleDirectory: ['src', 'node_modules'],
                extensions: ['.js', '.android.js', '.ios.js'],
            },
        },
    },
};
