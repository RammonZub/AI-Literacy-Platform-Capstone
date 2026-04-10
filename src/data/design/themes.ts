/**
 * Theme Definitions
 *
 * PURPOSE: Default platform theme
 *
 * DESIGN: Beige/cream background with pastel red and gem dark blue accents
 * Clean, modern, professional aesthetic inspired by warmth and clarity
 *
 * COLOR PALETTE:
 * - Background: Beige/Cream (#F5F1EB)
 * - Cards: Light cream (#FAF8F3)
 * - Primary Accent: Pastel Red (#D48C8C)
 * - Secondary Accent: Gem Dark Blue (#2E5A7D)
 * - Text: Dark brown-gray (#2D2A26)
 * - Borders: Warm gray (#D4CFC7)
 */

import type { Theme } from "@/types/theme";

/**
 * Default Theme
 *
 * DESIGN: Beige/cream background with pastel red and gem dark blue accents
 * FEEL: Warm, clean, modern, professional
 * ACCENTS: Dual color system (red for primary CTAs, dark blue for secondary)
 *
 * COLOR PALETTE:
 * - Background: Beige/Cream
 * - Cards: Slightly lighter cream
 * - Primary: Pastel Red (soft, muted rose)
 * - Secondary: Gem Dark Blue (rich, deep blue)
 * - Text: Dark brown-gray for readability
 * - Semantic: Muted, natural colors
 */
const defaultTheme: Theme = {
  id: "default",
  name: "AI Literacy",

  // ============================================
  // CORE COLORS
  // ============================================
  background: "#F5F1EB", // Beige/Cream
  foreground: "#2D2A26", // Dark brown-gray text
  card: "#FAF8F3", // Light cream
  cardForeground: "#2D2A26", // Dark brown-gray text

  // ============================================
  // DARK CARD (for image overlays)
  // ============================================
  cardDark: "#3A3228", // Dark brown
  cardDarkForeground: "#FFFFFF", // White

  // ============================================
  // PRIMARY ACCENT (Deeper Rose Red)
  // ============================================
  primary: "#B86B6E", // Deeper rose red for better visibility
  primaryForeground: "#FFFFFF",

  // ============================================
  // SECONDARY ACCENT (Darker Gem Blue)
  // ============================================
  secondary: "#1E4A6D", // Darker gem blue for active states
  secondaryForeground: "#FFFFFF",

  // ============================================
  // MUTED
  // ============================================
  muted: "#E8E4DD", // Light beige-gray
  mutedForeground: "#6B6560", // Warm gray

  // ============================================
  // BORDER
  // ============================================
  border: "#D4CFC7", // Warm gray

  // ============================================
  // SEMANTIC COLORS
  // ============================================
  success: "#5FA882", // Cleaner, more vibrant green
  error: "#B86B6E", // Deeper rose red (same as primary)
  warning: "#D4A574", // Soft amber
};

/**
 * iOS Native Theme
 *
 * DESIGN: Pure white background with black text and iOS system colors
 * FEEL: Clean, minimal, native iOS app aesthetic
 * ACCENTS: iOS Blue for primary, iOS Gray for secondary
 *
 * COLOR PALETTE:
 * - Background: Pure White (#FFFFFF)
 * - Cards: White
 * - Primary: iOS Blue (#007AFF)
 * - Secondary: iOS Gray 6 (#F2F2F7)
 * - Text: Pure Black (#000000)
 * - Semantic: iOS System Colors
 */
const iosTheme: Theme = {
  id: "ios",
  name: "iOS Native",

  // Core colors - Pure White Mode
  background: "#FFFFFF",
  foreground: "#000000",
  card: "#FFFFFF",
  cardForeground: "#000000",

  // Dark card (for image overlays)
  cardDark: "#1C1C1E",
  cardDarkForeground: "#FFFFFF",

  // Primary accent (iOS Blue)
  primary: "#007AFF",
  primaryForeground: "#FFFFFF",

  // Secondary accent (iOS Gray 6)
  secondary: "#F2F2F7",
  secondaryForeground: "#000000",

  // Muted
  muted: "#F2F2F7",
  mutedForeground: "#8E8E93",

  // Border (iOS Separator)
  border: "#E5E5EA",

  // Semantic colors (iOS System Colors)
  success: "#34C759", // System Green
  error: "#FF3B30", // System Red
  warning: "#FFCC00", // System Yellow
};

// ============================================
// EXPORTS
// ============================================

/**
 * Themes Collection
 *
 * Single theme for simplicity
 */
export const themes = {
  default: defaultTheme,
  ios: iosTheme,
} as const;

/**
 * Default Theme ID
 */
export const DEFAULT_THEME: keyof typeof themes = "ios";

/**
 * Get theme by ID
 *
 * @param id - Theme ID to retrieve
 * @returns Theme object or default theme
 */
export function getTheme(id: string): Theme {
  return themes[id as keyof typeof themes] || themes[DEFAULT_THEME];
}

/**
 * Get all theme IDs
 *
 * @returns Array of theme IDs
 */
export function getThemeIds(): string[] {
  return Object.keys(themes);
}

/**
 * Get all themes as array
 *
 * @returns Array of theme objects
 */
export function getThemeValues(): Theme[] {
  return Object.values(themes);
}
