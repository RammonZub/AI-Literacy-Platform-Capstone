/**
 * Theme System Type Definitions
 *
 * PURPOSE: Simple theme interface for the app shell
 *
 * DESIGN: Clean, minimal theme system with a single professional theme
 * inspired by the profile page design (white cards, gray borders, blue accents).
 */

/**
 * Type: Theme
 *
 * PURPOSE: Simple theme definition with colors only
 *
 * No complex design system properties - just colors that map to CSS variables
 */
export interface Theme {
  /**
   * Unique identifier for this theme
   */
  id: string;

  /**
   * Human-readable theme name
   */
  name: string;

  // ============================================
  // CORE COLORS
  // ============================================

  /**
   * Main application background color
   */
  background: string;

  /**
   * Primary text color
   */
  foreground: string;

  /**
   * Card and panel background color
   */
  card: string;

  /**
   * Text color on card backgrounds
   */
  cardForeground: string;

  /**
   * Dark card background color (for image overlay cards)
   */
  cardDark: string;

  /**
   * Text color on dark card backgrounds
   */
  cardDarkForeground: string;

  // ============================================
  // PRIMARY ACCENT
  // ============================================

  /**
   * Primary accent color (soft red)
   */
  primary: string;

  /**
   * Text color on primary backgrounds
   */
  primaryForeground: string;

  // ============================================
  // SECONDARY ACCENT
  // ============================================

  /**
   * Secondary accent color (gem blue)
   */
  secondary: string;

  /**
   * Text color on secondary backgrounds
   */
  secondaryForeground: string;

  // ============================================
  // MUTED
  // ============================================

  /**
   * Muted background color
   */
  muted: string;

  /**
   * Secondary text color
   */
  mutedForeground: string;

  // ============================================
  // BORDER
  // ============================================

  /**
   * Border color for all UI elements
   */
  border: string;

  // ============================================
  // SEMANTIC COLORS
  // ============================================

  /**
   * Success color
   */
  success: string;

  /**
   * Error color
   */
  error: string;

  /**
   * Warning color
   */
  warning: string;
}

/**
 * Type: ThemeId
 *
 * PURPOSE: Union type of available theme IDs
 *
 * Currently only "default" - single clean theme
 */
export type ThemeId = "default" | "ios";

/**
 * Type: ThemeContextType
 *
 * PURPOSE: Type definition for the ThemeContext value
 */
export interface ThemeContextType {
  /**
   * Currently active theme
   */
  theme: Theme;

  /**
   * Function to change the active theme
   */
  setTheme: (themeId: ThemeId) => void;
}
