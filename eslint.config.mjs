import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["error", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "caughtErrorsIgnorePattern": "^_"
      }],
      "import/order": ["error", {
        "groups": ["builtin", "external", "internal", "parent", "sibling", "index"],
        "newlines-between": "always",
        "alphabetize": { "order": "asc" }
      }],
      "react/jsx-sort-props": ["error", {
        "callbacksLast": true,
        "shorthandFirst": true,
        "ignoreCase": true,
        "reservedFirst": true
      }],
      "react/self-closing-comp": "error",
      "react/jsx-pascal-case": "error",
      "@typescript-eslint/explicit-function-return-type": ["warn", {
        "allowExpressions": true
      }],
      "@typescript-eslint/consistent-type-imports": ["error", {
        "prefer": "type-imports"
      }],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "prefer-const": "error",
      "no-duplicate-imports": "error",
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "quotes": ["error", "single", { 
        "avoidEscape": true,
        "allowTemplateLiterals": true 
      }],
      "semi": ["error", "always"],
      "react/jsx-no-useless-fragment": "error",
      "react/jsx-curly-brace-presence": ["error", {
        "props": "never",
        "children": "never"
      }],
      "react/jsx-boolean-value": ["error", "never"],
      "react/no-array-index-key": "warn"
    }
  }
];

export default eslintConfig;
