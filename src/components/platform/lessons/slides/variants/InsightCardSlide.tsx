/**
 * Insight Card Slide Component
 *
 * PURPOSE: Display key insights/learnings in clean, editorial cards
 *
 * DESIGN PHILOSOPHY:
 * - Content-first, no chrome (no borders, badges, or click-to-reveal)
 * - Always visible (no expand/collapse)
 * - Clean card style with subtle shadows
 * - Editorial aesthetic matching the app's design standards
 *
 * USAGE:
 * - Key takeaways from a section
 * - Important principles to remember
 * - Actionable insights
 * - Summary points
 *
 * ANIMATION:
 * - Cards animate in sequentially
 * - Subtle hover effect for interactivity
 * - Smooth transitions using framer-motion
 *
 * RESPONSIVE:
 * - Grid: 1 column on mobile, 2 on tablet, 3 on desktop
 * - Cards adjust width based on viewport
 *
 * DEPENDENCIES:
 * - framer-motion: Staggered animations and hover effects
 * - @/types/content: LessonSlide type definition
 *
 * @see StatementSlide - Similar minimal aesthetic
 * @see ArticleSlide - Editorial content pattern
 * @created 2026-02-03
 */

import { motion } from "framer-motion";
import React from "react";
import type { LessonSlide } from "@/types/content";

interface InsightCardSlideProps {
  slide: LessonSlide;
}

/**
 * Insight Card Slide Component
 *
 * Displays key insights/learnings as clean, editorial cards without expand/collapse.
 * Designed for content-focused lessons.
 *
 * @param {InsightCardSlideProps} props - The slide props containing insights data
 * @returns {JSX.Element} Rendered insight cards with animations
 */
export default function InsightCardSlide({ slide }: InsightCardSlideProps) {
  const { content } = slide;
  const { title, introduction, insights, conclusion } = content;

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Stagger animation
        duration: 0.5,
        ease: "easeOut" as const,
      },
    }),
  };

  // Hover effect for cards
  const hoverVariants = {
    rest: { y: 0 },
    hover: {
      y: -4,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <div className="h-full w-full flex flex-col bg-background overflow-y-auto">
      {/* Main Content Container */}
      <div className="flex-1 px-6 py-8 md:px-12">
        <div className="max-w-2xl mx-auto h-full flex flex-col">
          {/* Title */}
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center"
            >
              {title}
            </motion.h2>
          )}

          {/* Introduction */}
          {introduction && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-lg text-foreground/80 mb-8 text-center max-w-2xl mx-auto leading-relaxed"
            >
              {introduction}
            </motion.p>
          )}

          {/* Insights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
            {insights?.map((insight, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                whileHover="hover"
                className={`
                  relative p-6 rounded-2xl
                  ${
                    insight.highlight
                      ? "bg-primary/5 border-2 border-primary/20 shadow-lg"
                      : "bg-muted/30 border border-border/50 shadow-sm"
                  }
                  hover:shadow-md
                  transition-all duration-300
                `}
              >
                {/* Icon */}
                {insight.icon && <div className="text-3xl mb-4">{insight.icon}</div>}

                {/* Card Title */}
                {insight.title && (
                  <h3 className="text-lg font-semibold text-foreground mb-3 leading-tight">
                    {insight.title}
                  </h3>
                )}

                {/* Card Body */}
                <p className="text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                  {insight.body}
                </p>

                {/* Highlight indicator */}
                {insight.highlight && (
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Conclusion */}
          {conclusion && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="text-base text-foreground/70 text-center max-w-3xl mx-auto italic"
            >
              {conclusion}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
