import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from "eslint/config";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
});

export default defineConfig([
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
  }),
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
