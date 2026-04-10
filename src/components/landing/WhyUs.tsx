/**
 * WhyUs
 *
 * PURPOSE: Clean cards for “why this platform” — image-ready. Each card is a full
 * bg image area with title overlay. User adds their own illustrations.
 */

"use client";

import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

const CARDS: { id: string; title: string; image?: string }[] = [
  { id: "guided", title: "Guided Interactive Lessons" },
  { id: "beginner", title: "15-Min Lessons for Beginners" },
  { id: "actionable", title: "Actionable in Your Domain" },
  { id: "motivated", title: "Stay Motivated & Certified" },
];

function FeatureCard({ card }: { card: (typeof CARDS)[number] }): React.JSX.Element {
  return (
    <div
      className="group relative rounded-xl overflow-hidden aspect-[4/3] transition-transform duration-200 hover:-translate-y-1"
      style={{ boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.03), 0 6px 16px rgba(0, 0, 0, 0.05)" }}
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200"
        style={{
          backgroundImage: card.image ? `url(${card.image})` : undefined,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
        <h3 className="font-serif font-bold text-lg text-white drop-shadow-sm">{card.title}</h3>
      </div>
    </div>
  );
}

export default function WhyUs(): React.JSX.Element {
  const ref = useScrollAnimation();

  return (
    <section className="section-container py-10 sm:py-14 bg-gray-50/50">
      <div ref={ref} className="animate-on-scroll max-w-[1080px]">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[42px] text-gray-800 leading-[1.15] tracking-tight">
            Why {SITE_BRAND_NAME}?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CARDS.map((card) => (
            <FeatureCard key={card.id} card={card} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12">
          <a href="/onboarding" className="btn-pill-primary inline-block">
            Start your journey
          </a>
        </div>
      </div>
    </section>
  );
}
