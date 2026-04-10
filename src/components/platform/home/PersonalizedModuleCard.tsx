/**
 * PersonalizedModuleCard
 *
 * PURPOSE:
 * Render a dashboard recommendation card that borrows the visual language of
 * the landing-page "Continue exploring" course cards while staying practical
 * for an authenticated product surface.
 *
 * RESPONSIBILITY:
 * - Present one recommended module with its artwork, status, and progress
 * - Support both the featured first recommendation and the smaller follow-up
 *   cards in the dashboard grid
 * - Keep copy terse and action-oriented so the page reads like product UI
 *
 * DESIGN:
 * - Large image plane for immediate recognition
 * - Dark glass content panel for clean contrast and continuity with the
 *   landing-page discovery cards the user referenced
 * - Minimal metadata: rank, completion, lesson count, and one clear action
 */

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { platformPaths } from "@/lib/routes/platform";
import { cn } from "@/lib/utils/cn";
import type { Module } from "@/types/content";

type PersonalizedModuleCardStatus = "not_started" | "in_progress" | "completed";

interface PersonalizedModuleCardProps {
  module: Module;
  rank: number;
  totalRecommendations: number;
  status: PersonalizedModuleCardStatus;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  featured: boolean;
}

function getActionLabel(status: PersonalizedModuleCardStatus): string {
  if (status === "completed") {
    return "Review module";
  }

  if (status === "in_progress") {
    return "Continue module";
  }

  return "Start module";
}

function getStatusChipLabel(props: {
  featured: boolean;
  rank: number;
  totalRecommendations: number;
}): string {
  if (props.featured) {
    return `Start here · ${props.rank} of ${props.totalRecommendations}`;
  }

  return `Module ${props.rank}`;
}

function getProgressLabel(props: {
  status: PersonalizedModuleCardStatus;
  progress: number;
  completedLessons: number;
  totalLessons: number;
}): string {
  if (props.status === "completed") {
    return "Completed";
  }

  if (props.status === "in_progress") {
    return `${Math.round(props.progress)}% complete`;
  }

  return "Ready to start";
}

/**
 * Render a single personalized dashboard card.
 */
export default function PersonalizedModuleCard({
  module,
  rank,
  totalRecommendations,
  status,
  progress,
  completedLessons,
  totalLessons,
  featured,
}: PersonalizedModuleCardProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress));
  const actionLabel = getActionLabel(status);
  const statusChipLabel = getStatusChipLabel({
    featured,
    rank,
    totalRecommendations,
  });
  const progressLabel = getProgressLabel({
    status,
    progress: clampedProgress,
    completedLessons,
    totalLessons,
  });

  return (
    <Link
      href={platformPaths.module(module.id)}
      className={cn(
        "group relative block overflow-hidden rounded-[1.7rem] bg-[#F4F8FC] shadow-[0_18px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1",
        featured ? "min-h-[430px] sm:min-h-[500px] xl:min-h-[560px]" : "min-h-[340px] xl:min-h-[360px]",
      )}
    >
      <div className="absolute inset-0">
        <Image
          src={module.imageUrl}
          alt={module.title}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1100px"
              : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 360px"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-black/8" />
      </div>

      <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 sm:left-5 sm:top-5">
        <span className="inline-flex rounded-full border border-[#F4F8FC]/60 bg-[#F4F8FC]/88 px-3 py-1 text-[11px] font-medium tracking-[0.02em] text-[#16140C] shadow-[0_8px_24px_rgba(255,255,255,0.2)] backdrop-blur-md">
          {statusChipLabel}
        </span>
        <span className="inline-flex rounded-full border border-white/18 bg-black/18 px-3 py-1 text-[11px] font-medium text-white/88 backdrop-blur-md">
          {module.category}
        </span>
      </div>

      <div
        className={cn(
          "absolute inset-x-4 bottom-4 rounded-[1.3rem] border border-white/16 bg-[#16140C]/38 p-4 text-[#F4F8FC] backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:p-5",
          featured ? "sm:max-w-[34rem] xl:max-w-[40rem] xl:p-6" : "",
        )}
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#F4F8FC]/72">
          Recommended path
        </p>
        <h2
          className={cn(
            "mt-2 tracking-tight text-[#F4F8FC]",
            featured
              ? "font-serif-display text-[2rem] font-normal leading-[1.02] sm:text-[2.35rem] xl:text-[2.85rem]"
              : "text-[1.45rem] font-semibold leading-[1.08]",
          )}
        >
          {module.title}
        </h2>
        <p
          className={cn(
            "mt-2 text-[#F4F8FC]/80",
            featured
              ? "max-w-[42ch] text-[15px] leading-6 xl:max-w-[48ch] xl:text-[16px] xl:leading-7"
              : "line-clamp-2 text-[13px] leading-5",
          )}
        >
          {module.description}
        </p>

        <div className="mt-4 border-t border-white/14 pt-4">
          <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-white/14">
            <div
              className="h-full rounded-full transition-[width] duration-500"
              style={{
                width: `${clampedProgress}%`,
                background: `linear-gradient(90deg, ${module.color.from} 0%, ${module.color.to} 100%)`,
              }}
            />
          </div>

          <div className="flex items-center justify-between gap-3 text-[12px] text-[#F4F8FC]/78">
            <span>{progressLabel}</span>
            <span>{totalLessons} lessons</span>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-[12px] text-[#F4F8FC]/68">
              {completedLessons} completed so far
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-[12px] font-medium text-[#F4F8FC] transition-colors group-hover:bg-white/14">
              {actionLabel}
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
