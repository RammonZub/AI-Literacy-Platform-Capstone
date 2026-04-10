/**
 * ReflectionPromptSection
 *
 * PURPOSE: Guide users through self-reflection exercises
 *
 * CONTEXT: Learning is most effective when users connect content to their own
 * experience. This component presents reflection questions that help users
 * think about how the lesson applies to their specific situation.
 *
 * KEY RESPONSIBILITIES:
 * - Present thought-provoking reflection questions
 * - Optional text area for users to type their thoughts
 * - Support multiple reflection prompts
 * - Create personal connection to the material
 *
 * IMPLEMENTATION NOTES:
 * - Questions are numbered when multiple
 * - Optional textarea for written reflection (not saved, just for thinking)
 * - Encouraging, personal tone in the prompt
 * - No "correct" answer - purely reflective
 *
 * DEPENDENCIES:
 * - React: useState for textarea visibility and content
 * - lucide-react: Brain icon for reflection theme
 *
 * @see LessonSection.tsx - Router that calls this component
 * @see QuickPromptSection.tsx - Similar but for AI prompts
 */

import { Brain, ChevronDown, ChevronUp, Pencil } from "lucide-react";
import { useState } from "react";

export interface ReflectionItem {
  /**
   * The reflection question or prompt
   */
  question: string;

  /**
   * Optional context or framing for the question
   */
  context?: string;

  /**
   * Placeholder text for the textarea (if shown)
   */
  placeholder?: string;
}

export interface ReflectionPromptSectionContent {
  /**
   * Section heading
   */
  title?: string;

  /**
   * Brief intro explaining why reflection matters
   */
  intro?: string;

  /**
   * Single prompt (simpler structure)
   */
  prompt?: string;

  /**
   * Reflection questions (1-3)
   */
  reflections?: ReflectionItem[];

  /**
   * Whether to show text areas for written responses
   * @default false
   */
  allowWriting?: boolean;

  /**
   * Encouraging message at the end
   */
  encouragement?: string;
}

interface ReflectionPromptSectionProps {
  content: ReflectionPromptSectionContent;
  className?: string;
}

/**
 * ReflectionPromptSection component
 *
 * @example
 * const content = {
 *   title: "Reflect on Your AI Journey",
 *   intro: "Taking a moment to connect these concepts to your own work makes them stick.",
 *   reflections: [
 *     {
 *       question: "What's one task in your current role that AI could help with?",
 *       placeholder: "Think about repetitive tasks, writing, or analysis..."
 *     },
 *     {
 *       question: "What's holding you back from using AI more?",
 *       context: "Common barriers: time to learn, privacy concerns, not knowing where to start"
 *     }
 *   ],
 *   allowWriting: true,
 *   encouragement: "There are no wrong answers here - this is just for you."
 * }
 * <ReflectionPromptSection content={content} />
 */
export function ReflectionPromptSection({ content, className = "" }: ReflectionPromptSectionProps) {
  const { title, intro, prompt, reflections, allowWriting = false, encouragement } = content;

  // Normalize: convert single prompt to reflections array if needed
  const normalizedReflections: ReflectionItem[] =
    reflections || (prompt ? [{ question: prompt }] : []);
  const hasReflections = normalizedReflections.length > 0;

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [writtenResponses, setWrittenResponses] = useState<string[]>(
    normalizedReflections.map(() => ""),
  );

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  const handleWritingChange = (idx: number, value: string) => {
    const newResponses = [...writtenResponses];
    newResponses[idx] = value;
    setWrittenResponses(newResponses);
  };

  if (!hasReflections) {
    return null;
  }

  return (
    <section className={`w-full py-4 ${className}`}>
      {/* Section card */}
      <div className="p-5 rounded-xl border-2 border-purple-100 bg-purple-50/30">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <Brain className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xl font-bold text-black">{title}</h2>
            {intro && <p className="text-sm text-gray-600 mt-1 leading-relaxed">{intro}</p>}
          </div>
        </div>

        {/* Reflection items */}
        <div className="space-y-3 pl-8">
          {normalizedReflections.map((reflection, idx) => {
            const isExpanded = expandedIndex === idx;
            const hasResponse = writtenResponses[idx].trim().length > 0;

            return (
              <div key={idx} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                {/* Question header */}
                <div
                  className={`
                    p-4 cursor-pointer transition-colors duration-200
                    hover:bg-gray-50
                    ${isExpanded ? "bg-gray-50" : ""}
                  `}
                  onClick={() => allowWriting && toggleExpand(idx)}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      {normalizedReflections.length > 1 && (
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center text-sm font-semibold">
                          {idx + 1}
                        </span>
                      )}
                      <div>
                        <p className="text-base font-medium text-gray-800">{reflection.question}</p>
                        {reflection.context && (
                          <p className="text-sm text-gray-500 mt-1">{reflection.context}</p>
                        )}
                      </div>
                    </div>

                    {/* Expand/collapse indicator (only if writing allowed) */}
                    {allowWriting && (
                      <div className="flex items-center gap-2">
                        {hasResponse && !isExpanded && (
                          <Pencil className="w-4 h-4 text-purple-400" />
                        )}
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Writing area (expandable) */}
                {allowWriting && isExpanded && (
                  <div className="px-4 pb-4 pt-0 border-t border-gray-100">
                    <textarea
                      value={writtenResponses[idx]}
                      onChange={(e) => handleWritingChange(idx, e.target.value)}
                      placeholder={reflection.placeholder || "Write your thoughts here..."}
                      className="
                        w-full mt-3 p-3 rounded-lg border border-gray-200
                        text-sm text-gray-700 resize-none
                        focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-300
                        placeholder:text-gray-400
                      "
                      rows={3}
                    />
                    <p className="text-xs text-gray-400 mt-1.5 italic">
                      This is just for you - your reflections aren&apos;t saved or shared.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Encouragement footer */}
        {encouragement && <p className="text-sm text-gray-500 mt-4 pl-8 italic">{encouragement}</p>}
      </div>
    </section>
  );
}
