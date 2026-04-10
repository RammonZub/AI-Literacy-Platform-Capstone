import path from "node:path";
import { defineConfig } from "@playwright/test";
import { config as loadEnv } from "dotenv";

loadEnv({ path: path.resolve(process.cwd(), ".env.local") });

const baseURL = process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000";
const disableWebServer = process.env.PLAYWRIGHT_DISABLE_WEBSERVER === "true";

/**
 * Playwright config for browser E2E (when `e2e/` specs are present).
 *
 * Uses `next dev` locally for fast iteration; extend or point `testDir` at your specs.
 */
export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  retries: 0,
  timeout: 120_000,
  expect: {
    timeout: 20_000,
  },
  use: {
    baseURL,
    headless: true,
    trace: "retain-on-failure",
  },
  reporter: [["list"]],
  workers: 1,
  webServer: disableWebServer
    ? undefined
    : {
        command: "npm run dev",
        reuseExistingServer: true,
        timeout: 120_000,
        url: baseURL,
      },
});
