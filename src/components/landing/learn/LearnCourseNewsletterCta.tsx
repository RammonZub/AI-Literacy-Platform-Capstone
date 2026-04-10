/**
 * LearnCourseNewsletterCta
 *
 * PURPOSE: Mid-page email capture block for course landing pages.
 *
 * CONTEXT:
 * The repo does not yet have a dedicated newsletter backend. This component
 * supports a provider action URL when available and otherwise falls back to a
 * real `mailto:` flow that preserves the typed email in the draft message.
 */

"use client";

import { useState } from "react";
import type { CourseNewsletterContent } from "@/types/course-landing";

interface LearnCourseNewsletterCtaProps {
  newsletter: CourseNewsletterContent;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function LearnCourseNewsletterCta({
  newsletter,
}: LearnCourseNewsletterCtaProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail(email)) {
      setError("Enter a valid email address to continue.");
      return;
    }

    setError(null);

    if (newsletter.actionUrl) {
      const form = event.currentTarget;
      form.submit();
      return;
    }

    const mailto = new URL(newsletter.fallbackHref);
    const existingBody = mailto.searchParams.get("body");
    const nextBody = `${existingBody ? `${existingBody}\n\n` : ""}Email: ${email}`;
    mailto.searchParams.set("body", nextBody);
    window.location.href = mailto.toString();
  };

  return (
    <section className="bg-white pb-16 pt-8">
      <div className="mx-auto max-w-[980px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[1.45rem] border border-[#dfe9f7] bg-[#F4F8FC] px-6 py-7 text-[#16140C] shadow-[0_10px_24px_rgba(15,23,42,0.03)] sm:px-8 md:px-9 md:py-8">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#007AFF]">
                Weekly AI briefing
              </p>
              <h2 className="max-w-xl text-[1.45rem] font-medium leading-tight tracking-tight sm:text-[1.65rem]">
                {newsletter.heading}
              </h2>
              <p className="mt-3 max-w-xl text-[15px] leading-7 text-gray-600">{newsletter.body}</p>
            </div>

            <form
              action={newsletter.actionUrl}
              method={newsletter.actionUrl ? "post" : undefined}
              onSubmit={handleSubmit}
              className="space-y-3"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email address"
                  className="min-h-[52px] flex-1 rounded-lg border border-[#70c8ff]/28 bg-white/88 px-4 text-base text-gray-900 outline-none backdrop-blur-sm transition-colors focus:border-[#007AFF]/18"
                />
                <button
                  type="submit"
                  className="min-h-[52px] rounded-md border border-[#007AFF]/10 bg-[#007AFF] px-5 text-base font-semibold text-white transition-transform duration-150 hover:-translate-y-0.5 hover:bg-[#0056CC]"
                >
                  {newsletter.actionLabel}
                </button>
              </div>

              {error ? <p className="text-sm text-red-600">{error}</p> : null}

              <p className="text-sm leading-6 text-gray-500">{newsletter.disclaimer}</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
