import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


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
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react/jsx-runtime', // React 17+ の JSX runtime サポートを追加
    ]
  }
];

