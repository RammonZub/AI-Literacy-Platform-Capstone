/**
 * CourseTypesSection
 *
 * PURPOSE: AI Tools Mastery (mobile: text top, cards below; desktop: cards left, text right)
 * and Skills & Domains (flip cards with course descriptions).
 */

"use client";

import { Clock } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

// ==========================================
// DATA
// ==========================================

const AI_TOOLS = [
  { name: "ChatGPT", src: "/images/landing/logos/chatgpt.svg" },
  { name: "Claude", src: "/images/landing/logos/claude.svg" },
  { name: "Gemini", src: "/images/landing/logos/gemini.svg" },
  { name: "Midjourney", src: "/images/landing/logos/midjourney.svg" },
  { name: "And more", src: null },
];

/** Images — use Picsum (100% reliable). Seed per domain = deterministic, always loads. */
const PICSUM = (seed: string, w: number, h: number) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

const SKILL_DOMAINS = [
  {
    id: "emails",
    title: "Emails & Writing",
    description:
      "Draft professional emails, reports, and documents in seconds. Learn prompts that work for any context.",
    image: PICSUM("emails-writing", 400, 300),
  },
  {
    id: "automate",
    title: "Automation",
    description:
      "Simple automations that save 2+ hours daily. No coding required. Connect tools and workflows.",
    image: PICSUM("automation-tech", 400, 300),
  },
  {
    id: "research",
    title: "Research",
    description:
      "AI reads dozens of sources and delivers key takeaways. Faster literature reviews and competitive analysis.",
    image: PICSUM("research-books", 400, 300),
  },
  {
    id: "documents",
    title: "Documents & Reports",
    description:
      "Summarize PDFs, create briefs, and streamline paperwork. Extract insights from long documents.",
    image: PICSUM("documents-papers", 400, 300),
  },
  {
    id: "meetings",
    title: "Meeting Prep",
    description:
      "Walk into every meeting fully prepared — in 2 minutes. Agendas, talking points, and follow-ups.",
    image: PICSUM("meeting-room", 400, 300),
  },
  {
    id: "travel",
    title: "Travel & Planning",
    description:
      "Plan itineraries, trips, and schedules with one prompt. From weekend getaways to business travel.",
    image: PICSUM("travel-planning", 400, 300),
  },
];

// ==========================================
// 3D TOOL BLOCK
// ==========================================

function ToolBlock3D({
  tool,
  index,
}: {
  tool: (typeof AI_TOOLS)[number];
  index: number;
}): React.JSX.Element {
  const rotations = [
    "rotateY(-8deg) rotateX(4deg)",
    "rotateY(4deg) rotateX(-2deg)",
    "rotateY(-8deg) rotateX(4deg)",
    "rotateY(4deg) rotateX(-2deg)",
    "rotateY(-4deg) rotateX(2deg)",
  ][index];

  return (
    <div
      className="shrink-0 flex flex-col items-center justify-end transition-transform duration-300 hover:scale-105"
      style={{ perspective: "600px", height: 96 }}
    >
      <div
        className="w-[64px] h-[80px] sm:w-[72px] sm:h-[88px] flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white"
        style={{
          transform: `perspective(600px) ${rotations}`,
          boxShadow: "0 4px 0 0 #E5E7EB, 0 8px 16px rgba(0, 0, 0, 0.08)",
        }}
      >
        {tool.src ? (
          <Image
            src={tool.src}
            alt={tool.name}
            width={28}
            height={28}
            className="w-7 h-7 sm:w-8 sm:h-8"
          />
        ) : (
          <span className="text-lg sm:text-xl text-gray-400 font-medium">+</span>
        )}
        <span className="font-body text-[9px] sm:text-[10px] font-semibold text-gray-600 mt-1.5 truncate w-full text-center px-1">
          {tool.name}
        </span>
      </div>
    </div>
  );
}

// ==========================================
// FLIP SKILL CARD — Image as background with overlay
// ==========================================

function SkillCard({ domain }: { domain: (typeof SKILL_DOMAINS)[number] }): React.JSX.Element {
  const [flipped, setFlipped] = useState(false);

  const cardWidth = 200;
  const cardHeight = 170;

  const cardStyle = {
    width: cardWidth,
    height: cardHeight,
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    border: "1px solid rgba(0,0,0,0.15)",
  };

  return (
    <div
      className="shrink-0 cursor-pointer"
      style={{ width: cardWidth, height: cardHeight, perspective: "1000px" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transition: "transform 0.5s ease",
        }}
      >
        {/* Front — full-bleed background image + soft gradient overlay */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            ...cardStyle,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {/* Full card background image — fallback gradient if image fails */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${domain.image}), linear-gradient(145deg, #e2e8f0 0%, #cbd5e1 100%)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Soft gradient layer — fades from transparent to dark, like a subtle overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.25) 40%, transparent 100%)",
            }}
          />
          {/* Title — sits in the gradient area */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <span className="font-body text-base font-semibold text-white leading-tight block drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              {domain.title}
            </span>
            <span className="font-body text-[11px] text-white/90 mt-0.5 block drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
              Tap to learn more
            </span>
          </div>
        </div>

        {/* Back — description */}
        <div
          className="absolute inset-0 flex flex-col p-4 bg-white overflow-hidden"
          style={{
            ...cardStyle,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="font-body text-sm font-semibold text-gray-800 mb-2">{domain.title}</span>
          <p className="font-body text-xs text-gray-600 leading-relaxed flex-1 line-clamp-5">
            {domain.description}
          </p>
          <a
            href="/onboarding"
            onClick={(e) => e.stopPropagation()}
            className="font-body text-xs font-semibold text-blue-600 mt-2 hover:underline"
          >
            Start course →
          </a>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// TOOLS SECTION
// ==========================================

function ToolsSection(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Text left on desktop. Mobile: text above (order-1) */}
      <div className="order-1">
        <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-[28px] text-gray-800 leading-[1.2] tracking-tight">
          Master the most important
          <br />
          <span className="text-blue-600">AI tools & platforms.</span>
        </h3>
        <p className="font-body text-sm text-gray-500 mt-4 max-w-[360px] leading-relaxed">
          Your journey to proficiency: ChatGPT, Claude, Gemini, Midjourney, and more. One tool at a
          time, through bite-sized lessons.
        </p>
        <a href="/onboarding" className="btn-pill-primary mt-5 inline-block">
          Explore courses
        </a>
      </div>
      {/* Content right on desktop. Mobile: content below (order-2) */}
      <div className="order-2 flex justify-center lg:justify-end items-end gap-2 sm:gap-3">
        {AI_TOOLS.map((tool, i) => (
          <ToolBlock3D key={tool.name} tool={tool} index={i} />
        ))}
      </div>
    </div>
  );
}

// ==========================================
// SKILLS SECTION
// ==========================================

function SkillsSection(): React.JSX.Element {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 lg:items-start">
      {/* Cards LEFT on desktop. Mobile: stacked below text (order-2) */}
      <div className="order-2 lg:order-1 flex gap-3 overflow-x-auto scrollbar-hide -mx-2 px-5 py-5">
        {SKILL_DOMAINS.map((domain) => (
          <SkillCard key={domain.id} domain={domain} />
        ))}
      </div>
      {/* Text RIGHT on desktop. Mobile: above cards (order-1) */}
      <div className="order-1 lg:order-2 lg:min-w-0">
        <h3 className="font-serif font-bold text-xl sm:text-2xl md:text-[28px] text-gray-800 leading-[1.2] tracking-tight">
          Not only tools — also
          <br />
          <span className="text-blue-600">courses on specific skills.</span>
        </h3>
        <p className="font-body text-sm text-gray-500 mt-4 max-w-[360px] leading-relaxed">
          Leverage AI for different domains in work and life. Tap any card to see what each course
          covers.
        </p>
        <a href="/onboarding" className="btn-pill-primary mt-5 inline-block">
          Explore courses
        </a>
      </div>
    </div>
  );
}

// ==========================================
// MAIN
// ==========================================

export default function CourseTypesSection(): React.JSX.Element {
  const ref = useScrollAnimation();

  return (
    <section id="course" className="section-container py-10 sm:py-14 scroll-mt-20">
      <div ref={ref} className="animate-on-scroll max-w-[960px] mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            What you&apos;ll learn
          </p>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[42px] text-gray-800 leading-[1.1] tracking-tight">
            Our course content
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-500 mt-3 max-w-[520px] mx-auto leading-relaxed">
            Become proficient in AI and 10x your output — with 15‑min micro‑learning lessons. No
            tech background needed.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <Clock className="w-4 h-4 text-gray-400" />
            <span className="font-body text-xs text-gray-500">
              15 min per lesson · Bite-sized · Learn anywhere
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-16 sm:gap-20">
          <ToolsSection />
          <SkillsSection />
        </div>
      </div>
    </section>
  );
}
