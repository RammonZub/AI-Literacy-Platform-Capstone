/**
 * Card Component
 *
 * PURPOSE: Base card component with clean professional styling
 *
 * CONTEXT: Cards are the foundation for most UI elements in the app.
 * Uses clean design (white background, gray border, soft shadow).
 *
 * KEY RESPONSIBILITIES:
 * - Provide consistent card styling across the app
 * - Support multiple variants for different use cases
 * - Use clean professional design
 *
 * IMPLEMENTATION NOTES:
 * - Default: White with gray border and soft shadow
 * - Elevated: Larger shadow for emphasis
 * - Outlined: Border only, no shadow
 * - Flat: No border or shadow
 */

import type React from "react";
import { cn } from "@/lib/utils";

// ==========================================
// TYPES
// ==========================================

/**
 * Card Variant Options
 *
 * AVAILABLE VARIANTS:
 * - default: White with gray border and soft shadow
 * - elevated: Larger shadow for emphasis
 * - outlined: Border only, no shadow
 * - flat: No border or shadow
 */
export type CardVariant = "default" | "elevated" | "outlined" | "flat";

export type CardPadding = "none" | "sm" | "md" | "lg";

interface CardProps {
  /** Visual style variant */
  variant?: CardVariant;
  /** Internal padding */
  padding?: CardPadding;
  /** Additional classes */
  className?: string;
  /** Click handler (makes card interactive) */
  onClick?: () => void;
  /** Card content */
  children: React.ReactNode;
  /** ID for accessibility */
  id?: string;
}

// ==========================================
// VARIANT STYLES
// ==========================================

/**
 * Get variant class names
 *
 * PURPOSE: Return the appropriate classes for each card variant
 *
 * @param variant - Card variant
 */
const getVariantStyles = (variant: CardVariant): string => {
  switch (variant) {
    /**
     * Default
     * USE: Standard cards, content containers
     * STYLE: Card background with border and soft shadow
     */
    case "default":
      return cn("bg-card border border-border text-foreground", "shadow-sm");

    /**
     * Elevated
     * USE: Featured cards, emphasis
     * STYLE: Card background with larger shadow
     */
    case "elevated":
      return cn("bg-card border border-border text-foreground", "shadow-md");

    /**
     * Outlined
     * USE: Subtle grouping, visual sections
     * STYLE: Border only, no shadow
     */
    case "outlined":
      return cn("bg-card border-2 border-border text-foreground");

    /**
     * Flat
     * USE: Background sections, subtle cards
     * STYLE: No border or shadow
     */
    case "flat":
      return cn("bg-muted text-foreground");

    default:
      return "";
  }
};

// ==========================================
// PADDING STYLES
// ==========================================

/**
 * Get padding class names
 *
 * PURPOSE: Return padding for each padding option
 */
const getPaddingStyles = (padding: CardPadding): string => {
  switch (padding) {
    case "none":
      return "p-0";
    case "sm":
      return "p-3";
    case "md":
      return "p-4";
    case "lg":
      return "p-6";
    default:
      return "p-4";
  }
};

// ==========================================
// COMPONENT
// ==========================================

/**
 * Card Component
 *
 * @param variant - Visual style variant (default: "default")
 * @param padding - Internal padding (default: "md")
 * @param className - Additional classes
 * @param onClick - Click handler (adds interactive styles)
 * @param children - Card content
 * @param id - Element ID
 */
export default function Card({
  variant = "default",
  padding = "md",
  className = "",
  onClick,
  children,
  id,
}: CardProps) {
  const variantStyles = getVariantStyles(variant);
  const paddingStyles = getPaddingStyles(padding);

  // Interactive styles for clickable cards
  const interactiveStyles = onClick
    ? "cursor-pointer hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
    : "";

  return (
    <div
      id={id}
      className={cn(
        "rounded-lg",
        "transition-all duration-200",
        variantStyles,
        paddingStyles,
        interactiveStyles,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// ==========================================
// EXPORTS
// ==========================================

export type { CardProps };
