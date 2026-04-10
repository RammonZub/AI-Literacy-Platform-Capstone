/**
 * Example Utility Tests
 *
 * PURPOSE: Demonstrate basic testing infrastructure for utility functions
 *
 * CONTEXT: These tests verify the testing setup is working correctly
 * for TypeScript utility functions without React dependencies.
 *
 * TEST COVERAGE:
 * - Basic arithmetic utilities
 * - String manipulation utilities
 * - Array manipulation utilities
 *
 * DEPENDENCIES:
 * - vitest: Test runner
 */

import { describe, expect, it } from "vitest";

/**
 * Simple utility function for testing
 *
 * PURPOSE: Demonstrates basic test structure
 */
function sum(a: number, b: number): number {
  return a + b;
}

/**
 * String utility for testing
 *
 * PURPOSE: Demonstrates string testing
 */
function capitalize(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Array utility for testing
 *
 * PURPOSE: Demonstrates array testing
 */
function unique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}

describe("Example Utility Functions", () => {
  describe("sum", () => {
    it("adds two positive numbers correctly", () => {
      expect(sum(2, 3)).toBe(5);
    });

    it("handles negative numbers", () => {
      expect(sum(-2, 3)).toBe(1);
    });

    it("handles zero", () => {
      expect(sum(0, 0)).toBe(0);
    });
  });

  describe("capitalize", () => {
    it("capitalizes first letter of string", () => {
      expect(capitalize("hello")).toBe("Hello");
    });

    it("handles empty string", () => {
      expect(capitalize("")).toBe("");
    });

    it("handles single character", () => {
      expect(capitalize("a")).toBe("A");
    });

    it("does not affect already capitalized strings", () => {
      expect(capitalize("Hello")).toBe("Hello");
    });
  });

  describe("unique", () => {
    it("removes duplicates from array", () => {
      expect(unique([1, 2, 2, 3, 3, 3])).toEqual([1, 2, 3]);
    });

    it("handles empty array", () => {
      expect(unique([])).toEqual([]);
    });

    it("handles array with no duplicates", () => {
      expect(unique([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it("works with strings", () => {
      expect(unique(["a", "b", "a", "c"])).toEqual(["a", "b", "c"]);
    });
  });
});
