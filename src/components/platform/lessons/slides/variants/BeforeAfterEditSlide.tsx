/**
 * Before-After-Edit Slide Component
 *
 * PURPOSE: Show AI draft → Human edits → Final result comparison
 *
 * CONTEXT: Used in content creation lessons to demonstrate human-AI collaboration workflow.
 * This component displays the evolution of content from AI draft to final polished result.
 *
 * KEY RESPONSIBILITIES:
 * - Display three panels: AI Draft → Human Edits → Final Result
 * - Show visual diff style (like GitHub PR review)
 * - Display arrow flow between panels
 * - Highlight changed sections
 * - Provide clean, professional look
 *
 * IMPLEMENTATION NOTES:
 * - Uses three-column layout with arrows between panels
 * - Before section shows AI-generated draft
 * - Edits section lists human-made changes
 * - After section shows final human-AI collaboration
 * - Responsive design collapses to stack on mobile
 * - Uses accent colors to highlight improvements
 *
 * DEPENDENCIES:
 * - framer-motion: Smooth entrance animations for panels
 * - lucide-react: Arrow icons for flow indication
 *
 * @author AI-Literacy Team
 * @created 2026-02-03
 */

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Edit2 } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

/**
 * Extended content interface for before-after-edit slides
 * Extends base LessonSlide content with before-after-edit specific fields
 */
interface BeforeAfterEditContent {
  title?: string;
  before: {
    label: string;
    content: string; // AI-generated draft
  };
  edits: {
    label: string;
    items: string[]; // List of human edits
  };
  after: {
    label: string;
    content: string; // Final human-AI collaboration
  };
}

interface BeforeAfterEditSlideProps {
  slide: LessonSlide;
}

export default function BeforeAfterEditSlide({ slide }: BeforeAfterEditSlideProps) {
  const { content } = slide;

  // Type guard to ensure content has before-after-edit structure
  if (!content || !("before" in content) || !("edits" in content) || !("after" in content)) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-background p-8">
        <p className="text-muted-foreground">Invalid slide content structure</p>
      </div>
    );
  }

  const editContent = content as unknown as BeforeAfterEditContent;
  const { title, before, edits, after } = editContent;

  return (
    <div className="h-full w-full flex flex-col bg-background p-6 overflow-hidden">
      {/* Title */}
      {title && (
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center"
        >
          {title}
        </motion.h2>
      )}

      {/* Three Panel Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 h-full overflow-y-auto">
        {/* Panel 1: AI Draft (Before) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-muted/30 rounded-2xl p-5 border border-border flex flex-col h-full relative"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center">
              <span className="text-xs font-bold text-muted-foreground">1</span>
            </div>
            <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-wide">
              {before.label}
            </h3>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line font-mono">
              {before.content}
            </p>
          </div>

          {/* AI Indicator */}
          <div className="mt-3 pt-3 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400">AI</span>
              </div>
              <span>AI-generated draft</span>
            </div>
          </div>
        </motion.div>

        {/* Arrow 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="w-6 h-6 text-primary" />
        </motion.div>

        {/* Panel 2: Human Edits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-primary/5 rounded-2xl p-5 border-2 border-primary/20 flex flex-col h-full relative"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <Edit2 className="w-3.5 h-3.5 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-sm text-primary uppercase tracking-wide">
              {edits.label}
            </h3>
          </div>

          {/* Edit List */}
          <div className="flex-1 overflow-y-auto">
            <ul className="space-y-3">
              {edits.items.map((edit, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-start gap-2 text-sm"
                >
                  <Check className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                  <span className="text-foreground/90 leading-relaxed">{edit}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Human Indicator */}
          <div className="mt-3 pt-3 border-t border-primary/20">
            <div className="flex items-center gap-2 text-xs text-primary">
              <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xs">You</span>
              </div>
              <span>Your edits and improvements</span>
            </div>
          </div>
        </motion.div>

        {/* Arrow 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="hidden lg:flex items-center justify-center"
        >
          <ArrowRight className="w-6 h-6 text-primary" />
        </motion.div>

        {/* Panel 3: Final Result (After) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-5 border-2 border-primary flex flex-col h-full relative shadow-lg"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">3</span>
            </div>
            <h3 className="font-bold text-sm text-primary uppercase tracking-wide">
              {after.label}
            </h3>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">
              {after.content}
            </p>
          </div>

          {/* Collaboration Indicator */}
          <div className="mt-3 pt-3 border-t border-primary/30">
            <div className="flex items-center gap-2 text-xs text-primary font-medium">
              <Check className="w-4 h-4" />
              <span>Final: Human + AI collaboration</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Arrow Indicators */}
      <div className="flex lg:hidden items-center justify-center gap-4 mt-4">
        <ArrowRight className="w-5 h-5 text-muted-foreground" />
        <ArrowRight className="w-5 h-5 text-primary" />
      </div>
    </div>
  );
}
