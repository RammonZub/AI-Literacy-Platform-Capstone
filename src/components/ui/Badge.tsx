/**
 * Badge Component
 *
 * PURPOSE: iOS-native badge component for tags, status indicators, and categories
 *
 * CONTEXT: Part of iOS-Native UI/UX Redesign. Uses CSS variables for
 * dynamic theming and iOS system colors.
 *
 * KEY RESPONSIBILITIES:
 * - Display status indicators (success, warning, error, info)
 * - Use iOS system colors for semantic meaning
 * - Support multiple sizes (sm, md)
 * - Consistent pill shape (rounded-full)
 *
 * DESIGN RATIONALE:
 * - iOS uses subtle backgrounds with vibrant text for badges
 * - Border radius full (pill) matches iOS badge style
 * - Opacity 0.2 for background creates subtle tint effect
 *
 * @see globals.css for CSS variable definitions
 * @see data/design/tokens.ts for iOS color values
 */

import type React from "react";
import { colors } from "@/data/design/tokens";
import { cn } from "@/lib/utils";

// ==========================================
// TYPES
// ==========================================

export type BadgeVariant = "default" | "success" | "warning" | "error" | "info";
export type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
  children: React.ReactNode;
}

// ==========================================
// VARIANT STYLES
// ==========================================

/**
 * Get variant styles
 *
 * PURPOSE: Return iOS-native color scheme for each badge variant
 * DESIGN: Subtle background (20% opacity) with vibrant text
 *
 * @param variant - Badge variant
 * @returns { backgroundColor: string; color: string }
 */
const getVariantStyles = (variant: BadgeVariant): { backgroundColor: string; color: string } => {
  switch (variant) {
    /**
     * Success - Completed states
     * COLOR: Sage Green (#5BA387)
     */
    case "success":
      return {
        backgroundColor: "rgba(91, 163, 135, 0.2)", // colors.success at 20% opacity
        color: colors.success,
      };

    /**
     * Warning - Caution states
     * COLOR: Muted Gold (#E5B05C)
     */
    case "warning":
      return {
        backgroundColor: "rgba(229, 176, 92, 0.2)", // colors.warning at 20% opacity
        color: colors.warning,
      };

    /**
     * Error - Danger states
     * COLOR: Soft Coral (#D46A6A)
     */
    case "error":
      return {
        backgroundColor: "rgba(212, 106, 106, 0.2)", // colors.error at 20% opacity
        color: colors.error,
      };

    /**
     * Info - Informational states
     * COLOR: Cool Gray (#A0A0A8)
     */
    case "info":
      return {
        backgroundColor: "rgba(160, 160, 168, 0.2)", // colors.info at 20% opacity
        color: colors.info,
      };

    /**
     * Default - Neutral states
     * COLOR: Cool Gray (#C8C8CC)
     */
    case "default":
    default:
      return {
        backgroundColor: "rgba(200, 200, 204, 0.5)", // colors.gray400 at 50% opacity
        color: "#000000",
      };
  }
};

// ==========================================
// SIZE STYLES
// ==========================================

/**
 * Get size styles
 *
 * PURPOSE: Return padding and font size for each badge size
 */
const getSizeStyles = (size: BadgeSize): string => {
  switch (size) {
    case "sm":
      return "px-2 py-0.5 text-xs";
    case "md":
      return "px-2.5 py-1 text-sm";
    default:
      return "px-2.5 py-1 text-sm";
  }
};

// ==========================================
// COMPONENT
// ==========================================

/**
 * Badge Component
 *
 * @param variant - Color variant (default: "default")
 * @param size - Badge size (default: "md")
 * @param className - Additional classes
 * @param children - Badge content
 */
export default function Badge({
  variant = "default",
  size = "md",
  className = "",
  children,
}: BadgeProps) {
  const variantStyles = getVariantStyles(variant);
  const sizeStyles = getSizeStyles(size);

  return (
    <span
      className={cn("inline-flex items-center rounded-full font-medium", sizeStyles, className)}
      style={variantStyles}
    >
      {children}
    </span>
  );
}
