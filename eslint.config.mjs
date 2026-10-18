import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Authored data/shared exercise modules have their own behavioral tests.
    "learn/**",
    "public/learn-content/**",
    "public/learn-assets/**",
    "public/learn-sw.js",
    ".next-qa-profile/**",
  ]),
]);

export default eslintConfig;
