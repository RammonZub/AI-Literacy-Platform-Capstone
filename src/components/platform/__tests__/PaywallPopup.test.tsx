import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { PaywallPopup } from "../PaywallPopup";

vi.mock("@/lib/hooks/useUser", () => ({
  useUser: () => ({
    signOut: vi.fn(),
  }),
}));

describe("PaywallPopup", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("centers the paywall card within the shared platform rail", () => {
    const { container } = render(<PaywallPopup isOpen={true} />);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Subscription Inactive")).toBeInTheDocument();
    expect(
      container.querySelector('[data-platform-rail="default"]'),
    ).toBeInTheDocument();
  });
});
