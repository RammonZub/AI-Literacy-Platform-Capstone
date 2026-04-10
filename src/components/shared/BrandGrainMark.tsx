/**
 * BrandGrainMark
 *
 * Logo mark: blue gradient tile with a light noise/grain overlay
 * (no raster logo). Uses design tokens only.
 */

"use client";

import { gemColors } from "@/data/design/tokens";
import { cn } from "@/lib/utils";

const SIZE_PX = {
  sm: 32,
  md: 48,
  lg: 64,
  xl: 80,
} as const;

/** Inline SVG noise tile (soft-light blend). */
const GRAIN_DATA_URI =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/%3E%3C/svg%3E\")";

export interface BrandGrainMarkProps {
  size?: keyof typeof SIZE_PX;
  /** When set, overrides `size` (e.g. certificate export at arbitrary scale). */
  dimension?: number;
  className?: string;
  shape?: "circle" | "rounded";
}

export function BrandGrainMark({
  size = "md",
  dimension,
  className,
  shape = "rounded",
}: BrandGrainMarkProps) {
  const px = dimension ?? SIZE_PX[size];

  return (
    <span
      className={cn(
        "relative inline-flex shrink-0 overflow-hidden",
        shape === "circle" ? "rounded-full" : "rounded-xl",
        className,
      )}
      style={{
        width: px,
        height: px,
        background: `linear-gradient(145deg, ${gemColors.blueLight} 0%, ${gemColors.blue} 42%, ${gemColors.blueDark} 100%)`,
        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.06)",
      }}
      aria-hidden
    >
      <span
        className="pointer-events-none absolute inset-0 mix-blend-soft-light opacity-90"
        style={{
          backgroundImage: GRAIN_DATA_URI,
        }}
      />
    </span>
  );
}

export default BrandGrainMark;
