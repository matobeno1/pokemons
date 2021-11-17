module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "jsx-a11y"
    ],
    extends: [
        "eslint:recommended",
        "next/core-web-vitals",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/jsx-runtime",
        "plugin:jsx-a11y/recommended",
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
            version: "detect",
        },
    },
    rules: {
        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double"],
        "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0 }],
        "eol-last": ["error", "always"],
        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "always"],
        "react/prop-types": "off",
        "semi": "off",
        "@typescript-eslint/semi": ["error"]
    }
};
