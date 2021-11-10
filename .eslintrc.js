module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "next/core-web-vitals",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: "module"
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
    }
};
