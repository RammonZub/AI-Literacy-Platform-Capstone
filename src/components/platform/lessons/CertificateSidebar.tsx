/**
 * Certificate Header Component
 *
 * PURPOSE: Display certificate status and progress at the top of module journey
 *
 * CONTEXT: Shows users the "end goal" they're working toward with a clean,
 * professional certificate design. Contains progress bar and certificate preview.
 *
 * KEY RESPONSIBILITIES:
 * - Display progress bar (always visible)
 * - Show clean skeleton certificate with verified badge when incomplete
 * - Show shiny certificate card with gradient when complete
 * - Full-width responsive design (no sidebar)
 *
 * IMPLEMENTATION NOTES:
 * - No sticky positioning - scrolls with content
 * - Full width on all devices
 * - No emojis - uses clean icons and text
 * - Verified badge with star icon for skeleton state
 * - Gradient shine effect for completed state
 *
 * DEPENDENCIES:
 * - Award, Star icons from lucide-react
 * - Button component for actions
 */

"use client";

import { Award, CheckCircle2, Star } from "lucide-react";
import React from "react";
import { Certificate } from "@/components/platform/certificate/Certificate";

/**
 * Certificate data structure from database
 */
interface CertificateData {
  userName: string;
  moduleName: string;
  completedAt: Date;
  certificateId: string;
  xpEarned: number;
}

interface CertificateSidebarProps {
  /** Module ID for certificate */
  moduleId: string;
  /** Module name for display */
  moduleName: string;
  /** Number of completed lessons */
  completedCount: number;
  /** Total number of lessons in module */
  totalCount: number;
  /** Whether module is 100% complete */
  isComplete: boolean;
  /** Certificate data (when complete) */
  certificateData?: CertificateData | null;
  /** Handler for viewing full certificate */
  onViewCertificate?: () => void;
  /** Handler for navigating to next module */
  onNextModule?: () => void;
  /** Whether this is the last module */
  isLastModule?: boolean;
  /** Whether next module exists */
  hasNextModule?: boolean;
  /** Whether this is a challenge (vs module) */
  isChallenge?: boolean;
  /** Total XP earned (for challenges) */
  totalXPEarned?: number;
}

/**
 * CertificateHeader Component
 *
 * Always-visible header showing progress and certificate status.
 * Positioned at top of module journey page.
 *
 * @param props - CertificateSidebarProps
 *
 * @example
 * <CertificateHeader
 *   moduleId="module1-foundation"
 *   moduleName="AI Foundations"
 *   completedCount={9}
 *   totalCount={12}
 *   isComplete={false}
 * />
 */
export function CertificateSidebar({
  moduleName,
  completedCount,
  totalCount,
  isComplete,
  certificateData,
  onViewCertificate,
  onNextModule,
  isLastModule = false,
  hasNextModule = false,
  isChallenge = false,
  totalXPEarned = 0,
}: CertificateSidebarProps) {
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;
  const remainingLessons = totalCount - completedCount;

  return (
    <div className="w-full mt-8 mb-8">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-gray-700">
            {isChallenge ? "Challenge Progress" : "Module Progress"}
          </span>
          <span className="text-sm font-bold text-gray-900">
            {completedCount}/{totalCount}
          </span>
        </div>
        <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {isComplete && certificateData ? (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">
                {isChallenge ? "Challenge Complete" : "Certificate Unlocked"}
              </h3>
              <p className="text-sm text-gray-600">{moduleName}</p>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full">
              <CheckCircle2 className="w-4 h-4 text-green-600" strokeWidth={2.2} />
              <span className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                Verified
              </span>
            </div>
          </div>

          <Certificate
            studentName={certificateData.userName}
            programName={certificateData.moduleName}
            completionDate={certificateData.completedAt.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          />

          <div className="mt-4 flex items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
            <div className="text-sm text-gray-600">Total XP earned</div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span className="font-bold text-gray-900">{certificateData.xpEarned}</span>
            </div>
          </div>

          <div className="mt-4 flex gap-3">
            {onViewCertificate && (
              <button
                onClick={onViewCertificate}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                <Award className="w-4 h-4" />
                <span>View Certificate</span>
              </button>
            )}
            {hasNextModule && onNextModule && (
              <button
                onClick={onNextModule}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>Next Module</span>
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>

          {isLastModule && (
            <p className="mt-4 text-center text-xs text-gray-600">
              You&apos;ve completed all modules. View all certificates from your profile.
            </p>
          )}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white p-5 opacity-90">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-semibold text-gray-800">Certificate Preview</h3>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
              Locked
            </span>
          </div>

          <div className="relative">
            <div className="pointer-events-none select-none opacity-55 grayscale">
              <Certificate studentName="Your Name" programName={moduleName} completionDate="--" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full bg-white/95 border border-gray-200 px-4 py-2 shadow-sm text-sm font-semibold text-gray-700">
                {remainingLessons === 1
                  ? `1 ${isChallenge ? "day" : "lesson"} remaining`
                  : `${remainingLessons} ${isChallenge ? "days" : "lessons"} remaining`}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CertificateSidebar;
