module.exports = {
  "plugins": [
    "prettier"
  ],
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 12
  },
  "rules": {
    "prettier/prettier": "error"
  },
  "ignorePatterns": [
    "node_modules/"
  ],
};
