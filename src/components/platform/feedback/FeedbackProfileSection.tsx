/**
 * FeedbackProfileSection
 *
 * Platform feedback survey displayed in the profile page.
 * Triggered by a settings-row button; opens a bottom sheet with five
 * 1–10 multiple-choice rating questions covering recommendation fit,
 * first lesson experience, ease of navigation, micro-learning format fit,
 * and overall satisfaction. Results are saved to users.metadata via a
 * server action.
 *
 * Key Responsibilities:
 * - Render a "Feedback" button matching the profile settings row style
 * - Open a bottom sheet with 5 structured rating questions (1–10 each)
 * - Prevent re-submission if feedback was already recorded
 * - Call saveRecommendationFeedback server action on submit
 * - Show a success state after submission
 *
 * Dependencies:
 * - lucide-react: Icons
 * - @/app/platform/profile/actions: saveRecommendationFeedback server action
 *
 * Usage Example:
 * ```tsx
 * <FeedbackProfileSection
 *   recommendedModuleId="productivity_basics"
 *   existingFeedback={user.metadata?.recommendation_feedback}
 * />
 * ```
 *
 * @module components/platform/feedback
 * @created 2026-04-09
 */

"use client";

import { CheckCircle, ChevronRight, MessageSquare, X } from "lucide-react";
import { useCallback, useState, useTransition } from "react";
import { saveRecommendationFeedback } from "@/app/platform/profile/actions";
import { cn } from "@/lib/utils";

// ==========================================
// TYPES
// ==========================================

interface ExistingFeedback {
  submitted_at: string;
  recommended_module_id: string;
  q_recommendation_fit: number;
  q_first_lesson: number;
  q_ease_of_use: number;
  q_microlearning_fit: number;
  q_overall_satisfaction: number;
}

interface FeedbackProfileSectionProps {
  className?: string;
  recommendedModuleId?: string | null;
  existingFeedback?: ExistingFeedback | null;
}

interface RatingState {
  q_recommendation_fit: number | null;
  q_first_lesson: number | null;
  q_ease_of_use: number | null;
  q_microlearning_fit: number | null;
  q_overall_satisfaction: number | null;
}

const QUESTIONS: {
  id: keyof RatingState;
  label: string;
  sublabel: string;
  lowLabel: string;
  highLabel: string;
}[] = [
  {
    id: "q_recommendation_fit",
    label: "How well did your recommended first module match what you actually need?",
    sublabel: "Think about the topic and difficulty level",
    lowLabel: "Wrong fit",
    highLabel: "Perfect match",
  },
  {
    id: "q_first_lesson",
    label: "How would you rate your first lesson experience?",
    sublabel: "Content quality, clarity, and engagement",
    lowLabel: "Confusing / disappointing",
    highLabel: "Clear and engaging",
  },
  {
    id: "q_ease_of_use",
    label: "How easy was it to navigate and find your way around the platform?",
    sublabel: "From onboarding through to your first lesson",
    lowLabel: "Very confusing",
    highLabel: "Completely intuitive",
  },
  {
    id: "q_microlearning_fit",
    label: "How well does the short-lesson format (10–15 min) fit into your daily routine?",
    sublabel: "Does bite-sized learning work for your life?",
    lowLabel: "Doesn't fit at all",
    highLabel: "Perfect for my schedule",
  },
  {
    id: "q_overall_satisfaction",
    label: "Overall, how satisfied are you with the platform?",
    sublabel: "Your honest overall impression so far",
    lowLabel: "Very dissatisfied",
    highLabel: "Very satisfied",
  },
];

const MODULE_LABELS: Record<string, string> = {
  ai_foundations: "AI Foundations",
  productivity_basics: "AI Productivity Basics",
  prompt_engineering: "Prompt Engineering",
  content_creation: "AI Content Creation",
  chatgpt: "ChatGPT Mastery",
  claude: "Claude AI Mastery",
  gemini: "Google Gemini Mastery",
  midjourney: "Midjourney Mastery",
  workflows: "Workflow & Automation",
  "28_day_challenge": "28-Day AI Challenge",
};

// ==========================================
// SUB-COMPONENTS
// ==========================================

function RatingPicker({
  questionId,
  value,
  onChange,
}: {
  questionId: string;
  value: number | null;
  onChange: (v: number) => void;
}) {
  return (
    <div className="flex gap-1.5 flex-wrap">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-label={`Rate ${n} for ${questionId}`}
          className={cn(
            "w-8 h-8 rounded-full text-xs font-bold border-2 transition-all active:scale-95 select-none",
            value === n
              ? "bg-primary text-primary-foreground border-primary shadow-sm"
              : "bg-background text-foreground border-border hover:border-primary/60 hover:text-primary",
          )}
        >
          {n}
        </button>
      ))}
    </div>
  );
}

function SuccessState({ feedback }: { feedback: ExistingFeedback }) {
  const date = new Date(feedback.submitted_at).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const summaryRows: { label: string; value: number }[] = [
    { label: "Recommendation fit", value: feedback.q_recommendation_fit },
    { label: "First lesson", value: feedback.q_first_lesson },
    { label: "Ease of use", value: feedback.q_ease_of_use },
    { label: "Micro-learning format", value: feedback.q_microlearning_fit },
    { label: "Overall satisfaction", value: feedback.q_overall_satisfaction },
  ];

  return (
    <div className="space-y-5 py-4">
      <div className="flex flex-col items-center gap-3 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-50 flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-emerald-500" />
        </div>
        <div>
          <p className="text-base font-bold text-foreground">Feedback submitted</p>
          <p className="text-sm text-muted-foreground mt-0.5">Recorded on {date}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-muted/30 divide-y divide-border/50">
        {summaryRows.map((row) => (
          <div key={row.label} className="flex items-center justify-between px-4 py-3">
            <span className="text-sm text-muted-foreground">{row.label}</span>
            <span className="text-sm font-bold text-foreground">{row.value} / 10</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==========================================
// MAIN COMPONENT
// ==========================================

export function FeedbackProfileSection({
  className,
  recommendedModuleId,
  existingFeedback,
}: FeedbackProfileSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [ratings, setRatings] = useState<RatingState>({
    q_recommendation_fit: null,
    q_first_lesson: null,
    q_ease_of_use: null,
    q_microlearning_fit: null,
    q_overall_satisfaction: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedAt, setSubmittedAt] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const answeredCount = Object.values(ratings).filter((v) => v !== null).length;
  const allAnswered = answeredCount === QUESTIONS.length;
  const hasExisting = existingFeedback != null || submitted;

  const moduleLabel = recommendedModuleId
    ? (MODULE_LABELS[recommendedModuleId] ?? recommendedModuleId)
    : "your recommended module";

  const handleRatingChange = useCallback(
    (key: keyof RatingState, value: number) => {
      setRatings((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const handleSubmit = useCallback(() => {
    if (!allAnswered || !recommendedModuleId) return;

    startTransition(async () => {
      setError(null);
      const result = await saveRecommendationFeedback({
        q_recommendation_fit: ratings.q_recommendation_fit!,
        q_first_lesson: ratings.q_first_lesson!,
        q_ease_of_use: ratings.q_ease_of_use!,
        q_microlearning_fit: ratings.q_microlearning_fit!,
        q_overall_satisfaction: ratings.q_overall_satisfaction!,
        recommended_module_id: recommendedModuleId,
      });

      if (result.success) {
        setSubmittedAt(new Date().toISOString());
        setSubmitted(true);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    });
  }, [allAnswered, recommendedModuleId, ratings]);

  // Merge locally-submitted state with server-passed existingFeedback for the success view
  const feedbackForDisplay: ExistingFeedback | null =
    existingFeedback ??
    (submitted && submittedAt
      ? {
          submitted_at: submittedAt,
          recommended_module_id: recommendedModuleId ?? "",
          q_recommendation_fit: ratings.q_recommendation_fit ?? 0,
          q_first_lesson: ratings.q_first_lesson ?? 0,
          q_ease_of_use: ratings.q_ease_of_use ?? 0,
          q_microlearning_fit: ratings.q_microlearning_fit ?? 0,
          q_overall_satisfaction: ratings.q_overall_satisfaction ?? 0,
        }
      : null);

  return (
    <>
      {/* ── Trigger row (matches profile settings card style) ── */}
      <div className={cn("space-y-4", className)}>
        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest px-1">
          Feedback
        </h3>
        <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="w-full p-4 flex items-center justify-between hover:bg-muted/50 transition-all active:bg-muted"
          >
            <div className="flex items-center gap-4">
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center",
                  hasExisting
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-primary/10 text-primary",
                )}
              >
                {hasExisting ? (
                  <CheckCircle className="w-5 h-5" />
                ) : (
                  <MessageSquare className="w-5 h-5" />
                )}
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-foreground">
                  Share feedback
                </div>
                <div className="text-xs text-muted-foreground">
                  {hasExisting
                    ? "Feedback submitted — tap to view your ratings"
                    : `5 questions · takes about 1 minute`}
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* ── Bottom sheet ── */}
      {isOpen && (
        <>
          <button
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm animate-in fade-in duration-200"
            aria-label="Close feedback"
          />

          <div className="fixed bottom-0 left-0 right-0 z-50 bg-card rounded-t-3xl shadow-2xl animate-in slide-in-from-bottom duration-300 max-h-[92dvh] flex flex-col">
            {/* Sheet header */}
            <div className="flex items-center justify-between p-6 pb-4 flex-shrink-0">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {hasExisting ? "Your feedback" : "Share feedback"}
                </h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {hasExisting
                    ? "Thank you — your ratings are recorded"
                    : `First module: ${moduleLabel}`}
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-9 h-9 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-5 h-5 text-muted-foreground" strokeWidth={2} />
              </button>
            </div>

            {/* Sheet body */}
            <div className="overflow-y-auto flex-1 px-6 pb-8">
              {hasExisting && feedbackForDisplay ? (
                <SuccessState feedback={feedbackForDisplay} />
              ) : (
                <div className="space-y-7">
                  {/* Progress indicator */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-300 rounded-full"
                        style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground font-medium tabular-nums">
                      {answeredCount}/{QUESTIONS.length}
                    </span>
                  </div>

                  {QUESTIONS.map((q, idx) => (
                    <div key={q.id} className="space-y-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground leading-snug">
                          <span className="text-muted-foreground mr-1.5">{idx + 1}.</span>
                          {q.label}
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">{q.sublabel}</p>
                      </div>
                      <RatingPicker
                        questionId={q.id}
                        value={ratings[q.id]}
                        onChange={(v) => handleRatingChange(q.id, v)}
                      />
                      <div className="flex justify-between text-[10px] text-muted-foreground font-medium">
                        <span>1 — {q.lowLabel}</span>
                        <span>{q.highLabel} — 10</span>
                      </div>
                    </div>
                  ))}

                  {error && (
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={!allAnswered || isPending || !recommendedModuleId}
                    className={cn(
                      "w-full h-12 rounded-2xl font-bold text-sm transition-all",
                      allAnswered && !isPending && recommendedModuleId
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98]"
                        : "bg-muted text-muted-foreground cursor-not-allowed",
                    )}
                  >
                    {isPending ? "Submitting…" : "Submit Feedback"}
                  </button>

                  {!recommendedModuleId && (
                    <p className="text-xs text-muted-foreground text-center">
                      Complete onboarding first to unlock feedback.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default FeedbackProfileSection;
