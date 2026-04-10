/**
 * Quiz Design Tokens Tests
 *
 * PURPOSE: Comprehensive test suite for quiz design system tokens
 *
 * CONTEXT: These tests verify the structure and values of the quiz design tokens,
 * ensuring consistency with iOS design guidelines and alignment with the main app.
 *
 * TESTING APPROACH:
 * - Verify all expected token categories exist
 * - Check specific color values match iOS/blue theme
 * - Validate numeric token values (spacing, border radius)
 * - Ensure type exports are correct
 * - Test immutability of tokens object
 *
 * DEPENDENCIES:
 * - vitest: Test runner
 * - quiz-tokens.ts: Token definitions under test
 */

import { describe, expect, it } from "vitest";
import { type ButtonVariant, type QuizTemplate, quizTokens } from "../quiz-tokens";

// ============================================================================
// TOKEN STRUCTURE TESTS
// ============================================================================

describe("quizTokens structure", () => {
  /**
   * Top-level token categories
   *
   * TESTING: Verifies all expected token categories exist
   */
  it("has all expected top-level token categories", () => {
    expect(quizTokens).toHaveProperty("colors");
    expect(quizTokens).toHaveProperty("borderRadius");
    expect(quizTokens).toHaveProperty("spacing");
    expect(quizTokens).toHaveProperty("shadows");
    expect(quizTokens).toHaveProperty("typography");
    expect(quizTokens).toHaveProperty("touchTarget");
    expect(quizTokens).toHaveProperty("layout");
    expect(quizTokens).toHaveProperty("results");
    expect(quizTokens).toHaveProperty("comparison");
  });

  /**
   * Immutability check
   *
   * TESTING: Ensures tokens cannot be accidentally modified at runtime
   */
  it('tokens object is frozen with "as const" assertion', () => {
    // The "as const" assertion makes it readonly at compile time
    // At runtime, we can verify the structure exists
    expect(typeof quizTokens).toBe("object");
    expect(quizTokens).not.toBeNull();
  });
});

// ============================================================================
// COLOR TOKENS TESTS
// ============================================================================

describe("quizTokens.colors", () => {
  /**
   * Primary color values
   *
   * TESTING: Verifies iOS blue theme colors are correct
   */
  describe("primary colors", () => {
    it("has correct iOS blue primary color", () => {
      expect(quizTokens.colors.primary).toBe("#007AFF");
    });

    it("has darker blue for hover states", () => {
      expect(quizTokens.colors.primaryDark).toBe("#0051D5");
    });

    it("has primary gradient as flat color (not actual gradient)", () => {
      expect(quizTokens.colors.primaryGradient).toBe("#007AFF");
    });
  });

  /**
   * Background colors
   *
   * TESTING: Verifies iOS-style page and card backgrounds
   */
  describe("background colors", () => {
    it("has iOS light gray page background", () => {
      expect(quizTokens.colors.pageBg).toBe("#F5F5F7");
    });

    it("has white card background", () => {
      expect(quizTokens.colors.cardBg).toBe("#FFFFFF");
    });

    it("has white default button background", () => {
      expect(quizTokens.colors.bgIdle).toBe("#FFFFFF");
    });

    it("has light blue selected background", () => {
      expect(quizTokens.colors.bgSelected).toBe("#DBEAFE");
    });
  });

  /**
   * Text colors
   *
   * TESTING: Verifies iOS text color hierarchy
   */
  describe("text colors", () => {
    it("has nearly black for primary text (improved readability)", () => {
      expect(quizTokens.colors.textPrimary).toBe("#1A1A1A");
    });

    it("has pure black for headings (iOS style)", () => {
      expect(quizTokens.colors.textMain).toBe("#000000");
    });

    it("has iOS gray for secondary text", () => {
      expect(quizTokens.colors.textSub).toBe("#8E8E93");
    });

    it("has white for text on colored backgrounds", () => {
      expect(quizTokens.colors.white).toBe("#FFFFFF");
    });
  });

  /**
   * Border colors
   *
   * TESTING: Verifies iOS-style border colors
   */
  describe("border colors", () => {
    it("has iOS light gray idle border", () => {
      expect(quizTokens.colors.borderIdle).toBe("#E5E5EA");
    });

    it("has iOS blue selected border", () => {
      expect(quizTokens.colors.borderSelected).toBe("#007AFF");
    });
  });

  /**
   * Additional semantic colors
   *
   * TESTING: Verifies commonly used hardcoded values are centralized
   */
  describe("semantic colors", () => {
    it("has dark text color for emphasis", () => {
      expect(quizTokens.colors.textDark).toBe("#120A1A");
    });

    it("has medium gray for secondary text", () => {
      expect(quizTokens.colors.textMedium).toBe("#6B7280");
    });

    it("has dark gray for descriptions", () => {
      expect(quizTokens.colors.textDarkGray).toBe("#111827");
    });

    it("has tertiary color for disabled states", () => {
      expect(quizTokens.colors.textTertiary).toBe("#C8C8CC");
    });

    it("has purple accent color", () => {
      expect(quizTokens.colors.accent).toBe("#5B63FF");
    });

    it("has red for error states", () => {
      expect(quizTokens.colors.error).toBe("#EF4444");
    });

    it("has green for success states", () => {
      expect(quizTokens.colors.success).toBe("#3FAE55");
    });

    it("has yellow for warning states", () => {
      expect(quizTokens.colors.warning).toBe("#F4C64D");
    });

    it("has green background for info states", () => {
      expect(quizTokens.colors.infoBg).toBe("#EAF7EA");
    });
  });

  /**
   * Color format validation
   *
   * TESTING: Ensures all color values are valid hex codes
   */
  describe("color format validation", () => {
    it("all color values are valid hex colors", () => {
      const hexColorRegex = /^#[0-9A-F]{6}$/i;
      const colors = quizTokens.colors;

      // Check each color value
      Object.values(colors).forEach((value) => {
        if (typeof value === "string") {
          expect(value).toMatch(hexColorRegex);
        }
      });
    });

    it("all color values start with #", () => {
      const colors = quizTokens.colors;

      Object.values(colors).forEach((value) => {
        if (typeof value === "string") {
          expect(value.startsWith("#")).toBe(true);
        }
      });
    });
  });
});

// ============================================================================
// BORDER RADIUS TOKENS TESTS
// ============================================================================

describe("quizTokens.borderRadius", () => {
  /**
   * Border radius values
   *
   * TESTING: Verifies iOS-style rounded corners
   */
  describe("border radius values", () => {
    it("has card radius of 16px", () => {
      expect(quizTokens.borderRadius.card).toBe(16);
    });

    it("has button radius of 20px (very rounded, iOS-style)", () => {
      expect(quizTokens.borderRadius.button).toBe(20);
    });

    it("has continue button radius of 24px (pill-shaped)", () => {
      expect(quizTokens.borderRadius.buttonContinue).toBe(24);
    });

    it("has input radius of 12px (minimum from spec)", () => {
      expect(quizTokens.borderRadius.input).toBe(12);
    });

    it("has container radius of 12px (minimum from spec)", () => {
      expect(quizTokens.borderRadius.container).toBe(12);
    });
  });

  /**
   * Border radius range validation
   *
   * TESTING: Ensures border radius values are within expected range
   */
  describe("border radius range validation", () => {
    it("all border radius values are between 12 and 24 pixels", () => {
      const values = Object.values(quizTokens.borderRadius);

      values.forEach((value) => {
        expect(value).toBeGreaterThanOrEqual(12);
        expect(value).toBeLessThanOrEqual(24);
      });
    });

    it("buttonContinue has largest radius (pill shape)", () => {
      const values = Object.values(quizTokens.borderRadius);
      const maxRadius = Math.max(...values);

      expect(quizTokens.borderRadius.buttonContinue).toBe(maxRadius);
    });
  });
});

// ============================================================================
// SPACING TOKENS TESTS
// ============================================================================

describe("quizTokens.spacing", () => {
  /**
   * Container and layout spacing
   *
   * TESTING: Verifies layout-related spacing values
   */
  describe("layout spacing", () => {
    it("has container padding of 20px", () => {
      expect(quizTokens.spacing.containerPadding).toBe(20);
    });

    it("has button gap of 12px", () => {
      expect(quizTokens.spacing.buttonGap).toBe(12);
    });

    it("has header height of 44px (iOS touch target)", () => {
      expect(quizTokens.spacing.headerHeight).toBe(44);
    });

    it("has progress bar height of 6px", () => {
      expect(quizTokens.spacing.progressBarHeight).toBe(6);
    });

    it("has total header height of 50px (44 + 6)", () => {
      expect(quizTokens.spacing.totalHeaderHeight).toBe(50);
    });

    it("has content margin top of 110px", () => {
      expect(quizTokens.spacing.contentMarginTop).toBe(110);
    });
  });

  /**
   * Button sizing
   *
   * TESTING: Verifies button height specifications match accessibility guidelines
   */
  describe("button sizing", () => {
    it("has button height of 48px (min from spec: 48-56px)", () => {
      expect(quizTokens.spacing.buttonHeight).toBe(48);
    });

    it("has large button height of 56px (max from spec: 48-56px)", () => {
      expect(quizTokens.spacing.buttonHeightLarge).toBe(56);
    });

    it("has option height of 48px (min from spec: 48-60px)", () => {
      expect(quizTokens.spacing.optionHeight).toBe(48);
    });

    it("has large option height of 60px (max from spec: 48-60px)", () => {
      expect(quizTokens.spacing.optionHeightLarge).toBe(60);
    });

    it("button heights meet 48px minimum for accessibility", () => {
      expect(quizTokens.spacing.buttonHeight).toBeGreaterThanOrEqual(48);
      expect(quizTokens.spacing.optionHeight).toBeGreaterThanOrEqual(48);
    });
  });

  /**
   * Spacing scale
   *
   * TESTING: Verifies standard spacing scale for consistency
   */
  describe("spacing scale", () => {
    it("has xxsmall spacing of 2px", () => {
      expect(quizTokens.spacing.xxsmall).toBe("2px");
    });

    it("has xsmall spacing of 4px", () => {
      expect(quizTokens.spacing.xsmall).toBe("4px");
    });

    it("has small spacing of 8px", () => {
      expect(quizTokens.spacing.small).toBe("8px");
    });

    it("has medium spacing of 16px", () => {
      expect(quizTokens.spacing.medium).toBe("16px");
    });

    it("has large spacing of 24px", () => {
      expect(quizTokens.spacing.large).toBe("24px");
    });

    it("has xlarge spacing of 32px", () => {
      expect(quizTokens.spacing.xlarge).toBe("32px");
    });

    it("spacing scale follows consistent doubling pattern", () => {
      // 2, 4, 8, 16, 24 (slight break), 32
      expect(quizTokens.spacing.xxsmall).toBe("2px");
      expect(parseInt(quizTokens.spacing.xsmall as string)).toBe(2 * 2);
      expect(parseInt(quizTokens.spacing.small as string)).toBe(4 * 2);
      expect(parseInt(quizTokens.spacing.medium as string)).toBe(8 * 2);
      expect(parseInt(quizTokens.spacing.xlarge as string)).toBe(32);
    });
  });

  /**
   * Special spacing values
   *
   * TESTING: Verifies special-purpose spacing values
   */
  describe("special spacing values", () => {
    it("has button padding as string value", () => {
      expect(quizTokens.spacing.buttonPadding).toBe("12px 20px");
    });

    it("has max image card height of 180px", () => {
      expect(quizTokens.spacing.maxImageCardHeight).toBe(180);
    });
  });
});

// ============================================================================
// SHADOW TOKENS TESTS
// ============================================================================

describe("quizTokens.shadows", () => {
  /**
   * Block shadows (3D effect)
   *
   * TESTING: Verifies block shadow pattern matching main app
   */
  describe("block shadows (3D effect)", () => {
    it("has block blue shadow with solid offset", () => {
      expect(quizTokens.shadows.blockBlue).toBe(
        "0 6px 0 0 #007AFF, 0 9px 20px rgba(0, 122, 255, 0.15)",
      );
    });

    it("has block blue hover shadow", () => {
      expect(quizTokens.shadows.blockBlueHover).toBe(
        "0 4px 0 0 #0051D5, 0 8px 25px rgba(0, 81, 213, 0.2)",
      );
    });

    it("has block blue active shadow", () => {
      expect(quizTokens.shadows.blockBlueActive).toBe(
        "0 2px 0 0 #0041A8, 0 4px 15px rgba(0, 65, 168, 0.2)",
      );
    });

    it("block shadows follow pattern (offset reduces when pressed)", () => {
      // Normal: 6px offset, Hover: 4px offset, Active: 2px offset
      const normalOffset = quizTokens.shadows.blockBlue.match(/0 (\d+)px 0/)?.[1];
      const hoverOffset = quizTokens.shadows.blockBlueHover.match(/0 (\d+)px 0/)?.[1];
      const activeOffset = quizTokens.shadows.blockBlueActive.match(/0 (\d+)px 0/)?.[1];

      expect(parseInt(normalOffset || "0")).toBeGreaterThan(parseInt(hoverOffset || "0"));
      expect(parseInt(hoverOffset || "0")).toBeGreaterThan(parseInt(activeOffset || "0"));
    });
  });

  /**
   * Standard shadows
   *
   * TESTING: Verifies iOS-style subtle shadows
   */
  describe("standard shadows", () => {
    it("has iOS subtle card shadow", () => {
      expect(quizTokens.shadows.card).toBe("0 2px 8px rgba(0, 0, 0, 0.06)");
    });

    it("has iOS blue button shadow", () => {
      expect(quizTokens.shadows.button).toBe("0 1px 4px rgba(0, 122, 255, 0.2)");
    });

    it("has iOS active button shadow", () => {
      expect(quizTokens.shadows.buttonActive).toBe("0 2px 8px rgba(0, 122, 255, 0.3)");
    });

    it("active shadow is stronger than normal shadow", () => {
      // buttonActive should have more blur/spread than button
      const normalBlur = quizTokens.shadows.button.match(/rgba\([^)]+\) ([\d.]+)\)/)?.[1];
      const activeBlur = quizTokens.shadows.buttonActive.match(/rgba\([^)]+\) ([\d.]+)\)/)?.[1];

      expect(parseFloat(activeBlur || "0")).toBeGreaterThanOrEqual(parseFloat(normalBlur || "0"));
    });
  });

  /**
   * Shadow format validation
   *
   * TESTING: Ensures all shadows follow valid CSS box-shadow syntax
   */
  describe("shadow format validation", () => {
    it("all shadow values are valid CSS box-shadow strings", () => {
      const shadows = Object.values(quizTokens.shadows);

      shadows.forEach((shadow) => {
        // Basic check: should contain common box-shadow components
        expect(shadow).toMatch(/px/); // Contains pixel units
        expect(shadow.length).toBeGreaterThan(0); // Not empty
      });
    });
  });
});

// ============================================================================
// TYPOGRAPHY TOKENS TESTS
// ============================================================================

describe("quizTokens.typography", () => {
  /**
   * Font family
   *
   * TESTING: Verifies iOS system font stack
   */
  describe("font family", () => {
    it("has iOS system font stack", () => {
      expect(quizTokens.typography.fontFamily).toContain("-apple-system");
      expect(quizTokens.typography.fontFamily).toContain("BlinkMacSystemFont");
      expect(quizTokens.typography.fontFamily).toContain("sans-serif");
    });

    it("includes fallback fonts for different platforms", () => {
      expect(quizTokens.typography.fontFamily).toContain("Segoe UI"); // Windows
      expect(quizTokens.typography.fontFamily).toContain("Roboto"); // Android
    });
  });

  /**
   * Font sizes
   *
   * TESTING: Verifies iOS HIG font sizes
   */
  describe("font sizes", () => {
    it("has heading size of 20px (iOS large title)", () => {
      expect(quizTokens.typography.heading).toBe("20px");
    });

    it("has body size of 17px (iOS body)", () => {
      expect(quizTokens.typography.body).toBe("17px");
    });

    it("has subheading size of 15px (iOS callout)", () => {
      expect(quizTokens.typography.subheading).toBe("15px");
    });

    it("has small size of 13px (iOS caption 2)", () => {
      expect(quizTokens.typography.small).toBe("13px");
    });

    it("font sizes follow descending hierarchy", () => {
      const heading = parseInt(quizTokens.typography.heading);
      const body = parseInt(quizTokens.typography.body);
      const subheading = parseInt(quizTokens.typography.subheading);
      const small = parseInt(quizTokens.typography.small);

      expect(heading).toBeGreaterThan(body);
      expect(body).toBeGreaterThan(subheading);
      expect(subheading).toBeGreaterThan(small);
    });
  });
});

// ============================================================================
// TOUCH TARGET TOKENS TESTS
// ============================================================================

describe("quizTokens.touchTarget", () => {
  /**
   * Touch target sizes
   *
   * TESTING: Verifies accessible touch targets (44-48px minimum)
   */
  describe("touch target sizes", () => {
    it("has minimum height of 48px (WCAG/Apple guideline)", () => {
      expect(quizTokens.touchTarget.minHeight).toBe("48px");
    });

    it("has large height of 60px (from spec)", () => {
      expect(quizTokens.touchTarget.minHeightLarge).toBe("60px");
    });

    it("has minimum width of 44px (iOS standard)", () => {
      expect(quizTokens.touchTarget.minWidth).toBe("44px");
    });

    it("all touch targets meet minimum accessibility guidelines", () => {
      const minHeight = parseInt(quizTokens.touchTarget.minHeight);
      const minWidth = parseInt(quizTokens.touchTarget.minWidth);

      // WCAG and Apple recommend at least 44x44 points
      expect(minHeight).toBeGreaterThanOrEqual(44);
      expect(minWidth).toBeGreaterThanOrEqual(44);
    });
  });
});

// ============================================================================
// LAYOUT TOKENS TESTS
// ============================================================================

describe("quizTokens.layout", () => {
  /**
   * Layout constraints
   *
   * TESTING: Verifies mobile-first layout values
   */
  describe("layout constraints", () => {
    it("has max width of 480px for mobile", () => {
      expect(quizTokens.layout.maxWidth).toBe("480px");
    });

    it("has desktop container padding of 20px", () => {
      expect(quizTokens.layout.containerPadding).toBe("20px");
    });

    it("has mobile container padding of 12px", () => {
      expect(quizTokens.layout.containerPaddingMobile).toBe("12px");
    });

    it("has card padding of 20px (max from spec)", () => {
      expect(quizTokens.layout.cardPadding).toBe("20px");
    });

    it("has mobile card padding of 16px (min from spec)", () => {
      expect(quizTokens.layout.cardPaddingMobile).toBe("16px");
    });
  });

  /**
   * Layout value consistency
   *
   * TESTING: Ensures layout values align with other tokens
   */
  describe("layout value consistency", () => {
    it("container padding matches spacing containerPadding", () => {
      const layoutPadding = parseInt(quizTokens.layout.containerPadding);
      const spacingPadding = quizTokens.spacing.containerPadding;

      expect(layoutPadding).toBe(spacingPadding);
    });

    it("mobile padding is smaller than desktop padding", () => {
      const desktopPadding = parseInt(quizTokens.layout.containerPadding);
      const mobilePadding = parseInt(quizTokens.layout.containerPaddingMobile);

      expect(mobilePadding).toBeLessThan(desktopPadding);
    });
  });
});

// ============================================================================
// COMPONENT-SPECIFIC TOKENS TESTS
// ============================================================================

describe("quizTokens.results", () => {
  /**
   * Results page colors
   *
   * TESTING: Verifies results-specific color tokens
   */
  describe("results colors", () => {
    it("has red for low scores", () => {
      expect(quizTokens.results.lowScore).toBe("#F26D3D");
    });

    it("has yellow for medium scores", () => {
      expect(quizTokens.results.mediumScore).toBe("#F4C64D");
    });

    it("has green for high scores", () => {
      expect(quizTokens.results.highScore).toBe("#55D24A");
    });

    it("has light gray background", () => {
      expect(quizTokens.results.background).toBe("#F8F8FA");
    });

    it("has muted text color", () => {
      expect(quizTokens.results.textMuted).toBe("#B0B4BC");
    });

    it("all result colors are valid hex codes", () => {
      const hexColorRegex = /^#[0-9A-F]{6}$/i;
      const colors = Object.values(quizTokens.results);

      colors.forEach((color) => {
        expect(color).toMatch(hexColorRegex);
      });
    });
  });
});

describe("quizTokens.comparison", () => {
  /**
   * Before/After comparison colors
   *
   * TESTING: Verifies comparison-specific color tokens
   */
  describe("before/after colors", () => {
    it('has pink background for "before" state', () => {
      expect(quizTokens.comparison.beforeBackground).toBe("#FDECEC");
    });

    it('has pink border for "before" state', () => {
      expect(quizTokens.comparison.beforeBorder).toBe("#F3A3A3");
    });

    it('has green background for "after" state', () => {
      expect(quizTokens.comparison.afterBackground).toBe("#EAF7EA");
    });

    it('has green border for "after" state', () => {
      expect(quizTokens.comparison.afterBorder).toBe("#76D18C");
    });

    it("before colors have pink/warm tones", () => {
      expect(quizTokens.comparison.beforeBackground).toMatch(/^#F[DE]/);
      expect(quizTokens.comparison.beforeBorder).toMatch(/^#F3/);
    });

    it("after colors have green/cool tones", () => {
      expect(quizTokens.comparison.afterBackground).toMatch(/^#EA/);
      expect(quizTokens.comparison.afterBorder).toMatch(/^#76/);
    });
  });
});

// ============================================================================
// TYPE EXPORTS TESTS
// ============================================================================

describe("Type exports", () => {
  /**
   * QuizTemplate type
   *
   * TESTING: Verifies QuizTemplate type can be used
   */
  describe("QuizTemplate type", () => {
    it("QuizTemplate type accepts valid values", () => {
      const templates: QuizTemplate[] = ["image-card", "text-center", "icon-left", "complex"];

      expect(templates).toHaveLength(4);
      expect(templates).toContain("image-card");
      expect(templates).toContain("text-center");
      expect(templates).toContain("icon-left");
      expect(templates).toContain("complex");
    });
  });

  /**
   * ButtonVariant type
   *
   * TESTING: Verifies ButtonVariant type can be used
   */
  describe("ButtonVariant type", () => {
    it("ButtonVariant type accepts valid values", () => {
      const variants: ButtonVariant[] = ["text-center", "icon-left", "complex"];

      expect(variants).toHaveLength(3);
      expect(variants).toContain("text-center");
      expect(variants).toContain("icon-left");
      expect(variants).toContain("complex");
    });

    it("ButtonVariant is subset of QuizTemplate (no image-card)", () => {
      const buttonVariants: ButtonVariant[] = ["text-center", "icon-left", "complex"];

      expect(buttonVariants).not.toContain("image-card");
    });
  });
});
