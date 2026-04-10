import { render, screen } from "@testing-library/react";
import type { ImgHTMLAttributes } from "react";
import { describe, expect, it, vi } from "vitest";
import { InfoModal } from "../InfoModal";

vi.mock("next/image", () => ({
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} alt={props.alt} />
  ),
}));

describe("InfoModal", () => {
  it("centers modal content within the shared platform rail", () => {
    const { container } = render(
      <InfoModal
        isOpen={true}
        onClose={() => {}}
        title="About This Course"
        description="Course details"
      />,
    );

    expect(screen.getByText("About This Course")).toBeInTheDocument();
    expect(
      container.querySelector('[data-platform-rail="default"]'),
    ).toBeInTheDocument();
  });
});
