/**
 * Date Utility Functions
 *
 * PURPOSE: Centralized date calculations to prevent DRY violations
 *
 * USAGE:
 * ```typescript
 * import { getTodayStart, getWeekAgo, getMonthAgo } from '@/lib/utils/date-utils'
 *
 * const todayStart = getTodayStart()
 * const weekAgo = getWeekAgo()
 * ```
 *
 * @see src/lib/analytics/page-view-utils.ts for adjacent analytics helpers.
 */

// ========================================
// CONSTANTS
// ========================================

/** Milliseconds in a day */
const MS_PER_DAY = 24 * 60 * 60 * 1000;

/** Default lookback period for analytics (30 days) */
export const DEFAULT_ANALYTICS_LOOKBACK_DAYS = 30;

/** Maximum lookback period for full-scan queries */
export const MAX_ANALYTICS_LOOKBACK_DAYS = 90;

// ========================================
// DATE RANGE HELPERS
// ========================================

/**
 * Get ISO string for start of today (midnight in local timezone)
 */
export function getTodayStart(): string {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate()).toISOString();
}

/**
 * Get ISO string for N days ago from now
 */
export function getDaysAgo(days: number): string {
  return new Date(Date.now() - days * MS_PER_DAY).toISOString();
}

/**
 * Get ISO string for start of week (7 days ago)
 */
export function getWeekAgo(): string {
  return getDaysAgo(7);
}

/**
 * Get ISO string for start of month (30 days ago)
 */
export function getMonthAgo(): string {
  return getDaysAgo(DEFAULT_ANALYTICS_LOOKBACK_DAYS);
}

/**
 * Get ISO string for 90 days ago (max lookback)
 */
export function getMaxLookback(): string {
  return getDaysAgo(MAX_ANALYTICS_LOOKBACK_DAYS);
}

/**
 * Get ISO string for N hours ago from now
 */
export function getHoursAgo(hours: number): string {
  return new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();
}

/**
 * Get date range for common time ranges
 */
export function getDateRangeForTimeRange(
  timeRange: "24h" | "3d" | "7d" | "14d" | "30d" | "90d" | "all",
): { startDate: string; endDate: string } | null {
  const endDate = new Date().toISOString();

  switch (timeRange) {
    case "24h":
      return { startDate: getHoursAgo(24), endDate };
    case "3d":
      return { startDate: getDaysAgo(3), endDate };
    case "7d":
      return { startDate: getDaysAgo(7), endDate };
    case "14d":
      return { startDate: getDaysAgo(14), endDate };
    case "30d":
      return { startDate: getDaysAgo(30), endDate };
    case "90d":
      return { startDate: getDaysAgo(90), endDate };
    case "all":
      return null; // No date filter
    default:
      return { startDate: getDaysAgo(30), endDate };
  }
}

// ========================================
// DATE FORMATTING
// ========================================

/**
 * Format date for display (e.g., "Jan 15")
 */
export function formatDateForDisplay(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/**
 * Format date for chart labels
 */
export function formatDateForChart(date: string | Date): string {
  return new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

/**
 * Get hour from date (0-23)
 */
export function getHourFromDate(date: string | Date): number {
  return new Date(date).getHours();
}

/**
 * Get day of week name from date
 */
export function getDayOfWeekFromDate(date: string | Date): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[new Date(date).getDay()];
}
