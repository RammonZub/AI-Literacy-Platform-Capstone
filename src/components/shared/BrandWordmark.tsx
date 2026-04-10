/**
 * BrandWordmark
 *
 * Text mark — Montserrat, all caps; optional " AI" suffix.
 * Colors from design tokens (`gemColors`).
 */

"use client";

import { gemColors } from "@/data/design/tokens";
import { SITE_BRAND_WORDMARK } from "@/lib/site-brand";
import { cn } from "@/lib/utils";

export interface BrandWordmarkProps {
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

export function BrandWordmark({
  className,
  size = "md",
  includeAI = true,
  variant = "brand",
}: BrandWordmarkProps) {
  const color = variant === "quiz" ? gemColors.blue : gemColors.blueDark;

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
      {includeAI && " AI"}
    </span>
  );
}
