/**
 * ActionableTaskSection
 *
 * PURPOSE: Hands-on practical exercise requiring user to DO something
 *
 * CONTEXT: Appears at end of lessons to bridge theory and application.
 * Provides clear deliverable and success criteria for self-assessment.
 *
 * KEY RESPONSIBILITIES:
 * - Display task title and purpose (why it matters)
 * - Show step-by-step instructions
 * - Provide optional starter prompt for scaffolding
 * - List success criteria for self-assessment
 * - Show estimated time to set expectations
 *
 * IMPLEMENTATION NOTES:
 * - Clean, structured layout with visual hierarchy
 * - Starter prompt uses code block style (like QuickPromptSection)
 * - Success criteria as checklist for mental self-assessment
 * - Estimated time badge for quick scanning
 * - Mobile-first responsive design
 *
 * FUTURE CONSIDERATIONS:
 * - Voice feature: Content structured for TTS readability
 * - Could add input field for text submissions
 * - Could add file upload capability
 *
 * DEPENDENCIES:
 * - React: useState for copy functionality
 * - lucide-react: Icons for copy button
 *
 * @see LessonSection.tsx - Router that calls this component
 * @see QuickPromptSection.tsx - Similar copy functionality
 */

import { Check, CheckCircle2, Clock, Copy, Target } from "lucide-react";
import { useState } from "react";

export interface ActionableTaskSectionContent {
  /**
   * Section heading, typically "Your Turn: [Action]"
   */
  title: string;

  /**
   * Why this task matters - connects to learning objectives
   */
  purpose: string;

  /**
   * Step-by-step instructions for completing the task
   */
  instructions: string[];

  /**
   * Expected output/deliverable description
   */
  deliverable: string;

  /**
   * Time estimate for completion (e.g., "5-10 minutes")
   */
  estimatedTime: string;

  /**
   * Optional starting prompt to help users begin
   */
  starterPrompt?: string;

  /**
   * Optional success checklist for self-assessment
   */
  successCriteria?: string[];
}

interface ActionableTaskSectionProps {
  content: ActionableTaskSectionContent;
  className?: string;
}

/**
 * ActionableTaskSection component
 *
 * @example
 * const content = {
 *   title: "Your Turn: Context Challenge",
 *   purpose: "Apply the context framework to your own work",
 *   instructions: [
 *     "Pick a task you do regularly",
 *     "Write your current vague prompt",
 *     "Rewrite it using the context checklist"
 *   ],
 *   deliverable: "Your before-and-after prompts",
 *   estimatedTime: "5-10 minutes",
 *   starterPrompt: "I'm a [role] working on [project]...",
 *   successCriteria: [
 *     "Vague prompt lacks at least 2 context types",
 *     "Improved prompt includes who, situation, and goal"
 *   ]
 * }
 * <ActionableTaskSection content={content} />
 */
export function ActionableTaskSection({ content, className = "" }: ActionableTaskSectionProps) {
  const {
    title,
    purpose,
    instructions,
    deliverable,
    estimatedTime,
    starterPrompt,
    successCriteria,
  } = content;
  const [copied, setCopied] = useState(false);

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

  return (
    <section className={`w-full space-y-3 py-4 ${className}`}>
      {/* Header with title and time estimate */}
      <div className="flex items-start justify-between gap-4">
        <h2 className="text-xl font-bold text-black">{title}</h2>
        <div className="flex items-center gap-1.5 text-sm text-gray-500 whitespace-nowrap">
          <Clock className="w-4 h-4" />
          <span>{estimatedTime}</span>
        </div>
      </div>

      {/* Purpose - why this matters */}
      <p className="text-base text-gray-600 italic leading-relaxed">{purpose}</p>

      {/* Instructions */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
          <Target className="w-4 h-4" />
          Instructions
        </h3>
        <ol className="space-y-2.5 pl-1">
          {instructions.map((instruction, index) => (
            <li key={index} className="flex gap-3 text-base text-black leading-relaxed">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 text-gray-700 text-sm font-medium flex items-center justify-center">
                {index + 1}
              </span>
              <span>{instruction}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Starter prompt (optional) */}
      {starterPrompt && (
        <div className="space-y-2">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Starter prompt
          </span>
          <div className="relative bg-gray-900 rounded-xl p-5 overflow-x-auto border border-gray-700/50">
            <pre className="text-sm text-gray-100 font-mono whitespace-pre-wrap leading-relaxed">
              {starterPrompt}
            </pre>
            <button
              onClick={handleCopy}
              className={`
                absolute top-3 right-3 p-2 rounded-lg
                transition-all duration-200
                ${
                  copied
                    ? "bg-green-500/20 text-green-400"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }
              `}
              aria-label={copied ? "Copied to clipboard" : "Copy to clipboard"}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      )}

      {/* Deliverable */}
      <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">What you&apos;ll produce:</h3>
        <p className="text-base text-black">{deliverable}</p>
      </div>

      {/* Success criteria (optional) */}
      {successCriteria && successCriteria.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" />
            Success criteria
          </h3>
          <ul className="space-y-2">
            {successCriteria.map((criterion, index) => (
              <li key={index} className="flex items-start gap-2.5 text-sm text-gray-600">
                <span className="flex-shrink-0 w-5 h-5 rounded border-2 border-gray-300 mt-0.5" />
                <span>{criterion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
