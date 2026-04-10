/**
 * Vitest Configuration
 *
 * PURPOSE: Configures Vitest testing environment for Next.js 16 with React 19
 *
 * CONTEXT: This setup enables testing React components with happy-dom environment
 * and provides proper path resolution for @/ imports.
 *
 * KEY FEATURES:
 * - React plugin for JSX/TSX support
 * - happy-dom environment for DOM testing
 * - Global test utilities (describe, it, expect, etc.)
 * - Path aliases matching Next.js tsconfig.json
 * - ESM support for Next.js 16
 *
 * DEPENDENCIES:
 * - vitest: Test runner
 * - @vitejs/plugin-react: React support for Vitest
 * - happy-dom: Fast DOM implementation for Node
 * - @testing-library/jest-dom: Custom Jest matchers
 */

import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "happy-dom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    include: ["**/__tests__/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: ["node_modules", "dist", ".next", "build"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      exclude: ["node_modules/", "src/test/", "**/*.config.{js,ts}"],
    },
    // Resolve alias for both test files and the code under test
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ["@asamuzakjp/css-color"],
  },
});
