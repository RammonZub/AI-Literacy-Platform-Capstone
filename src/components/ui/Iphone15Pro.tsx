/**
 * Iphone15Pro
 *
 * PURPOSE: High-fidelity iPhone 15 Pro frame SVG for mockups.
 * Renders image, video, or custom React content inside the screen.
 *
 * @see https://ui.shadcn.com
 */

"use client";

import type { SVGProps } from "react";
import { useId } from "react";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
  videoSrc?: string;
  children?: React.ReactNode;
}

export default function Iphone15Pro({
  width = 433,
  height = 882,
  src,
  videoSrc,
  children,
  ...props
}: Iphone15ProProps) {
  const clipId = useId().replace(/:/g, "-");
  const hasMedia = !!(src || videoSrc);

  return (
    <svg
      aria-label="iPhone 15 Pro"
      fill="none"
      height={height}
      role="img"
      viewBox="0 0 433 882"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      {...(props as SVGProps<SVGSVGElement>)}
    >
      <path
        className="fill-white dark:fill-[#404040]"
        d="M4 71C4 34.6832 36.6832 2 73 2H355C391.317 2 428 34.6832 428 71V807C428 845.317 395.317 880 355 880H73C35.317 880 4 845.317 4 807V71Z"
      />
      <path
        className="fill-white dark:fill-[#404040]"
        d="M0 171C0 170.448 0.447715 170 1 170H3V204H1C0.447715 204 0 203.552 0 203V171Z"
      />
      <path
        className="fill-white dark:fill-[#404040]"
        d="M1 234C1 233.448 1.44772 233 2 233H3.5V300H2C1.44772 300 1 299.552 1 299V234Z"
      />
      <path
        className="fill-white dark:fill-[#404040]"
        d="M1 319C1 318.448 1.44772 318 2 318H3.5V385H2C1.44772 385 1 384.552 1 384V319Z"
      />
      <path
        className="fill-white dark:fill-[#404040]"
        d="M430 279H432C432.552 279 433 279.448 433 280V384C433 384.552 432.552 385 432 385H430V279Z"
      />
      <path
        className="fill-[#2d2d2d] dark:fill-[#1f1f1f]"
        d="M8 75C8 37.6134 39.6134 6 77 6H355C392.387 6 424 37.6134 424 75V807C424 844.387 392.387 876 355 876H77C39.6134 876 8 844.387 8 807V75Z"
      />
      <path
        className="fill-white dark:fill-[#404040]"
        d="M174 5H258V5.5C258 6.60457 257.105 7.5 256 7.5H176C174.895 7.5 174 6.60457 174 5.5V5Z"
        opacity="0.5"
      />
      <path
        className="fill-white stroke-gray-200 stroke-[0.25] dark:fill-[#404040] dark:stroke-[#404040]"
        d="M21.25 75C21.25 44.2101 46.2101 19.25 77 19.25H355C385.79 19.25 410.75 44.2101 410.75 75V807C410.75 837.79 385.79 862.75 355 862.75H77C46.2101 862.75 21.25 837.79 21.25 807V75Z"
      />

      {!hasMedia && !children && (
        <rect
          className="dark:fill-[#000000]"
          fill="#000000"
          height="843.5"
          rx="55.75"
          ry="55.75"
          width="389.5"
          x="21.25"
          y="19.25"
        />
      )}

      {src && !children && (
        <image
          clipPath={`url(#${clipId})`}
          height="843.5"
          href={src}
          preserveAspectRatio="xMidYMid slice"
          width="389.5"
          x="21.25"
          y="19.25"
        />
      )}
      {videoSrc && !children && (
        <foreignObject
          clipPath={`url(#${clipId})`}
          height="843.5"
          width="389.5"
          x="21.25"
          y="19.25"
        >
          <video
            autoPlay
            className="size-full object-cover"
            loop
            muted
            playsInline
            src={videoSrc}
          />
        </foreignObject>
      )}
      {children && (
        <foreignObject
          clipPath={`url(#${clipId})`}
          height="843.5"
          width="389.5"
          x="21.25"
          y="19.25"
        >
          <div className="size-full overflow-hidden" style={{ fontFamily: "inherit" }}>
            {children}
          </div>
        </foreignObject>
      )}

      <path
        className="fill-[#F5F5F5] dark:fill-[#262626]"
        d="M154 48.5C154 38.2827 162.283 30 172.5 30H259.5C269.717 30 278 38.2827 278 48.5C278 58.7173 269.717 67 259.5 67H172.5C162.283 67 154 58.7173 154 48.5Z"
      />
      <path
        className="fill-[#F5F5F5] dark:fill-[#262626]"
        d="M249 48.5C249 42.701 253.701 38 259.5 38C265.299 38 270 42.701 270 48.5C270 54.299 265.299 59 259.5 59C253.701 59 249 54.299 249 48.5Z"
      />
      <path
        className="fill-gray-300 dark:fill-[#404040]"
        d="M254 48.5C254 45.4624 256.462 43 259.5 43C262.538 43 265 45.4624 265 48.5C265 51.5376 262.538 54 259.5 54C256.462 54 254 51.5376 254 48.5Z"
      />
      <defs>
        <clipPath id={clipId}>
          <rect height="843.5" rx="55.75" ry="55.75" width="389.5" x="21.25" y="19.25" />
        </clipPath>
      </defs>
    </svg>
  );
}
