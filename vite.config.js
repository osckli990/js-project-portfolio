// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-styled-components", { displayName: true }]],
      },
    }),
  ],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: "jsdom",

    globals: true,
    setupFiles: "./test/setup.js", // assuming the test folder is in the root of our project
  },
});
