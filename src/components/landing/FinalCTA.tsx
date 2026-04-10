/**
 * FinalCTA
 *
 * PURPOSE: Final call-to-action section at the bottom of the landing page.
 *
 * CONTEXT: Positioned before the footer, encourages users to sign up.
 * Simplified version without character illustration.
 *
 * KEY RESPONSIBILITIES:
 * - Display final CTA headline
 * - Show subheadline with benefits
 * - Provide primary CTA button
 */

"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

const FinalCTA = () => {
  const ref = useScrollAnimation();

  return (
    <section id="pricing" className="bg-background pb-8 md:pb-12">
      <div ref={ref} className="section-container text-center animate-on-scroll pt-10 md:pt-14">
        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[46px] text-gray-800 leading-tight">
          Start learning AI today
        </h2>
        <p className="font-body text-lg text-gray-500 mt-4 max-w-[480px] mx-auto leading-relaxed">
          15 minutes a day. No tech background needed.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a href="/onboarding" className="btn-pill-primary inline-block">
            Start learning
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
