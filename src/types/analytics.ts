/**
 * Analytics Types
 *
 * PURPOSE: Runtime TypeScript types for page view and analytics tracking
 *
 * DESIGN NOTES:
 * - Supports the hybrid schema approach (structured columns + JSONB context)
 * - Page views tracked via anonymous visitor_id and optional auth user
 *
 * @see src/lib/analytics/page-view-utils.ts — page classification helpers
 */

// ============================================================================
// PAGE VIEW TYPES
// ============================================================================

/**
 * Page type classification for analytics
 *
 * PURPOSE: Categorize pages for aggregated reporting
 *
 * VALUES:
 * - 'landing': Root landing page (/)
 * - 'platform': Authenticated platform pages (/platform/*)
 * - 'legal': Legal pages (privacy, terms)
 * - 'auth': Auth pages (login, signup)
 * - 'quiz': Onboarding assessment routes (/onboarding and related quiz-style paths)
 * - 'checkout': Checkout pages (/checkout/*)
 * - 'blog': Blog pages (/blog/*)
 * - 'glossary': Glossary pages (/glossary/*)
 * - 'other': Fallback for uncategorized pages
 */
export type PageType =
  | "landing"
  | "platform"
  | "legal"
  | "auth"
  | "quiz"
  | "checkout"
  | "blog"
  | "glossary"
  | "other";

/**
 * Request payload for POST /api/analytics/page-view
 *
 * PURPOSE: Record a page view event with engagement metrics
 *
 * DESIGN NOTES:
 * - page_path required; page_type resolved server-side when needed
 * - Engagement metrics (time, scroll, CTA) are optional
 * - visitor_id is sent in body to avoid cookie timing races
 *
 */
export interface PageViewRequest {
  /**
   * Visitor ID for anonymous identity tracking
   * Primary source - sent in body to avoid cookie timing race conditions
   * Falls back to visitor_id cookie if not provided
   */
  visitor_id?: string;

  /** Full page path (e.g., '/', '/platform/dashboard', '/onboarding') */
  page_path: string;

  /** Page title from document.title (optional) */
  page_title?: string;

  /** Page classification for analytics aggregation */
  page_type: PageType;

  /** Time spent on page in seconds (measured on unmount) */
  time_on_page_seconds?: number;

  /** Scroll depth percentage (0-100) */
  scroll_depth_percent?: number;

  /** Indicates this is an exit event (user leaving the page) */
  is_exit?: boolean;

  /** Which CTA was clicked (e.g., 'hero_primary', 'navbar_cta') */
  clicked_cta?: string;

  /** Referrer URL */
  referrer?: string;
}

/**
 * Response from POST /api/analytics/page-view
 *
 * PURPOSE: Confirm successful page view recording
 */
export interface PageViewResponse {
  /** Success flag */
  success: true;

  /** ISO timestamp of when the page view was recorded */
  recorded_at: string;

  /** The page view record ID (UUID) */
  id: string;
}

// ============================================================================
// DATABASE ROW INTERFACE
// ============================================================================

/**
 * PageViewRow — row shape for the `page_views` table when used.
 *
 * Path analytics are recorded via `telemetry_events` (`event_type: page_view`);
 * this interface remains for typing older migrations or internal maintenance utilities.
 */
export interface PageViewRow {
  // Primary identifiers
  id: string;
  session_id: string; // visitor_id from cookie
  visitor_session_id: string | null;
  quiz_session_id: string | null;
  user_id: string | null;

  // Page info (structured - high query volume)
  page_path: string;
  page_title: string | null;
  page_type: PageType;

  /** HTTP Referer when available */
  referrer: string | null;

  // Engagement metrics (structured - analytics queries)
  time_on_page_seconds: number | null;
  scroll_depth_percent: number | null;
  clicked_cta: string | null;
  exited_to: string | null;

  // Flexible context (JSONB for evolving data)
  context: Record<string, unknown> | null;

  // Timestamps
  created_at: string;
}

// ============================================================================
// CONTEXT TYPE FOR JSONB COLUMN
// ============================================================================

/**
 * PageViewContext - Type for the context JSONB column
 *
 * PURPOSE: Flexible storage for evolving analytics data
 *
 * DESIGN NOTES:
 * - Device info may evolve (new browsers, OS versions)
 * - Geo data may be extended (region, city)
 * - A/B test variants are optional
 * - Custom events can be added without schema changes
 *
 * EXAMPLES:
 * ```typescript
 * {
 *   device: { type: 'mobile', browser: 'safari', os: 'ios' },
 *   geo: { country: 'US', region: 'CA', city: 'San Francisco' },
 *   ab_test_variant: 'control',
 *   scroll_milestones: [25, 50, 75, 100],
 *   custom: { feature_flag: 'new_checkout' }
 * }
 * ```
 */
export interface PageViewContext {
  /** Device information (optional) */
  device?: {
    type?: "mobile" | "tablet" | "desktop";
    browser?: string;
    os?: string;
  };

  /** Geolocation data (from Vercel headers) */
  geo?: {
    country?: string;
    region?: string;
    city?: string;
  };

  /** A/B test variant (if applicable) */
  ab_test_variant?: string;

  /** Scroll milestone tracking (array of percentages reached) */
  scroll_milestones?: number[];

  /** Custom data for future extensibility */
  custom?: Record<string, unknown>;
}

// ============================================================================
// CTA TRACKING TYPES
// ============================================================================

/**
 * CTA names for tracking which buttons users click
 *
 * PURPOSE: Standardize CTA identifiers for analytics
 *
 * NAMING CONVENTION: {location}_{type}_{position}
 * - location: hero, navbar, challenge, footer, etc.
 * - type: primary, secondary, link
 * - position: top, bottom, left, right (if multiple)
 *
 * @see src/lib/constants/analytics.ts for related event naming constants
 */
export type CtaName =
  | "hero_primary"
  | "hero_secondary"
  | "navbar_cta"
  | "navbar_logo"
  | "challenge_cta"
  | "social_proof_cta"
  | "benefits_cta"
  | "curriculum_cta"
  | "footer_cta"
  | "mobile_sticky_cta"
  | "exit_intent_cta"
  | string; // Allow custom CTAs

// ============================================================================
// SCROLL DEPTH TRACKING
// ============================================================================

/**
 * Scroll depth milestones for tracking engagement
 *
 * PURPOSE: Track how far users scroll on landing pages
 *
 * EVENTS:
 * - Scroll to 25%: 'scroll_25'
 * - Scroll to 50%: 'scroll_50'
 * - Scroll to 75%: 'scroll_75'
 * - Scroll to 100%: 'scroll_100'
 *
 * @see src/lib/analytics/page-view-utils.ts for adjacent engagement classification helpers
 */
export type ScrollMilestone = 25 | 50 | 75 | 100;
