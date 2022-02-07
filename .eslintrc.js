module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "no-shadow": "off",
    "no-console": "off",
    semi: [
      "error", "always",
    ],
    quotes: [
      "error", "double",
    ],
    // "comma-dangle": ["error", {
    //     "arrays": "never",
    //     "objects": "never",
    //     "imports": "never",
    //     "exports": "never",
    //     "functions": "never"
    // }],
    "array-bracket-newline": [
      "error", "always",
    ],
    "comma-dangle": [
      "error", "always-multiline",
    ],
    // "comma-dangle": [ "error", "never" ],
    "brace-style": [
      "error", "stroustrup",
    ],
    "no-multi-spaces": [
      "error", { ignoreEOLComments: true },
    ],
    "no-multiple-empty-lines": [
      "error", { max: 1 },
    ],
    "require-await": "error",
    "array-bracket-spacing": [
      "error", "always",
    ],
    // "after": { "before": false, "after": true },
    "no-constant-condition": "error",
    "prefer-destructuring": [
      "error", {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      }, {
        enforceForRenamedProperties: false,
      },
    ],
    "no-trailing-spaces": "error",
    "no-empty": "error",
    "no-inline-comments": "error",
    "no-whitespace-before-property": "error",
    "object-property-newline": [
      "error", { allowAllPropertiesOnSameLine: false },
    ],
    "no-unused-vars": [
      "warn", {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false,
      },
    ],
    // "no-lonely-if": 0
  },
};
