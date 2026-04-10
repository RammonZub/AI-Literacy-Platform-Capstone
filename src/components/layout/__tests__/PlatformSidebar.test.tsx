import { render, screen } from "@testing-library/react";
import { usePathname } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";
import PlatformSidebar from "../PlatformSidebar";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

describe("PlatformSidebar", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue("/platform/library");
  });

  it("uses the desktop overlay contract tied to the platform rail", () => {
    const { container } = render(<PlatformSidebar />);

    const aside = container.querySelector(
      '[data-platform-sidebar="desktop"]',
    ) as HTMLElement | null;

    expect(aside).toBeInTheDocument();
    expect(aside).toHaveClass("hidden", "xl:block", "fixed");
    expect(aside).not.toHaveClass("lg:block");
    expect(aside?.style.top).toBe("var(--platform-header-height)");
    expect(aside?.style.width).toBe("var(--platform-sidebar-width)");
  });

  it("marks the active route", () => {
    render(<PlatformSidebar />);

    expect(screen.getByRole("link", { name: /^modules$/i })).toHaveClass("bg-primary");
  });

  it("hides the docked sidebar during fullscreen lesson experiences", () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue(
      "/platform/module/module-test/lesson/lesson-1",
    );

    const { container } = render(<PlatformSidebar />);

    expect(container).toBeEmptyDOMElement();
  });
});
