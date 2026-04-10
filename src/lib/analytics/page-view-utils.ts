import type { PageType } from "@/types/analytics";

export const VALID_PAGE_TYPES = [
  "landing",
  "platform",
  "legal",
  "auth",
  "quiz",
  "checkout",
  "blog",
  "glossary",
  "other",
] as const;

type ValidPageType = (typeof VALID_PAGE_TYPES)[number];

function isValidPageType(value: unknown): value is ValidPageType {
  return typeof value === "string" && VALID_PAGE_TYPES.includes(value as ValidPageType);
}

export function derivePageTypeFromPath(pathname: string): PageType {
  if (pathname === "/" || pathname.startsWith("/courses") || pathname.startsWith("/learn")) {
    return "landing";
  }
  if (pathname.startsWith("/platform")) return "platform";
  if (pathname.startsWith("/onboarding")) return "quiz";
  if (pathname.startsWith("/checkout")) return "checkout";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.startsWith("/glossary")) return "glossary";
  if (
    pathname.startsWith("/auth") ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/signup")
  ) {
    return "auth";
  }
  if (pathname.startsWith("/privacy") || pathname.startsWith("/terms")) return "legal";
  return "other";
}

export function resolvePageType(pageType: unknown, pagePath: string): PageType | null {
  if (isValidPageType(pageType)) return pageType;

  const derived = derivePageTypeFromPath(pagePath);
  return isValidPageType(derived) ? derived : null;
}

export function normalizeTimeOnPageSeconds(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  return Math.max(0, Math.round(value));
}

export function normalizeScrollDepthPercent(value: unknown): number | null {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    return null;
  }

  return Math.max(0, Math.min(100, Math.round(value)));
}
