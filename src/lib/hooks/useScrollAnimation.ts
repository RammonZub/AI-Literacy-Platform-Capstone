/**
 * useScrollAnimation Hook
 *
 * PURPOSE: Trigger CSS entrance animations when elements scroll into view
 *
 * CONTEXT: Landing page sections use scroll-triggered animations to create
 * a polished, engaging experience. This hook wraps IntersectionObserver
 * to add the `.is-visible` class when elements enter the viewport.
 *
 * KEY RESPONSIBILITIES:
 * - Observe elements and add `.is-visible` class on intersection
 * - Fire once per element (no re-triggering on scroll back)
 * - Respect `prefers-reduced-motion` by immediately showing elements
 *
 * IMPLEMENTATION NOTES:
 * - Threshold 0.1: Trigger when 10% of the element is visible
 * - rootMargin `-40px`: Slight offset so animation starts just before full view
 * - Uses `.animate-on-scroll` CSS class for the initial hidden state
 *
 * DEPENDENCIES:
 * - globals.css: `.animate-on-scroll` and `.is-visible` classes
 *
 * @example
 * ```tsx
 * const ref = useScrollAnimation();
 * return <section ref={ref} className="animate-on-scroll">...</section>
 * ```
 *
 * @see globals.css - `.animate-on-scroll` / `.is-visible` styles
 */

"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Hook that adds `.is-visible` to an element when it scrolls into view
 *
 * DESIGN RATIONALE:
 * - Returns a ref to attach to any HTML element
 * - IntersectionObserver is more performant than scroll event listeners
 * - `once: true` pattern: unobserve after first intersection to save resources
 * - Reduced motion: immediately adds `.is-visible` without waiting for scroll
 *
 * @returns React ref to attach to the target element
 */
export function useScrollAnimation<
  T extends HTMLElement = HTMLDivElement,
>(): React.RefObject<T | null> {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preference — show content immediately
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      element.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            // Unobserve after first trigger — animation only fires once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return ref;
}
