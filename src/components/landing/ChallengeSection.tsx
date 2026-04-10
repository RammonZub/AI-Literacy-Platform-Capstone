/**
 * ChallengeSection
 *
 * PURPOSE: Show the 28-day challenge in one clean card — tools and skills
 * you'll unlock, benefits, and CTA.
 */

"use client";

import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Cog,
  ListChecks,
  type LucideIcon,
  Search,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";

/* ── Day data ──────────── */

type DayItem =
  | { type: "tool"; day: number; logo: string; label: string }
  | { type: "skill"; day: number; icon: LucideIcon; label: string; color: string };

const days: DayItem[] = [
  { type: "tool", day: 1, logo: "/images/landing/logos/chatgpt.svg", label: "ChatGPT" },
  { type: "skill", day: 2, icon: Zap, label: "Prompt Engineering", color: "hsl(var(--warning))" },
  { type: "tool", day: 3, logo: "/images/landing/logos/claude.svg", label: "Claude" },
  { type: "tool", day: 4, logo: "/images/landing/logos/gemini.svg", label: "Gemini" },
  { type: "skill", day: 5, icon: Brain, label: "Creative Thinking", color: "hsl(var(--coral))" },
  { type: "skill", day: 6, icon: Search, label: "Research Skills", color: "hsl(217 91% 60%)" },
  { type: "skill", day: 7, icon: Search, label: "Deep Research", color: "hsl(217 91% 60%)" },
  { type: "tool", day: 8, logo: "/images/landing/logos/midjourney.svg", label: "Midjourney" },
  { type: "skill", day: 9, icon: BarChart3, label: "Productivity", color: "hsl(var(--success))" },
  { type: "skill", day: 10, icon: Cog, label: "Workflow Design", color: "hsl(var(--primary-600))" },
  { type: "skill", day: 11, icon: Target, label: "Strategy", color: "hsl(var(--primary-600))" },
  { type: "tool", day: 12, logo: "/images/landing/logos/chatgpt.svg", label: "ChatGPT" },
  {
    type: "skill",
    day: 13,
    icon: ListChecks,
    label: "Task Management",
    color: "hsl(var(--warning))",
  },
  { type: "skill", day: 14, icon: Brain, label: "Judgment", color: "hsl(var(--coral))" },
  { type: "skill", day: 15, icon: Cog, label: "Automation", color: "hsl(var(--coral))" },
];

const benefits = [
  "AI Mastery",
  "10x Productivity",
  "Creative Thinking",
  "Deep Research",
  "Strategy & Planning",
  "Task Management",
  "Better Work Output",
  "Automation",
];

const ToolBlock = ({ item }: { item: Extract<DayItem, { type: "tool" }> }) => (
  <div className="flex flex-col items-center gap-2 shrink-0">
    <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
      <Image src={item.logo} alt={item.label} width={32} height={32} className="object-contain" />
    </div>
    <span className="font-body text-[10px] font-medium text-gray-500 text-center max-w-[64px] leading-tight">
      Day {item.day}
    </span>
  </div>
);

const SkillBlock = ({ item }: { item: Extract<DayItem, { type: "skill" }> }) => {
  const Icon = item.icon;
  return (
    <div className="flex flex-col items-center gap-2 shrink-0">
      <div className="w-14 h-14 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-sm">
        <Icon className="w-7 h-7" style={{ color: item.color }} strokeWidth={1.8} />
      </div>
      <span className="font-body text-[10px] font-medium text-gray-500 text-center max-w-[64px] leading-tight">
        Day {item.day}
      </span>
    </div>
  );
};

const SeeMoreBlock = () => (
  <a href="/onboarding" className="flex flex-col items-center gap-2 shrink-0 cursor-pointer group">
    <div className="w-14 h-14 rounded-lg border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center group-hover:border-blue-400 group-hover:bg-blue-50 transition-colors">
      <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
    </div>
    <span className="font-body text-[10px] font-semibold text-blue-600 text-center max-w-[64px] leading-tight">
      See more
    </span>
  </a>
);

export default function ChallengeSection(): React.JSX.Element {
  const ref = useScrollAnimation();

  return (
    <section id="challenge" className="section-padding bg-background scroll-mt-20">
      <div ref={ref} className="section-container animate-on-scroll">
        <div
          className="rounded-2xl border border-gray-200 bg-white overflow-hidden"
          style={{
            boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.03), 0 8px 24px rgba(0, 0, 0, 0.06)",
          }}
        >
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[46px] text-gray-800 leading-tight tracking-tight">
                  Transform your skills in 28 days
                </h2>
                <p className="font-body text-sm text-gray-500 mt-2 max-w-lg">
                  Beyond courses — join our 28-day challenge. Learn one tool or skill per day,
                  become proficient, and earn your certificate in just 28 days.
                </p>
              </div>
              <a href="/onboarding" className="btn-pill-primary shrink-0 w-fit">
                Join the challenge
              </a>
            </div>

            <div className="mb-5">
              <h3 className="font-body text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
                Tools & skills you&apos;ll unlock
              </h3>
              <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide pb-2 -mx-1 px-1">
                {days.map((d) =>
                  d.type === "tool" ? (
                    <ToolBlock key={`${d.type}-${d.day}-${d.label}`} item={d} />
                  ) : (
                    <SkillBlock key={`${d.type}-${d.day}-${d.label}`} item={d} />
                  ),
                )}
                <SeeMoreBlock />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {benefits.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-1.5 font-body text-xs text-gray-600 border border-gray-200 rounded-full px-3 py-1.5 bg-gray-50"
                >
                  <Check className="w-3.5 h-3.5 text-blue-600" />
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
