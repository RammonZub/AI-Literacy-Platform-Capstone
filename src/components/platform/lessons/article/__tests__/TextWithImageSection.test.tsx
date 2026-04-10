/**
 * TextWithImageSection Component Tests
 *
 * PURPOSE: Test suite for TextWithImageSection component
 *
 * CONTEXT: Verifies that the TextWithImageSection component renders correctly
 * with different props combinations and handles image errors gracefully.
 *
 * TEST COVERAGE:
 * - Renders title when provided
 * - Renders paragraphs with Markdown support
 * - Renders image with correct alt text
 * - Does not render title element when not provided
 * - Shows fallback UI when image fails to load
 * - Applies correct CSS classes
 *
 * DEPENDENCIES:
 * - vitest: Test runner
 * - @testing-library/react: Component rendering utilities
 * - @testing-library/jest-dom: Custom DOM matchers
 * - @testing-library/user-event: User interaction simulation
 */

import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { TextWithImageSectionContent } from "../TextWithImageSection";
import { TextWithImageSection } from "../TextWithImageSection";

// Mock Next.js Image component to avoid network requests
vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    onError,
    ...props
  }: {
    src: string;
    alt: string;
    onError?: () => void;
    [key: string]: unknown;
  }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} onError={onError} data-testid="next-image" {...props} />
  ),
}));

describe("TextWithImageSection", () => {
  // ========================================
  // BASIC RENDERING TESTS
  // ========================================

  /**
   * Test: Renders with minimal required props
   *
   * VERIFY: Component renders with paragraphs and image
   * REASONING: This is the minimum viable configuration
   */
  it("renders with required props (paragraphs, imageUrl, imageAlt)", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: ["Test paragraph"],
      imageUrl: "/images/test.jpg",
      imageAlt: "Test image",
    };

    render(<TextWithImageSection content={content} />);

    expect(screen.getByText("Test paragraph")).toBeInTheDocument();
    expect(screen.getByAltText("Test image")).toBeInTheDocument();
  });

  /**
   * Test: Renders title when provided
   *
   * VERIFY: Title appears as h2 element
   * REASONING: Title is optional but commonly used for section headings
   */
  it("renders title when provided", () => {
    const content: TextWithImageSectionContent = {
      title: "Section Title",
      paragraphs: ["Content"],
      imageUrl: "/images/test.jpg",
      imageAlt: "Test",
    };

    render(<TextWithImageSection content={content} />);

    const titleElement = screen.getByText("Section Title");
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe("H2");
  });

  /**
   * Test: Does not render title element when not provided
   *
   * VERIFY: No h2 element exists when title is undefined
   * REASONING: Ensures optional prop is handled correctly
   */
  it("does not render title element when not provided", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: ["Content"],
      imageUrl: "/images/test.jpg",
      imageAlt: "Test",
    };

    render(<TextWithImageSection content={content} />);

    expect(screen.queryByRole("heading", { level: 2 })).not.toBeInTheDocument();
  });

  /**
   * Test: Renders multiple paragraphs
   *
   * VERIFY: All paragraphs are rendered
   * REASONING: Component should handle 1-3 paragraphs as per spec
   */
  it("renders multiple paragraphs", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: ["First paragraph", "Second paragraph", "Third paragraph"],
      imageUrl: "/images/test.jpg",
      imageAlt: "Test",
    };

    render(<TextWithImageSection content={content} />);

    expect(screen.getByText("First paragraph")).toBeInTheDocument();
    expect(screen.getByText("Second paragraph")).toBeInTheDocument();
    expect(screen.getByText("Third paragraph")).toBeInTheDocument();
  });

  // ========================================
  // IMAGE HANDLING TESTS
  // ========================================

  /**
   * Test: Renders image with correct src and alt
   *
   * VERIFY: Image has correct src and alt attributes
   * REASONING: Accessibility and correct image loading depend on these
   */
  it("renders image with correct src and alt attributes", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: ["Content"],
      imageUrl: "/images/lessons/test-image.jpg",
      imageAlt: "Descriptive alt text for accessibility",
    };

    render(<TextWithImageSection content={content} />);

    const image = screen.getByAltText("Descriptive alt text for accessibility");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/lessons/test-image.jpg");
  });

  /**
   * Test: Shows fallback UI when image fails to load
   *
   * VERIFY: Fallback div appears after image error
   * REASONING: Graceful degradation improves user experience
   */
  it("shows fallback UI when image fails to load", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: ["Content"],
      imageUrl: "/images/nonexistent.jpg",
      imageAlt: "Missing image",
    };

    render(<TextWithImageSection content={content} />);

    // Image should be visible initially
    const image = screen.getByAltText("Missing image");
    expect(image).toBeInTheDocument();

    // Simulate image load error
    fireEvent.error(image);

    // Fallback should now be visible
    expect(screen.getByText("Image unavailable")).toBeInTheDocument();
    expect(screen.getByRole("img", { name: "Missing image" })).toBeInTheDocument();

    // Original image should be gone
    expect(screen.queryByTestId("next-image")).not.toBeInTheDocument();
  });

  /**
   * Test: Fallback maintains alt text for accessibility
   *
   * VERIFY: Fallback div has aria-label with alt text
   * REASONING: Screen readers should still get image description
   */
  it("fallback maintains alt text for accessibility", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: ["Content"],
      imageUrl: "/images/broken.jpg",
      imageAlt: "Important visual content description",
    };

    render(<TextWithImageSection content={content} />);

    const image = screen.getByAltText("Important visual content description");
    fireEvent.error(image);

    const fallback = screen.getByRole("img", { name: "Important visual content description" });
    expect(fallback).toHaveAttribute("aria-label", "Important visual content description");
  });

  // ========================================
  // STYLING TESTS
  // ========================================

  /**
   * Test: Applies correct CSS classes to section
   *
   * VERIFY: Section has expected layout classes
   * REASONING: Ensures styling is properly applied
   */
  it("applies correct CSS classes to section container", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: ["Content"],
      imageUrl: "/images/test.jpg",
      imageAlt: "Test",
    };

    const { container } = render(<TextWithImageSection content={content} />);

    const section = container.querySelector("section");
    expect(section).toHaveClass("space-y-3");
    expect(section).toHaveClass("w-full");
    expect(section).toHaveClass("py-2");
  });

  /**
   * Test: Applies custom className when provided
   *
   * VERIFY: Custom className is merged with default classes
   * REASONING: Allows consumers to extend styling
   */
  it("applies custom className when provided", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: ["Content"],
      imageUrl: "/images/test.jpg",
      imageAlt: "Test",
    };

    const { container } = render(
      <TextWithImageSection content={content} className="custom-class" />,
    );

    const section = container.querySelector("section");
    expect(section).toHaveClass("custom-class");
    expect(section).toHaveClass("space-y-3"); // Still has default classes
  });

  // ========================================
  // EDGE CASES
  // ========================================

  /**
   * Test: Handles empty paragraphs array gracefully
   *
   * VERIFY: Component renders without crashing
   * REASONING: Should handle edge case of no content
   */
  it("handles empty paragraphs array", () => {
    const content: TextWithImageSectionContent = {
      paragraphs: [],
      imageUrl: "/images/test.jpg",
      imageAlt: "Test",
    };

    const { container } = render(<TextWithImageSection content={content} />);

    expect(container.querySelector("section")).toBeInTheDocument();
    expect(screen.getByAltText("Test")).toBeInTheDocument();
  });

  /**
   * Test: Handles long alt text
   *
   * VERIFY: Alt text is preserved even when very long
   * REASONING: Accessibility requires full descriptions
   */
  it("handles long alt text without truncation", () => {
    const longAltText =
      "This is a very long alt text that describes the image in detail for screen reader users who cannot see the visual content. It should be preserved in full.";

    const content: TextWithImageSectionContent = {
      paragraphs: ["Content"],
      imageUrl: "/images/test.jpg",
      imageAlt: longAltText,
    };

    render(<TextWithImageSection content={content} />);

    expect(screen.getByAltText(longAltText)).toBeInTheDocument();
  });
});
