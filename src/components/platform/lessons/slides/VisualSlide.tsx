/**
 * Visual Slide Component
 *
 * PURPOSE: Handles cover pages, quotes, completion, and transition slides
 *
 * CONTEXT: Visual-first slides with modern monochrome theme.
 * Uses black gradient for primary accents.
 * Fixed to avoid progress bar overlap with pt-16 padding.
 *
 * KEY RESPONSIBILITIES:
 * - Display cover pages with lesson title and metadata
 * - Show quotes with attribution
 * - Display completion screen with XP
 * - Show transition slides between sections
 * - Use theme colors consistently
 * - Avoid overlap with progress bar
 *
 * IMPLEMENTATION NOTES:
 * - White background (bg-background)
 * - Progress bar with black gradient (modern monochrome)
 * - Card backgrounds use theme card color
 * - Black gradient for cover/title cards
 * - Serif font for titles
 * - pt-16 on content area to avoid progress bar overlap
 * - ENHANCED: Now uses design tokens for gradients and shadows
 */

import React from "react";
import { colors, gradients, shadows } from "@/data/design/tokens";
import type { LessonSlide } from "@/types/content";

interface VisualSlideProps {
  slide: LessonSlide;
  className?: string;
  progress?: number;
  currentSlide?: number;
  totalSlides?: number;
}

export default function VisualSlide({
  slide,
  className = "",
  currentSlide = 1,
  totalSlides = 1,
}: VisualSlideProps) {
  const { content, variant = "cover" } = slide;

  return (
    <div className={`flex flex-col h-full bg-background ${className}`}>
      {/* ==========================================
          MAIN CONTENT AREA
          ========================================== */}
      <div className="flex-1 flex items-center justify-center px-6 pt-8 pb-8 overflow-y-auto">
        {/* ==========================================
            COVER VARIANT - Clean card design with gradient
            ========================================== */}
        {variant === "cover" && (
          <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
            <div
              className="w-full rounded-2xl p-8 border"
              style={{
                background: gradients.blackPrimary,
                boxShadow: shadows.xl,
                borderColor: "rgba(255, 255, 255, 0.2)",
              }}
            >
              <h1 className="text-3xl md:text-4xl font-bold font-serif text-white leading-tight mb-4">
                {content.title}
              </h1>
              {content.subtitle && (
                <p className="text-white/90 text-base leading-relaxed mb-6">{content.subtitle}</p>
              )}

              {/* Metadata */}
              {content.metadata && (
                <div className="flex items-center gap-6 pt-6 border-t border-white/20">
                  {content.metadata.readTime && (
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white/80"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-white/90">
                        {content.metadata.readTime}
                      </span>
                    </div>
                  )}
                  {content.metadata.keyPoints && (
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-white/80"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                      </svg>
                      <span className="text-sm font-medium text-white/90">
                        {content.metadata.keyPoints} ideas
                      </span>
                    </div>
                  )}
                </div>
              )}
            </div>

            {content.body && (
              <p className="text-sm text-white/80 text-center max-w-sm mx-auto mt-6 leading-relaxed">
                {content.body}
              </p>
            )}
          </div>
        )}

        {/* ==========================================
            QUOTE VARIANT - Inspirational quotes
            ========================================== */}
        {variant === "quote" && (
          <div className="flex flex-col items-center justify-center max-w-lg mx-auto">
            <svg className="w-12 h-12 text-primary/20 mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            {content.quote && (
              <p className="text-2xl font-semibold font-serif text-foreground text-center leading-relaxed mb-6">
                {content.quote}
              </p>
            )}

            {content.author && (
              <p className="text-base font-medium text-muted-foreground text-center">
                {content.author}
              </p>
            )}
          </div>
        )}

        {/* ==========================================
            COMPLETE VARIANT - Lesson completion
            ========================================== */}
        {variant === "complete" && (
          <div className="flex flex-col items-center justify-center">
            {/* Animated checkmark circle - Success color */}
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: "rgba(95, 168, 130, 0.2)" }}
            >
              <svg
                className="w-12 h-12 animate-[scaleIn_0.5s_ease-out]"
                fill="currentColor"
                viewBox="0 0 20 20"
                style={{ color: "#5FA882" }}
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold font-serif text-foreground mb-2">Lesson Complete!</h2>

            {content.xp && (
              <div className="text-center">
                <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">
                  Total Lesson XP
                </p>
                <p className="text-4xl font-bold" style={{ color: "#B86B6E" }}>
                  {content.xp}
                </p>
              </div>
            )}
          </div>
        )}

        {/* ==========================================
            TRANSITION VARIANT - Section transitions with badge
            ========================================== */}
        {variant === "transition" && (
          <div className="flex flex-col items-center justify-center max-w-lg mx-auto px-6">
            {/* Badge */}
            {content.lessonSummary && (
              <div
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
                style={{
                  backgroundColor: "rgba(30, 74, 109, 0.15)",
                  color: colors.secondary,
                  border: `1px solid ${colors.secondary}30`,
                }}
              >
                {content.lessonSummary}
              </div>
            )}

            {content.title && (
              <h2 className="text-2xl md:text-3xl font-bold font-serif text-foreground mb-3 text-center">
                {content.title}
              </h2>
            )}
            {content.subtitle && (
              <p className="text-base text-muted-foreground mb-4 text-center">{content.subtitle}</p>
            )}
            {content.body && (
              <p className="text-base text-foreground mb-6 text-center leading-relaxed">
                {content.body}
              </p>
            )}
            {content.nextLesson && (
              <p className="font-medium text-center" style={{ color: colors.secondary }}>
                {content.nextLesson} →
              </p>
            )}
            {content.metadata?.readTime && (
              <p className="text-sm text-muted-foreground mt-4">⏱ {content.metadata.readTime}</p>
            )}
          </div>
        )}

        {/* ==========================================
            INTERACTIVE VARIANT - User input
            ========================================== */}
        {variant === "interactive" && (
          <div className="flex flex-col justify-center max-w-lg mx-auto px-6">
            {content.title && (
              <h2 className="text-2xl font-bold font-serif text-foreground mb-4">
                {content.title}
              </h2>
            )}
            {content.body && (
              <p className="text-base text-foreground mb-6 leading-relaxed">{content.body}</p>
            )}
            {content.inputPlaceholder && (
              <div className="mb-4">
                <textarea
                  className="w-full p-4 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-card"
                  rows={4}
                  placeholder={content.inputPlaceholder}
                />
                {content.inputHint && (
                  <p className="text-xs text-muted-foreground mt-2 italic">{content.inputHint}</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* ==========================================
            DEFAULT VISUAL
            ========================================== */}
        {!["cover", "quote", "complete", "transition", "interactive"].includes(variant) && (
          <div className="flex flex-col items-center justify-center">
            {content.title && (
              <h2 className="text-3xl font-bold font-serif text-foreground mb-4 text-center">
                {content.title}
              </h2>
            )}
            {content.body && (
              <p className="text-lg text-muted-foreground text-center">{content.body}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
