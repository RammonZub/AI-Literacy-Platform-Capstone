/**
 * TaskView Component
 *
 * PURPOSE: Dedicated task page with completion tracking and XP rewards
 *
 * CONTEXT: Part of the Quiz & Task Separation project. Tasks are now
 * separate pages with focused environment without lesson distractions.
 *
 * KEY RESPONSIBILITIES:
 * - Display task title with intro section (level, skill, focus)
 * - Show step-by-step instructions with copy functionality
 * - Provide starter prompt with copy button (if provided)
 * - Display deliverable description
 * - Show success criteria checklist
 * - Provide notes textarea (optional for user)
 * - "Mark Complete" button with XP indicator
 * - Show completion status with next steps
 *
 * IMPLEMENTATION NOTES:
 * - Uses iOS Blue (#007AFF) as primary color
 * - Mobile-first responsive design
 * - Follows existing component patterns (ChallengeView)
 * - Notes saved to progress_data on completion
 * - XP awarded on completion
 */

"use client";

import {
  Check,
  CheckCircle2,
  ChevronLeft,
  Copy,
  Target,
  Trophy,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import PlatformRail from "@/components/layout/PlatformRail";
import { cn } from "@/lib/utils";

/**
 * Task data interface
 */
export interface TaskData {
  id: string;
  title: string;
  purpose: string;
  instructions: string[];
  deliverable: string;
  estimatedTime?: string; // Optional - not displayed anymore
  starterPrompt?: string;
  successCriteria: string[];
  xpReward?: number;
  /** Difficulty level: 'Beginner' | 'Intermediate' | 'Advanced' */
  level?: string;
  /** Main skill being practiced */
  skill?: string;
  /** What the user will focus on */
  focus?: string;
}

interface TaskViewProps {
  /** Task data to display */
  task: TaskData;
  /** Lesson identifier */
  lessonId: string;
  /** Module identifier */
  moduleId: string;
  /** Whether the task is already completed */
  isCompleted: boolean;
  /** Optional existing notes from previous completion */
  existingNotes?: string;
  /** Callback when task is completed - passes notes string */
  onComplete?: (notes?: string) => void;
  /** Optional callback for back navigation (pre-completion only) */
  onBack?: () => void;
  /** Next lesson ID for navigation (null if last lesson) */
  nextLessonId?: string | null;
}

/**
 * TaskView component
 */
export function TaskView({
  task,
  lessonId,
  moduleId,
  isCompleted,
  existingNotes = "",
  onComplete,
  onBack,
  nextLessonId,
}: TaskViewProps) {
  const {
    title,
    purpose,
    instructions,
    deliverable,
    starterPrompt,
    successCriteria,
    xpReward = 50,
  } = task;
  const [copied, setCopied] = useState(false);
  const [notes, setNotes] = useState(existingNotes);
  const [isPending, startTransition] = useTransition();
  const [showSuccess, setShowSuccess] = useState(false);
  const router = useRouter();

  const handleCopy = async () => {
    if (!starterPrompt) return;
    try {
      await navigator.clipboard.writeText(starterPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleComplete = () => {
    startTransition(async () => {
      try {
        onComplete?.(notes.trim() || undefined);
        setShowSuccess(true);
      } catch (error) {
        console.error("Failed to complete task:", error);
      }
    });
  };

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      router.push(`/platform/module/${moduleId}/lesson/${lessonId}`);
    }
  };

  return (
    <PlatformRail variant="lesson" className="py-6 pb-24">
      {/* Header with back button */}
      <header className="mb-6">
        <button
          onClick={handleBackClick}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 transition-colors mb-4"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Back to lesson</span>
        </button>

        <h1 className="text-2xl font-bold text-black">{title}</h1>
      </header>

      {/* Purpose - why this matters */}
      <section className="mb-8">
        <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#E5B05C]">
          <p className="text-base text-gray-700 leading-relaxed">{purpose}</p>
        </div>
      </section>

      {/* Success notification */}
      {showSuccess && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-green-800">Task completed!</p>
            <p className="text-sm text-green-600">You earned {xpReward} XP</p>
          </div>
          <button
            onClick={() => setShowSuccess(false)}
            className="text-green-500 hover:text-green-700"
          >
            x
          </button>
        </div>
      )}

      {/* Instructions */}
      <section className="mb-8 space-y-3">
        <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
          <Target className="w-4 h-4" />
          Instructions
        </h2>
        <ol className="space-y-3 pl-1">
          {instructions.map((instruction, index) => (
            <li
              key={index}
              className="flex gap-3 text-base text-black leading-relaxed"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium flex items-center justify-center">
                {index + 1}
              </span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* Starter prompt (optional) */}
      {starterPrompt && (
        <section className="mb-8 space-y-2">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Starter prompt
          </span>
          <div className="relative bg-gray-900 rounded-xl p-5 overflow-x-auto border border-gray-700/50">
            <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
              {starterPrompt}
            </pre>
            <button
              onClick={handleCopy}
              className={cn(
                "absolute top-3 right-3 p-2 rounded-lg transition-all duration-200",
                copied
                  ? "bg-green-500/20 text-green-400"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white",
              )}
              aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
            >
              {copied ? (
                <Check className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </section>
      )}

      {/* Deliverable */}
      <section className="mb-8">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-700 mb-1">
            What you&apos;ll produce:
          </h3>
          <p className="text-base text-black">{deliverable}</p>
        </div>
      </section>

      {/* Success criteria */}
      {successCriteria && successCriteria.length > 0 && (
        <section className="mb-8 space-y-3">
          <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Success criteria
          </h2>
          <ul className="space-y-2">
            {successCriteria.map((criterion, index) => (
              <li
                key={index}
                className="flex items-start gap-2.5 text-sm text-gray-600"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-gray-300 mt-0.5" />
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Notes section (optional) */}
      <section className="mb-8">
        <label
          htmlFor="notes"
          className="text-sm font-medium text-gray-500 uppercase tracking-wide block mb-2"
        >
          Notes (optional)
        </label>
        <textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add your thoughts or reflections here..."
          className="w-full min-h-24 px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-y"
          disabled={isCompleted}
        />
      </section>

      {/* Complete button or completion status */}
      <section>
        {isCompleted ? (
          <div className="space-y-4">
            {/* Success card */}
            <div className="p-4 bg-[#7BC4A0]/10 border border-[#7BC4A0]/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#7BC4A0]/20 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[#5BA387]" />
                </div>
                <div>
                  <p className="font-semibold text-[#5BA387]">
                    Task completed!
                  </p>
                  <p className="text-sm text-[#5BA387]/80">
                    You earned {xpReward} XP
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation CTAs */}
            <div className="space-y-3">
              {/* Primary: Next Lesson or Go to Module */}
              {nextLessonId ? (
                <button
                  onClick={() =>
                    router.push(
                      `/platform/module/${moduleId}/lesson/${nextLessonId}`,
                    )
                  }
                  className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-[#007AFF] hover:bg-[#0056CC] transition-colors"
                >
                  Next Lesson →
                </button>
              ) : (
                <button
                  onClick={() => router.push(`/platform/module/${moduleId}`)}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-white bg-[#007AFF] hover:bg-[#0056CC] transition-colors"
                >
                  Go to Module
                </button>
              )}

              {/* Secondary escape */}
              <button
                onClick={() => router.push(`/platform/module/${moduleId}`)}
                className="w-full py-2 text-sm text-center text-[#8E8E93] hover:text-[#1A1A1A] transition-colors"
              >
                ← Back to module
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={handleComplete}
            disabled={isPending}
            className={cn(
              "w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-200",
              "flex items-center justify-center gap-2",
              isPending
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-lg hover:shadow-xl",
            )}
          >
            {isPending ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Completing...</span>
              </>
            ) : (
              <>
                <Trophy className="w-5 h-5" />
                <span>Mark Complete (+{xpReward} XP)</span>
              </>
            )}
          </button>
        )}
      </section>
    </PlatformRail>
  );
}
