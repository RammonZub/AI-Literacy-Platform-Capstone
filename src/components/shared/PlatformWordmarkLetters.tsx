/**
 * PlatformWordmarkLetters
 *
 * Uppercase Montserrat wordmark using `SITE_BRAND_WORDMARK`, with optional " AI" suffix
 * for quiz flows (matches landing navbar when `includeAI` is false).
 */

"use client";

import { SITE_BRAND_WORDMARK } from "@/lib/site-brand";
import { cn } from "@/lib/utils";

const BRAND_BLUE = "#0052FF";
const QUIZ_BLUE = "#007AFF";

export interface PlatformWordmarkLettersProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  includeAI?: boolean;
  variant?: "brand" | "quiz";
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-[22px]",
  lg: "text-2xl",
} as const;

export function PlatformWordmarkLetters({
  className,
  size = "md",
  includeAI = true,
  variant = "brand",
}: PlatformWordmarkLettersProps) {
  const color = variant === "quiz" ? QUIZ_BLUE : BRAND_BLUE;

  return (
    <span
      className={cn(
        "font-extrabold tracking-tight leading-none font-montserrat",
        sizeClasses[size],
        className,
      )}
      style={{ color }}
    >
      {SITE_BRAND_WORDMARK}
      {includeAI ? " AI" : ""}
    </span>
  );
}
