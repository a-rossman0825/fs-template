import globals from "globals";
//@ts-expect-error ts(7016)
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
import pluginVue from "eslint-plugin-vue";

export default defineConfigWithVueTs(
  pluginVue.configs["flat/essential"],
  vueTsConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,vue}"],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parser: "@typescript-eslint/parser",
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-debugger": "warn",
      "vue/html-self-closing": "off",
      "vue/multi-word-component-names": "off",
      "vue/no-undef-properties": "error",
      "vue/require-v-for-key": "warn",
      "vue/block-order": [
        "warn",
        {
          order: [["script", "template"], "style"],
        },
      ],
      "vue/component-api-style": ["warn", ["script-setup", "composition"]],
    },
  }
);
