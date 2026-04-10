/**
 * Platform home page
 *
 * PURPOSE:
 * Render the learner dashboard with a clean, recommendation-first layout.
 *
 * RESPONSIBILITY:
 * - Surface the ordered onboarding recommendations stored for the user
 * - Make the first recommended module the clear primary action
 * - Present the remaining recommended modules in a lighter discovery grid
 * - Keep utility navigation available without the old XP and level stat cards
 *
 * DESIGN DIRECTION:
 * The layout is intentionally quieter than the previous dashboard. It removes
 * the noisy metric strip and focuses on one strong hero card plus a simple,
 * landing-inspired recommendation grid.
 */

"use client";

import Link from "next/link";
import PlatformPageShell from "@/components/layout/PlatformPageShell";
import PersonalizedModuleCard from "@/components/platform/home/PersonalizedModuleCard";
import { getModuleById } from "@/data/content";
import { useHomeJourneySection } from "@/lib/hooks/useHomeJourneySection";
import { useUser } from "@/lib/hooks/useUser";
import { platformRoutes } from "@/lib/routes/platform";

function getFirstName(fullName: string | null | undefined): string | null {
  if (!fullName) {
    return null;
  }

  const trimmedName = fullName.trim();
  if (trimmedName.length === 0) {
    return null;
  }

  const [firstName] = trimmedName.split(/\s+/);
  return firstName ?? null;
}

/**
 * Lightweight loading skeleton that matches the new visual structure.
 */
function DashboardRecommendationsSkeleton() {
  return (
    <div className="space-y-6">
      <div className="h-[430px] animate-pulse rounded-[1.8rem] bg-[#ECE8DF]" />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div className="h-[340px] animate-pulse rounded-[1.6rem] bg-[#ECE8DF]" />
        <div className="h-[340px] animate-pulse rounded-[1.6rem] bg-[#ECE8DF]" />
        <div className="h-[340px] animate-pulse rounded-[1.6rem] bg-[#ECE8DF]" />
      </div>
    </div>
  );
}

/**
 * Recommendation-first learner dashboard.
 */
export default function PlatformHomePage() {
  const { profile } = useUser();
  const { data, loading } = useHomeJourneySection();
  const firstName = getFirstName(profile?.full_name);
  const recommendationModules = (data?.recommendations ?? []).flatMap((recommendation) => {
    const contentModule = getModuleById(recommendation.moduleId);
    if (!contentModule) {
      return [];
    }

    return [{ module: contentModule, recommendation }];
  });
  const featuredRecommendation = recommendationModules[0] ?? null;
  const remainingRecommendations = recommendationModules.slice(1);

  return (
    <PlatformPageShell className="bg-white">
      <section className="mb-8 border-b border-black/6 pb-6 xl:mb-10 xl:pb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#78716C]">
          Dashboard
        </p>

        <div className="mt-4 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h1 className="font-serif-display text-[2.25rem] font-normal leading-[0.98] tracking-tight text-[#16140C] sm:text-[2.75rem]">
              {data?.title ?? "Recommended modules"}
            </h1>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#57534E]">
              {data?.subtitle ??
                "Ordered from your onboarding assessment. Start with the first module, then continue through the rest below."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {firstName ? (
              <span className="inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-sm text-[#44403C]">
                For {firstName}
              </span>
            ) : null}
            <Link
              href={platformRoutes.library}
              className="inline-flex rounded-full border border-[#16140C]/12 bg-[#16140C] px-4 py-2 text-sm font-medium text-[#FEFAF2] transition-colors hover:bg-[#2A271E]"
            >
              Browse all modules
            </Link>
          </div>
        </div>
      </section>

      {loading ? (
        <DashboardRecommendationsSkeleton />
      ) : recommendationModules.length > 0 ? (
        <>
          <section className="mb-8 grid gap-6 xl:grid-cols-[minmax(0,1.7fr)_minmax(20rem,0.8fr)] xl:items-stretch">
            {featuredRecommendation ? (
              <PersonalizedModuleCard
                module={featuredRecommendation.module}
                rank={1}
                totalRecommendations={recommendationModules.length}
                status={featuredRecommendation.recommendation.status}
                progress={featuredRecommendation.recommendation.progress}
                completedLessons={featuredRecommendation.recommendation.completedLessons}
                totalLessons={featuredRecommendation.recommendation.totalLessons}
                featured={true}
              />
            ) : null}

            <section className="rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-[0_12px_40px_rgba(15,23,42,0.04)] xl:flex xl:flex-col xl:justify-between xl:p-6">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#78716C]">
                  Shortcuts
                </p>
                <h2 className="mt-2 text-[1.25rem] font-semibold tracking-tight text-[#16140C] xl:text-[1.4rem]">
                  Need the broader catalog or the prompt library?
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#57534E] xl:max-w-[30ch]">
                  Use the library when you want to browse outside your personalized path, or jump
                  into prompts when you need something practical right away.
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-3 xl:mt-8 xl:flex-col xl:items-start">
                <Link
                  href={platformRoutes.library}
                  className="inline-flex rounded-full border border-[#16140C]/12 bg-[#16140C] px-4 py-2 text-sm font-medium text-[#FEFAF2] transition-colors hover:bg-[#2A271E]"
                >
                  All modules
                </Link>
                <Link
                  href="/platform/resources/prompts"
                  className="inline-flex rounded-full border border-[#16140C]/12 bg-transparent px-4 py-2 text-sm font-medium text-[#16140C] transition-colors hover:bg-black/[0.03]"
                >
                  Prompt library
                </Link>
              </div>
            </section>
          </section>

          {remainingRecommendations.length > 0 ? (
            <section className="mb-10">
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#78716C]">
                    Next in your path
                  </p>
                  <h2 className="mt-2 text-[1.4rem] font-semibold tracking-tight text-[#16140C]">
                    Continue through the rest in order
                  </h2>
                </div>
                <Link
                  href={platformRoutes.library}
                  className="text-sm font-medium text-[#16140C] underline-offset-4 hover:underline"
                >
                  View full library
                </Link>
              </div>

              <div className="grid gap-5 md:grid-cols-2 2xl:grid-cols-3">
                {remainingRecommendations.map((item, index) => (
                  <PersonalizedModuleCard
                    key={item.module.id}
                    module={item.module}
                    rank={index + 2}
                    totalRecommendations={recommendationModules.length}
                    status={item.recommendation.status}
                    progress={item.recommendation.progress}
                    completedLessons={item.recommendation.completedLessons}
                    totalLessons={item.recommendation.totalLessons}
                    featured={false}
                  />
                ))}
              </div>
            </section>
          ) : null}
        </>
      ) : (
        <section className="rounded-[1.8rem] border border-dashed border-black/10 bg-white/88 p-8 shadow-[0_12px_40px_rgba(15,23,42,0.04)]">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#78716C]">
            Personalized path unavailable
          </p>
          <h2 className="mt-3 font-serif-display text-[2rem] font-normal leading-[1.02] tracking-tight text-[#16140C]">
            Your dashboard will populate after onboarding finishes.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#57534E]">
            We couldn&apos;t find a saved recommendation order for this account yet. You can still
            browse the full library now or rerun onboarding to rebuild the personalized path.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={platformRoutes.library}
              className="inline-flex rounded-full border border-[#16140C]/12 bg-[#16140C] px-4 py-2 text-sm font-medium text-[#FEFAF2] transition-colors hover:bg-[#2A271E]"
            >
              Browse all modules
            </Link>
            <Link
              href="/onboarding"
              className="inline-flex rounded-full border border-[#16140C]/12 bg-transparent px-4 py-2 text-sm font-medium text-[#16140C] transition-colors hover:bg-black/[0.03]"
            >
              Rerun onboarding
            </Link>
          </div>
        </section>
      )}
    </PlatformPageShell>
  );
}
