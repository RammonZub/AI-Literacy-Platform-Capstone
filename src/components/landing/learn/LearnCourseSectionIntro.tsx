/**
 * LearnCourseSectionIntro
 *
 * PURPOSE: Shared intro block for course landing sections.
 *
 * CONTEXT:
 * The learn landing redesign uses repeated editorial section headers with an
 * eyebrow, one main heading, and optionally one short supporting sentence.
 *
 * DESIGN DECISION:
 * Keep this component intentionally small so sections stay visually consistent
 * without abstracting away their actual layout.
 */

import { cn } from "@/lib/utils";

interface LearnCourseSectionIntroProps {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export default function LearnCourseSectionIntro({
  eyebrow,
  title,
  body,
  align = "left",
  theme = "light",
}: LearnCourseSectionIntroProps) {
  const isDark = theme === "dark";

  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.28em]",
            isDark ? "text-[#FEFAF2]/60" : "text-gray-500",
          )}
        >
          {eyebrow}
        </p>
      ) : null}

      <h2
        className={cn(
          "mt-3 font-serif-display text-[1.7rem] font-normal leading-[1.08] tracking-tight sm:text-[1.95rem] md:text-[2.15rem]",
          isDark ? "text-[#FEFAF2]" : "text-[#16140C]",
        )}
      >
        {title}
      </h2>

      {body ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[15px] leading-7",
            align === "center" && "mx-auto",
            isDark ? "text-[#FEFAF2]/72" : "text-gray-600",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
