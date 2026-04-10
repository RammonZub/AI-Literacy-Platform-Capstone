/**
 * WorkflowSlide Component
 *
 * PURPOSE: Visual workflow diagram with numbered steps, arrows, and clean lines
 *
 * CONTEXT: Designed for lessons that show process flows and step-by-step
 * workflows. Differs from ProcessFlowSlide by emphasizing the visual diagram
 * aspect with arrows connecting workflow steps.
 *
 * KEY RESPONSIBILITIES:
 * - Render workflow steps in horizontal or vertical layout
 * - Draw clean arrows between steps to show flow direction
 * - Support interactive reveal on tap/click for step details
 * - Display numbered nodes with icons and labels
 * - Clean, modern design matching the app's aesthetic
 *
 * IMPLEMENTATION NOTES:
 * - Uses Framer Motion for smooth animations
 * - Horizontal layout for 3-4 steps (most common)
 * - Vertical layout for 5+ steps (better mobile experience)
 * - Arrow SVGs adjust based on direction
 * - Tap interaction reveals step details
 * - Active step is highlighted with primary color
 *
 * DEPENDENCIES:
 * - framer-motion: Animations and transitions (smooth reveal, hover effects)
 * - @/lib/utils/cn: className utility for conditional styling
 * - @/types/content: LessonSlide type definition
 *
 * @see ProcessFlowSlide - Similar component for different use case (journey-style)
 * @see StepActionSlide - For detailed step-by-step instructions
 * @created 2026-02-03
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface WorkflowSlideProps {
  slide: LessonSlide;
}

/**
 * WorkflowSlide Component
 *
 * Renders a visual workflow diagram with numbered steps connected by arrows.
 * Steps can be tapped to reveal additional details.
 *
 * @param {LessonSlide} slide - The slide containing workflow data
 * @returns {JSX.Element | null} The rendered workflow slide or null if no steps
 */
export default function WorkflowSlide({ slide }: WorkflowSlideProps) {
  const { content } = slide;
  const { title, steps, direction = "horizontal" } = content;

  const [activeStep, setActiveStep] = useState<number | null>(null);

  // Filter out any undefined/null steps
  const safeSteps = useMemo(() => (steps ?? []).filter(Boolean), [steps]);

  // Determine layout direction based on step count and explicit direction
  const layoutDirection = useMemo(() => {
    if (direction === "vertical") return "vertical";
    // Auto-switch to vertical for 5+ steps on mobile
    if (safeSteps.length >= 5) return "vertical";
    return "horizontal";
  }, [direction, safeSteps.length]);

  /**
   * Toggle step detail visibility
   * @param {number} index - The step index to toggle
   */
  const toggleStep = useCallback((index: number) => {
    setActiveStep((prev) => (prev === index ? null : index));
  }, []);

  const isHorizontal = layoutDirection === "horizontal";

  if (safeSteps.length === 0) {
    return null;
  }

  return (
    <div className="h-full w-full flex flex-col bg-background p-4 sm:p-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="text-center mb-4 sm:mb-6"
      >
        <h2 className="text-xl sm:text-2xl font-serif font-bold text-foreground mb-1 sm:mb-2">
          {title}
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">Tap a step to reveal details.</p>
      </motion.div>

      {/* Workflow Container */}
      <div className="flex-1 flex items-center justify-center">
        <div
          className={cn(
            "relative flex gap-2 sm:gap-4",
            isHorizontal ? "flex-row items-center" : "flex-col items-center",
          )}
        >
          {safeSteps.map((step, idx) => {
            const isActive = activeStep === idx;
            const isLastStep = idx === safeSteps.length - 1;

            return (
              <React.Fragment key={`${step.label}-${idx}`}>
                {/* Step Node */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: idx * 0.1,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="relative flex flex-col items-center"
                >
                  {/* Numbered Circle */}
                  <button
                    type="button"
                    onClick={() => toggleStep(idx)}
                    className={cn(
                      "relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-4 border-background shadow-md transition-all duration-200",
                      "font-bold font-mono text-base sm:text-lg",
                      isActive
                        ? "bg-primary text-primary-foreground scale-110 shadow-lg"
                        : "bg-card text-foreground hover:bg-muted hover:scale-105",
                    )}
                    aria-label={`Step ${step.number || idx + 1}: ${step.label}`}
                  >
                    {step.icon || step.number || idx + 1}
                  </button>

                  {/* Step Label */}
                  <div
                    className={cn(
                      "mt-2 sm:mt-3 text-center max-w-[80px] sm:max-w-[100px]",
                      isActive ? "opacity-100" : "opacity-70",
                    )}
                  >
                    <p className="text-xs sm:text-sm font-semibold text-foreground line-clamp-2">
                      {step.label}
                    </p>
                  </div>

                  {/* Detail Card (Revealed on Tap) */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: isHorizontal ? 10 : 0 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{
                          opacity: 0,
                          height: 0,
                          y: isHorizontal ? 10 : 0,
                          transition: { duration: 0.2 },
                        }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className={cn(
                          "absolute top-full z-20 mt-2 sm:mt-3 w-[180px] sm:w-[200px]",
                          "bg-card border border-primary/30 rounded-lg shadow-lg",
                          "p-3 sm:p-4 text-left",
                        )}
                      >
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {step.detail}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Arrow Connector (not after last step) */}
                {!isLastStep && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: idx * 0.1 + 0.15,
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className={cn(
                      "flex items-center justify-center text-primary/40",
                      isHorizontal ? "w-6 sm:w-8" : "h-6 sm:h-8",
                    )}
                    aria-hidden="true"
                  >
                    {isHorizontal ? (
                      // Right arrow for horizontal
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
                      // Down arrow for vertical
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
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Optional subtitle/caption */}
      {content.caption && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-center text-xs sm:text-sm text-muted-foreground mt-4 sm:mt-6 px-4"
        >
          {content.caption}
        </motion.p>
      )}
    </div>
  );
}
