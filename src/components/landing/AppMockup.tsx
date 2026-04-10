/**
 * AppMockup Component
 *
 * PURPOSE: Realistic iPhone mockup showing a Duolingo-style learning path UI.
 * Gives visitors a preview of the app's journey/module view with lesson nodes
 * arranged in a vertical path pattern.
 *
 * CONTEXT: Used inside “why us” landing sections as the right-column visual.
 * Inspired by Duolingo's lesson path — circle nodes with states (completed,
 * current, locked) connected by a subtle vertical line, grouped under unit headers.
 *
 * IMPLEMENTATION NOTES:
 * - iPhone frame uses border-radius + border to simulate device chrome
 * - Notch/Dynamic Island at top for realism
 * - Learning path nodes alternate left-center-right for visual interest
 * - Node states: completed (green check), current (blue play), locked (gray lock)
 * - Slight 3D tilt on desktop with hover-to-flatten interaction
 * - Floating badges around the phone for benefit callouts
 */

import { Check, Lock, Play } from "lucide-react";

// ==========================================
// TYPES & DATA
// ==========================================

/** Represents a single lesson node in the learning path */
interface LessonNode {
  /** Display name shown below the node circle */
  label: string;
  /** Visual state determines icon and color */
  status: "completed" | "current" | "locked";
  /** Horizontal alignment for the snaking path effect */
  align: "left" | "center" | "right";
}

/** Lesson data for the mockup learning path */
const LESSONS: LessonNode[] = [
  { label: "What This 28-Day\nJourney Is About", status: "completed", align: "center" },
  { label: "How AI\nActually Works", status: "completed", align: "left" },
  { label: "The AI\nLandscape", status: "current", align: "right" },
  { label: "Writing\nwith AI", status: "locked", align: "center" },
  { label: "AI for\nProductivity", status: "locked", align: "left" },
];

// ==========================================
// SUB-COMPONENTS
// ==========================================

/**
 * Renders a single lesson node circle with the appropriate icon and color
 * based on its completion status.
 */
function NodeCircle({ status }: { status: LessonNode["status"] }): React.JSX.Element {
  if (status === "completed") {
    return (
      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-emerald-200/50">
        <Check className="h-6 w-6 sm:h-7 sm:w-7 text-emerald-600" strokeWidth={3} />
      </div>
    );
  }

  if (status === "current") {
    return (
      <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-blue-100 ring-4 ring-blue-200/50 shadow-lg shadow-blue-200/40">
        <Play className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 ml-0.5" fill="currentColor" />
      </div>
    );
  }

  /* locked */
  return (
    <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-gray-100 ring-4 ring-gray-200/50">
      <Lock className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400" />
    </div>
  );
}

// ==========================================
// ALIGNMENT MAP
// ==========================================

/** Maps alignment to Tailwind justify classes for the snaking path */
const ALIGN_MAP: Record<string, string> = {
  left: "justify-start pl-8 sm:pl-12",
  center: "justify-center",
  right: "justify-end pr-8 sm:pr-12",
};

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function AppMockup(): React.JSX.Element {
  return (
    <div className="relative mx-auto" style={{ perspective: "1000px" }}>
      {/* Floating badges around the phone */}
      <div
        className="absolute -top-2 -right-4 sm:-right-8 z-20 rounded-lg bg-white px-3 py-1.5 text-xs sm:text-sm font-bold text-blue-600 shadow-lg animate-float"
        style={{ animationDelay: "0.5s" }}
      >
        15 MIN LESSONS
      </div>
      <div
        className="absolute bottom-16 -left-4 sm:-left-10 z-20 rounded-lg bg-white px-3 py-1.5 text-xs sm:text-sm font-bold text-blue-600 shadow-lg animate-float"
        style={{ animationDelay: "2s" }}
      >
        GAMIFIED
      </div>

      {/* iPhone frame */}
      <div
        className="relative mx-auto w-[260px] sm:w-[290px] md:w-[310px] rounded-[40px] sm:rounded-[44px] border-[6px] sm:border-[8px] border-gray-200 bg-white overflow-hidden transition-transform duration-500 hover:rotate-0"
        style={{
          boxShadow: "0 25px 60px -12px rgba(37, 99, 235, 0.2), 0 8px 0 0 rgba(0, 0, 0, 0.03)",
          transform: "rotateY(-8deg) rotateX(4deg)",
          height: "520px",
        }}
      >
        {/* Dynamic Island notch */}
        <div className="absolute top-2 left-1/2 z-10 h-[22px] w-[90px] sm:w-[100px] -translate-x-1/2 rounded-full bg-gray-900" />

        {/* App screen content */}
        <div
          className="flex h-full flex-col overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #ffffff 0%, #f8faff 100%)",
          }}
        >
          {/* App header */}
          <div className="pt-10 pb-2 px-4 border-b border-gray-100">
            <p className="text-center text-[13px] sm:text-sm font-bold text-gray-900">
              28-Day AI Foundations
            </p>
          </div>

          {/* Unit header pill */}
          <div className="flex justify-center mt-4 mb-2">
            <div
              className="rounded-xl bg-white px-5 py-2 text-center"
              style={{
                boxShadow: "0 3px 0 0 rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.06)",
              }}
            >
              <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-blue-600">
                Unit 1
              </p>
              <p className="text-[13px] sm:text-sm font-bold text-gray-900">AI Foundations</p>
            </div>
          </div>

          {/* Learning path */}
          <div className="flex-1 flex flex-col gap-5 sm:gap-6 py-4 relative">
            {/* Vertical connector line */}
            <div className="absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gray-100" />

            {LESSONS.map((lesson) => (
              <div
                key={lesson.label}
                className={`relative z-10 flex flex-col items-center ${ALIGN_MAP[lesson.align]}`}
              >
                <NodeCircle status={lesson.status} />
                <p className="mt-1.5 text-center text-[10px] sm:text-[11px] font-medium leading-tight text-gray-600 whitespace-pre-line max-w-[100px]">
                  {lesson.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
