/**
 * Progress Bar Component
 *
 * PURPOSE: Progress indicator with iOS Blue primary color and semantic variants
 *
 * CONTEXT: Part of design system using iOS Blue (#007AFF) as primary brand color.
 * Uses CSS variables for dynamic theming.
 *
 * KEY RESPONSIBILITIES:
 * - Display progress (0-100%) with smooth animations
 * - Support multiple color variants (blue primary, green success, etc.)
 * - Optional percentage label
 * - Responsive sizes (sm, md, lg)
 *
 * DESIGN RATIONALE:
 * - Uses rounded-full for progress bars
 * - Smooth transition (300ms) for natural feel
 * - Background uses muted color (gray)
 * - Fill uses iOS Blue (#007AFF) as primary, semantic colors for states
 *
 * @see globals.css for CSS variable definitions
 * @see data/design/tokens.ts for modern monochrome color values
 */

import React from "react";
import { colors } from "@/data/design/tokens";

// ==========================================
// TYPES
// ==========================================

interface ProgressBarProps {
  value: number; // 0-100
  max?: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  color?: "primary" | "green" | "purple" | "black";
  className?: string;
}

// ==========================================
// SIZE STYLES
// ==========================================

/**
 * Get size styles
 *
 * PURPOSE: Return height for each progress bar size
 */
const getSizeStyles = (size: "sm" | "md" | "lg"): string => {
  switch (size) {
    case "sm":
      return "h-1";
    case "md":
      return "h-2";
    case "lg":
      return "h-3";
    default:
      return "h-2";
  }
};

// ==========================================
// COLOR STYLES
// ==========================================

/**
 * Get color styles
 *
 * PURPOSE: Return modern monochrome color for each variant
 * DESIGN: Uses black/gray scale + green for completion
 *
 * @param color - Color variant
 * @returns { backgroundColor: string }
 */
const getColorStyles = (color: string): { backgroundColor: string } => {
  switch (color) {
    /**
     * Primary - Black gradient (modern monochrome)
     * USE: Default progress, primary actions
     */
    case "primary":
      return { backgroundColor: colors.primary };

    /**
     * Green - Sage Green
     * USE: Success states, completion
     */
    case "green":
      return { backgroundColor: colors.success };

    /**
     * Purple - Module 3 color
     * USE: Secondary progress, special states
     */
    case "purple":
      return { backgroundColor: "#9333EA" };

    /**
     * Black - Neutral
     * USE: Neutral progress, monochrome UI
     */
    case "black":
    default:
      return { backgroundColor: "#000000" };
  }
};

// ==========================================
// COMPONENT
// ==========================================

/**
 * Progress Bar Component
 *
 * @param value - Progress value (0-100)
 * @param max - Maximum value (default: 100)
 * @param showLabel - Show percentage label (default: false)
 * @param size - Bar size (default: "md")
 * @param color - Color variant (default: "primary")
 * @param className - Additional classes
 */
export default function ProgressBar({
  value,
  max = 100,
  showLabel = false,
  size = "md",
  color = "primary",
  className = "",
}: ProgressBarProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
  const sizeStyles = getSizeStyles(size);
  const colorStyles = getColorStyles(color);

  return (
    <div className={`w-full ${className}`}>
      {/* Background track */}
      <div className={`w-full bg-muted rounded-full ${sizeStyles} overflow-hidden`}>
        {/* Progress fill */}
        <div
          className={`${sizeStyles} rounded-full transition-all duration-300`}
          style={{ width: `${percentage}%`, ...colorStyles }}
        />
      </div>

      {/* Optional percentage label */}
      {showLabel && (
        <p className="text-xs text-muted-foreground mt-1 text-right">{Math.round(percentage)}%</p>
      )}
    </div>
  );
}
