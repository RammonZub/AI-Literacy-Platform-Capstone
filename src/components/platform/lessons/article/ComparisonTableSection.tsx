/**
 * ComparisonTableSection
 *
 * PURPOSE: Display side-by-side comparisons of tools, concepts, or approaches
 *
 * CONTEXT: When teaching AI tools, users often need to understand the differences
 * between options (e.g., ChatGPT vs Claude vs Gemini). This component provides
 * a clean, scannable comparison table.
 *
 * KEY RESPONSIBILITIES:
 * - Display comparison items in a clean table format
 * - Support 2-4 comparison columns
 * - Show feature rows with check/cross indicators
 * - Highlight recommended choice when applicable
 *
 * IMPLEMENTATION NOTES:
 * - Mobile-first: Stacks on small screens, table on larger
 * - Uses icons for boolean values (check/cross)
 * - Supports text values for nuanced comparisons
 * - Optional highlight for recommended option
 *
 * DEPENDENCIES:
 * - lucide-react: Check and X icons
 * - InlineMarkdownRenderer: For text content parsing
 *
 * @see LessonSection.tsx - Router that calls this component
 */

import { Check, Minus, Star, X } from "lucide-react";
import { InlineMarkdownRenderer } from "./MarkdownRenderer";

export interface ComparisonRow {
  /**
   * Feature or aspect being compared
   */
  feature: string;

  /**
   * Values for each column (matches columns array order)
   * - true = checkmark
   * - false = X mark
   * - string = text display
   * - 'partial' = minus icon (partial support)
   */
  values: (boolean | string | "partial")[];
}

export interface ComparisonColumn {
  /**
   * Name of the item being compared
   */
  name: string;

  /**
   * Optional short description
   */
  description?: string;

  /**
   * Whether this is the recommended choice
   */
  recommended?: boolean;
}

export interface ComparisonTableSectionContent {
  /**
   * Section heading
   */
  title: string;

  /**
   * Optional intro text before the table
   */
  intro?: string;

  /**
   * Columns being compared (2-4)
   */
  columns: ComparisonColumn[];

  /**
   * Rows of comparison data
   */
  rows: ComparisonRow[];

  /**
   * Optional footer note
   */
  footer?: string;
}

interface ComparisonTableSectionProps {
  content: ComparisonTableSectionContent;
  className?: string;
}

/**
 * Renders a single cell value
 */
function CellValue({ value }: { value: boolean | string | "partial" }) {
  if (value === true) {
    return <Check className="w-5 h-5 text-green-600 mx-auto" />;
  }
  if (value === false) {
    return <X className="w-5 h-5 text-red-500 mx-auto" />;
  }
  if (value === "partial") {
    return <Minus className="w-5 h-5 text-yellow-600 mx-auto" />;
  }
  return (
    <span className="text-sm text-gray-700">
      <InlineMarkdownRenderer>{value}</InlineMarkdownRenderer>
    </span>
  );
}

/**
 * ComparisonTableSection component
 *
 * @example
 * const content = {
 *   title: "ChatGPT vs Claude: Which to Use?",
 *   intro: "Both are excellent AI assistants, but they excel in different areas.",
 *   columns: [
 *     { name: "ChatGPT", recommended: true },
 *     { name: "Claude" }
 *   ],
 *   rows: [
 *     { feature: "Creative Writing", values: [true, true] },
 *     { feature: "Long Documents", values: ["128K tokens", "200K tokens"] },
 *     { feature: "Real-time Data", values: [true, false] }
 *   ],
 *   footer: "Both have free tiers - try each and see which fits your workflow."
 * }
 * <ComparisonTableSection content={content} />
 */
export function ComparisonTableSection({ content, className = "" }: ComparisonTableSectionProps) {
  const { title, intro, columns, rows, footer } = content;

  return (
    <section className={`w-full py-4 ${className}`}>
      {/* Section heading */}
      <h2 className="text-xl font-bold text-black mb-3">{title}</h2>

      {/* Optional intro */}
      {intro && <p className="text-base text-gray-600 mb-4 leading-relaxed">{intro}</p>}

      {/* Comparison table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          {/* Header row */}
          <thead>
            <tr>
              <th className="text-left p-3 bg-gray-50 border-b-2 border-gray-200 font-semibold text-gray-700">
                Feature
              </th>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`
                    text-center p-3 border-b-2
                    ${col.recommended ? "bg-blue-50 border-blue-300" : "bg-gray-50 border-gray-200"}
                  `}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span
                      className={`font-semibold ${col.recommended ? "text-blue-700" : "text-gray-700"}`}
                    >
                      {col.name}
                    </span>
                    {col.recommended && <Star className="w-4 h-4 text-blue-500 fill-blue-500" />}
                  </div>
                  {col.description && (
                    <span className="block text-xs text-gray-500 mt-0.5">{col.description}</span>
                  )}
                </th>
              ))}
            </tr>
          </thead>

          {/* Data rows */}
          <tbody>
            {rows.map((row, rowIdx) => (
              <tr key={rowIdx} className={rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50/50"}>
                <td className="p-3 border-b border-gray-100 font-medium text-gray-800">
                  {row.feature}
                </td>
                {row.values.map((value, colIdx) => {
                  const isRecommended = columns[colIdx]?.recommended;
                  return (
                    <td
                      key={colIdx}
                      className={`
                        p-3 text-center border-b border-gray-100
                        ${isRecommended ? "bg-blue-50/30" : ""}
                      `}
                    >
                      <CellValue value={value} />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Optional footer */}
      {footer && <p className="text-sm text-gray-500 mt-4 italic">{footer}</p>}
    </section>
  );
}
