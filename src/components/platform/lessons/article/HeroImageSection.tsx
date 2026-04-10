/**
 * HeroImageSection
 *
 * PURPOSE: Hero image at the START of a lesson
 *
 * CONTEXT: Every lesson should open with a hero image that sets the visual tone
 * and gives a preview of the lesson topic. This is the first thing users see.
 *
 * KEY RESPONSIBILITIES:
 * - Display full-width hero image at lesson start
 * - Show lesson title overlay (optional)
 * - Include subtle gradient for text readability
 * - Handle missing images gracefully
 *
 * IMPLEMENTATION NOTES:
 * - Full-width image with max-height constraint
 * - Dark gradient overlay from bottom for optional title
 * - Next.js Image optimization enabled
 * - Mobile-responsive sizing
 *
 * DEPENDENCIES:
 * - next/image: For optimized image rendering
 *
 * @see LessonSection.tsx - Router that calls this component
 */

import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";

export interface HeroImageSectionContent {
  /**
   * Path to the hero image
   */
  imageSrc: string;

  /**
   * Alt text for accessibility
   */
  imageAlt: string;

  /**
   * Optional title overlay on the image
   */
  title?: string;

  /**
   * Optional subtitle/description overlay
   */
  subtitle?: string;
}

interface HeroImageSectionProps {
  content: HeroImageSectionContent;
  className?: string;
}

/**
 * HeroImageSection component
 *
 * @example
 * const content = {
 *   imageSrc: '/images/courses/lessons/day-1-hero.webp',
 *   imageAlt: 'ChatGPT fundamentals',
 *   title: 'Day 1: ChatGPT Fundamentals',
 *   subtitle: 'Master the world\'s most popular AI assistant'
 * }
 * <HeroImageSection content={content} />
 */
export function HeroImageSection({ content, className }: HeroImageSectionProps) {
  const { imageSrc, imageAlt, title, subtitle } = content;
  const [imageError, setImageError] = useState(false);

  return (
    <section className={clsx("relative w-full py-2", className)}>
      {/* Image container with rounded corners and clean look */}
      <div className="relative w-full aspect-[21/9] min-h-[200px] overflow-hidden rounded-2xl shadow-sm">
        {!imageError ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback gradient when image fails
          <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600" />
        )}

        {/* Gradient overlay for text readability - subtle, not too dark */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

        {/* Text overlay */}
        {(title || subtitle) && (
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            {title && (
              <h1 className="text-2xl sm:text-3xl font-bold leading-tight drop-shadow-lg">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="mt-2 text-sm sm:text-base text-white/90 drop-shadow-md">{subtitle}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
