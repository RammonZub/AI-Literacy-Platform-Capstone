/**
 * Design Tokens
 *
 * PURPOSE: Central design system tokens for consistent styling across the app
 *
 * CONTEXT: iOS-inspired design with Blue (#007AFF) as the primary brand color.
 * Used across onboarding, landing, lessons, and interactive elements.
 *
 * KEY RESPONSIBILITIES:
 * - Define iOS Blue (#007AFF) as primary brand color
 * - Green for completed lessons (semantic success state)
 * - Yellow for in-progress lessons
 * - Gray for locked/unseen lessons
 * - Provide shadows, spacing, and typography tokens
 *
 * DESIGN RATIONALE:
 * - iOS Blue (#007AFF) is the primary brand color - used in buttons, progress bars, selections
 * - Green only for completed (semantic success meaning)
 * - Yellow only for in-progress (semantic warning meaning)
 * - Gray for locked/unseen states
 */

// ============================================
// BRAND COLOR PALETTE
// ============================================

/**
 * Brand Color Palette
 *
 * PURPOSE: iOS-inspired design with Blue as primary
 *
 * DESIGN RATIONALE:
 * - iOS Blue (#007AFF) is the primary brand color
 * - Used for buttons, progress bars, selections, CTAs
 * - Green for completed lessons (success state)
 * - Yellow for in-progress (warning state)
 * - Gray for locked/unseen
 */
export const gemColors = {
  // PRIMARY - iOS Blue (brand color)
  blue: "#007AFF", // iOS Blue - PRIMARY BRAND COLOR
  blueDark: "#0056CC", // Darker blue for hover/active states
  blueLight: "#4DA3FF", // Lighter blue for highlights
  blueLighter: "#DBEAFE", // Very light blue for backgrounds

  // Black for text and contrast
  black: "#000000",
  blackDark: "#1a1a1a", // Dark gray for text
  blackDarker: "#0a0a0a", // Near black

  // Green - ONLY for completed lessons (semantic meaning)
  green: "#5BA387", // Sage green
  greenDark: "#4A8B6D", // Darker sage
  greenLight: "#7BC4A0", // Light sage (for gradients)

  // Yellow - ONLY for in-progress (subtle)
  yellow: "#E5B05C", // Muted gold
  yellowLight: "#F0D9A0", // Light yellow-gray

  // Gray Scale - Modern cool grays
  gray: {
    g1: "#A0A0A8", // Secondary text
    g2: "#C8C8CC", // Locked/unseen states
    g3: "#E8E8EB", // Border color
    g4: "#F5F5F7", // Muted background
    g5: "#FFFFFF", // White background
  },
} as const;

// ============================================
// COLORS (iOS Blue Primary + Semantic States)
// ============================================

export const colors = {
  // Base
  white: "#FFFFFF",
  black: "#000000",

  // PRIMARY - iOS Blue (brand color)
  blue: "#007AFF", // iOS Blue - PRIMARY
  blueDark: "#0056CC", // Hover/active state
  blueLight: "#4DA3FF", // Lighter blue
  blueLighter: "#DBEAFE", // Very light blue background

  // Modern Gray Scale (cool grays)
  gray50: "#FAFAFA",
  gray100: "#F5F5F7", // Muted background
  gray200: "#E8E8EB", // Border color
  gray300: "#D4D4D8",
  gray400: "#C8C8CC", // Locked/unseen
  gray500: "#A0A0A8", // Secondary text
  gray600: "#6B7280",
  gray700: "#4B5563",
  gray800: "#1F2937",
  gray900: "#111827",

  // Green - ONLY for completed lessons
  success: "#5BA387", // Sage green
  successLight: "#7BC4A0",
  successDark: "#4A8B6D",

  // Yellow - ONLY for in-progress
  warning: "#E5B05C", // Muted gold
  warningLight: "#F0D9A0",

  // Red - For errors only
  error: "#D46A6A", // Soft coral
  errorLight: "#E58A8A",

  // Info - Blue tint
  info: "#007AFF", // Blue
  infoLight: "#DBEAFE", // Light blue

  // Semantic - Blue is primary
  primary: "#007AFF", // iOS Blue - BRAND COLOR
  primaryLight: "#DBEAFE", // Light blue background
  primaryDark: "#0056CC", // Darker blue for hover
  secondary: "#F5F5F7", // Light gray
  accent: "#007AFF", // Blue accent

  // Lesson node states - Clean gradients
  completed: {
    from: "#7BC4A0", // Light sage green
    to: "#5BA387", // Sage green (color-on-color gradient)
    border: "#4A8B6D",
    shadow: "#3A7B5D",
  },
  unlocked: {
    from: "#F5F5F7", // Light gray
    to: "#E8E8EB", // Medium gray (gray-on-gray gradient)
    border: "#D4D4D8",
    shadow: "#C8C8CC",
  },
  locked: {
    from: "#F5F5F7", // Light gray
    to: "#C8C8CC", // Cool gray
    border: "#A0A0A8",
    shadow: "#909098",
  },
  inProgress: {
    from: "#F0D9A0", // Light yellow-gray
    to: "#E5B05C", // Muted gold (yellow-on-yellow gradient)
    border: "#C9A050",
    shadow: "#B89740",
  },

  // Module category colors (Gray scale + Green only)
  modules: {
    aiTools: { from: "#A0A0A8", to: "#6B7280" }, // Gray scale
    skills: { from: "#7BC4A0", to: "#5BA387" }, // Green (completed)
    productivity: { from: "#8E8E93", to: "#6B7280" }, // Gray scale
    strategy: { from: "#A0A0A8", to: "#6B7280" }, // Gray scale
  },

  // Gradients
  blueGradient: "linear-gradient(180deg, #4DA3FF 0%, #007AFF 100%)",
  greenGradient: "linear-gradient(135deg, #7BC4A0 0%, #5BA387 100%)",
  yellowGradient: "linear-gradient(135deg, #F0D9A0 0%, #E5B05C 100%)",
  grayGradient: "linear-gradient(180deg, #F5F5F7 0%, #E8E8EB 100%)",
} as const;

// ============================================
// SHADOWS (Blue Primary + Gray Scale)
// ============================================

export const shadows = {
  // Standard shadows
  none: "none",
  sm: "0 1px 3px rgba(0, 0, 0, 0.05)",
  md: "0 2px 8px rgba(0, 0, 0, 0.06)",
  lg: "0 4px 12px rgba(0, 0, 0, 0.08)",
  xl: "0 8px 20px rgba(0, 0, 0, 0.12)",
  "2xl": "0 12px 28px rgba(0, 0, 0, 0.15)",

  // Block shadows - 3D effect using blue (primary brand color)
  blockBlue: "0 6px 0 0 #0056CC, 0 9px 20px rgba(0, 122, 255, 0.15)",
  blockBlueHover: "0 4px 0 0 #0044AA, 0 8px 25px rgba(0, 122, 255, 0.2)",
  blockBlueActive: "0 2px 0 0 #003D99, 0 4px 15px rgba(0, 122, 255, 0.2)",

  // Gray block shadows for secondary buttons
  blockGray: "0 6px 0 0 #C8C8CC, 0 9px 20px rgba(200, 200, 204, 0.15)",
  blockGrayHover: "0 4px 0 0 #A0A0A8, 0 8px 25px rgba(160, 160, 168, 0.2)",

  // Node 3D shadow (green for completed)
  node3dGreen: "0 6px 0 0 #5BA387, 0 9px 20px rgba(91, 163, 135, 0.15)",
  node3dGray: "0 6px 0 0 #A0A0A8, 0 9px 20px rgba(160, 160, 168, 0.15)",

  // Card shadows
  card: "0 2px 8px rgba(0, 0, 0, 0.06)",
  cardHover: "0 6px 16px rgba(0, 0, 0, 0.1)",

  // Dropdown shadow
  dropdown: "0 4px 12px rgba(0, 0, 0, 0.08)",

  // Modal shadow
  modal: "0 20px 40px rgba(0, 0, 0, 0.2)",
} as const;

// ============================================
// SPACING
// ============================================

export const spacing = {
  0: "0",
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  32: "8rem",
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const borderRadius = {
  none: "0",
  sm: "0.5rem",
  md: "0.75rem",
  lg: "1rem",
  xl: "1.5rem",
  "2xl": "2rem",
  full: "9999px",
} as const;

// ============================================
// FONT SIZES
// ============================================

export const fontSize = {
  xs: "0.75rem",
  sm: "0.875rem",
  base: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
} as const;

// ============================================
// FONT WEIGHTS
// ============================================

export const fontWeight = {
  normal: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
} as const;

// ============================================
// TRANSITIONS
// ============================================

export const transition = {
  fast: "150ms",
  base: "200ms",
  slow: "300ms",
  slower: "500ms",
} as const;

// ============================================
// GRADIENTS (Blue Primary + Semantic States)
// ============================================

export const gradients = {
  // Blue gradients (primary brand)
  bluePrimary: "linear-gradient(180deg, #4DA3FF 0%, #007AFF 100%)",
  blueSubtle: "linear-gradient(180deg, #6BB3FF 0%, #4DA3FF 100%)",
  blueDark: "linear-gradient(180deg, #007AFF 0%, #0056CC 100%)",

  // Black gradient
  blackPrimary: "linear-gradient(180deg, #1a1a1a 0%, #000000 100%)",

  // Green gradient (for completed lessons only)
  greenGradient: "linear-gradient(135deg, #7BC4A0 0%, #5BA387 100%)",

  // Yellow gradient (for in-progress only)
  yellowGradient: "linear-gradient(135deg, #F0D9A0 0%, #E5B05C 100%)",

  // Gray gradient (for unlocked/locked)
  grayGradient: "linear-gradient(180deg, #F5F5F7 0%, #E8E8EB 100%)",

  // Fade gradients for images
  fadeBottom:
    "linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.9) 100%)",
  fadeTop:
    "linear-gradient(to top, transparent 0%, rgba(255, 255, 255, 0.9) 100%)",

  // Module category gradients
  moduleAiTools: "linear-gradient(135deg, #007AFF 0%, #0056CC 100%)", // Blue
  moduleSkills: "linear-gradient(135deg, #7BC4A0 0%, #5BA387 100%)", // Green
  moduleProductivity: "linear-gradient(135deg, #8E8E93 0%, #6B7280 100%)", // Gray
  moduleStrategy: "linear-gradient(135deg, #007AFF 0%, #0056CC 100%)", // Blue
} as const;

// ============================================
// QUIZ COLORS (iOS Blue Primary)
// ============================================

export const quizColors = {
  // Backgrounds
  pageBackground: "#FFFFFF", // White background
  cardBackground: "#F5F5F7", // Light gray (darker than white)
  selectedBackground: "#DBEAFE", // Light blue tint for selections

  // Primary - iOS Blue (brand color)
  primary: "#007AFF", // iOS blue - PRIMARY BRAND COLOR
  primaryLight: "#DBEAFE", // Light blue background
  primaryBorder: "#007AFF", // iOS blue border
  primaryDark: "#0056CC", // Darker blue for hover

  // Text (Black/Gray scale)
  textPrimary: "#1A1A1A", // Near black for better readability
  textSecondary: "#8E8E93", // iOS gray
  textTertiary: "#C8C8CC", // Light cool gray

  // Borders (Gray)
  border: "#E5E5EA", // iOS light gray border
  borderLight: "#F5F5F7", // Light gray background

  // States (Gray)
  hover: "#FAFAFA", // Very light gray
  active: "#E8E8EB", // Border gray
} as const;

// ============================================
// MAX WIDTH (Container Constraints)
// ============================================

/**
 * Maximum width constraints for consistent layout
 *
 * PURPOSE: Centralize all width constraints for mobile-first responsive design
 *
 * DESIGN RATIONALE:
 * - Mobile-first: base widths are optimized for mobile (< 640px)
 * - Responsive breakpoints: sm (640px+), lg (1024px+)
 * - NOT full-width on desktop: constrained widths create better reading experience
 * - Consistent across all pages: no more guessing "what width should this be?"
 *
 * USAGE:
 * - container: Main content pages (Home, Library, Profile) - 448→512→576px
 * - content: Wider content for slide variants with more content - 672px
 * - wide: Exceptionally wide content (cinematic slides) - 896px
 * - modal: Modal dialogs - 448px
 */
export const maxWidth = {
  /**
   * Main content container width
   *
   * USAGE: Most platform pages (Home, Library, Profile, Module)
   * BREAKPOINTS: 448px (mobile) → 512px (sm) → 576px (lg)
   */
  container: "max-w-md sm:max-w-lg lg:max-w-xl",

  /**
   * Content width for slides with more content
   *
   * USAGE: Slide variants that need more space (InsightCard, ConceptDemo)
   * BREAKPOINTS: Fixed 672px max
   */
  content: "max-w-2xl",

  /**
   * Wide content for exceptional cases
   *
   * USAGE: Cinematic slides, full-width hero content
   * BREAKPOINTS: Fixed 896px max
   */
  wide: "max-w-4xl",

  /**
   * Modal width
   *
   * USAGE: Modal dialogs, popups
   * BREAKPOINTS: Fixed 448px max
   */
  modal: "max-w-md",
} as const;

// ============================================
// PLATFORM LAYOUT
// ============================================

/**
 * Platform-only layout tokens
 *
 * WHY: The learning platform uses a separate desktop rail contract from the
 * rest of the app. Marketing and onboarding surfaces should keep using the
 * generic Container widths.
 */
export const platformLayout = {
  railMax: "42rem",
  lessonRailMax: "48rem",
  sidebarWidth: "15rem",
  sidebarGap: "1rem",
  headerHeight: "4rem",
} as const;

// ============================================
// TYPE EXPORTS
// ============================================

export type Color = keyof typeof colors;
export type Shadow = keyof typeof shadows;
export type Spacing = keyof typeof spacing;
export type BorderRadius = keyof typeof borderRadius;
export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type Transition = keyof typeof transition;
export type Gradient = keyof typeof gradients;
export type MaxWidth = keyof typeof maxWidth;
