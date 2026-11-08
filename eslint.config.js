import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,ts}"],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    rules: {
      "no-unused-vars": "warn",
      "no-undef": "error",
    },
    languageOptions: { globals: globals.node },
  },
]);
