/**
 * Warning Modal Component
 *
 * ============================================================================
 * PURPOSE
 * ============================================================================
 * Displays a warning modal when users attempt to access lessons they haven't
 * unlocked yet. This prevents users from skipping ahead without confirmation,
 * encouraging them to follow the intended learning path.
 *
 * ============================================================================
 * DESIGN PATTERN
 * ============================================================================
 * Follows the bottom sheet pattern used by LessonModal:
 * - Slides up from bottom of screen
 * - Backdrop overlay with dismiss-on-click
 * - Smooth enter/exit animations
 * - Fixed z-index to appear above other content
 *
 * ============================================================================
 * USAGE
 * ============================================================================
 * ```tsx
 * <WarningModal
 *   isOpen={showWarning}
 *   title="Skip Ahead?"
 *   message="You're about to jump to a lesson that requires completing previous lessons first."
 *   confirmText="I Understand"
 *   cancelText="Go Back"
 *   onConfirm={() => router.push(url)}
 *   onCancel={() => setShowWarning(false)}
 * />
 * ```
 *
 * ============================================================================
 * PROPS
 * ============================================================================
 * - isOpen: Controls modal visibility
 * - title: Bold heading text
 * - message: Descriptive warning message
 * - confirmText: Text for confirm button (default: "Continue")
 * - cancelText: Text for cancel button (default: "Go Back")
 * - onConfirm: Callback when user confirms
 * - onCancel: Callback when user cancels or clicks backdrop
 * - variant: 'warning' (yellow/orange) or 'info' (blue)
 * ============================================================================
 */

"use client";

import { AlertTriangle, Info } from "lucide-react";
import React from "react";

// ==========================================
// TYPES
// ==========================================

export type WarningVariant = "warning" | "info";

interface WarningModalProps {
  /** Controls whether the modal is visible */
  isOpen: boolean;
  /** Bold heading displayed at top of modal */
  title: string;
  /** Descriptive message explaining the warning */
  message: string;
  /** Optional subtitle with additional context */
  subtitle?: string;
  /** Text for the confirm button (default: "Continue") */
  confirmText?: string;
  /** Text for the cancel button (default: "Go Back") */
  cancelText?: string;
  /** Callback when user confirms the action */
  onConfirm: () => void;
  /** Callback when user cancels or dismisses */
  onCancel: () => void;
  /** Visual style variant - warning (default) or info */
  variant?: WarningVariant;
}

// ==========================================
// COMPONENT
// ==========================================

export default function WarningModal({
  isOpen,
  title,
  message,
  subtitle,
  confirmText = "Continue",
  cancelText = "Go Back",
  onConfirm,
  onCancel,
  variant = "warning",
}: WarningModalProps) {
  // Handle confirm button click
  const handleConfirm = () => {
    onConfirm();
  };

  // Handle backdrop click - same as cancel
  const handleBackdropClick = () => {
    onCancel();
  };

  // Don't render anything if modal is closed
  if (!isOpen) return null;

  const isVisible = isOpen;

  // Color scheme based on variant
  const isWarning = variant === "warning";
  const iconBgStyle = isWarning
    ? { backgroundColor: "#FEF3C7" }
    : { backgroundColor: "rgba(30, 74, 109, 0.2)" };
  const iconColorStyle = isWarning ? { color: "#D97706" } : { color: "#1E4A6D" };
  const Icon = isWarning ? AlertTriangle : Info;

  return (
    <>
      {/* ========================================== */}
      {/* BACKDROP OVERLAY                           */}
      {/* Dark semi-transparent background behind   */}
      {/* the modal. Clicking it closes the modal.   */}
      {/* ========================================== */}
      <div
        className={`fixed inset-0 bg-black/40 z-[200] transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* ========================================== */}
      {/* MODAL CONTENT                             */}
      {/* Bottom sheet that slides up from bottom    */}
      {/* ========================================== */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-[201] bg-card rounded-t-3xl transition-transform duration-300 ease-out border-t border-border ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          maxHeight: "50vh",
          boxShadow: "0 -10px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Handle bar at top - visual affordance for swipe gesture */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-muted rounded-full" />
        </div>

        <div className="px-6 py-6 pb-8">
          {/* ========================================== */}
          {/* WARNING ICON                              */}
          {/* Large icon indicating the warning type    */}
          {/* ========================================== */}
          <div className="flex justify-center mb-4">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={iconBgStyle}
            >
              <Icon className="w-8 h-8" strokeWidth={2.5} style={iconColorStyle} />
            </div>
          </div>

          {/* ========================================== */}
          {/* TITLE                                     */}
          {/* Bold heading text                         */}
          {/* ========================================== */}
          <h2 className="text-xl font-bold text-foreground text-center mb-2">{title}</h2>

          {/* ========================================== */}
          {/* SUBTITLE (OPTIONAL)                       */}
          {/* Additional context below the title        */}
          {/* ========================================== */}
          {subtitle && <p className="text-sm text-muted-foreground text-center mb-3">{subtitle}</p>}

          {/* ========================================== */}
          {/* MESSAGE                                   */}
          {/* Main warning description                  */}
          {/* ========================================== */}
          <p className="text-base text-foreground text-center mb-6 leading-relaxed">{message}</p>

          {/* ========================================== */}
          {/* ACTION BUTTONS                            */}
          {/* Two buttons - primary confirm, secondary  */}
          {/* cancel                                    */}
          {/* ========================================== */}
          <div className="flex gap-3">
            {/* Cancel button - secondary style */}
            <button
              onClick={onCancel}
              className="flex-1 px-4 py-3 bg-muted text-foreground font-semibold rounded-xl hover:bg-muted/80 active:bg-muted/60 transition-colors"
            >
              {cancelText}
            </button>

            {/* Confirm button - primary style */}
            <button
              onClick={handleConfirm}
              className={`flex-1 px-4 py-3 font-semibold rounded-xl transition-colors text-white ${
                isWarning
                  ? "hover:opacity-90 active:opacity-80"
                  : "hover:opacity-90 active:opacity-80"
              }`}
              style={{ backgroundColor: isWarning ? "#D97706" : "#1E4A6D" }}
            >
              {confirmText}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

// ==========================================
// EXPORTS
// ==========================================

export type { WarningModalProps };
