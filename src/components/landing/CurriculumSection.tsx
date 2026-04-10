/**
 * CurriculumSection
 *
 * PURPOSE: Interactive showcase of the platform course catalog. Demonstrates
 * BOTH tool proficiency (become skilled in using specific AI tools effectively)
 * AND practical leverage (apply AI to real work and life outcomes).
 *
 * CONTEXT: Positioned after AIAdvantageCard. This section answers "What will
 * I actually learn?" with three interactive tabs:
 * - AI Tools Mastery: Learn to use tools effectively with practical skills
 * - Life & Business: Practical skills for productivity, work, daily life
 * - Creativity: Creative applications — images, writing, brainstorming
 *
 * IMPLEMENTATION NOTES:
 * - Tabs switch between content panels with a smooth transition
 * - All cards use the SAME unified design and size
 * - Tool cards show logo + 2-3 practical applications
 * - Skill cards show lifestyle illustrations
 * - "microlearning" included in header, "15 minutes a day" reinforced in subtitle
 * - Cards use rounded-xl (not 2xl) for a sharper, less bubbly look
 * - "And more..." block shows different logos based on active tab
 * - Content emphasizes PRACTICAL application, not just theory
 * - All cards have consistent height to prevent UI jumps
 * - Max 6 cards displayed per tab (first 6 + "And more")
 * - "And more" card communicates that we're always adding/updating courses
 */

"use client";

import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

// ==========================================
// TYPES & DATA
// ==========================================

type Tab = "tools" | "business" | "creative";

const TABS: { key: Tab; label: string }[] = [
  { key: "tools", label: "AI Tools Mastery" },
  { key: "business", label: "Life & Business" },
  { key: "creative", label: "Creativity" },
];

/**
 * Tool mastery cards with variations — shows tool logo
 * and 2-3 practical skills/applications you'll learn.
 */
interface ToolCard {
  id: string;
  name: string;
  logo: string;
  tagline: string;
  /** 2-3 practical skills/applications for this tool */
  variations: {
    title: string;
    description: string;
  }[];
  badge?: string;
}

/**
 * Skill cards — same size structure as tool cards.
 */
interface SkillCard {
  id: string;
  title: string;
  gradient: string;
  tagline: string;
  badge?: string;
}

/**
 * Tool mastery data — each card shows a tool with practical
 * applications, not just theory.
 */
const TOOL_CARDS: ToolCard[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    logo: "/images/landing/logos/chatgpt.svg",
    tagline: "The world's most popular AI assistant",
    badge: "Most Popular",
    variations: [
      { title: "Daily Tasks", description: "Draft emails, reports, and documents instantly" },
      { title: "Quick Answers", description: "Get instant answers to any question" },
      { title: "Brainstorming", description: "Generate ideas for projects and presentations" },
    ],
  },
  {
    id: "claude",
    name: "Claude",
    logo: "/images/landing/logos/claude.svg",
    tagline: "The AI professionals trust for quality",
    badge: "Pro Favorite",
    variations: [
      { title: "Deep Analysis", description: "Summarize lengthy documents and extract insights" },
      { title: "Professional Writing", description: "Create nuanced, thoughtful responses" },
      { title: "Problem Solving", description: "Break down complex decisions step by step" },
    ],
  },
  {
    id: "gemini",
    name: "Gemini",
    logo: "/images/landing/logos/gemini.svg",
    tagline: "Google's AI — connected to everything",
    variations: [
      { title: "Smart Search", description: "Find information across the web instantly" },
      { title: "Document Works", description: "Analyze PDFs, Docs, and Sheets with AI" },
      { title: "Integration", description: "Works seamlessly with Gmail, Calendar, and Drive" },
    ],
  },
  {
    id: "midjourney",
    name: "Midjourney",
    logo: "/images/landing/logos/midjourney.svg",
    tagline: "Create stunning images with words",
    badge: "Creative",
    variations: [
      { title: "Social Media", description: "Design eye-catching posts and visuals" },
      { title: "Brand Assets", description: "Generate logos, graphics, and mockups" },
      { title: "Photo Editing", description: "Create and modify images with text prompts" },
    ],
  },
];

/**
 * Life & Business skill cards.
 */
const BUSINESS_CARDS: SkillCard[] = [
  {
    id: "emails",
    title: "Write Better Emails",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
    tagline: "Draft professional emails in seconds — not minutes",
    badge: "Popular",
  },
  {
    id: "automate",
    title: "Automate Your Day",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    tagline: "Simple automations that save 2+ hours daily. No coding.",
    badge: "New",
  },
  {
    id: "research",
    title: "Deep Research",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)",
    tagline: "AI reads 50 articles and gives you the key takeaways.",
  },
  {
    id: "travel",
    title: "Travel Planning",
    gradient: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
    tagline: "Plan your entire vacation itinerary with one prompt.",
  },
  {
    id: "meetings",
    title: "Meeting Prep",
    gradient: "linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)",
    tagline: "Walk into every meeting fully prepared — in 2 minutes.",
  },
];

/**
 * Creative skill cards.
 */
const CREATIVE_CARDS: SkillCard[] = [
  {
    id: "images",
    title: "Image Generation",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    tagline: "Create birthday cards, art, and visuals.",
    badge: "Fun",
  },
  {
    id: "strategy",
    title: "Creative Strategy",
    gradient: "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
    tagline: "Brainstorm campaigns, slogans, and content ideas.",
    badge: "New",
  },
  {
    id: "social",
    title: "Social Media Posts",
    gradient: "linear-gradient(135deg, #F43F5E 0%, #E11D48 100%)",
    tagline: "Generate engaging captions for any platform.",
  },
  {
    id: "storytelling",
    title: "Storytelling",
    gradient: "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
    tagline: "Craft compelling stories for presentations.",
  },
  {
    id: "design",
    title: "Design Mockups",
    gradient: "linear-gradient(135deg, #06B6D4 0%, #0891B2 100%)",
    tagline: "Go from idea to visual concept without design skills.",
  },
];

// ==========================================
// SUB-COMPONENTS
// ==========================================

/**
 * Tool mastery card — shows logo + practical applications.
 * Same size and structure as skill cards.
 */
function ToolMasteryCard({ card }: { card: ToolCard }) {
  return (
    <div
      className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden min-w-[280px] sm:min-w-[300px] w-[300px] shrink-0 h-[380px] sm:h-[400px] transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
      style={{
        boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Header with logo + tool name */}
      <div className="relative px-4 pt-4 pb-5 flex items-center gap-3 bg-gray-50 border-b border-gray-100">
        {card.badge && (
          <span className="absolute top-2 right-3 px-2 py-0.5 rounded-full bg-amber-400 text-gray-900 text-[9px] font-bold uppercase">
            {card.badge}
          </span>
        )}
        <div className="flex items-center justify-center w-14 h-14 rounded-lg bg-white border border-gray-200">
          <Image src={card.logo} alt={`${card.name} logo`} width={40} height={40} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-bold text-base text-gray-800 leading-tight">
            {card.name}
          </h3>
          <p className="font-body text-xs text-gray-400 mt-0.5 line-clamp-1">{card.tagline}</p>
        </div>
      </div>

      {/* Practical applications list */}
      <div className="px-4 py-3.5 flex-1">
        <p className="font-body text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
          Practical skills you&apos;ll use:
        </p>
        <div className="flex flex-col gap-2">
          {card.variations.map((variation, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-blue-500 text-xs mt-0.5 shrink-0">✓</span>
              <div className="flex-1">
                <p className="font-body text-sm font-medium text-gray-700">{variation.title}</p>
                <p className="font-body text-xs text-gray-400">{variation.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="px-4 pb-4 pt-2 border-t border-gray-100">
        <a
          href="/onboarding"
          className="block w-full text-center py-2.5 rounded-lg font-body text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
            borderBottom: "3px solid #1D4ED8",
            boxShadow: "0 2px 8px rgba(37, 99, 235, 0.2)",
          }}
        >
          Master {card.name}
        </a>
      </div>
    </div>
  );
}

/**
 * Skill card — same size structure as tool cards.
 */
function SkillCard({ card }: { card: SkillCard }) {
  return (
    <div
      className="flex flex-col rounded-xl border border-gray-200 bg-white overflow-hidden min-w-[280px] sm:min-w-[300px] w-[300px] shrink-0 h-[380px] sm:h-[400px] transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
      style={{
        boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.03), 0 4px 16px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Gradient header */}
      <div
        className="relative px-4 pt-4 pb-6 flex items-center justify-center"
        style={{
          background: card.gradient,
          minHeight: "120px",
        }}
      >
        {card.badge && (
          <span className="absolute top-2 right-3 px-2 py-0.5 rounded-full bg-amber-400 text-gray-900 text-[9px] font-bold uppercase">
            {card.badge}
          </span>
        )}
        <span className="text-white text-4xl">✨</span>
      </div>

      {/* Body */}
      <div className="px-4 py-3.5 flex flex-col flex-1">
        <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-800 leading-tight mb-2">
          {card.title}
        </h3>
        <p className="font-body text-sm text-gray-500 leading-relaxed flex-1">{card.tagline}</p>
        <a
          href="/onboarding"
          className="mt-4 block w-full text-center py-2.5 rounded-lg font-body text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
            borderBottom: "3px solid #1D4ED8",
            boxShadow: "0 2px 8px rgba(37, 99, 235, 0.2)",
          }}
        >
          Start learning
        </a>
      </div>
    </div>
  );
}

/**
 * "And more..." block — same size as regular cards.
 * Shows that we're always adding/updating courses with new content.
 */
function AndMoreBlock({ activeTab }: { activeTab: Tab }) {
  return (
    <div
      className="shrink-0 rounded-xl border border-gray-200 bg-white overflow-hidden min-w-[280px] sm:min-w-[300px] w-[300px] h-[380px] sm:h-[400px] relative"
      style={{
        background: "linear-gradient(135deg, #F0F9FF 0%, #E0E7FF 100%)",
        boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.03), 0 6px 16px rgba(0, 0, 0, 0.06)",
      }}
    >
      {/* Refresh icon */}
      <div className="absolute top-3 right-3">
        <svg
          className="w-5 h-5 text-blue-500"
          fill="none"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4v1a1 1c4 4 9 4s.006.002a1 1" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 px-6 py-4">
        {/* Sparkle icon */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center mb-3">
          <span className="text-white text-2xl">✨</span>
        </div>

        <p className="font-body font-semibold text-gray-700 text-base">
          And <span className="text-blue-600">more...</span>
        </p>
        <p className="font-body text-sm text-gray-500 text-center mt-1">
          New courses & tools added regularly
        </p>
      </div>

      {/* CTA */}
      <div className="px-4 pb-4 pt-2 border-t border-gray-100">
        <a
          href="/onboarding"
          className="block w-full text-center py-2.5 rounded-lg font-body text-sm font-semibold text-white transition-all duration-150 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
            borderBottom: "3px solid #1D4ED8",
            boxShadow: "0 2px 8px rgba(37, 99, 235, 0.2)",
          }}
        >
          Explore all courses
        </a>
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function CurriculumSection(): React.JSX.Element {
  const ref = useScrollAnimation();
  const [activeTab, setActiveTab] = useState<Tab>("tools");

  return (
    <section className="section-container py-8 sm:py-10">
      <div ref={ref} className="animate-on-scroll">
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-blue-600">
              What you&apos;ll learn • microlearning
            </p>
            <h2 className="mt-2 font-serif font-bold text-3xl sm:text-4xl md:text-[46px] text-gray-800 leading-[1.1] tracking-tight">
              Become proficient.
              <br />
              <span className="text-blue-600">Apply it practically.</span>
            </h2>
            <p className="font-body text-sm sm:text-base text-gray-400 mt-3">
              Just 15 minutes a day — bite-sized lessons you can apply immediately.
            </p>
          </div>

          {/* Tab pills */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-full p-1 self-start sm:self-auto">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={cn(
                  "px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-150 cursor-pointer whitespace-nowrap",
                  activeTab === tab.key
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-700",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Content carousel ── */}
        <div className="overflow-x-auto scrollbar-hide -mx-4 px-4 pb-2">
          <div className="flex gap-4" style={{ maxWidth: "fit-content" }}>
            {/* AI Tools Mastery */}
            {activeTab === "tools" && (
              <>
                {TOOL_CARDS.map((card) => (
                  <ToolMasteryCard key={card.id} card={card} />
                ))}
                {/* "And more..." block - visible on all screens */}
                <AndMoreBlock activeTab={activeTab} />
              </>
            )}

            {/* Life & Business */}
            {activeTab === "business" && (
              <>
                {BUSINESS_CARDS.slice(0, 6).map((card) => (
                  <SkillCard key={card.id} card={card} />
                ))}
                {/* "And more..." block - visible on all screens */}
                <AndMoreBlock activeTab={activeTab} />
              </>
            )}

            {/* Creativity */}
            {activeTab === "creative" && (
              <>
                {CREATIVE_CARDS.slice(0, 6).map((card) => (
                  <SkillCard key={card.id} card={card} />
                ))}
                {/* "And more..." block - visible on all screens */}
                <AndMoreBlock activeTab={activeTab} />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
