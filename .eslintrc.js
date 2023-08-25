module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["airbnb", "plugin:react/recommended", "plugin:@typescript-eslint/recommended-requiring-type-checking", "plugin:i18next/recommended", "plugin:storybook/recommended"],
  overrides: [{
    env: {
      node: true
    },
    files: [".eslintrc.{js,cjs},", "./**/*.{ts,tsx}"]
  }],
  parserOptions: {
    project: ["tsconfig.json"]
  },
  plugins: ["react", "i18next"],
  rules: {
    quotes: ["error", "single"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "i18next/no-literal-string": ["error", {
      markupOnly: true,
      ignoreAttribute: ["data-testid", "to"]
    }],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [1, {
      extensions: [".jsx", ".tsx"]
    }],
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": ["off"],
    "react/jsx-props-no-spreading": "off",
    "no-shadow": "warn",
    "react/function-component-definition": "off",
    "no-return-await": "warn",
    "max-len": ["error", {
      ignoreComments: true,
      code: 120
    }],
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "react/display-name": "warn"
  }
};