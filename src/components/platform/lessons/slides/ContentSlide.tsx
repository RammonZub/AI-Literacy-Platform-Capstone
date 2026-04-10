/**
 * Content Slide Component
 *
 * PURPOSE: Handles text, lists, and key points with scrollable article-style layout
 *
 * CONTEXT: Text-first slide design for educational content.
 * Uses modern monochrome theme with black gradient accents.
 * Now supports scrollable content for longer slides and image headers.
 *
 * KEY RESPONSIBILITIES:
 * - Display text-heavy content with readable typography
 * - Show list items with staggered fade-in animations
 * - Support image headers for visual interest
 * - Scrollable content area for longer content
 * - Progress indicator at top (no overlap)
 *
 * IMPLEMENTATION NOTES:
 * - White background (bg-background)
 * - Progress bar with black gradient (modern monochrome)
 * - Serif font for titles, clean sans-serif for body
 * - Scrollable content area with max-height
 * - Staggered animations for list items using Framer Motion
 * - pt-16 to avoid overlap with progress bar and slide counter
 */

import { motion, type Variants } from "framer-motion";
import React from "react";
import { colors, gradients, shadows } from "@/data/design/tokens";
import type { LessonSlide } from "@/types/content";

interface ContentSlideProps {
  slide: LessonSlide;
  className?: string;
  progress?: number;
  currentSlide?: number;
  totalSlides?: number;
}

// Staggered animation variants for list items
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

export default function ContentSlide({
  slide,
  className = "",
  currentSlide = 1,
  totalSlides = 1,
}: ContentSlideProps) {
  const { content, variant = "text" } = slide;

  return (
    <div className={`flex flex-col h-full bg-background ${className}`}>
      {/* ==========================================
          SCROLLABLE CONTENT AREA
          ========================================== */}
      <div className="flex-1 overflow-y-auto px-6 pt-10 pb-8">
        {/* ==========================================
            IMAGE HEADER - When available
            ========================================== */}
        {content.imageUrl && (
          <div className="mb-8 -mx-6 relative">
            <img
              src={content.imageUrl}
              alt={content.title || "Slide header"}
              className="w-full h-48 object-cover rounded-xl"
              style={{ boxShadow: shadows.md }}
            />
            <div className="absolute inset-0 rounded-xl bg-linear-to-t from-background via-transparent to-transparent" />
          </div>
        )}

        {/* ==========================================
            LIST VARIANT - Key points with staggered animations
            ========================================== */}
        {variant === "list" && (
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-lg mx-auto w-full"
          >
            {content.title && (
              <h2 className="text-3xl font-bold font-serif text-foreground mb-8 leading-tight">
                {content.title}
              </h2>
            )}

            {content.bullets && content.bullets.length > 0 && (
              <div className="space-y-4">
                {content.bullets.map((bullet, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border transition-all hover:shadow-md"
                    style={{ boxShadow: shadows.sm }}
                  >
                    {/* Numbered bullet - Primary accent with shadow */}
                    <div
                      className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-base font-bold"
                      style={{
                        backgroundColor: colors.primary,
                        boxShadow: "0 2px 4px rgba(184, 107, 110, 0.3)",
                      }}
                    >
                      {index + 1}
                    </div>
                    <p className="text-base md:text-lg text-foreground leading-relaxed flex-1">
                      {bullet}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {content.author && (
              <p className="text-sm text-muted-foreground mt-8 italic">{content.author}</p>
            )}
          </motion.div>
        )}

        {/* ==========================================
            ARTICLE VARIANT - Multi-paragraph content with headings
            ========================================== */}
        {variant === "article" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto w-full"
          >
            {/* Title with gradient background if no image */}
            {content.title && !content.imageUrl && (
              <div
                className="mb-8 p-8 rounded-2xl text-white"
                style={{
                  background: gradients.blackPrimary,
                  boxShadow: shadows.lg,
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
                  {content.title}
                </h2>
              </div>
            )}

            {/* Title with regular styling if image exists */}
            {content.title && content.imageUrl && (
              <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-8 leading-tight">
                {content.title}
              </h2>
            )}

            {/* Render paragraphs with type */}
            {content.paragraphs &&
              content.paragraphs.map((para, index) => (
                <div key={index} className="mb-6">
                  {para.type === "heading" ? (
                    <h3 className="text-2xl font-bold font-serif text-foreground mb-4 mt-8 first:mt-0">
                      {para.content}
                    </h3>
                  ) : (
                    <p className="text-base md:text-lg text-foreground leading-relaxed">
                      {para.content}
                    </p>
                  )}
                </div>
              ))}
          </motion.div>
        )}

        {/* ==========================================
            TEXT VARIANT - Enhanced with gradient header
            ========================================== */}
        {variant === "text" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto w-full"
          >
            {/* Title with gradient background if no image */}
            {content.title && !content.imageUrl && (
              <div
                className="mb-8 p-8 rounded-2xl text-white"
                style={{
                  background: gradients.blackPrimary,
                  boxShadow: shadows.lg,
                }}
              >
                <h2 className="text-3xl md:text-4xl font-bold font-serif leading-tight">
                  {content.title}
                </h2>
                {content.subtitle && (
                  <p className="text-white/90 text-lg mt-4">{content.subtitle}</p>
                )}
              </div>
            )}

            {/* Regular title if no gradient */}
            {content.title && content.imageUrl && (
              <>
                <h2 className="text-3xl md:text-4xl font-bold font-serif text-foreground mb-4 leading-tight">
                  {content.title}
                </h2>
                {content.subtitle && (
                  <p className="text-lg text-muted-foreground mb-8">{content.subtitle}</p>
                )}
              </>
            )}

            {/* Body content as paragraphs */}
            {content.body && (
              <div className="prose prose-lg max-w-none">
                {content.body.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base md:text-lg text-foreground leading-relaxed mb-6 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
