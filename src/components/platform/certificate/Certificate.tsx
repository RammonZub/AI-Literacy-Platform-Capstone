"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

import { BrandGrainMark } from "@/components/shared/BrandGrainMark";
import { SITE_BRAND_SHORT, SITE_BRAND_WORDMARK, SITE_CERTIFICATE_ORG } from "@/lib/site-brand";

export interface CertificateProps {
  studentName: string;
  programName?: string;
  completionDate: string;
  programStartDate?: string;
  programEndDate?: string;
  administratorName?: string;
  /** Whether to show program date range (for challenges) */
  showProgramDates?: boolean;
}

/**
 * Certificate Component
 *
 * Fixed design at 700px base width that scales proportionally like an image.
 * Uses CSS transform scale to maintain perfect proportions at any size.
 */
export function Certificate({
  studentName,
  programName = "AI Tools & Workflow Mastery",
  completionDate,
  programStartDate,
  programEndDate,
  administratorName = SITE_CERTIFICATE_ORG,
  showProgramDates = false,
}: CertificateProps) {
  // Base design at 700px for better quality
  const baseWidth = 700;
  const baseHeight = 495; // 700 / 1.414
  const certRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = certRef.current;
    if (!el) return;

    const updateScale = () => {
      const parent = el.parentElement;
      if (parent) {
        const parentWidth = parent.clientWidth;
        const parentHeight = parent.clientHeight;
        const scaleX = parentWidth / baseWidth;
        const scaleY = parentHeight / baseHeight;
        const scale = Math.min(scaleX, scaleY, 3);
        el.style.setProperty("--cert-scale", String(scale));
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="w-full mx-auto" style={{ maxWidth: "95vw" }}>
      {/* Container that scales the fixed design */}
      <div
        className="relative w-full"
        style={{
          aspectRatio: "1.414/1",
          maxHeight: "92vh",
        }}
      >
        {/* The fixed design - scaled via CSS */}
        <div
          ref={certRef}
          className="absolute origin-top-left"
          style={{
            width: baseWidth,
            height: baseHeight,
            transform: "scale(var(--cert-scale, 1))",
            transformOrigin: "top left",
          }}
        >
          {/* Fixed certificate design */}
          <div
            style={{
              width: baseWidth,
              height: baseHeight,
              padding: 12,
              backgroundColor: "white",
            }}
          >
            {/* Main Border */}
            <div
              style={{
                width: "100%",
                height: "100%",
                border: "4px solid #1B64DD",
                borderRadius: 28,
                padding: 8,
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              }}
            >
              {/* Inner Border */}
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  border: "1px solid rgba(27, 100, 221, 0.2)",
                  borderRadius: 20,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "white",
                }}
              >
                {/* Background Watermark */}
                <div
                  style={{
                    position: "absolute",
                    top: "10%",
                    right: "20%",
                    width: "35%",
                    height: "55%",
                    opacity: 0.04,
                    transform: "rotate(12deg)",
                    pointerEvents: "none",
                  }}
                >
                  <Image
                    src="/images/certificate-watermark.svg"
                    alt="Watermark"
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Ribbon - positioned FIRST so it's on top with z-index */}
                <div
                  style={{
                    position: "absolute",
                    top: -2,
                    right: 14,
                    width: 130,
                    height: "88%",
                    zIndex: 30,
                    pointerEvents: "none",
                    filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.2))",
                  }}
                >
                  <Image
                    src="/images/certificate-ribbon.svg"
                    alt="Certificate Ribbon"
                    fill
                    className="object-contain"
                    style={{ objectPosition: "top" }}
                  />
                </div>

                {/* Content - full width, ribbon overlaps on top */}
                <div
                  style={{
                    position: "relative",
                    zIndex: 10,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    padding: 22,
                  }}
                >
                  {/* Header: Logo */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
                    <div
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: "50%",
                        boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                        border: "4px solid #f0f7ff",
                        overflow: "hidden",
                        flexShrink: 0,
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BrandGrainMark dimension={42} shape="circle" />
                    </div>
                    <div
                      style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}
                    >
                      <span
                        style={{
                          color: "#1B64DD",
                          fontWeight: "bold",
                          fontSize: 17,
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {SITE_BRAND_WORDMARK}
                      </span>
                      <span style={{ color: "#4481D4", fontWeight: 500, fontSize: 11 }}>
                        AI Proficiency
                      </span>
                    </div>
                  </div>

                  {/* Main Body - text goes full width, ribbon overlaps */}
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <h2
                      style={{ color: "#1f2937", fontWeight: 500, fontSize: 15, marginBottom: 4 }}
                    >
                      This Certificate of Proficiency is proudly awarded to
                    </h2>

                    {/* Student Name */}
                    <div style={{ marginTop: 12, marginBottom: 22 }}>
                      <h1
                        style={{
                          fontSize: 44,
                          fontWeight: "bold",
                          color: "#1B64DD",
                          letterSpacing: "-0.02em",
                          lineHeight: 1,
                        }}
                      >
                        {studentName}
                      </h1>
                      <div
                        style={{
                          height: 2,
                          width: "70%",
                          backgroundColor: "#d1d5db",
                          marginTop: 6,
                        }}
                      ></div>
                    </div>

                    <p style={{ fontSize: 13, color: "#374151", lineHeight: 1.7, maxWidth: "75%" }}>
                      For successfully completing the{" "}
                      <span style={{ fontWeight: 600, color: "#111827" }}>{programName}</span>,
                      demonstrating practical proficiency in AI tools and techniques for
                      professional applications.
                      {showProgramDates && programStartDate && programEndDate && (
                        <>
                          {" "}
                          Program duration:{" "}
                          <span style={{ fontWeight: 600, color: "#111827" }}>
                            {programStartDate} – {programEndDate}
                          </span>
                        </>
                      )}
                    </p>
                  </div>

                  {/* Footer - FULL WIDTH, no constraints - separate div */}
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-end",
                      width: "100%",
                      paddingRight: 8,
                    }}
                  >
                    {/* Signature Section - Left */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                      <div
                        style={{
                          fontSize: 30,
                          color: "#1B64DD",
                          transform: "rotate(-3deg)",
                          fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive',
                          fontStyle: "italic",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {SITE_BRAND_SHORT}
                      </div>
                      <div style={{ height: 1, width: 110, backgroundColor: "#1f2937" }}></div>
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <span style={{ fontWeight: "bold", color: "#111827", fontSize: 11 }}>
                          Program Director
                        </span>
                        <span style={{ color: "#4b5563", fontWeight: 500, fontSize: 10 }}>
                          {administratorName}
                        </span>
                      </div>
                    </div>

                    {/* Date Section - Lower right corner */}
                    <div style={{ textAlign: "right", marginBottom: 4 }}>
                      <p style={{ color: "#4b5563", fontWeight: 500, fontSize: 11, margin: 0 }}>
                        Awarded on the
                      </p>
                      <p style={{ color: "#1f2937", fontWeight: 600, fontSize: 12, margin: 0 }}>
                        {completionDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
