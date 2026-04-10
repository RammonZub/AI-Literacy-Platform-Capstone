/**
 * CertificateWithDownload
 *
 * PURPOSE: Wrapper around Certificate component that adds PNG download functionality.
 *
 * FEATURES:
 * - Renders the Certificate component for display (scales with screen)
 * - Generates 4K PNG on-demand using a temporarily visible render
 * - Uses html-to-image for export at 3840px width
 */

"use client";

import { toPng } from "html-to-image";
import { Download, Loader2 } from "lucide-react";
import React, { useRef, useState } from "react";

import { BrandGrainMark } from "@/components/shared/BrandGrainMark";
import { SITE_BRAND_SHORT, SITE_BRAND_WORDMARK, SITE_CERTIFICATE_ORG } from "@/lib/site-brand";

import type { CertificateProps } from "./Certificate";

// 4K certificate - base 700px scaled up to 3840px (scale = 5.49)
function Certificate4K({
  studentName,
  programName = "AI Tools & Workflow Mastery",
  completionDate,
  programStartDate = "January 1, 2025",
  programEndDate = "February 25, 2026",
  administratorName = SITE_CERTIFICATE_ORG,
}: CertificateProps) {
  const scale = 5.49; // 700 * 5.49 = 3840
  const baseWidth = 700;
  const baseHeight = 495;

  return (
    <div
      style={{
        width: 3840,
        height: 3840 * (baseHeight / baseWidth),
        padding: 12 * scale,
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          border: `${4 * scale}px solid #1B64DD`,
          borderRadius: 28 * scale,
          padding: 8 * scale,
          boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            border: `${1 * scale}px solid rgba(27, 100, 221, 0.2)`,
            borderRadius: 20 * scale,
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/certificate-watermark.svg"
              alt="Watermark"
              crossOrigin="anonymous"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>

          {/* Ribbon - positioned FIRST so it's on top */}
          <div
            style={{
              position: "absolute",
              top: -2 * scale,
              right: 14 * scale,
              width: 130 * scale,
              height: "88%",
              zIndex: 30,
              pointerEvents: "none",
              filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.2))",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/certificate-ribbon.svg"
              alt="Certificate Ribbon"
              crossOrigin="anonymous"
              style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "top" }}
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
              padding: 22 * scale,
            }}
          >
            {/* Header: Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14 * scale,
                marginBottom: 28 * scale,
              }}
            >
              <div
                style={{
                  width: 50 * scale,
                  height: 50 * scale,
                  borderRadius: "50%",
                  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                  border: `${4 * scale}px solid #f0f7ff`,
                  overflow: "hidden",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <BrandGrainMark dimension={42 * scale} shape="circle" />
              </div>
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span
                  style={{
                    color: "#1B64DD",
                    fontWeight: "bold",
                    fontSize: 17 * scale,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {SITE_BRAND_WORDMARK}
                </span>
                <span style={{ color: "#4481D4", fontWeight: 500, fontSize: 11 * scale }}>
                  AI Proficiency
                </span>
              </div>
            </div>

            {/* Main Body - text goes full width */}
            <div
              style={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h2
                style={{
                  color: "#1f2937",
                  fontWeight: 500,
                  fontSize: 15 * scale,
                  marginBottom: 4 * scale,
                }}
              >
                This Certificate of Proficiency is proudly awarded to
              </h2>

              {/* Student Name */}
              <div style={{ marginTop: 12 * scale, marginBottom: 22 * scale }}>
                <h1
                  style={{
                    fontSize: 44 * scale,
                    fontWeight: "bold",
                    color: "#1B64DD",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  {studentName}
                </h1>
                <div
                  style={{
                    height: 2 * scale,
                    width: "70%",
                    backgroundColor: "#d1d5db",
                    marginTop: 6 * scale,
                  }}
                ></div>
              </div>

              <p
                style={{
                  fontSize: 13 * scale,
                  color: "#374151",
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: "65%",
                }}
              >
                For successfully completing the{" "}
                <span style={{ fontWeight: 600, color: "#111827" }}>28-Day AI Mastery Program</span>
                , demonstrating practical proficiency in{" "}
                <span style={{ fontWeight: 600, color: "#111827" }}>{programName}</span>
                <br />
                <span style={{ color: "#4b5563" }}>Program dates:</span>{" "}
                <span style={{ fontWeight: 600, color: "#111827" }}>
                  {programStartDate} – {programEndDate}
                </span>
              </p>
            </div>

            {/* Footer - FULL WIDTH, no constraints */}
            <div
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
                width: "100%",
                paddingRight: 8 * scale,
              }}
            >
              {/* Signature Section - Left */}
              <div style={{ display: "flex", flexDirection: "column", gap: 3 * scale }}>
                <div
                  style={{
                    fontSize: 30 * scale,
                    color: "#1B64DD",
                    transform: "rotate(-3deg)",
                    fontFamily: '"Brush Script MT", "Lucida Handwriting", cursive',
                    fontStyle: "italic",
                    letterSpacing: "0.02em",
                  }}
                >
                  {SITE_BRAND_SHORT}
                </div>
                <div
                  style={{ height: 1 * scale, width: 110 * scale, backgroundColor: "#1f2937" }}
                ></div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontWeight: "bold", color: "#111827", fontSize: 11 * scale }}>
                    Program Director
                  </span>
                  <span style={{ color: "#4b5563", fontWeight: 500, fontSize: 10 * scale }}>
                    {administratorName}
                  </span>
                </div>
              </div>

              {/* Date Section - Lower right corner */}
              <div style={{ textAlign: "right", marginBottom: 4 * scale }}>
                <p style={{ color: "#4b5563", fontWeight: 500, fontSize: 11 * scale, margin: 0 }}>
                  Awarded on the
                </p>
                <p style={{ color: "#1f2937", fontWeight: 600, fontSize: 12 * scale, margin: 0 }}>
                  {completionDate}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface CertificateWithDownloadProps extends CertificateProps {
  showDownloadButton?: boolean;
  className?: string;
}

export function CertificateWithDownload({
  showDownloadButton = true,
  className,
  ...certificateProps
}: CertificateWithDownloadProps) {
  const exportRef = useRef<HTMLDivElement>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [showExport, setShowExport] = useState(false);

  // Dynamic import to avoid SSR issues
  const [CertificateComponent, setCertificateComponent] =
    useState<React.ComponentType<CertificateProps> | null>(null);

  React.useEffect(() => {
    import("./Certificate").then((mod) => setCertificateComponent(() => mod.Certificate));
  }, []);

  const handleDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setShowExport(true);

    try {
      // Wait for the export container to be rendered
      await new Promise((r) => setTimeout(r, 100));

      if (!exportRef.current) {
        throw new Error("Export container not ready");
      }

      // Wait for all images to load
      const images = exportRef.current.querySelectorAll("img");
      await Promise.all(
        Array.from(images).map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise<void>((resolve) => {
            img.onload = () => resolve();
            img.onerror = () => resolve();
          });
        }),
      );

      // Small delay to ensure everything is rendered
      await new Promise((r) => setTimeout(r, 200));

      const dataUrl = await toPng(exportRef.current, {
        quality: 1.0,
        pixelRatio: 1,
        backgroundColor: "#ffffff",
        cacheBust: true,
        fetchRequestInit: {
          mode: "cors",
          credentials: "omit",
        },
      });

      const link = document.createElement("a");
      const filename = `certificate-${certificateProps.studentName.toLowerCase().replace(/\s+/g, "-")}.png`;
      link.download = filename;
      link.href = dataUrl;
      link.click();
    } catch (error) {
      console.error("Failed to generate certificate PNG:", error);
    } finally {
      setShowExport(false);
      setIsDownloading(false);
    }
  };

  return (
    <div className={className}>
      {/* Visible certificate for display */}
      {CertificateComponent && <CertificateComponent {...certificateProps} />}

      {/* Export container - temporarily visible during export */}
      {showExport && (
        <div
          ref={exportRef}
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: -9999,
            opacity: 1,
            pointerEvents: "none",
          }}
          aria-hidden="true"
        >
          <Certificate4K {...certificateProps} />
        </div>
      )}

      {/* Download button */}
      {showDownloadButton && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center gap-2 px-6 py-3 bg-[#007AFF] text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Generating 4K PNG...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5" />
                <span>Download as PNG (4K)</span>
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
