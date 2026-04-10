/**
 * Figure 3 — platform UI screenshots for thesis Section 4.1
 *
 * Captures:
 * (a) Dashboard — recommendation-first hero card and ordered module grid
 * (b) Article lesson — article sections + inline checkpoint / quiz
 * (c) Certificate — in-platform module certificate preview (same Certificate component as unlocked state)
 *
 * Requires the local login env used by the thesis verification flows.
 * Outputs: docs/figures/figure-3/*.png
 */

import { expect, test } from "@playwright/test";
import { existsSync, mkdirSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const OUT_DIR = resolve(process.cwd(), "docs/figures/figure-3");
const STORAGE_STATE = resolve(process.cwd(), "e2e/.auth/platform-figure-3.json");
const MODULE_ID = "01-skills-foundations";
const ARTICLE_LESSON_ID = "l1-3-ai-landscape";

function loadEnvLocal(): Record<string, string> {
  try {
    const raw = readFileSync(resolve(process.cwd(), ".env.local"), "utf8");
    const out: Record<string, string> = {};
    for (const line of raw.split("\n")) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const idx = t.indexOf("=");
      if (idx === -1) continue;
      const k = t.slice(0, idx).trim();
      let v = t.slice(idx + 1).trim();
      v = v.replace(/^['"]|['"]$/g, "");
      out[k] = v;
    }
    return out;
  } catch {
    return {};
  }
}

const env = { ...loadEnvLocal(), ...process.env };
const e2eEmail = env.E2E_ONBOARDING_EMAIL ?? "";
const e2ePassword = env.E2E_ONBOARDING_PASSWORD ?? "";
const hasStorageState = existsSync(STORAGE_STATE);

test.describe("Figure 3 screenshots", () => {
  test.use({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
    ...(hasStorageState ? { storageState: STORAGE_STATE } : {}),
  });

  test("capture dashboard, article lesson, certificate", async ({ page, context }) => {
    const canAuth = (e2eEmail && e2ePassword) || hasStorageState;
    test.skip(
      !canAuth,
      "Authenticate once: either add E2E_ONBOARDING_EMAIL + E2E_ONBOARDING_PASSWORD to .env.local, or log in and run: npx playwright codegen http://127.0.0.1:3000/login --save-storage=e2e/.auth/platform-figure-3.json (create e2e/.auth first).",
    );

    mkdirSync(OUT_DIR, { recursive: true });
    mkdirSync(resolve(process.cwd(), "e2e/.auth"), { recursive: true });

    if (!hasStorageState) {
      await page.goto("/login", { waitUntil: "domcontentloaded" });
      await page.locator("#email").fill(e2eEmail);
      await page.locator("#password").fill(e2ePassword);
      await page.getByRole("button", { name: /sign in/i }).click();
      await page.waitForURL(/\/platform/, { timeout: 45_000 });
      await context.storageState({ path: STORAGE_STATE });
    } else {
      await page.goto("/platform", { waitUntil: "domcontentloaded" });
      await page.waitForURL(/\/platform/, { timeout: 45_000 });
    }

    // (a) Dashboard — recommendation-first layout
    await expect(page.getByRole("heading", { name: /recommended modules/i })).toBeVisible({
      timeout: 30_000,
    });
    await page.screenshot({
      path: resolve(OUT_DIR, "fig3a-dashboard.png"),
      fullPage: false,
    });

    // (b) Article-format demo lesson — inline checkpoint (sample content uses Claude prompt copy)
    await page.goto(
      `/platform/module/${MODULE_ID}/lesson/${ARTICLE_LESSON_ID}/article`,
      { waitUntil: "domcontentloaded" },
    );
    const checkpointCue = page.getByText("What's the best way to get good results from Claude?", {
      exact: false,
    });
    await expect(checkpointCue).toBeVisible({ timeout: 25_000 });
    await checkpointCue.scrollIntoViewIfNeeded();
    await page.screenshot({
      path: resolve(OUT_DIR, "fig3b-article-lesson.png"),
      fullPage: false,
    });

    // (c) Module journey — certificate preview (locked state shows same Certificate UI as completion)
    await page.goto(`/platform/module/${MODULE_ID}`, { waitUntil: "domcontentloaded" });
    const certHeading = page.getByRole("heading", { name: /certificate preview/i });
    await expect(certHeading).toBeVisible({ timeout: 25_000 });
    await certHeading.scrollIntoViewIfNeeded();
    const certCard = page
      .locator("div.rounded-2xl.border-dashed")
      .filter({ hasText: "Certificate Preview" })
      .first();
    await expect(certCard).toBeVisible({ timeout: 10_000 });
    await certCard.screenshot({ path: resolve(OUT_DIR, "fig3c-certificate.png") });
  });
});
