/**
 * Scroll Reveal Slide Component
 *
 * PURPOSE: Display sequential content items that reveal as user scrolls, with centered layout
 *
 * CONTEXT: Used for step-by-step reveals where each item deserves focused attention.
 * Replaces grid-cards with a cleaner, more focused interaction pattern.
 *
 * KEY RESPONSIBILITIES:
 * - Display one content item at a time in center of screen
 * - Handle scroll wheel/touch for navigation
 * - Show progress dots for direct navigation
 * - Support keyboard arrow keys
 * - NO animations - instant state changes only
 *
 * IMPLEMENTATION NOTES:
 * - Scroll down → next item
 * - Scroll up → previous item
 * - Click dots → jump to item
 * - Keyboard arrows → navigate
 * - Uses passive event listeners for better scroll performance
 * - Debounce scroll events to prevent rapid-fire state changes
 *
 * DESIGN RATIONALE:
 * - Centered layout focuses attention on single item
 * - Progress dots provide visual context (how many items total)
 * - No animations keeps interaction snappy and responsive
 * - Icons (emojis) add visual interest without overhead
 *
 * DEPENDENCIES:
 * - React hooks: useState, useEffect, useCallback, useRef
 * - No external animation libraries (intentional - instant changes)
 *
 * @see GridCardSlide - The component this replaces (grid layout was cluttered)
 * @author Ramon
 * @created 2026-02-02
 */

import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import type { LessonSlide } from "@/types/content";

/**
 * Type definition for a single reveal item
 */
interface RevealItem {
  /** Bold heading displayed above detail */
  title: string;
  /** Body text with full explanation */
  detail: string;
  /** Optional emoji icon for visual interest */
  icon?: string;
}

interface ScrollRevealSlideProps {
  slide: LessonSlide;
}

// ==========================================
// CONSTANTS
// ==========================================

/** Milliseconds to debounce scroll events (prevents rapid-fire navigation) */
const SCROLL_DEBOUNCE_MS = 150;

/** Minimum scroll delta to trigger navigation (filters out small scroll jitters) */
const MIN_SCROLL_DELTA = 20;

// ==========================================
// COMPONENT
// ==========================================

export default memo(function ScrollRevealSlide({ slide }: ScrollRevealSlideProps) {
  const { content } = slide;
  const revealItems = content.revealItems as RevealItem[] | undefined;

  // ------------------------------------
  // STATE
  // ------------------------------------

  /** Currently visible item index */
  const [currentIndex, setCurrentIndex] = useState(0);

  /** Ref to track last scroll debounce timeout */
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  /** Ref to track if component is mounted (prevent state updates after unmount) */
  const isMountedRef = useRef(true);

  // ------------------------------------
  // DERIVED STATE
  // ------------------------------------

  const totalItems = revealItems?.length ?? 0;
  const currentItem = revealItems?.[currentIndex];

  // ------------------------------------
  // NAVIGATION FUNCTIONS
  // ------------------------------------

  /**
   * Navigate to a specific item index
   *
   * @param index - Target index (clamped to valid range)
   */
  const goToIndex = useCallback(
    (index: number) => {
      if (!isMountedRef.current) return;

      const clampedIndex = Math.max(0, Math.min(index, totalItems - 1));
      setCurrentIndex(clampedIndex);
    },
    [totalItems],
  );

  /**
   * Navigate to next item
   */
  const goToNext = useCallback(() => {
    goToIndex(currentIndex + 1);
  }, [currentIndex, goToIndex]);

  /**
   * Navigate to previous item
   */
  const goToPrevious = useCallback(() => {
    goToIndex(currentIndex - 1);
  }, [currentIndex, goToIndex]);

  // ------------------------------------
  // SCROLL HANDLER
  // ------------------------------------

  /**
   * Handle wheel/touch scroll events for navigation
   *
   * Debounced to prevent rapid-fire state changes from scroll momentum.
   * Only triggers when scroll delta exceeds MIN_SCROLL_DELTA threshold.
   *
   * @param event - Wheel event with deltaY (positive = scroll down)
   */
  const handleWheel = useCallback(
    (event: WheelEvent) => {
      // Clear any pending debounce timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }

      // Set new debounce timeout
      debounceTimeoutRef.current = setTimeout(() => {
        const delta = event.deltaY;

        // Only navigate if scroll exceeds threshold (filters out small jitters)
        if (Math.abs(delta) < MIN_SCROLL_DELTA) return;

        // Scroll down → next, Scroll up → previous
        if (delta > 0) {
          goToNext();
        } else {
          goToPrevious();
        }
      }, SCROLL_DEBOUNCE_MS);
    },
    [goToNext, goToPrevious],
  );

  // ------------------------------------
  // KEYBOARD HANDLER
  // ------------------------------------

  /**
   * Handle keyboard arrow key navigation
   *
   * ArrowDown / ArrowRight → next item
   * ArrowUp / ArrowLeft → previous item
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowDown":
        case "ArrowRight":
          event.preventDefault();
          goToNext();
          break;
        case "ArrowUp":
        case "ArrowLeft":
          event.preventDefault();
          goToPrevious();
          break;
      }
    },
    [goToNext, goToPrevious],
  );

  // ------------------------------------
  // EFFECTS
  // ------------------------------------

  /**
   * Register scroll and keyboard event listeners on mount
   *
   * Uses passive: true for wheel events to improve scroll performance.
   * Cleans up all listeners and debounced timeouts on unmount.
   */
  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      isMountedRef.current = false;

      // Clean up event listeners
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);

      // Clean up debounce timeout
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
    };
  }, [handleWheel, handleKeyDown]);

  // ------------------------------------
  // EARLY RETURNS
  // ------------------------------------

  // Guard clause: No items to display
  if (!revealItems || revealItems.length === 0) {
    return (
      <div className="h-full w-full flex items-center justify-center bg-background">
        <p className="text-foreground/60">No content to display</p>
      </div>
    );
  }

  // ------------------------------------
  // MAIN RENDER
  // ------------------------------------

  return (
    <div className="h-full w-full flex flex-col bg-background">
      {/* ==========================================
          HEADER SECTION
          ========================================== */}
      {content.title && (
        <header className="flex-shrink-0 pt-8 pb-4 px-6">
          <h2 className="text-primary text-sm font-bold uppercase tracking-widest text-center">
            {content.title}
          </h2>
        </header>
      )}

      {/* ==========================================
          MAIN CONTENT AREA (Centered)
          ========================================== */}
      <main className="flex-1 flex items-center justify-center px-6">
        {currentItem && (
          <div className="max-w-lg w-full">
            {/* Icon (optional) */}
            {currentItem.icon && (
              <div className="text-center mb-6">
                <span className="text-6xl" role="img" aria-label="section icon">
                  {currentItem.icon}
                </span>
              </div>
            )}

            {/* Title */}
            <h3 className="text-foreground text-xl md:text-2xl font-bold text-center mb-4">
              {currentItem.title}
            </h3>

            {/* Detail */}
            <p className="text-foreground/80 text-base md:text-lg leading-loose text-center">
              {currentItem.detail}
            </p>
          </div>
        )}
      </main>

      {/* ==========================================
          PROGRESS DOTS (Bottom Navigation)
          ========================================== */}
      <nav className="flex-shrink-0 pb-8 px-6" aria-label="Progress navigation">
        <div className="flex justify-center gap-3">
          {revealItems.map((_, index) => (
            <button
              key={index}
              onClick={() => goToIndex(index)}
              className="group relative flex items-center justify-center"
              aria-label={`Go to item ${index + 1}`}
              aria-current={index === currentIndex ? "true" : undefined}
            >
              {/* Dot */}
              <span
                className={`
                  block rounded-full transition-all
                  ${
                    index === currentIndex
                      ? "w-3 h-3 bg-primary"
                      : "w-2 h-2 bg-foreground/30 group-hover:bg-foreground/50"
                  }
                `}
              />
            </button>
          ))}
        </div>

        {/* Item counter */}
        <p className="text-center text-foreground/40 text-sm mt-4">
          {currentIndex + 1} of {totalItems}
        </p>
      </nav>
    </div>
  );
});
