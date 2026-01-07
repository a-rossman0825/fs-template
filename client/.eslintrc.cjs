// This file exists only to satisfy tools that do not yet support ESLint flat config (eslint.config.ts).
// All real config is in eslint.config.ts.
// Minimal legacy config for ESLint plugins/tools that do not support flat config.
module.exports = {
  root: true,
  parser: "vue-eslint-parser",
  plugins: ["@typescript-eslint", "vue"],
  extends: [
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ["dist/", "node_modules/"],
};
