/**
 * Cinema-Style Slide Component
 *
 * PURPOSE: Cinematic title slides inspired by movie posters and title sequences
 *
 * WHY THIS DESIGN:
 * - Feels premium and editorial, not like a "slide"
 * - Full-bleed imagery creates emotional impact
 * - Typography-first design uses font, size, spacing instead of decorations
 * - No chrome, borders, or UI elements - just content
 *
 * KEY RESPONSIBILITIES:
 * - Full-bleed background image with gradient overlay
 * - Large cinematic title (serif, tight tracking)
 * - Optional subtitle below title
 * - Support multiple text positions (center, bottom-center, bottom-left)
 * - Subtle parallax/scale animation
 *
 * IMPLEMENTATION NOTES:
 * - Uses font-serif for cinematic feel (like movie posters)
 * - tracking-tight for dramatic letter-spacing
 * - Gradient overlay: from-black/80 via-black/40 to-transparent
 * - Different from ImageStorySlide: larger title, no body text focus, more dramatic
 *
 * DEPENDENCIES:
 * - framer-motion: Subtle scale animation for background
 * - next/image: Full-bleed optimized images
 * - @/types/content: LessonSlide interface
 *
 * @see ImageStorySlide - Similar but for storytelling with body text
 * @created 2026-02-02
 */

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils/cn";
import type { LessonSlide } from "@/types/content";

interface CinemaSlideProps {
  slide: LessonSlide;
}

export default function CinemaSlide({ slide }: CinemaSlideProps) {
  const { content } = slide;
  const {
    title,
    subtitle,
    imageUrl,
    overlayOpacity = 0.5,
    textPositionCinema = "bottom-center",
  } = content;

  if (!imageUrl) {
    // Fallback if no image - show as text-only
    return (
      <div className="h-full w-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={cn(
            "text-center max-w-3xl",
            textPositionCinema === "bottom-left" && "text-left",
          )}
        >
          {title && (
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight tracking-tight mb-6">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{subtitle}</p>
          )}
        </motion.div>
      </div>
    );
  }

  // Calculate overlay colors based on opacity
  const overlayFrom = `from-black/${Math.round(overlayOpacity * 100)}`;
  const overlayVia = `from-black/${Math.round(overlayOpacity * 50)}`;

  return (
    <div className="h-full w-full relative overflow-hidden bg-black text-white">
      {/* =====================================================
          BACKGROUND IMAGE with subtle scale animation
          =====================================================
          WHY: Slow scale creates cinematic movement without
          being distracting. Like movie title sequences.
      ===================================================== */}
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 12, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={imageUrl}
          alt={title || "Cinematic slide background"}
          className="object-cover"
          fill
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* =====================================================
          GRADIENT OVERLAY
          =====================================================
          WHY: Ensures text is readable while preserving image
          drama. Darker at bottom for title readability.
      ===================================================== */}
      <div
        className={cn(
          "absolute inset-0 z-10",
          // Gradient is darker at bottom for text readability
          "bg-linear-to-t",
          overlayFrom,
          "via-black/40",
          "to-transparent",
        )}
      />

      {/* =====================================================
          CONTENT - Cinematic Title
          =====================================================
          WHY: Large, serif, tight tracking = movie poster feel.
          No borders, cards, or decorations - pure typography.
      ===================================================== */}
      <div
        className={cn(
          "absolute inset-0 z-20 flex flex-col p-8 md:p-12",
          // Text positioning
          textPositionCinema === "bottom-center" &&
            "justify-end items-center text-center pb-16 md:pb-24",
          textPositionCinema === "bottom-left" &&
            "justify-end items-start text-left pb-16 md:pb-24 pl-8 md:pl-16",
          textPositionCinema === "center" && "justify-center items-center text-center",
        )}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* =====================================================
              TITLE - Cinematic, Movie Poster Style
              =====================================================
              WHY: font-serif = editorial feel
              tracking-tight = dramatic, cinematic
              Large size = hero moment
          ===================================================== */}
          {title && (
            <h1
              className={cn(
                "text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight tracking-tight",
                // Text shadow for better readability over any image
                "drop-shadow-lg",
              )}
            >
              {title}
            </h1>
          )}

          {/* =====================================================
              SUBTITLE - Supporting text, more restrained
              =====================================================
              WHY: Smaller, lighter weight creates hierarchy.
              Text-gray-200 instead of white = less dominant.
          ===================================================== */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>

      {/* =====================================================
          OPTIONAL: VIGNETTE EFFECT
          =====================================================
          WHY: Darkens edges slightly, draws focus to center.
          Subtle, adds polish without being noticeable.
      ===================================================== */}
      <div
        className="absolute inset-0 z-15 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.3) 100%)",
        }}
      />
    </div>
  );
}
