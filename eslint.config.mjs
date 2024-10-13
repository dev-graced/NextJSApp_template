import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';
import airbnbBase from 'eslint-config-airbnb-base/index.js'; // Airbnbベースルール


export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"]
  },

  {
    languageOptions: { 
    globals: {...globals.browser, ...globals.node} 
    } 
  },

  pluginJs.configs.recommended,

  pluginReact.configs.flat.recommended,

  {
    rules: {
      'no-console': 'warn',
      'semi': ['error','always'],
      ...reactRecommended.rules,  // plugin:react/recommended のルールを直接追加
      ...jsxRuntime.rules,        // plugin:react/jsx-runtime のルールを直接追加
      ...airbnbBase.rules,       // Airbnb ベースのルールを展開
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  }
];

