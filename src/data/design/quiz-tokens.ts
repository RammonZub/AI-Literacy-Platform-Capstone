/**
 * Quiz Design Tokens
 *
 * PURPOSE: Centralized design system tokens with iOS native app aesthetic
 *
 * CONTEXT:
 * These tokens define the visual design language for the quiz, following
 * Apple's iOS Human Interface Guidelines for a native app feel. They align
 * with the main app's design system while providing quiz-specific values.
 *
 * DESIGN REFERENCE:
 * - iOS system font (San Francisco) - native system font stack
 * - iOS blue (#007AFF) as primary color - matches main app
 * - Rounded corners (12-24px for cards and buttons)
 * - Light gray page background (#F5F5F7) - iOS-style muted background
 * - White card containers for content
 * - Large touch targets (48-60px minimum) - accessible touch targets
 * - Block shadows for 3D depth - matches main app pattern
 *
 * ALIGNMENT WITH MAIN APP:
 * - Primary color (#007AFF) matches iOS Blue from main tokens
 * - Block shadow pattern matches main app's blockBlue shadow
 * - Page background (#F5F5F7) matches gray100 from main tokens
 * - Selected background (#DBEAFE) matches iOS light blue tint
 *
 * @see ImageCardOption, QuizOptionButton for usage
 * @see @/data/design/tokens.ts for main app tokens
 */

/**
 * Quiz design tokens
 *
 * USAGE:
 * ```tsx
 * import { quizTokens } from '@/data/design/quiz-tokens'
 *
 * style={{ backgroundColor: quizTokens.colors.bgIdle }}
 * ```
 */
export const quizTokens = {
  /**
   * Color palette (iOS-inspired, aligned with main app)
   *
   * PRIMARY: iOS blue (#007AFF) - main brand color, used for CTAs, selected states, progress
   * PAGE_BG: Light gray (#F5F5F7) - iOS-style muted page background, matches main app gray100
   * CARD_BG: White (#FFFFFF) - card container background
   * BG_IDLE: Clean white (#FFFFFF) - default button background
   * BG_SELECTED: Light blue tint (#DBEAFE) - selected button background, iOS light blue
   * TEXT_PRIMARY: Nearly black (#1A1A1A) - headings and primary text, improved readability
   * TEXT_MAIN: Black (#000000) - headings and primary text (iOS)
   * TEXT_SUB: Gray (#8E8E93) - secondary text, descriptions (iOS)
   * BORDER: Light gray (#E5E5EA) - subtle borders (iOS)
   */
  colors: {
    primary: "#007AFF", // iOS blue - CTA buttons, selected states
    primaryDark: "#0051D5", // Darker blue for hover/active states
    primaryGradient: "#007AFF", // CHANGED: Flat iOS blue - NO gradient (was: linear-gradient)
    pageBg: "#F5F5F7", // Light gray page background - iOS-style, matches main app
    cardBg: "#FFFFFF", // White card background
    bgIdle: "#FFFFFF", // Clean white - default button background
    bgSelected: "#DBEAFE", // Light blue tint - selected background (updated to match spec)
    textPrimary: "#1A1A1A", // Nearly black - improved readability (matches spec)
    textMain: "#000000", // iOS black - headings
    textSub: "#8E8E93", // iOS gray - secondary text
    white: "#FFFFFF", // White - backgrounds
    borderIdle: "#E5E5EA", // iOS light gray border
    borderSelected: "#007AFF", // iOS blue border when selected

    // NEW - Commonly hardcoded values
    textDark: "#120A1A", // Headings, emphasis (BenefitsPitch, BeforeAfter)
    textMedium: "#6B7280", // Secondary text (BenefitsPitch, BeforeAfter)
    textDarkGray: "#111827", // Dark descriptions (BenefitsPitch)
    textTertiary: "#C8C8CC", // Light cool gray (disabled states)
    accent: "#5B63FF", // Purple accent (BenefitsPitch)
    error: "#EF4444", // Error red (EmailCapture validation)
    success: "#3FAE55", // Success green (BeforeAfter, ResultsSummary)
    warning: "#F4C64D", // Warning yellow (ResultsSummary gauge)
    infoBg: "#EAF7EA", // Info green background (success states)
  },

  /**
   * Border radius (iOS-inspired, matches spec 12-24px)
   *
   * CARD: 16px - for image cards, containers (balanced rounded)
   * BUTTON: 20px - for option buttons (VERY rounded, iOS-style)
   * BUTTON_CONTINUE: 24px - for fully rounded primary CTA buttons (pill-shaped)
   * INPUT: 12px - for form inputs (minimum rounding from spec)
   * CONTAINER: 12px - for white card containers (minimum from spec)
   */
  borderRadius: {
    card: 16, // Balanced rounding for image cards
    button: 20, // Very rounded for option buttons (iOS-style)
    buttonContinue: 24, // Pill-shaped for primary CTAs (max from spec)
    input: 12, // Minimum rounding for form inputs (min from spec)
    container: 12, // Minimum rounding for card containers (min from spec)
  },

  /**
   * Spacing (in pixels, iOS standard + spec alignment)
   *
   * Used throughout the quiz for consistent padding and gaps
   *
   * SPEC VALUES:
   * - buttonHeight: 48-56px - primary CTA buttons (accessible touch targets)
   * - optionHeight: 48-60px - quiz option buttons (accessible touch targets)
   */
  spacing: {
    containerPadding: 20, // Side padding for main container (20px from spec)
    buttonGap: 12, // Gap between stacked buttons (iOS tight spacing)
    headerHeight: 44, // Height of quiz header (iOS touch target)
    progressBarHeight: 6, // Thin progress bar: 3px bar + 3px padding (iOS minimal style)
    totalHeaderHeight: 50, // Combined header + progress bar height (44 + 6)
    contentMarginTop: 110, // Margin for breathing room - increased for better spacing
    buttonPadding: "12px 20px", // Narrower, taller buttons (updated for Wiser style)
    maxImageCardHeight: 180, // Max height for image cards (no scroll on mobile)
    buttonHeight: 48, // Primary CTA button height (min from spec: 48-56px)
    buttonHeightLarge: 56, // Large primary button height (max from spec: 48-56px)
    optionHeight: 48, // Quiz option button height (min from spec: 48-60px)
    optionHeightLarge: 60, // Large quiz option button height (max from spec: 48-60px)

    // NEW - Spacing scale (commonly hardcoded values)
    xxsmall: "2px", // Extra extra small spacing
    xsmall: "4px", // Extra small spacing
    small: "8px", // Small spacing
    medium: "16px", // Medium spacing
    large: "24px", // Large spacing
    xlarge: "32px", // Extra large spacing
  },

  /**
   * Shadows (iOS-inspired, block shadows match main app)
   *
   * BLOCK SHADOWS (3D effect): Match main app's blockBlue pattern
   * - Creates depth with solid color offset + diffuse shadow
   * - Used for primary buttons and interactive elements
   *
   * CARD: For image cards, review cards
   * BUTTON: For selected/active buttons
   */
  shadows: {
    // Block shadows - 3D effect (matches main app)
    blockBlue: "0 6px 0 0 #007AFF, 0 9px 20px rgba(0, 122, 255, 0.15)", // Primary 3D shadow
    blockBlueHover: "0 4px 0 0 #0051D5, 0 8px 25px rgba(0, 81, 213, 0.2)", // Hover state
    blockBlueActive: "0 2px 0 0 #0041A8, 0 4px 15px rgba(0, 65, 168, 0.2)", // Active/pressed state

    // Standard shadows
    card: "0 2px 8px rgba(0, 0, 0, 0.06)", // iOS subtle card shadow
    button: "0 1px 4px rgba(0, 122, 255, 0.2)", // iOS blue shadow
    buttonActive: "0 2px 8px rgba(0, 122, 255, 0.3)", // iOS active shadow
  },

  /**
   * Typography (iOS San Francisco system font)
   *
   * Font family: Native system font stack for iOS-like appearance
   * Font sizes: Following iOS Human Interface Guidelines
   *
   * SYSTEM FONT STACK (prioritizes native fonts):
   * - San Francisco on iOS/macOS
   * - Segoe UI on Windows
   * - Roboto on Android
   * - Fallback to sans-serif
   */
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    heading: "20px", // Question headings (iOS large title)
    body: "17px", // Button labels (iOS body)
    subheading: "15px", // Subtitles, secondary text (iOS callout)
    small: "13px", // Hints, metadata (iOS caption 2)
  },

  /**
   * Touch targets (iOS standard + spec alignment)
   *
   * Minimum sizes for interactive elements
   *
   * Current values (aligned with spacing.buttonHeight/optionHeight):
   * - minHeight: 48-60px - Accessible touch targets (matches spec)
   * - minWidth: 44px - iOS standard minimum for tap targets
   */
  touchTarget: {
    minHeight: "48px", // Minimum height from spec (48-60px range)
    minHeightLarge: "60px", // Large height from spec (48-60px range)
    minWidth: "44px", // iOS standard minimum for tap targets
  },

  /**
   * Layout constraints (mobile-first, matches spec)
   *
   * MAX_WIDTH: 480px - mobile screen constraint applied everywhere
   * CONTAINER_PADDING: Consistent horizontal padding across all quiz components
   * CARD_PADDING: Internal padding for white card containers (16-20px from spec)
   *
   * WHY these specific values:
   * - 480px: Standard mobile viewport width that works across all devices
   * - 20px desktop padding: Provides breathing room without wasting space
   * - 12px mobile padding: Tighter on small screens to maximize content area
   * - 16-20px card padding: Internal padding for white card containers (from spec)
   *
   * USAGE: These values are consumed by QuizContainer and StickyButton to
   * enforce consistent layout constraints across all quiz components.
   */
  layout: {
    maxWidth: "480px", // Mobile-first max width for all quiz content
    containerPadding: "20px", // Desktop horizontal padding
    containerPaddingMobile: "12px", // Mobile horizontal padding
    cardPadding: "20px", // Internal card padding (max from spec: 16-20px)
    cardPaddingMobile: "16px", // Internal card padding mobile (min from spec: 16-20px)
  },

  /**
   * Component-specific tokens
   *
   * These tokens are specific to certain components and help
   * maintain consistency across similar UI patterns.
   */
  results: {
    lowScore: "#F26D3D", // Red for low scores (ResultsSummary)
    mediumScore: "#F4C64D", // Yellow for medium scores (ResultsSummary)
    highScore: "#55D24A", // Green for high scores (ResultsSummary)
    background: "#F8F8FA", // Light gray background (ResultsSummary)
    textMuted: "#B0B4BC", // Muted text color (ResultsSummary)
  },

  comparison: {
    beforeBackground: "#FDECEC", // Pink background for "before" state (BeforeAfter)
    beforeBorder: "#F3A3A3", // Pink border for "before" state (BeforeAfter)
    afterBackground: "#EAF7EA", // Green background for "after" state (BeforeAfter)
    afterBorder: "#76D18C", // Green border for "after" state (BeforeAfter)
  },
} as const;

/**
 * Template types for different question layouts
 *
 * These determine how options are rendered:
 * - 'image-card': Image cards with blue footer (Q1)
 * - 'text-center': Simple text buttons, centered text
 * - 'icon-left': Icon + text, left-aligned
 * - 'complex': Icon + title + subtitle (for knowledge ratings)
 */
export type QuizTemplate =
  | "image-card" // Image cards as options (2-column grid)
  | "text-center" // Simple text buttons, centered
  | "icon-left" // Emoji/icon with text, left-aligned
  | "complex"; // Icon + title + subtitle

/**
 * Option button variants
 *
 * Different button layouts for different use cases
 */
export type ButtonVariant = "text-center" | "icon-left" | "complex";
