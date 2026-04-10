/**
 * Module Navigation Utilities
 *
 * PURPOSE: Helper functions for navigating between modules and managing module completion
 *
 * CONTEXT: These utilities support the certificate system by determining the next module
 * when a user completes the current one. Used in LessonJourneyClient and certificate flow.
 *
 * KEY RESPONSIBILITIES:
 * - Provide ordered list of all modules in the learning path
 * - Determine the next module ID from a current module
 * - Check if a module is the last one in the sequence
 * - Provide module display names for certificates
 *
 * IMPLEMENTATION NOTES:
 * - Module IDs match the content directory names under src/data/content/modules/
 * - Returns null if current module is the last one (no next module)
 * - Used in "Next Module" button logic and certificate generation
 *
 * DEPENDENCIES:
 * - None (pure utility functions)
 *
 * Usage Example:
 * ```typescript
 * import { getNextModuleId, isLastModule, getModuleName } from '@/lib/utils/module-utils'
 *
 * const nextId = getNextModuleId('01-skills-foundations') // Returns: '02-skills-productivity'
 * const isLast = isLastModule('10-challenge-28-day-ai') // Returns: true
 * const name = getModuleName('02-skills-productivity') // Returns: 'Productivity Masterclass'
 * ```
 */

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Complete ordered list of module IDs in the learning path
 *
 * WHY array instead of object: Preserves order for navigation
 * WHY hardcoded: Module order is intentional and rarely changes
 *
 * IDs match directory names under src/data/content/modules/
 * ORDER: Skills (1-4) → Tools (5-9) → Challenge (10)
 */
const MODULE_ORDER = [
  "01-skills-foundations",
  "02-skills-productivity",
  "03-skills-prompting",
  "04-skills-creation",
  "05-tools-chatgpt",
  "06-tools-claude",
  "07-tools-gemini",
  "08-tools-midjourney",
  "09-workflow-automation",
  "10-challenge-28-day-ai",
] as const;

/**
 * Module ID to display name mapping
 *
 * WHY: Module IDs use kebab-case, but display names are user-friendly
 * Used in certificates and UI displays
 */
const MODULE_NAMES: Record<string, string> = {
  "01-skills-foundations": "AI Foundations",
  "02-skills-productivity": "Productivity Masterclass",
  "03-skills-prompting": "Prompt Engineering",
  "04-skills-creation": "Content Creation Mastery",
  "05-tools-chatgpt": "ChatGPT Mastery",
  "06-tools-claude": "Claude Mastery",
  "07-tools-gemini": "Gemini Mastery",
  "08-tools-midjourney": "Midjourney Mastery",
  "09-workflow-automation": "Workflow and Automation",
  "10-challenge-28-day-ai": "28-Day AI Challenge",
};

// ============================================================================
// TYPES
// ============================================================================

/**
 * Valid module ID type
 *
 * WHY: Ensures type safety when working with module IDs
 * Prevents typos and invalid module references
 */
export type ModuleId = (typeof MODULE_ORDER)[number];

// ============================================================================
// PUBLIC FUNCTIONS
// ============================================================================

/**
 * Get the next module ID in the learning sequence
 *
 * DETAILED EXPLANATION:
 * This function determines which module comes after the current one in the
 * learning path. It's used for the "Next Module" button that appears when
 * a user completes a module.
 *
 * DESIGN RATIONALE:
 * - Returns null if current module is the last one (no next module)
 * - Used to disable or hide "Next Module" button on the last module
 * - Simple array lookup for O(1) performance
 *
 * @param {ModuleId} currentModuleId - The current module ID (e.g., '01-skills-foundations')
 * @returns {ModuleId | null} The next module ID, or null if current is the last module
 *
 * @example
 * // Get next module
 * const next = getNextModuleId('01-skills-foundations') // Returns: '02-skills-productivity'
 *
 * @example
 * // Last module returns null
 * const next = getNextModuleId('10-challenge-28-day-ai') // Returns: null
 */
export function getNextModuleId(currentModuleId: string): ModuleId | null {
  const currentIndex = MODULE_ORDER.indexOf(currentModuleId as ModuleId);

  // If current module is not found or is the last one, return null
  if (currentIndex === -1 || currentIndex === MODULE_ORDER.length - 1) {
    return null;
  }

  // Return the next module in the sequence
  return MODULE_ORDER[currentIndex + 1];
}

/**
 * Check if the given module is the last one in the learning path
 *
 * DETAILED EXPLANATION:
 * This function checks whether a module is the final module in the sequence.
 * It's used to determine whether to show the "Next Module" button.
 *
 * DESIGN RATIONALE:
 * - Returns true for module4-creation (the last module)
 * - Returns false for all other modules
 * - Used to conditionally render or disable navigation elements
 *
 * @param {ModuleId} moduleId - The module ID to check
 * @returns {boolean} True if this is the last module, false otherwise
 *
 * @example
 * // Check if last module
 * const isLast = isLastModule('10-challenge-28-day-ai') // Returns: true
 * const isNotLast = isLastModule('01-skills-foundations') // Returns: false
 */
export function isLastModule(moduleId: string): boolean {
  return moduleId === MODULE_ORDER[MODULE_ORDER.length - 1];
}

/**
 * Get the display name for a module
 *
 * DETAILED EXPLANATION:
 * This function returns the user-friendly display name for a module ID.
 * It's used in certificates and UI elements where we need to show
 * the module title rather than its ID.
 *
 * DESIGN RATIONALE:
 * - Returns the module ID as fallback if not found (defensive programming)
 * - Used in certificate generation to show "Certificate of Completion: [Module Name]"
 * - Centralized mapping ensures consistency across the app
 *
 * @param {ModuleId} moduleId - The module ID to get the name for
 * @returns {string} The user-friendly module name
 *
 * @example
 * // Get module name
 * const name = getModuleName('02-skills-productivity') // Returns: 'Productivity Masterclass'
 */
export function getModuleName(moduleId: string): string {
  return MODULE_NAMES[moduleId] || moduleId;
}

/**
 * Get all module IDs in order
 *
 * DETAILED EXPLANATION:
 * This function returns the complete list of module IDs in the correct
 * learning sequence. It's useful for progress tracking, navigation menus,
 * and generating module selectors.
 *
 * DESIGN RATIONALE:
 * - Returns a copy of the array to prevent external modification
 * - Used in module selection components and progress displays
 * - Ensures consistent ordering across the application
 *
 * @returns {readonly ModuleId[]} Array of all module IDs in order
 *
 * @example
 * // Get all modules
 * const modules = getAllModuleIds()
 * // Returns: ['01-skills-foundations', '02-skills-productivity', ..., '10-challenge-28-day-ai']
 */
export function getAllModuleIds(): readonly ModuleId[] {
  return MODULE_ORDER;
}

/**
 * Get the previous module ID in the learning sequence
 *
 * DETAILED EXPLANATION:
 * This function determines which module comes before the current one.
 * It's useful for "Back to Previous Module" navigation or breadcrumbs.
 *
 * DESIGN RATIONALE:
 * - Returns null if current module is the first one
 * - Simple array lookup for O(1) performance
 * - Used in navigation elements that support going back
 *
 * @param {ModuleId} currentModuleId - The current module ID
 * @returns {ModuleId | null} The previous module ID, or null if current is the first module
 *
 * @example
 * // Get previous module
 * const prev = getPreviousModuleId('02-skills-productivity') // Returns: '01-skills-foundations'
 *
 * @example
 * // First module returns null
 * const prev = getPreviousModuleId('01-skills-foundations') // Returns: null
 */
export function getPreviousModuleId(currentModuleId: string): ModuleId | null {
  const currentIndex = MODULE_ORDER.indexOf(currentModuleId as ModuleId);

  // If current module is not found or is the first one, return null
  if (currentIndex <= 0) {
    return null;
  }

  // Return the previous module in the sequence
  return MODULE_ORDER[currentIndex - 1];
}

/**
 * Calculate the position (1-indexed) of a module in the learning path
 *
 * DETAILED EXPLANATION:
 * This function returns the 1-indexed position of a module in the sequence.
 * Useful for displaying "Module 1 of 4" style progress indicators.
 *
 * DESIGN RATIONALE:
 * - Returns 0 if module not found (defensive programming)
 * - 1-indexed matches user expectations (Module 1, not Module 0)
 * - Used in progress displays and certificate numbering
 *
 * @param {ModuleId} moduleId - The module ID to get the position for
 * @returns {number} The 1-indexed position of the module (1-4), or 0 if not found
 *
 * @example
 * // Get module position
 * const position = getModulePosition('01-skills-foundations') // Returns: 1
 * const position = getModulePosition('10-challenge-28-day-ai') // Returns: 10
 */
export function getModulePosition(moduleId: string): number {
  const index = MODULE_ORDER.indexOf(moduleId as ModuleId);
  return index === -1 ? 0 : index + 1; // Convert to 1-indexed
}

/**
 * Get the total number of modules in the learning path
 *
 * DETAILED EXPLANATION:
 * This function returns the total count of modules. Useful for progress
 * calculations like "Completed 2 of 4 modules".
 *
 * DESIGN RATIONALE:
 * - Simple constant value, but function provides single source of truth
 * - Used in progress bars and statistics
 * - Prevents magic number "4" scattered across codebase
 *
 * @returns {number} The total number of modules (currently 10)
 *
 * @example
 * // Get total module count
 * const total = getTotalModuleCount() // Returns: 4
 */
export function getTotalModuleCount(): number {
  return MODULE_ORDER.length;
}
