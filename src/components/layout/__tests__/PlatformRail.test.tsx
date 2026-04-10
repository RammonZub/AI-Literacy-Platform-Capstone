import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PlatformRail from "../PlatformRail";

describe("PlatformRail", () => {
  it("renders the default platform rail", () => {
    const { container } = render(<PlatformRail>Rail content</PlatformRail>);

    const rail = container.querySelector('[data-platform-rail="default"]');

    expect(rail).toBeInTheDocument();
    expect(rail).toHaveClass("w-full", "mx-auto", "px-4");
    expect(screen.getByText("Rail content")).toBeInTheDocument();
    expect((rail as HTMLDivElement).style.maxWidth).toBe(
      "var(--platform-rail-max, 42rem)",
    );
  });

  it("renders the lesson rail variant", () => {
    const { container } = render(
      <PlatformRail variant="lesson">Lesson rail</PlatformRail>,
    );

    const rail = container.querySelector('[data-platform-rail="lesson"]');

    expect(rail).toBeInTheDocument();
    expect((rail as HTMLDivElement).style.maxWidth).toBe(
      "var(--platform-lesson-rail-max, 48rem)",
    );
  });
});
