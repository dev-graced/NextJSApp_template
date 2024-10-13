import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import jsxRuntime from 'eslint-plugin-react/configs/jsx-runtime.js';


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
      ...reactRecommended.rules,  // plugin:react/recommended のルールを直接追加
      ...jsxRuntime.rules,        // plugin:react/jsx-runtime のルールを直接追加
    },

    settings: {
      react: {
        version: 'detect',
      },
    },
  }
];

