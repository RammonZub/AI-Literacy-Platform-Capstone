/**
 * Input Component
 *
 * PURPOSE: Reusable text input for forms
 *
 * CONTEXT:
 * Used by quiz email/name capture and other forms throughout the app.
 * Provides consistent styling and behavior for all text inputs.
 *
 * DESIGN:
 * - Clean, minimal borders
 * - Focus state with gold accent
 * - Error state with red border
 * - Optional label and helper text
 * - Disabled state support
 *
 * @see EmailCapture for usage example
 * @see NameCapture for usage example
 */

"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Label text displayed above input */
  label?: string;

  /** Error message to display */
  error?: string;

  /** Helper text displayed below input */
  helperText?: string;

  /** Full width container */
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, error, helperText, fullWidth = true, className = "", id, type = "text", ...props },
    ref,
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className={`input-container ${fullWidth ? "full-width" : ""} ${className}`}>
        {label && (
          <label htmlFor={inputId} className="input-label">
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={inputId}
          type={type}
          className={`input-field ${error ? "has-error" : ""}`}
          {...props}
        />

        {error && <span className="input-error">{error}</span>}

        {helperText && !error && <span className="input-helper">{helperText}</span>}

        <style jsx>{`
          .input-container {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }

          .full-width {
            width: 100%;
          }

          .input-label {
            font-size: 0.875rem;
            font-weight: 600;
            color: #374151;
          }

          .input-field {
            width: 100%;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            color: #1a1a1a;
            background: white;
            border: 2px solid #e5e7eb;
            border-radius: 8px;
            transition: all 0.2s ease;
            outline: none;
          }

          .input-field:focus {
            border-color: #d4a574;
            box-shadow: 0 0 0 3px rgba(212, 165, 116, 0.1);
          }

          .input-field.has-error {
            border-color: #ef4444;
          }

          .input-field.has-error:focus {
            border-color: #ef4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
          }

          .input-field:disabled {
            background: #f9fafb;
            color: #9ca3af;
            cursor: not-allowed;
          }

          .input-field::placeholder {
            color: #9ca3af;
          }

          .input-error {
            font-size: 0.875rem;
            color: #ef4444;
          }

          .input-helper {
            font-size: 0.875rem;
            color: #6b7280;
          }
        `}</style>
      </div>
    );
  },
);

Input.displayName = "Input";
