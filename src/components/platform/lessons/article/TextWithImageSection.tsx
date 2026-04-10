/**
 * TextWithImageSection
 *
 * PURPOSE: Render article sections with text and an illustrative image
 *
 * CONTEXT: Used for content sections that include an image or illustration
 * to help explain the concept. Supports both inline images and hero images.
 *
 * KEY RESPONSIBILITIES:
 * - Render optional heading/title
 * - Render paragraph text (1-3 paragraphs) with Markdown parsing
 * - Render image with proper sizing and aspect ratio
 * - Support optional caption below image
 * - Handle image loading states gracefully
 *
 * IMPLEMENTATION NOTES:
 * - Image uses Next.js Image component with FULL OPTIMIZATION enabled
 * - Supports two content structures:
 *   - Flat: imageUrl, imageAlt, imageCaption?
 *   - Nested: image: { src, alt, caption? }
 * - Image is constrained to max-width with auto height
 * - Generous spacing between text and image
 * - Image has subtle rounded corners
 *
 * DEPENDENCIES:
 * - next/image: For optimized image rendering
 * - MarkdownRenderer: Parses Markdown in paragraph text
 *
 * @see LessonSection.tsx - Router component that renders this
 */

import { clsx } from "clsx";
import Image from "next/image";
import { useState } from "react";
import { MarkdownRenderer } from "./MarkdownRenderer";

/**
 * Nested image structure
 */
interface ImageObject {
  src: string;
  alt?: string;
  caption?: string;
}

export interface TextWithImageSectionContent {
  /**
   * Optional section heading/title
   */
  title?: string;

  /**
   * Array of paragraph strings (1-3 paragraphs typical)
   */
  paragraphs: string[];

  /**
   * Image URL or path in the flat structure
   */
  imageUrl?: string;

  /**
   * Alt text for accessibility in the flat structure
   */
  imageAlt?: string;

  /**
   * Optional caption below image (flat structure)
   */
  imageCaption?: string;

  /**
   * Nested image object
  */
  image?: ImageObject;

  /**
   * Search term for image generation (metadata, not rendered)
   */
  imageSearchTerm?: string;
}

interface TextWithImageSectionProps {
  /** Section content object */
  content: TextWithImageSectionContent;

  /** Optional additional CSS classes */
  className?: string;
}

/**
 * TextWithImageSection component for article-style lessons
 *
 * Renders heading, paragraphs, and an illustrative image.
 * Used for sections that benefit from visual explanation.
 *
 * @example
 * // Flat structure
 * const content = {
 *   title: "The Problem",
 *   paragraphs: ["Without context, the AI can't help..."],
 *   imageUrl: "/images/workflow-problem.png",
 *   imageAlt: "Diagram showing fragmented workflow",
 *   imageCaption: "The context gap"
 * }
 *
 * // Nested structure (new)
 * const content = {
 *   title: "ChatGPT Interface",
 *   paragraphs: ["The interface is clean..."],
 *   image: {
 *     src: '/images/courses/lessons/day-1-chatgpt.webp',
 *     alt: 'ChatGPT interface',
 *     caption: 'ChatGPT\'s clean design'
 *   }
 * }
 *
 * <TextWithImageSection content={content} />
 */
export function TextWithImageSection({ content, className }: TextWithImageSectionProps) {
  const { title, paragraphs, imageUrl, imageAlt, imageCaption, image } = content;

  // Normalize image data from either structure
  const finalImageUrl = image?.src || imageUrl || "";
  const finalImageAlt = image?.alt || imageAlt || "";
  const finalCaption = image?.caption || imageCaption;

  // Track image loading errors for graceful fallback
  const [imageError, setImageError] = useState(false);

  return (
    <section
      className={clsx(
        // Base spacing - tighter for article feel
        "space-y-3",
        // Width is controlled by the outer lesson rail.
        "w-full",
        "py-2",
        className,
      )}
    >
      {/* Optional heading */}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight tracking-tight">
          {title}
        </h2>
      )}

      {/* Paragraphs with Markdown parsing */}
      <div className="space-y-4">
        {paragraphs.map((paragraph, index) => (
          <MarkdownRenderer key={index} className="text-lg text-gray-700 leading-relaxed">
            {paragraph}
          </MarkdownRenderer>
        ))}
      </div>

      {/* Image */}
      {finalImageUrl && (
        <div className="mt-8 flex flex-col items-center">
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.02]">
            {!imageError ? (
              <Image
                src={finalImageUrl}
                alt={finalImageAlt}
                width={800}
                height={450}
                className="object-cover w-full h-auto"
                onError={() => setImageError(true)}
              />
            ) : (
              // Fallback when image fails to load
              <div
                className="w-full aspect-video bg-gray-100 flex items-center justify-center"
                role="img"
                aria-label={finalImageAlt}
              >
                <span className="text-gray-400 text-sm">Image unavailable</span>
              </div>
            )}
          </div>

          {/* Optional caption */}
          {finalCaption && (
            <p className="mt-3 text-sm text-gray-500 font-medium text-center max-w-lg mx-auto">
              {finalCaption}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
