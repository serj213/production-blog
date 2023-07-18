module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "standard-with-typescript",
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
    ],
    overrides: [
        {
            env: {
                node: true
            },
            files: [
                ".eslintrc.{js,cjs},",
                './**/*.{ts,tsx}'
            ],
            parserOptions: {
                sourceType: "script",
                project: [
                    './tsconfig.json',
                  ],
            }
        },
        
    ],
    plugins: [
        "react"
    ],
    rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-floating-promises" : "warn",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-assignment": "off"
    }
}
