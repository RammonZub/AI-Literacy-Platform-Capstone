/**
 * LearnCourseNavbar
 *
 * PURPOSE: Dedicated sticky navigation for `/learn/[slug]` pages.
 *
 * CONTEXT:
 * The generic landing navbar points to homepage anchors that do not exist on
 * course pages. This navbar keeps course-page navigation truthful and focused.
 */

"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PlatformWordmarkLetters } from "@/components/shared/PlatformWordmarkLetters";

const NAV_ITEMS = [
  { label: "Skills", href: "#skills" },
  { label: "Why now", href: "#why-now" },
  { label: "Overview", href: "#program-overview" },
  { label: "Certificate", href: "#certificate" },
  { label: "FAQ", href: "#faq" },
];

export default function LearnCourseNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleAnchorClick = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="sticky top-0 z-50 border-b border-[#007AFF]/10 bg-white/94 backdrop-blur-md"
      >
        <nav className="mx-auto flex h-[72px] max-w-[980px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <PlatformWordmarkLetters size="md" includeAI={false} />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleAnchorClick(item.href)}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-[#16140C]"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-black/20 hover:text-gray-900"
            >
              Sign in
            </Link>
            <Link
              href="/onboarding"
              className="rounded-md bg-[#007AFF] px-4 py-2 text-sm font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#0056CC]"
            >
              Start Learning AI
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-black/5 md:hidden"
            aria-label="Open course navigation"
            aria-expanded={isOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {isOpen ? (
        <>
          <div className="fixed inset-0 z-[60] bg-black/35" onClick={() => setIsOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-[61] flex w-[84%] max-w-sm flex-col bg-white px-6 py-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <PlatformWordmarkLetters size="sm" includeAI={false} />
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-700 transition-colors hover:bg-black/5"
                aria-label="Close course navigation"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-10 flex flex-1 flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleAnchorClick(item.href)}
                  className="rounded-2xl px-4 py-4 text-left text-xl font-medium text-gray-800 transition-colors hover:bg-black/5"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="space-y-3 border-t border-black/10 pt-5">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-lg border border-black/10 px-4 py-3 text-center text-base font-semibold text-gray-700"
              >
                Sign in
              </Link>
              <Link
                href="/onboarding"
                onClick={() => setIsOpen(false)}
                className="block w-full rounded-md bg-[#007AFF] px-4 py-3 text-center text-base font-semibold text-white"
              >
                Start Learning AI
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
