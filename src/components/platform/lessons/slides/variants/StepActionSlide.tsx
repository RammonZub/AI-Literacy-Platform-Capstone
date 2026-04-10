/**
 * Step Action Slide Component
 *
 * PURPOSE: Displays sequential steps with visual indicators for action-oriented content
 *
 * CONTEXT: Designed for teaching practical workflows and procedures. This variant
 * is ideal for "how-to" content where learners need to follow a specific sequence.
 *
 * KEY RESPONSIBILITIES:
 * - Display numbered steps with circular visual indicators
 * - Show step labels and detailed descriptions
 * - Provide optional action text for each step
 * - Support icons for visual context
 * - Animate steps sequentially for better engagement
 *
 * IMPLEMENTATION NOTES:
 * - Clean minimal design with plenty of whitespace
 * - Circular numbered indicators with primary accent color
 * - Staggered fade-in animations for each step
 * - Vertical layout optimized for mobile reading
 * - Supports 3-7 steps (optimal for cognitive load)
 * - Connects steps with visual line for continuity
 *
 * DESIGN INSPIRATION:
 * - iOS setup screens (clean, numbered steps)
 * - Notion's checklist UI (minimal, functional)
 * - Recipe cards (clear sequential flow)
 *
 * WHEN TO USE THIS VARIANT:
 * - Teaching multi-step processes
 * - Showing workflows with clear sequence
 * - "How to" instructions
 * - Setup/configuration guides
 * - Template application steps
 *
 * DEPENDENCIES:
 * - framer-motion: Staggered animations
 * - lucide-react: Optional icons per step
 * - @/types/content: Slide type definitions
 *
 * @see ProcessFlowSlide - Similar component for journey-style flows
 * @created 2026-02-03
 */

import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";
import React from "react";
import type { LessonSlide } from "@/types/content";

interface StepActionSlideProps {
  slide: LessonSlide;
  className?: string;
  progress?: number;
  currentSlide?: number;
  totalSlides?: number;
}

// ==========================================
// ANIMATION VARIANTS
// ==========================================

// Container variants for sequential step animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

// Individual step animation variants
const stepVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Checkmark animation for completion state
const checkmarkVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    },
  },
};

export default function StepActionSlide({ slide, className = "" }: StepActionSlideProps) {
  const { content } = slide;
  const { title, subtitle, steps = [] } = content;

  return (
    <div className={`flex flex-col h-full bg-background ${className}`}>
      {/* ==========================================
          SCROLLABLE CONTENT AREA
          ========================================== */}
      <div className="flex-1 overflow-y-auto px-6 pt-12 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto w-full"
        >
          {/* ==========================================
              TITLE SECTION
              ========================================== */}
          {title && (
            <div className="mb-3">
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground leading-tight">
                {title}
              </h2>
            </div>
          )}

          {/* ==========================================
              SUBTITLE / INTRODUCTION
              ========================================== */}
          {subtitle && (
            <p className="text-base md:text-lg text-muted-foreground mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* ==========================================
              STEPS CONTAINER
              ========================================== */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative"
          >
            {/* Vertical connecting line */}
            {steps.length > 1 && (
              <div
                className="absolute left-[19px] top-12 bottom-12 w-0.5 bg-border"
                aria-hidden="true"
              />
            )}

            {/* ==========================================
                INDIVIDUAL STEPS
                ========================================== */}
            {steps.map((step, index) => (
              <motion.div
                key={step.number || index}
                variants={stepVariants}
                className="relative flex gap-5 mb-8 last:mb-0"
              >
                {/* ==========================================
                    STEP INDICATOR (CIRCLE)
                    ========================================== */}
                <div
                  className="relative shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold z-10 bg-primary"
                  style={{ boxShadow: "0 2px 8px rgba(37, 99, 235, 0.3)" }}
                >
                  {/* Step number or checkmark */}
                  {"completed" in step && (step as { completed?: boolean }).completed ? (
                    <motion.div variants={checkmarkVariants} initial="hidden" animate="visible">
                      <Check size={20} strokeWidth={3} />
                    </motion.div>
                  ) : (
                    <span>{step.number || index + 1}</span>
                  )}
                </div>

                {/* ==========================================
                    STEP CONTENT
                    ========================================== */}
                <div className="flex-1 pt-1">
                  {/* Step label (heading) */}
                  {step.label && (
                    <h3 className="text-lg font-semibold text-foreground mb-2">{step.label}</h3>
                  )}

                  {/* Step detail (description) */}
                  {step.detail && (
                    <p className="text-base text-foreground/90 leading-relaxed whitespace-pre-line">
                      {step.detail}
                    </p>
                  )}

                  {/* Optional icon for visual context */}
                  {step.icon && (
                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{step.icon}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
