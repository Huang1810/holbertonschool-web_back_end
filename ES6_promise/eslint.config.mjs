export default [
  {
    ignores: ["**/node_modules/**"],
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        console: "readonly",
      },
    },
  },
];
