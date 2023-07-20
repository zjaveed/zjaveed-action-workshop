/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    environment: "jsdom",
    coverage: {
      reporter: ["text", "json", "json-summary"],
      lines: 96,
      branches: 92,
      functions: 100,
      statements: 96,
    },
    setupFiles: ["./test/setup.ts"],
  },
});
