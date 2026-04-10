/**
 * Container Component
 *
 * PURPOSE: Consistent, mobile-first width constraints across the app
 *
 * CONTEXT: This component centralizes all width constraints. Instead of each page
 * remembering to add `max-w-md sm:max-w-lg lg:max-w-xl`, they use this component.
 *
 * KEY RESPONSIBILITIES:
 * - Provide consistent max-width constraints for all pages
 * - Auto-center content with mx-auto
 * - Apply consistent horizontal padding (px-4)
 * - Support multiple container sizes (container, content, wide, modal)
 *
 * DESIGN RATIONALE:
 * - Mobile-first: base widths optimized for phones (< 640px)
 * - Responsive breakpoints: sm (640px+), lg (1024px+)
 * - NOT full-width on desktop: constrained widths create better UX
 * - Single source of truth: changes to maxWidth tokens update everywhere
 *
 * USAGE:
 * ```tsx
 * // Standard page content
 * <Container>
 *   <h1>Page Title</h1>
 *   <p>Content...</p>
 * </Container>
 *
 * // Wider content (e.g., slide with more content)
 * <Container size="content">
 *   <SlideContent />
 * </Container>
 *
 * // Wide content (e.g., cinematic slide)
 * <Container size="wide">
 *   <CinemaSlide />
 * </Container>
 *
 * // Modal content
 * <Container size="modal">
 *   <ModalContent />
 * </Container>
 * ```
 *
 * DEPENDENCIES:
 * - @/data/design/tokens: maxWidth tokens for consistent sizing
 * - @/lib/utils/cn: className utility for merging styles
 *
 * @see src/data/design/tokens.ts - maxWidth token definitions
 * @created 2026-02-03
 */

import type React from "react";
import { maxWidth } from "@/data/design/tokens";
import { cn } from "@/lib/utils/cn";

// ==========================================
// TYPES
// ==========================================

/**
 * Container size options
 *
 * WHY: Using a union type instead of arbitrary strings prevents typos
 * and provides IDE autocomplete for available sizes.
 */
export type ContainerSize = "container" | "content" | "wide" | "modal";

/**
 * Container component props
 *
 * DESIGN DECISIONS:
 * - size defaults to 'container' (most common case)
 * - className is optional for custom overrides (rare but needed)
 * - children is ReactNode to support any content
 */
export interface ContainerProps {
  /** Content to be wrapped with container constraints */
  children: React.ReactNode;
  /** Container size - defaults to 'container' (standard page width) */
  size?: ContainerSize;
  /** Optional additional className for custom overrides */
  className?: string;
}

// ==========================================
// COMPONENT
// ==========================================

/**
 * Container Component
 *
 * Provides consistent, mobile-first width constraints for all content.
 *
 * @param {ContainerProps} props - Component props
 * @returns {JSX.Element} Container with applied width constraints
 */
export function Container({ children, size = "container", className }: ContainerProps) {
  return (
    <div
      className={cn(
        // Base styles: full width, auto-centered, horizontal padding
        "w-full mx-auto px-4",
        // Size-specific max-width from design tokens
        maxWidth[size],
        // Optional custom className (rare, for edge cases)
        className,
      )}
    >
      {children}
    </div>
  );
}

/**
 * Default export for named imports
 *
 * WHY: Some projects prefer default exports for components.
 * This provides both options.
 */
export default Container;
