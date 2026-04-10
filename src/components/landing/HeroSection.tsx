/**
 * HeroSection
 *
 * PURPOSE: Main landing page hero with split layout — text left, image right.
 *
 * CONTEXT: Top section of the landing page introducing the value proposition.
 * Uses a professional photo of a woman using her phone with floating
 * benefit tags overlaying the image — humanizing the product while
 * showing what users gain.
 *
 * LAYOUT:
 * - Desktop: Two-column grid (text left, image right)
 * - Mobile: Stacked (text top, image below)
 *
 * KEY RESPONSIBILITIES:
 * - Show main headline and value proposition (left)
 * - Display hero image with floating tags (right)
 * - Provide clear CTAs for user acquisition
 */

"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import HeroFloatingTags from "./HeroFloatingTags";

// ==========================================
// COMPONENT
// ==========================================

const HeroSection = () => {
  const ref = useScrollAnimation();

  return (
    <section className="pt-[64px] relative overflow-hidden">
      {/* Subtle radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 40%, hsl(217 91% 60% / 0.04), transparent)",
        }}
      />

      <div ref={ref} className="section-container animate-on-scroll relative">
        {/* ── Split layout: text left, image right ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-start pt-6 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12">
          {/* ── LEFT: Text content ── */}
          <div className="text-center lg:text-left order-1">
            <h1 className="font-serif font-bold text-[48px] sm:text-[56px] md:text-[56px] lg:text-[56px] xl:text-[64px] text-gray-800 leading-[1.05] tracking-tight">
              AI made simple
              <br />
              <span className="text-blue-600">for the rest of us.</span>
            </h1>

            <p className="font-body text-base sm:text-lg text-gray-500 max-w-[480px] mx-auto lg:mx-0 mt-4 leading-relaxed">
              15-minute lessons. No jargon. Stay ahead.
            </p>

            <div className="flex items-center lg:items-start justify-center lg:justify-start mt-6">
              <a href="/onboarding" className="btn-pill-primary w-full sm:w-auto text-center">
                Start learning
              </a>
            </div>
          </div>

          {/* ── RIGHT: Hero image with floating tags ── */}
          <div className="relative order-2 flex justify-center lg:justify-end">
            {/* Image container with floating tags */}
            <div className="relative w-full max-w-[400px] sm:max-w-[440px] lg:max-w-[500px]">
              {/* Floating benefit tags */}
              <HeroFloatingTags />

              {/* Hero image */}
              <div
                className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
                style={{
                  boxShadow: "0 8px 0 0 hsl(217 91% 60% / 0.12), 0 20px 50px rgba(0, 0, 0, 0.12)",
                }}
              >
                <Image
                  src="/images/landing/hero/hero-woman.png"
                  alt="Professional woman happily using AI tools on her phone"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
