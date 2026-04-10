/**
 * AIAdvantageCard
 *
 * PURPOSE: A prominent card section that pitches the core value proposition —
 * people who leverage AI are 10x more productive. This bridges the gap
 * between "what tools you'll learn" (logo strip) and "who uses it" (personas).
 *
 * CONTEXT: Positioned after SocialProof and before PersonasSection.
 * Inspired by a contained card design with text/CTA on the left and
 * scattered AI tool logos on the right, set against a soft gradient.
 *
 * IMPLEMENTATION NOTES:
 * - Single card with rounded corners, subtle border, and soft gradient bg
 * - Left side: headline emphasizing the 10x advantage, subtitle about
 *   always-updated content, and a CTA button
 * - Right side: AI tool logos scattered in small 3D cards (contained area)
 * - The "10x" stat is highlighted to grab attention
 * - Logos use slight rotation for visual interest (not animated)
 *
 * @see FloatingLogoBlocks — shares the same logo assets
 */

"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

// ==========================================
// DATA
// ==========================================

/**
 * AI advantage showcase image - single visual replacing scattered logos.
 */
const ADVANTAGE_IMAGE = "/images/landing/ai-advantage-showcase.png";

// ==========================================
// COMPONENT
// ==========================================

export default function AIAdvantageCard(): React.JSX.Element {
  const ref = useScrollAnimation();

  return (
    <section className="section-container py-6 sm:py-8">
      <div
        ref={ref}
        className="animate-on-scroll rounded-2xl sm:rounded-3xl border border-gray-200 bg-white overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* ── LEFT: Text + CTA ── */}
          <div className="px-6 sm:px-10 pt-8 sm:pt-10 pb-6 md:pb-10 flex flex-col justify-center">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[40px] text-gray-800 leading-[1.15] tracking-tight">
              Stay relevant in a
              <br />
              <span className="text-blue-600">changing AI era.</span>
            </h2>

            <p className="font-body text-sm text-gray-600 mt-3 max-w-[380px]">
              Practical AI skills — guided lessons, 15 min/day, no jargon.
            </p>

            <div className="mt-5">
              <a
                href="/onboarding"
                className="inline-flex items-center gap-2 whitespace-nowrap font-body font-semibold text-[15px] text-white rounded-full cursor-pointer transition-all duration-150"
                style={{
                  padding: "0.75rem 1.75rem",
                  backgroundColor: "hsl(217 91% 60%)",
                  borderBottom: "4px solid hsl(224 76% 48%)",
                  boxShadow: "0 2px 8px hsl(217 91% 60% / 0.25)",
                  textDecoration: "none",
                }}
              >
                Start now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ── RIGHT: Image — horizontal on md+, smaller on mid screens ── */}
          <div className="relative min-h-[200px] sm:min-h-[220px] md:min-h-0 hidden md:flex items-center justify-center p-4 sm:p-6">
            <Image
              src={ADVANTAGE_IMAGE}
              alt="AI advantage showcase - professionals leveraging AI tools for productivity"
              width={400}
              height={320}
              className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] h-auto"
            />
          </div>

          {/* Mobile: vertical layout, smaller image */}
          <div className="flex md:hidden items-center justify-center px-6 pb-6">
            <Image
              src={ADVANTAGE_IMAGE}
              alt="AI advantage showcase - professionals leveraging AI tools for productivity"
              width={320}
              height={256}
              className="w-full max-w-[200px] sm:max-w-[240px] h-auto rounded-xl border-2"
              // do not include backgorund nor shadow - it should blend with the background
            />
          </div>
        </div>
      </div>
    </section>
  );
}
