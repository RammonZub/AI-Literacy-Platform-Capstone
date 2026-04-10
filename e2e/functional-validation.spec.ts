/**
 * Phase 2 — Lean functional validation (10 paths).
 * Writes thesis-docs/functional-validation-summary.md and screenshots under
 * thesis-docs/functional-validation-screenshots/.
 *
 * Requires: local dev server (playwright webServer), .env.local with Supabase for tests 4–9.
 */

import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { expect, test, type BrowserContext, type Page } from "@playwright/test";
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { ONBOARDING_SESSION_STORAGE_KEY } from "../src/lib/personalization/context";
import {
  ensureScreenshotDir,
  FUNCTIONAL_SCREENSHOT_DIR,
  recordFunctionalResult,
  relativeScreenshotPath,
  writeFunctionalReport,
} from "./helpers/functional-report";
import {
  getContentModuleTitleForAlgorithmId,
  getFirstLessonForRecommendedPath,
} from "./helpers/functional-paths";

test.describe.configure({ mode: "serial" });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

const testPassword = "FunctionalTest!pass1";
const testFullName = "Functional E2E User";
let testEmail = "";
let userId: string | null = null;
let recommendedPathAlgo: string[] = [];
let lessonIds: { moduleId: string; lessonId: string; chapterId: string } | null = null;

/** Single tab preserves `sessionStorage` for onboarding → signup (Playwright pages do not share session). */
let sharedContext: BrowserContext;
let page: Page;

function adminClient(): SupabaseClient {
  if (!supabaseUrl || !serviceKey) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required for this step");
  }
  return createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function getUserIdByEmailFromPublicUsers(
  admin: SupabaseClient,
  email: string,
): Promise<string | null> {
  const { data, error } = await admin
    .from("users")
    .select("id")
    .eq("email", email)
    .maybeSingle();
  if (error) throw error;
  return data?.id ?? null;
}

async function runStep(
  page: Page,
  testName: string,
  area: string,
  expected: string,
  screenshotFile: string,
  body: () => Promise<void>,
): Promise<void> {
  let notes = "";
  try {
    await body();
    mkdirSync(FUNCTIONAL_SCREENSHOT_DIR, { recursive: true });
    const abs = join(FUNCTIONAL_SCREENSHOT_DIR, screenshotFile);
    await page.screenshot({ path: abs, fullPage: true });
    recordFunctionalResult({
      testName,
      area,
      expected,
      result: "PASS",
      screenshotPath: relativeScreenshotPath(screenshotFile),
      notes,
    });
  } catch (err) {
    notes = err instanceof Error ? err.message : String(err);
    recordFunctionalResult({
      testName,
      area,
      expected,
      result: "FAIL",
      screenshotPath: "",
      notes,
    });
    throw err;
  }
}

async function signOutAndLandOnLogin(page: Page): Promise<void> {
  const res = await page.request.post("/api/auth/signout");
  if (!res.ok()) {
    throw new Error(`/api/auth/signout failed: ${res.status()} ${await res.text()}`);
  }
  await page.goto("/login", { waitUntil: "domcontentloaded" });
  await expect(page).toHaveURL(/\/login/);
}

/**
 * Article lessons show LessonCompletionOverlay on the final Continue tap; it blocks
 * further clicks until dismissed (tap / auto-dismiss).
 */
async function dismissLessonCompletionOverlayIfPresent(page: Page): Promise<void> {
  const heading = page.getByRole("heading", { name: /Lesson Complete/i });
  if (!(await heading.isVisible().catch(() => false))) {
    return;
  }
  await page.locator("div.fixed.inset-0.z-50.cursor-pointer").first().click({ timeout: 10_000 });
  await heading.waitFor({ state: "hidden", timeout: 15_000 }).catch(() => {
    /* overlay may animate out */
  });
  await page.waitForTimeout(400);
}

async function answerAllOnboardingQuestions(page: Page): Promise<void> {
  await page.goto("/onboarding");
  await page.waitForFunction(
    () => !document.body.textContent?.includes("Loading") || document.querySelector("h1"),
    { timeout: 30_000 },
  );
  await expect(page.locator("h1").first()).toBeVisible({ timeout: 30_000 });

  for (let q = 0; q < 11; q++) {
    const options = page.locator("button[aria-pressed]");
    await expect(options.first()).toBeVisible({ timeout: 15_000 });
    await options.first().click();
    if (q < 10) {
      await page.waitForTimeout(350);
    }
  }
  await page.waitForURL(/\/onboarding\/results/, { timeout: 30_000 });
}

test.describe("Functional validation (10)", () => {
  test.setTimeout(180_000);

  test.beforeAll(async ({ browser }) => {
    ensureScreenshotDir();
    testEmail = `functional-e2e-${Date.now()}@e2e.test`;
    sharedContext = await browser.newContext();
    page = await sharedContext.newPage();
  });

  test.afterAll(async () => {
    writeFunctionalReport();
    await sharedContext?.close();
  });

  test("01 — Landing page loads and renders headline", async () => {
    await runStep(
      page,
      "Landing page loads and renders headline",
      "Marketing / home",
      'Hero shows "AI made simple" and tagline',
      "01-landing.png",
      async () => {
        await page.goto("/");
        await expect(page.getByRole("heading", { name: /AI made simple/i })).toBeVisible({
          timeout: 20_000,
        });
        await expect(page.getByText(/15-minute lessons/i)).toBeVisible();
      },
    );
  });

  test("02 — Onboarding assessment loads all 11 questions", async () => {
    await runStep(
      page,
      "Onboarding assessment loads all 11 questions",
      "Onboarding",
      "User can step through 11 distinct question screens (first option each time)",
      "02-onboarding-11.png",
      async () => {
        await page.goto("/onboarding");
        await expect(page.locator("h1").first()).toBeVisible({ timeout: 30_000 });
        for (let q = 0; q < 11; q++) {
          await expect(page.locator("h1").first()).toBeVisible();
          const label = await page.locator("h1").first().innerText();
          if (label.trim().length < 5) {
            throw new Error(`Question ${q + 1} headline missing or too short`);
          }
          const opts = page.locator("button[aria-pressed]");
          await expect(opts.first()).toBeVisible({ timeout: 10_000 });
          await opts.first().click();
          if (q < 10) await page.waitForTimeout(350);
        }
        await page.waitForURL(/\/onboarding\/results/, { timeout: 30_000 });
      },
    );
  });

  test("03 — Completing onboarding shows ≥3 recommended modules", async () => {
    await runStep(
      page,
      "Completing onboarding produces a recommendation page with at least 3 modules",
      "Onboarding / results",
      'Results page lists ≥3 modules under "Recommended modules"',
      "03-results-modules.png",
      async () => {
        await page.waitForURL(/\/onboarding\/results/, { timeout: 15_000 }).catch(() => null);
        if (!page.url().includes("/onboarding/results")) {
          await answerAllOnboardingQuestions(page);
        }
        await expect(
          page.getByRole("heading", { name: /Your recommended module sequence/i }),
        ).toBeVisible({ timeout: 20_000 });

        const headers = page.locator("h2").filter({ hasText: "Recommended modules" });
        await expect(headers).toBeVisible();
        const moduleTitles = page.locator('h3.font-semibold, h3[class*="semibold"]');
        const n = await moduleTitles.count();
        if (n < 3) {
          throw new Error(`Expected at least 3 recommended module cards, found ${n}`);
        }

        const raw = await page.evaluate((key) => sessionStorage.getItem(key), ONBOARDING_SESSION_STORAGE_KEY);
        const parsed = raw ? (JSON.parse(raw) as { result?: { recommendedPath?: string[] } }) : null;
        recommendedPathAlgo = parsed?.result?.recommendedPath ?? [];
        if (recommendedPathAlgo.length < 3) {
          throw new Error("sessionStorage result.recommendedPath should have ≥3 entries");
        }
        lessonIds = getFirstLessonForRecommendedPath(recommendedPathAlgo);
      },
    );
  });

  test("04 — Sign up with test email creates a user row", async () => {
    await runStep(
      page,
      "Sign up with test email creates a user row",
      "Auth / Supabase",
      "POST /api/auth/register succeeds; public.users contains new id",
      "04-after-signup-platform.png",
      async () => {
        const admin = adminClient();

        if (!page.url().includes("/onboarding/results")) {
          await page.goto("/onboarding/results");
        }

        await page.getByRole("button", { name: /Create account to continue/i }).click();
        await page.waitForURL(/\/signup/, { timeout: 20_000 });

        await page.locator("#fullName").fill(testFullName);
        await page.locator("#email").fill(testEmail);
        await page.locator("#password").fill(testPassword);
        await page.getByRole("button", { name: /Create Account/i }).click();

        await page.waitForURL(/\/platform/, { timeout: 60_000 });

        userId = await getUserIdByEmailFromPublicUsers(admin, testEmail);
        if (!userId) {
          throw new Error("public.users row not found after signup (check handle_new_user trigger)");
        }

        const { data, error } = await admin.from("users").select("id, email").eq("id", userId).maybeSingle();
        if (error) throw error;
        if (!data?.id) {
          throw new Error("public.users row missing for new auth user");
        }
      },
    );
  });

  test("05 — Log in redirects to dashboard", async () => {
    await runStep(
      page,
      "Log in redirects to dashboard",
      "Auth",
      "After sign-out, /login with same credentials lands on /platform",
      "05-login-dashboard.png",
      async () => {
        await page.goto("/platform/profile", { waitUntil: "domcontentloaded" });
        await signOutAndLandOnLogin(page);

        await page.locator("#email").fill(testEmail);
        await page.locator("#password").fill(testPassword);
        await page.getByRole("button", { name: /sign in/i }).click();
        await page.waitForURL(/\/platform/, { timeout: 40_000 });
        await expect(page).toHaveURL(/\/platform/);
      },
    );
  });

  test("06 — Dashboard shows personalized path from onboarding", async () => {
    await runStep(
      page,
      "Dashboard shows the personalized path from onboarding",
      "Platform / home journey",
      "Home journey surfaces the first recommended catalog module title",
      "06-dashboard-path.png",
      async () => {
        await page.goto("/platform");
        const firstAlgo = recommendedPathAlgo[0];
        if (!firstAlgo) {
          throw new Error("No recommendedPath from onboarding session");
        }
        const expectedTitle = getContentModuleTitleForAlgorithmId(firstAlgo);
        await expect
          .poll(
            async () => {
              const t = await page.textContent("body");
              return t?.includes(expectedTitle) ?? false;
            },
            { timeout: 25_000 },
          )
          .toBe(true);
      },
    );
  });

  test("07 — Starting a lesson records lesson_progress in_progress", async () => {
    await runStep(
      page,
      "Starting a lesson records lesson_progress in_progress",
      "Progress",
      "Supabase lesson_progress status is in_progress after lesson loads",
      "07-lesson-started.png",
      async () => {
        const admin = adminClient();
        if (!userId || !lessonIds) {
          throw new Error("Missing userId or lessonIds from prior steps");
        }

        await admin.from("lesson_progress").delete().eq("user_id", userId).eq("lesson_id", lessonIds.lessonId);

        const url = `/platform/module/${lessonIds.moduleId}/lesson/${lessonIds.lessonId}`;
        await page.goto(url);
        await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 30_000 });

        await expect
          .poll(async () => {
            const { data } = await admin
              .from("lesson_progress")
              .select("status")
              .eq("user_id", userId)
              .eq("lesson_id", lessonIds!.lessonId)
              .maybeSingle();
            return data?.status ?? null;
          }, { timeout: 30_000 })
          .toBe("in_progress");
      },
    );
  });

  test("08 — Completing lesson sets completed and awards XP", async () => {
    await runStep(
      page,
      "Completing a lesson updates row to completed and awards XP",
      "Progress",
      "lesson_progress.status = completed and xp_earned > 0",
      "08-lesson-complete.png",
      async () => {
        const admin = adminClient();
        if (!userId || !lessonIds) throw new Error("Missing userId or lessonIds");

        const url = `/platform/module/${lessonIds.moduleId}/lesson/${lessonIds.lessonId}`;
        await page.goto(url);
        await expect(page.locator("h1, h2").first()).toBeVisible({ timeout: 30_000 });

        for (let i = 0; i < 50; i++) {
          await dismissLessonCompletionOverlayIfPresent(page);
          const cont = page.getByRole("button", { name: /^Continue$/i });
          if (await cont.isVisible().catch(() => false)) {
            await cont.click();
            await page.waitForTimeout(400);
            await dismissLessonCompletionOverlayIfPresent(page);
          } else {
            break;
          }
        }

        await dismissLessonCompletionOverlayIfPresent(page);
        await page.waitForTimeout(800);

        const completeBtn = page.getByRole("button", { name: /^Complete$/i });
        if (await completeBtn.isVisible().catch(() => false)) {
          await completeBtn.click();
          await page.waitForTimeout(800);
        }

        await expect
          .poll(async () => {
            const { data } = await admin
              .from("lesson_progress")
              .select("status, xp_earned")
              .eq("user_id", userId)
              .eq("lesson_id", lessonIds!.lessonId)
              .maybeSingle();
            return data?.status === "completed" && (data.xp_earned ?? 0) > 0;
          }, { timeout: 60_000 })
          .toBe(true);

        const { data: row } = await admin
          .from("lesson_progress")
          .select("status, xp_earned")
          .eq("user_id", userId)
          .eq("lesson_id", lessonIds.lessonId)
          .single();
        if (!row || row.status !== "completed" || !(row.xp_earned > 0)) {
          throw new Error(`Unexpected lesson_progress: ${JSON.stringify(row)}`);
        }
      },
    );
  });

  test("09 — XP increment reflected in users.total_xp", async () => {
    await runStep(
      page,
      "XP increment is reflected in users.total_xp",
      "Profile / users",
      "total_xp >= xp_earned from completed lesson",
      "09-dashboard-xp.png",
      async () => {
        const admin = adminClient();
        if (!userId || !lessonIds) throw new Error("Missing userId or lessonIds");

        const { data: lp } = await admin
          .from("lesson_progress")
          .select("xp_earned")
          .eq("user_id", userId)
          .eq("lesson_id", lessonIds.lessonId)
          .single();

        const { data: u } = await admin.from("users").select("total_xp").eq("id", userId).single();

        const earned = lp?.xp_earned ?? 0;
        const total = u?.total_xp ?? 0;
        if (earned > 0 && total < earned) {
          throw new Error(`total_xp ${total} less than lesson xp_earned ${earned}`);
        }

        await page.goto("/platform");
        await expect(page.getByText(String(total), { exact: false })).toBeVisible({ timeout: 15_000 });
      },
    );
  });

  test("10 — Log out clears session; landing reachable", async () => {
    await runStep(
      page,
      "Log out clears session and redirects to landing",
      "Auth",
      "Sign out → /login; unauthenticated /platform redirects to login; / loads hero",
      "10-logged-out-landing.png",
      async () => {
        await page.goto("/platform/profile", { waitUntil: "domcontentloaded" });
        await signOutAndLandOnLogin(page);

        await page.goto("/platform");
        await page.waitForURL(/\/login/, { timeout: 20_000 });

        await page.goto("/");
        await expect(page.getByRole("heading", { name: /AI made simple/i })).toBeVisible({
          timeout: 20_000,
        });
      },
    );
  });
});
