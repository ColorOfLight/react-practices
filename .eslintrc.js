module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["prettier", "@typescript-eslint", "react", "react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    // eslint
    "max-len": [
      "error",
      {
        code: 120,
      },
    ],
    "class-methods-use-this": "off",
    "consistent-return": "off",
    "default-case": "off",
    "prefer-template": "off",
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "no-alert": "off",
    "no-await-in-loop": "off",
    "no-else-return": "off",
    "no-param-reassign": "off",
    "no-plusplus": "warn",
    "no-prototype-builtins": "off",
    "no-return-assign": "off",
    "no-return-await": "off",
    "no-undefined": "error",
    "no-underscore-dangle": "off",
    "prefer-destructuring": [
      "error",
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
    ],
    "max-classes-per-file": "off",

    // import
    "import/no-extraneous-dependencies": "off",
    "import/prefer-default-export": "off",
    "import/order": "error",
    "import/extensions": [
      "error",
      "never",
      {
        ignorePackages: true,
        pattern: {
          png: "always",
          gif: "always",
          jpg: "always",
          svg: "always",
          css: "always",
          md: "always",
        },
      },
    ],
    // @typescript-eslint
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
      },
    ],
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/no-else-return": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/no-inferrable-types": [
      "warn",
      {
        ignoreParameters: true,
      },
    ],

    // react
    "react/destructuring-assignment": "off",
    "react/jsx-boolean-value": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".tsx"],
      },
    ],
    "react/jsx-no-bind": "off",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/no-unused-state": "warn",
    "react/sort-comp": "off",
    "react/jsx-props-no-spreading": "off",
    "react/static-property-placement": "off",
    "react/state-in-constructor": ["error", "never"],

    // jsx-a11y
    "jsx-a11y/alt-text": "off",
    "jsx-a11y/label-has-for": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/no-noninteractive-tabindex": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",

    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["route"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [{
    files: ["*.ts", "*.tsx"],
    rules: {
      "import/no-unresolved": "off",
      "no-dupe-class-members": "off",
      "react/prop-types": "off",
    },
  },],
};