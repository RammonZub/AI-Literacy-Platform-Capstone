/**
 * Challenge Card Component
 *
 * PURPOSE: Standard 28-Day AI Challenge card for lists and grids
 *
 * CONTEXT: Used in the "Challenges" section (bottom of page).
 * Matches the design of ModuleCard (split layout, image top, content bottom).
 *
 * KEY RESPONSIBILITIES:
 * - Display challenge title
 * - Info icon triggers modal with ALL 28 lessons
 * - Consistent design with ModuleCard
 *
 * IMPLEMENTATION NOTES:
 * - Image Top (1/3 height)
 * - Content Bottom (White background)
 * - Info icon top right
 */

"use client";

import { ArrowRight, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import InfoModal from "@/components/ui/InfoModal";
import { getChallengeModule, getModuleLessons } from "@/data/content";
import { platformPaths } from "@/lib/routes/platform";

interface ChallengeCardProps {
  /** Optional click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Current day of the challenge (1-28) */
  currentDay?: number;
  /** Total days in challenge (default: 28) */
  totalDays?: number;
}

// Image URLs for cards - using local organized images (WebP for optimization)
const CHALLENGE_IMAGE = "/images/courses/modules/28-day-challenge.webp";

/**
 * ChallengeCard Component
 *
 * @returns Standard challenge card for lists/grids
 */
export default function ChallengeCard({
  onClick,
  className = "",
  currentDay = 1,
  totalDays = 28,
}: ChallengeCardProps) {
  const router = useRouter();
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [showFullCurriculum, setShowFullCurriculum] = useState(false);

  // Get the challenge module dynamically (finds module with courseType: 'challenge')
  const challengeModule = getChallengeModule();
  const allLessons = challengeModule ? getModuleLessons(challengeModule.id) : [];

  const handleClick = () => {
    // Navigate to the module page (shows all 28 days in journey view)
    if (challengeModule) {
      router.push(platformPaths.module(challengeModule.id));
    }
  };

  const handleInfoClick = () => {
    // Open info modal to show all 28 lessons
    setIsInfoModalOpen(true);
  };

  // Calculate total time
  const totalMinutes = allLessons.reduce((sum, lesson) => sum + (lesson.estimatedMinutes || 12), 0);
  const totalHours = Math.round(totalMinutes / 60);

  return (
    <>
      <div
        onClick={handleClick}
        className="group relative flex flex-col rounded-lg overflow-hidden cursor-pointer bg-card border border-border shadow-sm hover:shadow-md transition-all duration-200"
        style={{
          height: "240px", // Matches ModuleCard height
        }}
      >
        {/* ==========================================
            TOP: IMAGE (Approx 1/3)
            ========================================== */}
        <div className="relative h-24 w-full shrink-0 overflow-hidden">
          <div
            className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url(${CHALLENGE_IMAGE})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/5" />

          {/* Info Icon - Top Right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleInfoClick();
            }}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm transition-all z-20"
            aria-label="More information"
          >
            <Info className="w-3.5 h-3.5 text-white" strokeWidth={2} />
          </button>
        </div>

        {/* ==========================================
            BOTTOM: CONTENT
            ========================================== */}
        <div className="flex-1 flex flex-col p-3 bg-white">
          <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-tight mb-1">
            28-Day AI Challenge
          </h3>

          <p className="text-xs text-muted-foreground line-clamp-2 mb-auto">
            Build practical AI habits with ChatGPT, Claude, Gemini, and Midjourney in 28 days.
          </p>

          {/* Details Section */}
          <div className="mt-3 pt-3 border-t border-border/50">
            <div className="flex items-center justify-between text-[10px] text-muted-foreground">
              <span>28 days</span>
              <span>~{totalHours}h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info Modal with Expandable 28-Day Curriculum */}
      <InfoModal
        isOpen={isInfoModalOpen}
        onClose={() => {
          setIsInfoModalOpen(false);
          setShowFullCurriculum(false);
        }}
        title="AI Challenge"
        coverImage={CHALLENGE_IMAGE}
        coverTitle="AI Challenge"
        description="Transform from beginner to AI power user in just 28 days. Master 4 essential AI tools with hands-on daily practice."
        details={[
          "28 bite-sized lessons (~12 min/day)",
          "Practice with ChatGPT, Claude, Gemini, and Midjourney",
          "6 chapters from foundations to mastery",
          "Real-world exercises you can apply immediately",
          "No gamification - just practical skills",
        ]}
        footer={
          <div className="space-y-4 pt-2">
            {/* Toggle Button */}
            <button
              onClick={() => setShowFullCurriculum(!showFullCurriculum)}
              className="w-full py-2 px-4 bg-foreground text-background rounded-lg text-sm font-semibold transition-colors hover:opacity-90"
            >
              {showFullCurriculum ? "Show Less" : "View All 28 Days"}
            </button>

            {/* Expanded Curriculum List */}
            {showFullCurriculum && (
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {allLessons.map((lesson, index) => (
                  <div
                    key={lesson.id}
                    className="flex items-start gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    {/* Day Badge */}
                    <div className="shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-xs font-semibold text-foreground">{index + 1}</span>
                    </div>

                    {/* Lesson Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{lesson.title}</p>
                      <p className="text-xs text-muted-foreground">
                        {lesson.estimatedMinutes || 12} min
                      </p>
                    </div>

                    {/* Chapter Indicator */}
                    <div className="shrink-0">
                      <span className="text-xs px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                        {lesson.chapterId.split("-")[0]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Summary Stats */}
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">28</p>
                <p className="text-xs text-muted-foreground">Days</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">6</p>
                <p className="text-xs text-muted-foreground">Chapters</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">~{totalHours}h</p>
                <p className="text-xs text-muted-foreground">Total</p>
              </div>
            </div>

            {/* Your 28-Day Journey - Chapter breakdown */}
            <div className="space-y-3 pt-2">
              <h4 className="font-semibold text-foreground text-sm">Your 28-Day Transformation</h4>
              <div className="space-y-3">
                {challengeModule?.chapters.map((chapter, index) => {
                  const startDay =
                    chapter.lessons.length > 0
                      ? allLessons.findIndex((l) => l.id === chapter.lessons[0].id) + 1
                      : index * 5 + 1;
                  const endDay = startDay + chapter.lessons.length - 1;

                  return (
                    <div key={chapter.id} className="border-l border-border pl-3">
                      <p className="text-xs font-semibold text-foreground mb-1">
                        {chapter.lessons.length > 0
                          ? `Days ${startDay}-${endDay}: ${chapter.title}`
                          : chapter.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {chapter.description
                          ? chapter.description.length > 80
                            ? chapter.description.substring(0, 80) + "..."
                            : chapter.description
                          : `${chapter.lessons.length} lessons`}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Commitment */}
            <div className="bg-muted rounded-lg p-3 text-center">
              <p className="text-xs font-semibold text-foreground">Just 12 minutes/day</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                28 lessons • 6 chapters • 4 AI tools mastered
              </p>
            </div>
          </div>
        }
      />
    </>
  );
}
