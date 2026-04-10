import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import PlatformPageShell from "../PlatformPageShell";

describe("PlatformPageShell", () => {
  it("wraps content in the shared page and rail contract", () => {
    const { container } = render(
      <PlatformPageShell railVariant="lesson" railClassName="py-8">
        Shell content
      </PlatformPageShell>,
    );

    expect(
      container.querySelector('[data-platform-page-shell="lesson"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-platform-rail="lesson"]'),
    ).toBeInTheDocument();
  });
});
