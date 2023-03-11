module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "airbnb-typescript",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": './tsconfig.json'
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/quotes": "off",
    "@typescript-eslint/comma-dangle": "off",
    "no-console": "off",
    "import/no-unresolved": "error",
    "@typescript-eslint/no-unused-vars": 1,
    "import/no-named-as-default": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/indent": "off",
    "import/default": "off", //todo
  },
  "settings": {
    "react": {
      "version": "detect"
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true,
        "project": "./tsconfig.json",
      }
    }
  }
}
