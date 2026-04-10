/**
 * WhyUsExamples
 *
 * PURPOSE: Real examples of how people use AI Literacy Platform in their daily work/life.
 * Positioned between SocialProof and PersonasSection. Shows use cases and outcomes
 * that users can relate to.
 */

"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { SITE_BRAND_NAME } from "@/lib/site-brand";

const USER_EXAMPLES: {
  id: string;
  name: string;
  role: string;
  before: string;
  after: string;
  image: string;
}[] = [
  {
    id: "sarah",
    name: "Sarah Chen",
    role: "Marketing Manager",
    before: "Spent 3 hours on weekly reports",
    after: "Now done in 15 minutes with AI",
    image: "/images/landing/personas/sarah.jpg",
  },
  {
    id: "james",
    name: "James Rodriguez",
    role: "Sales Executive",
    before: "Dread creating sales decks from scratch",
    after: "AI drafts polished decks in 5 minutes",
    image: "/images/landing/personas/james.jpg",
  },
  {
    id: "priya",
    name: "Priya Sharma",
    role: "Consultant",
    before: "Struggled to keep up with industry news",
    after: "Gets curated AI briefings daily, stays ahead",
    image: "/images/landing/personas/priya.jpg",
  },
  {
    id: "david",
    name: "David Kim",
    role: "Small Business Owner",
    before: "Hated writing marketing copy",
    after: "Uses AI templates, sounds like himself",
    image: "/images/landing/personas/david.jpg",
  },
  {
    id: "maria",
    name: "Maria Garcia",
    role: "HR Director",
    before: "Manual training documentation took weeks",
    after: "AI creates professional docs in minutes",
    image: "/images/landing/personas/maria.jpg",
  },
  {
    id: "omar",
    name: "Omar Hassan",
    role: "Freelance Designer",
    before: "Clients waited days for mockup revisions",
    after: "Delivers same-day with AI image tools",
    image: "/images/landing/personas/omar.jpg",
  },
];

function UserExampleCard({ example }: { example: (typeof USER_EXAMPLES)[number] }) {
  return (
    <div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-transform duration-200 hover:-translate-y-1"
      style={{
        boxShadow: "0 2px 0 0 rgba(0, 0, 0, 0.03), 0 6px 12px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div className="relative h-32 sm:h-40 bg-gradient-to-br from-gray-50 to-gray-100">
        <Image
          src={example.image}
          alt={example.name}
          width={120}
          height={120}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white object-cover absolute bottom-0 left-1/2 transform translate-y-1/2"
        />
        <div className="pl-14 sm:pl-16 pt-2">
          <p className="font-body text-[10px] sm:text-xs font-semibold text-gray-400 uppercase tracking-widest">
            {example.role}
          </p>
          <p className="font-serif font-bold text-base sm:text-lg text-gray-800">{example.name}</p>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        <div className="flex items-start gap-3 mb-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
            <span className="text-red-600 text-sm">✗</span>
          </div>
          <div className="flex-1">
            <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-1">Before</p>
            <p className="font-body text-sm text-gray-700 leading-snug">{example.before}</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
            <span className="text-green-600 text-sm">✓</span>
          </div>
          <div className="flex-1">
            <p className="font-body text-xs text-gray-400 uppercase tracking-wide mb-1">After</p>
            <p className="font-body text-sm text-gray-700 leading-snug">{example.after}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhyUsExamples(): React.JSX.Element {
  const ref = useScrollAnimation();

  return (
    <section className="section-container py-10 sm:py-14 bg-gray-50">
      <div ref={ref} className="animate-on-scroll">
        <div className="text-center mb-8 sm:mb-12">
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-blue-600 mb-3">
            Why {SITE_BRAND_NAME}?
          </p>
          <h2 className="font-serif font-bold text-4xl sm:text-5xl md:text-[46px] text-gray-800 leading-[1.1] tracking-tight">
            Real results from
            <br />
            <span className="text-blue-600">real professionals.</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-gray-500 max-w-[580px] mx-auto mt-3 leading-relaxed">
            Microlearning. No tech jargon. Designed for busy professionals who want practical AI
            skills — not another video course. Interactive, gamified lessons you can do on your
            phone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {USER_EXAMPLES.map((example) => (
            <UserExampleCard key={example.id} example={example} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <p className="font-body text-sm text-gray-500 mb-4">
            Join thousands of professionals upgrading their skills with {SITE_BRAND_NAME}
          </p>
          <a
            href="/onboarding"
            className="inline-flex items-center justify-center px-8 py-3 rounded-full font-body text-base font-semibold text-white transition-all duration-150 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
              borderBottom: "4px solid #1D4ED8",
              boxShadow: "0 4px 0 0 #2563EB, 0 8px 16px rgba(37, 99, 235, 0.25)",
            }}
          >
            Start your journey
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M12 16L10 9L5 15"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
