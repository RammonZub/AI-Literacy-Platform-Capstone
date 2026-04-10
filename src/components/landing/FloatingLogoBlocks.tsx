/**
 * FloatingLogoBlocks
 *
 * PURPOSE: Horizontal row of AI tool logos displayed below hero section,
 * communicating "these are the tools you'll learn" at a glance.
 *
 * CONTEXT: Positioned between HeroSection and SocialProof.
 *
 * IMPLEMENTATION NOTES:
 * - Main carousel: thesis-aligned tools in medium-sized cards
 * - Clean, simple design
 * - Responsive: scrollable on mobile, centered on desktop
 */

"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

// ==========================================
// DATA
// ==========================================

const AI_TOOLS = [
  { name: "ChatGPT", src: "/images/landing/logos/chatgpt.svg" },
  { name: "Claude", src: "/images/landing/logos/claude.svg" },
  { name: "Gemini", src: "/images/landing/logos/gemini.svg" },
  { name: "Midjourney", src: "/images/landing/logos/midjourney.svg" },
];

// ==========================================
// COMPONENT
// ==========================================

export default function FloatingLogoBlocks(): React.JSX.Element {
  const ref = useScrollAnimation();

  return (
    <section className="py-6 sm:py-8 bg-white border-t border-gray-100">
      <div ref={ref} className="section-container animate-on-scroll">
        <p className="font-body text-center text-sm text-gray-500 mb-4 max-w-[400px] mx-auto">
          Tools you&apos;ll master
        </p>

        {/* Logo carousel — clean and simple */}
        <div className="flex justify-center overflow-x-auto scrollbar-hide mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-0">
            {AI_TOOLS.map((tool) => (
              <div key={tool.name} className="shrink-0 flex flex-col items-center gap-1.5">
                <div
                  className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-lg border border-gray-200 bg-white"
                  style={{
                    boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  <Image
                    src={tool.src}
                    alt={`${tool.name} logo`}
                    width={24}
                    height={24}
                    className="w-6 h-6 sm:w-7 sm:h-7"
                  />
                </div>
                <span className="font-body text-[10px] sm:text-xs text-gray-400">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
