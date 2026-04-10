/**
 * ExpertSection
 *
 * PURPOSE: Build trust — built by AI experts, taught simply. Reassures users
 * the content isn't too advanced.
 */

"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

export default function ExpertSection(): React.JSX.Element {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="section-container animate-on-scroll">
        <div
          className="relative rounded-2xl overflow-hidden px-6 py-12 md:px-12 md:py-16 text-center"
          style={{
            background: "linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 50%, #E2E8F0 100%)",
            boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.03), 0 12px 40px rgba(0, 0, 0, 0.06)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Background shapes */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-500/5" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-blue-600/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gray-400/5" />
            <div className="absolute top-8 right-20 w-16 h-16 rounded-lg bg-blue-400/10 rotate-12" />
            <div className="absolute bottom-12 left-16 w-12 h-12 rounded-full bg-gray-500/10" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[46px] text-gray-800 leading-tight">
              Built by AI experts.
              <br />
              <span className="text-blue-600">Taught simply.</span>
            </h2>

            <p className="font-body text-gray-600 mt-3 text-sm">No jargon. Start from zero.</p>

            <a href="/onboarding" className="btn-pill-primary mt-5 inline-block">
              Start learning — 15 mins a day
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
