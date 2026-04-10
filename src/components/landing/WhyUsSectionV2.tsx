/**
 * WhyUsSectionV2
 *
 * PURPOSE: “Why this platform” — scroll-driven reason cards + explanation panel.
 * Same scroll paradigm as WhyUsSection but WITHOUT iPhone mockup. Cleaner, simpler.
 *
 * KEY FEATURES:
 * - Scroll progress drives active card highlight
 * - Explanation panel (logos + copy) next to cards, swaps per reason
 * - Desktop: cards left, panel right | Mobile: stacked, AnimatePresence swap
 *
 * @see docs/why-us-section-redesign-plan.md
 */

"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { SITE_BRAND_NAME } from "@/lib/site-brand";
import { cn } from "@/lib/utils";

// ==========================================
// DATA
// ==========================================

const REASONS_WITH_EXPLANATION = [
  {
    id: "guided",
    title: "Guided Interactive Lessons",
    description: "Step-by-step lessons with real tasks. No long videos — learn by doing.",
    explanation: {
      logos: ["/images/landing/logos/chatgpt.svg", "/images/landing/logos/claude.svg"],
      copy: "Learn by doing — no long videos, just real tasks with ChatGPT and Claude.",
    },
  },
  {
    id: "time",
    title: "15-Min Lessons for Beginners",
    description: "Bite-sized sessions that fit your schedule. No tech background needed.",
    explanation: {
      logos: [],
      copy: "Bite-sized lessons that fit your schedule. No tech background needed.",
    },
  },
  {
    id: "personalized",
    title: "Personalized Plan for You",
    description: "Skills tailored to your role — emails, reports, research, planning.",
    explanation: {
      logos: ["/images/landing/logos/gemini.svg"],
      copy: "Skills tailored to your role — emails, reports, research, planning.",
    },
  },
  {
    id: "motivated",
    title: "Stay Motivated & Certified",
    description: "Streaks, quizzes, and a certificate that proves your skills.",
    explanation: {
      logos: [],
      copy: "Streaks, quizzes, and a shareable certificate that proves your skills.",
    },
  },
] as const;

const SECTION_VH = 600;
/** Uneven thresholds so cards 3 & 4 get more scroll time to read */
const REASON_THRESHOLDS = [0.18, 0.36, 0.58, 1] as const;

// ==========================================
// SUB-COMPONENTS
// ==========================================

function ReasonCard({
  reason,
  index,
  isActive,
}: {
  reason: (typeof REASONS_WITH_EXPLANATION)[number];
  index: number;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border bg-white p-4 sm:p-6 transition-all duration-300 flex flex-col min-h-[140px] sm:min-h-[180px]",
        isActive
          ? "border-blue-400 shadow-xl shadow-blue-200/60 ring-2 ring-blue-200 opacity-100 scale-[1.02]"
          : "border-gray-200 shadow-sm opacity-60",
      )}
    >
      <p className="font-body text-xs sm:text-sm font-semibold uppercase tracking-wider text-blue-600 mb-2 shrink-0">
        Reason {index + 1}
      </p>
      <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-800 mb-2 shrink-0 line-clamp-2">
        {reason.title}
      </h3>
      <p className="font-body text-sm sm:text-base text-gray-600 leading-relaxed flex-1 line-clamp-4">
        {reason.description}
      </p>
    </div>
  );
}

function ExplanationPanel({
  reason,
  isMobile,
}: {
  reason: (typeof REASONS_WITH_EXPLANATION)[number];
  isMobile: boolean;
}) {
  const { logos, copy } = reason.explanation;

  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50/50 p-6 sm:p-8 min-h-[200px] sm:min-h-[280px] flex flex-col justify-center">
      {logos.length > 0 ? (
        <>
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6">
            {logos.map((src) => (
              <div
                key={src}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white border border-gray-200 flex items-center justify-center p-2 shadow-sm"
              >
                <Image
                  src={src}
                  alt=""
                  width={isMobile ? 32 : 40}
                  height={isMobile ? 32 : 40}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <p className="font-body text-base sm:text-lg text-gray-700 text-center max-w-[320px] mx-auto leading-relaxed">
            {copy}
          </p>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center">
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="font-body text-base sm:text-lg text-gray-700 text-center max-w-[320px] mx-auto leading-relaxed">
            {copy}
          </p>
        </div>
      )}
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function WhyUsSectionV2(): React.JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia("(max-width: 1023px)").matches : false,
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = (SECTION_VH / 100) * window.innerHeight;

      if (sectionTop > 0) {
        setScrollProgress(0);
        return;
      }
      if (sectionTop + sectionHeight < 0) {
        setScrollProgress(1);
        return;
      }
      const progress = -sectionTop / sectionHeight;
      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeReasonIndex =
    scrollProgress < REASON_THRESHOLDS[0]
      ? 0
      : scrollProgress < REASON_THRESHOLDS[1]
        ? 1
        : scrollProgress < REASON_THRESHOLDS[2]
          ? 2
          : 3;
  const activeReason = REASONS_WITH_EXPLANATION[activeReasonIndex]!;

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative bg-white scroll-mt-20"
      style={{ minHeight: `${SECTION_VH}vh` }}
    >
      <div className="sticky top-0 min-h-screen flex items-center justify-center py-8 sm:py-10 lg:py-12">
        <div className="section-container max-w-[960px] w-full px-4 sm:px-6">
          <h2 className="text-center font-serif font-bold text-3xl sm:text-4xl md:text-[42px] text-gray-800 tracking-tight mb-2">
            Why {SITE_BRAND_NAME}?
          </h2>
          <p className="text-center font-body text-sm sm:text-base text-gray-500 mb-6 sm:mb-8">
            Your journey from beginner to AI proficient
          </p>

          {/* Single card + panel — horizontal on desktop, vertical on mobile */}
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 max-w-[420px] lg:max-w-[880px] mx-auto items-stretch lg:items-stretch">
            <div className="flex-1 min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReasonIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <ReasonCard reason={activeReason} index={activeReasonIndex} isActive />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex-1 min-w-0 min-h-[200px] lg:min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`panel-${activeReasonIndex}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="h-full"
                >
                  <ExplanationPanel reason={activeReason} isMobile={isMobile} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-center font-body text-xs sm:text-sm text-gray-500 mt-6">
            Scroll to explore
          </p>
        </div>
      </div>
    </section>
  );
}
