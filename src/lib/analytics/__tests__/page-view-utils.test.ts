import {
  derivePageTypeFromPath,
  normalizeScrollDepthPercent,
  normalizeTimeOnPageSeconds,
  resolvePageType,
} from "@/lib/analytics/page-view-utils";

describe("page-view-utils", () => {
  describe("derivePageTypeFromPath", () => {
    it("maps known paths", () => {
      expect(derivePageTypeFromPath("/")).toBe("landing");
      expect(derivePageTypeFromPath("/learn/ai-fundamentals")).toBe("landing");
      expect(derivePageTypeFromPath("/onboarding")).toBe("quiz");
      expect(derivePageTypeFromPath("/onboarding/results")).toBe("quiz");
      expect(derivePageTypeFromPath("/checkout/abc")).toBe("checkout");
      expect(derivePageTypeFromPath("/platform/dashboard")).toBe("platform");
      expect(derivePageTypeFromPath("/blog/post")).toBe("blog");
      expect(derivePageTypeFromPath("/glossary/ai")).toBe("glossary");
      expect(derivePageTypeFromPath("/privacy")).toBe("legal");
      expect(derivePageTypeFromPath("/signup")).toBe("auth");
      expect(derivePageTypeFromPath("/something-else")).toBe("other");
    });
  });

  describe("resolvePageType", () => {
    it("uses explicit valid page type", () => {
      expect(resolvePageType("quiz", "/")).toBe("quiz");
      expect(resolvePageType("landing", "/onboarding")).toBe("landing");
    });

    it("derives page type when missing", () => {
      expect(resolvePageType(undefined, "/onboarding")).toBe("quiz");
      expect(resolvePageType(null, "/platform")).toBe("platform");
    });

    it("falls back to path-derived type when explicit type is invalid", () => {
      expect(resolvePageType("not-real", "/onboarding")).toBe("quiz");
    });
  });

  describe("normalizeTimeOnPageSeconds", () => {
    it("preserves zero and clamps negatives", () => {
      expect(normalizeTimeOnPageSeconds(0)).toBe(0);
      expect(normalizeTimeOnPageSeconds(-4)).toBe(0);
    });

    it("rounds finite values", () => {
      expect(normalizeTimeOnPageSeconds(2.4)).toBe(2);
      expect(normalizeTimeOnPageSeconds(2.5)).toBe(3);
    });

    it("returns null for invalid values", () => {
      expect(normalizeTimeOnPageSeconds(undefined)).toBeNull();
      expect(normalizeTimeOnPageSeconds(Number.NaN)).toBeNull();
    });
  });

  describe("normalizeScrollDepthPercent", () => {
    it("preserves zero and clamps range", () => {
      expect(normalizeScrollDepthPercent(0)).toBe(0);
      expect(normalizeScrollDepthPercent(-1)).toBe(0);
      expect(normalizeScrollDepthPercent(101)).toBe(100);
    });

    it("returns null for invalid values", () => {
      expect(normalizeScrollDepthPercent(undefined)).toBeNull();
      expect(normalizeScrollDepthPercent(Number.POSITIVE_INFINITY)).toBeNull();
    });
  });
});
