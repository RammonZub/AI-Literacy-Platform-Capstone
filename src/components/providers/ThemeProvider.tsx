/**
 * ThemeProvider Component
 *
 * PURPOSE: Provider component for managing theme state and applying CSS variables
 *
 * CONTEXT: This component wraps the entire app and provides theme context to all
 * child components. It handles theme persistence via cookies and dynamically updates
 * CSS custom properties when the theme changes.
 *
 * KEY RESPONSIBILITIES:
 * - Manage current theme state
 * - Apply theme colors as CSS custom properties to document root
 * - Persist theme choice via cookies
 * - Provide theme context via useTheme hook
 *
 * IMPLEMENTATION NOTES:
 * - Uses client component ('use client') for state management and DOM manipulation
 * - Applies theme to document.documentElement (html element)
 * - Falls back to default theme if no saved preference
 *
 * DEPENDENCIES:
 * - React: useState, useEffect for state and side effects
 * - @/data/design/themes: Theme definitions
 * - @/types/theme: Type definitions
 *
 * @see data/design/themes.ts for theme definitions
 * @see types/theme.ts for Theme interface
 */

"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { DEFAULT_THEME, themes } from "@/data/design/themes";
import type { Theme, ThemeContextType, ThemeId } from "@/types/theme";

// ============================================
// CONTEXT DEFINITION
// ============================================

/**
 * Theme Context
 *
 * PURPOSE: Provide theme state and setter to all child components
 *
 * DEFAULT VALUE: Uses the default theme as fallback
 * This should only be used outside of ThemeProvider for type safety
 */
const ThemeContext = createContext<ThemeContextType | null>(null);

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Convert camelCase to kebab-case
 *
 * PURPOSE: Convert TypeScript property names to CSS variable names
 *
 * @example
 * 'cardForeground' → '--card-foreground'
 * 'primary' → '--primary'
 */
function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

/**
 * Apply theme to DOM
 *
 * PURPOSE: Set CSS custom properties on document root
 *
 * WHY: This allows Tailwind classes and inline styles to reference theme colors
 * via CSS variables (e.g., bg-background, border-border)
 *
 * @param theme - Theme object to apply
 *
 * DESIGN DECISION:
 * - Sets properties on :root (html element) for global availability
 * - Uses kebab-case for CSS variable naming convention
 * - Includes all theme properties
 */
function applyThemeToDOM(theme: Theme): void {
  const root = document.documentElement;

  // Apply all theme properties as CSS custom properties
  Object.entries(theme).forEach(([key, value]) => {
    // Skip non-style properties (id, name)
    if (key === "id" || key === "name") return;

    // Convert camelCase to kebab-case and set CSS variable
    const cssVarName = toKebabCase(key);
    root.style.setProperty(`--${cssVarName}`, value as string);
  });
}

/**
 * Get theme from cookie
 *
 * PURPOSE: Retrieve saved theme preference from cookies
 *
 * @returns Saved theme ID or null
 */
function getThemeFromCookie(): string | null {
  const match = document.cookie.match(/(^|;)\\s*theme\\s*=\\s*([^;]+)/);
  return match ? match[2] : null;
}

// ============================================
// PROVIDER COMPONENT
// ============================================

interface ThemeProviderProps {
  children: ReactNode;
  /** Default theme if no saved preference */
  defaultTheme?: keyof typeof themes;
}

/**
 * ThemeProvider Component
 *
 * PURPOSE: Wrap the app to provide theme context
 *
 * @param children - Child components to receive theme context
 * @param defaultTheme - Theme to use if no saved preference
 */
export function ThemeProvider({ children, defaultTheme = DEFAULT_THEME }: ThemeProviderProps) {
  // State for current theme ID
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    if (typeof document === "undefined") {
      return defaultTheme;
    }

    const savedTheme = getThemeFromCookie();
    return savedTheme && savedTheme in themes ? (savedTheme as ThemeId) : defaultTheme;
  });

  // Derived state: current theme object
  const theme: Theme = themes[themeId] || themes[defaultTheme];

  /**
   * Set theme function
   *
   * PURPOSE: Change the active theme and persist the choice
   *
   * @param id - Theme ID to switch to
   *
   * DESIGN DECISIONS:
   * - Updates state to trigger re-renders
   * - Saves to cookie for persistence across sessions
   * - Applies theme to DOM immediately
   * - Cookie expires in 1 year
   * - Memoized with useCallback to prevent unnecessary re-renders
   */
  const setTheme = useCallback(
    (id: ThemeId): void => {
      // Validate theme exists
      if (!themes[id]) {
        console.warn(`Theme "${id}" not found, using default`);
        id = defaultTheme as ThemeId;
      }

      setThemeId(id);

      // Persist to cookie (1 year expiry)
      const maxAge = 365 * 24 * 60 * 60; // 1 year in seconds
      document.cookie = `theme=${id};path=/;max-age=${maxAge};SameSite=Lax`;

      // Apply to DOM immediately
      applyThemeToDOM(themes[id]);
    },
    [defaultTheme],
  );

  // Re-apply theme when themeId changes (for external updates)
  useEffect(() => {
    applyThemeToDOM(theme);
  }, [theme]);

  // Context value - memoized to prevent unnecessary re-renders of consumers
  const contextValue: ThemeContextType = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

// ============================================
// HOOK
// ============================================

/**
 * useTheme Hook
 *
 * PURPOSE: Access theme context from any component
 *
 * @throws Error if used outside of ThemeProvider
 * @returns Theme context with current theme and setter
 *
 * @example
 * const { theme, setTheme } = useTheme()
 * <button style={{ background: theme.primary }}>Click</button>
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
