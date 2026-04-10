import { render, screen } from "@testing-library/react";
import { usePathname, useRouter } from "next/navigation";
import { beforeEach, describe, expect, it, vi } from "vitest";
import TopNav from "../TopNav";

vi.mock("@/data/content", () => ({
  getModuleById: vi.fn((moduleId: string) =>
    moduleId === "module-test" ? { title: "Derived Module" } : null,
  ),
}));

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
  useRouter: vi.fn(),
}));

describe("TopNav", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue("/platform");
    (useRouter as ReturnType<typeof vi.fn>).mockReturnValue({
      push: vi.fn(),
      back: vi.fn(),
      prefetch: vi.fn(),
      replace: vi.fn(),
      refresh: vi.fn(),
    });
  });

  it("uses the shared platform rail and xl menu breakpoint on the default view", () => {
    const { container } = render(<TopNav avatarUrl={null} streak={7} />);

    const rail = container.querySelector('[data-platform-rail="default"]');
    const menuButton = screen.getByRole("button", { name: /open menu/i });

    expect(rail).toBeInTheDocument();
    expect(screen.getByText("AI Literacy")).toBeInTheDocument();
    expect(menuButton).toHaveClass("xl:hidden");
    expect(menuButton).not.toHaveClass("lg:hidden");
  });

  it("keeps the module title centered in the three-slot layout", () => {
    const { container } = render(
      <TopNav
        moduleTitle="Prompt Engineering"
        isModulePage={true}
        avatarUrl={null}
        streak={4}
      />,
    );

    const grid = container.querySelector(".grid");

    expect(screen.getByText("Prompt Engineering")).toBeInTheDocument();
    expect(grid).toHaveClass("grid-cols-[2.25rem_1fr_auto]");
    expect(
      screen.getByRole("button", { name: /go back/i }),
    ).toBeInTheDocument();
  });

  it("derives the module title from the route so module pages use the shared nav source of truth", () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue(
      "/platform/module/module-test",
    );

    render(<TopNav avatarUrl={null} streak={4} />);

    expect(screen.getByText("Derived Module")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /go back/i }),
    ).toBeInTheDocument();
  });

  it("hides the platform top nav during lesson takeovers", () => {
    (usePathname as ReturnType<typeof vi.fn>).mockReturnValue(
      "/platform/module/module-test/lesson/lesson-1",
    );

    const { container } = render(<TopNav avatarUrl={null} streak={4} />);

    expect(container).toBeEmptyDOMElement();
  });
});
