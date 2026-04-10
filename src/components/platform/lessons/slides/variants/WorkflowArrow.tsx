/**
 * WorkflowArrow Component
 *
 * PURPOSE: Arrow connector between workflow steps to show flow direction
 *
 * CONTEXT: Used within WorkflowSteps to connect sequential steps visually.
 * Indicates the direction of the workflow (horizontal or vertical).
 *
 * KEY RESPONSIBILITIES:
 * - Render an arrow SVG pointing in the correct direction
 * - Animate appearance with scale effect
 * - Provide visual indication of flow between steps
 * - Adjust orientation based on layout direction
 *
 * IMPLEMENTATION NOTES:
 * - Horizontal: Right arrow (→)
 * - Vertical: Down arrow (↓)
 * - Uses SVG for crisp rendering at any size
 * - Muted primary color for subtle connection (not distracting)
 * - Delayed animation (appears after step nodes)
 *
 * DESIGN DECISIONS:
 * - Arrow icon: Universally understood "next" indicator
 * - Muted color: Doesn't compete with step nodes for attention
 * - Fixed size: Consistent regardless of content
 * - Simple path: Two lines creating arrow shape
 *
 * DEPENDENCIES:
 * - framer-motion: Scale animation for appearance
 * - @/lib/utils/cn: className utility
 *
 * @see WorkflowSteps - Container component that uses this
 * @see WorkflowSlide - Parent component
 * @created 2026-02-03
 */

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils/cn";

// ==========================================
// TYPES
// ==========================================

interface WorkflowArrowProps {
  /** Direction of the arrow (affects which SVG is shown) */
  direction: "horizontal" | "vertical";
  /** Animation delay index (multiplied by 0.1 + 0.15 for stagger effect) */
  delayIndex: number;
  /** Additional className for styling */
  className?: string;
}

// ==========================================
// COMPONENT
// ==========================================

export const WorkflowArrow = React.memo(function WorkflowArrow({
  direction,
  delayIndex,
  className,
}: WorkflowArrowProps) {
  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: delayIndex * 0.1 + 0.15,
        duration: 0.25,
        ease: "easeOut",
      }}
      className={cn(
        "flex items-center justify-center text-primary/40",
        isHorizontal ? "w-6 sm:w-8" : "h-6 sm:h-8",
        className,
      )}
      aria-hidden="true"
    >
      {isHorizontal ? (
        // Right arrow for horizontal layout
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ) : (
        // Down arrow for vertical layout
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      )}
    </motion.div>
  );
});
