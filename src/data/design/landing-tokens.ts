/**
 * Landing Page Design Tokens
 *
 * PURPOSE: Design tokens for marketing-style surfaces (reference palette)
 *
 * DESIGN RATIONALE:
 * - Editorial serif (Georgia) + clean sans-serif (system-ui) pairing
 * - High-contrast black/white with subtle gray scale
 * - Pill-shaped buttons (999px border-radius) for friendly, modern feel
 * - Soft shadows with large blur radius for floating elements
 * - Primary blue replaces reference green (#25cf62 → #3B82F6)
 *
 * COLOR PHILOSOPHY:
 * - Predominantly black and white for maximum readability
 * - Gray scale for hierarchy and depth
 * - Accent colors (yellow, purple, red, orange) for topic differentiation
 * - Alpha channels for overlays and depth effects
 *
 * TYPOGRAPHY:
 * - Georgia serif for headings (editorial, academic authority)
 * - System sans-serif for UI elements and body text (clean, legible)
 * - Monospace for code snippets
 * - Tight letter-spacing on headings for impact
 *
 * SPACING & LAYOUT:
 * - 1100px max-width container for content
 * - 80px vertical section padding for breathing room
 * - 24px horizontal padding for mobile edges
 * - Generous gaps between elements (16px, 40px, 60px)
 *
 * DEPENDENCIES:
 * - Used by all landing page components
 * - Referenced in Tailwind config for utility generation
 */

export const landingTokens = {
  /**
   * Color Palette
   *
   * Grayscale (Neutral): Used for backgrounds, borders, text hierarchy
   * Brand: primary blue replacing reference green
   * Accents: Multi-color system for topic differentiation
   * Alpha: Transparency channels for depth and overlays
   */
  colors: {
    // Grayscale (Neutral)
    gray: {
      50: "#F8F8F8", // Page backgrounds (alternate sections)
      100: "#F2F2F2", // Input backgrounds, hover states
      200: "#E5E5E5", // Primary Border Color
      300: "#CCCCCC", // Secondary borders
      500: "#999999", // Placeholder text
      600: "#808080", // Subtle text
      800: "#4C4C4C", // Body text
      900: "#333333", // Primary headings
      950: "#0A0A0A", // Nearly black (footer, dark sections)
    },

    // Brand Colors (artifact customization)
    primary: {
      DEFAULT: "#3B82F6", // Primary blue (was reference green #25cf62)
      hover: "#2563EB", // Button hover state (was #1ea850)
    },

    // Accent Colors (from Brilliant, kept unchanged)
    accent: {
      yellow: "#FCEEA4", // Gamification elements (lightning bolts, streaks)
      purple: "#9D7BF5", // Computer Science topic accent
      red: "#F43F5E", // Data Analysis topic accent
      orange: "#FBBF24", // Science & Engineering topic accent
      blue: "#3B82F6", // Coding & AI topic accent
    },

    // Base Colors
    white: "#FFFFFF",
    black: "#000000",
  },

  /**
   * Alpha Channels (Transparency)
   *
   * Used for:
   * - Soft shadows on floating elements
   * - Overlay backgrounds
   * - Hover states and depth effects
   */
  alpha: {
    black: {
      50: "rgba(0,0,0,0.5)",
      100: "rgba(0,0,0,0.1)", // Soft shadows
      200: "rgba(0,0,0,0.05)",
    },
    white: {
      50: "rgba(255,255,255,0.5)",
      100: "rgba(255,255,255,0.1)",
    },
  },

  /**
   * Typography Scale
   *
   * Font Pairing:
   * - Display (Serif): Georgia for H1, H2, hero text
   * - Body (Sans): system-ui for UI, paragraphs, buttons
   * - Mono: Monospace for code snippets
   *
   * Letter Spacing:
   * - Tighter on headings for impact (-2px on H1, -1px on H2)
   * - Normal on body text for readability
   */
  typography: {
    // Font Families
    fontFamily: {
      serif: 'Georgia, "Times New Roman", Times, serif',
      sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
      mono: '"SF Mono", "Fira Code", "Courier New", monospace',
    },

    // Font Sizes
    fontSize: {
      hero: "4.5rem", // 72px - H1 in hero section
      section: "2.5rem", // 40px - H2 section headings
      bodyLarge: "1.25rem", // 20px - Hero paragraph
      bodyBase: "1.1rem", // 18px - Feature descriptions
      bodySmall: "0.9rem", // 14px - Pills, small text
    },

    // Font Weights
    fontWeight: {
      normal: "400",
      bold: "700",
      extrabold: "800",
    },

    // Letter Spacing
    letterSpacing: {
      hero: "-0.125rem", // -2px - Hero heading
      section: "-0.0625rem", // -1px - Section headings
      normal: "0",
    },

    // Line Heights
    lineHeight: {
      tight: "1.1",
      normal: "1.5",
    },
  },

  /**
   * Spacing Scale
   *
   * Container: 1100px max-width for content
   * Sections: 80px top/bottom padding
   * Components: Tight internal spacing, wide external gaps
   */
  spacing: {
    // Container
    container: {
      maxWidth: "1100px",
      padding: "24px",
    },

    // Section Spacing
    section: {
      vertical: "80px", // Top/bottom padding for sections
      hero: {
        top: "80px",
        bottom: "60px",
      },
    },

    // Component Gaps
    gap: {
      xs: "8px",
      sm: "16px",
      md: "24px",
      lg: "40px",
      xl: "60px", // Feature section visual/content gap
    },

    // Header
    header: {
      height: "64px",
    },
  },

  /**
   * Border Radius
   *
   * Pill: 999px for fully rounded buttons
   * Card: 16px for modals and content cards
   * Sm: 8px for small elements and code blocks
   */
  radius: {
    pill: "999px", // Buttons (fully rounded)
    card: "16px", // Cards, modals
    sm: "8px", // Small elements, code blocks
    xs: "4px", // Tiny elements
    appStore: "8px", // App store badges
  },

  /**
   * Shadows & Elevation
   *
   * Soft: Large blur for floating cards (0 20px 40px)
   * Subtle: Small blur for tags and elements (0 4px 12px)
   * Focus: Blue ring for accessibility (WCAG compliance)
   */
  shadows: {
    soft: "0 20px 40px rgba(0,0,0,0.08)", // Floating cards
    subtle: "0 4px 12px rgba(0,0,0,0.05)", // Tags, small elements
    focus: "0 0 0 3px rgba(66, 153, 225, 0.6)", // Accessibility focus ring
  },

  /**
   * Transitions
   *
   * Fast: 100ms for button active states (tactile feedback)
   * Normal: 200ms for hover states
   */
  transitions: {
    fast: "0.1s ease",
    normal: "0.2s ease",
  },

  /**
   * Z-Index Scale
   *
   * Ensures proper layering of elements
   */
  zIndex: {
    header: 100,
    dropdown: 101,
    modal: 200,
  },
} as const;

/**
 * Type Definitions for Token Usage
 */
export type LandingColor = keyof typeof landingTokens.colors.gray;
export type LandingAccent = keyof typeof landingTokens.colors.accent;
export type LandingRadius = keyof typeof landingTokens.radius;
