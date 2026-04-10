/**
 * FAQSection
 *
 * PURPOSE: Address top persona concerns with accordion-style FAQ items.
 * Handles objections directly to reduce friction before the final CTA.
 *
 * CONTEXT: 8 questions targeting the 30-55+ non-technical persona:
 * tech experience, time commitment, tool coverage, use cases, challenge
 * structure, and cancellation policy.
 *
 * IMPLEMENTATION NOTES:
 * - Uses useState for single-item accordion (click to toggle, only one open)
 * - ChevronDown rotates 180deg when item is expanded
 * - Smooth height transition via conditional rendering
 * - FAQ data imported from shared module for SEO schema reuse
 */

"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FAQ_ITEMS } from "@/data/seo/faq-data";
import { cn } from "@/lib/utils";

// Re-export for convenience
export type { FAQItem } from "@/data/seo/faq-data";

// ==========================================
// COMPONENT
// ==========================================

export default function FAQSection(): React.JSX.Element {
  /** Index of the currently open FAQ item (null = all closed) */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="section-container section-padding scroll-mt-20">
      <h2 className="mb-10 text-center font-serif font-bold text-3xl sm:text-4xl md:text-[46px] text-gray-800 tracking-tight">
        Common questions
      </h2>

      <div className="mx-auto max-w-2xl">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.question} className="border-b border-gray-200">
              <button
                type="button"
                onClick={() => toggleItem(i)}
                className="flex w-full items-center justify-between py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-gray-900">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-gray-400 transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                />
              </button>

              {isOpen && <p className="pb-5 text-gray-600">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
