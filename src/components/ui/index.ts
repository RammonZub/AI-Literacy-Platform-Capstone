/**
 * UI Components Barrel Export
 *
 * ============================================================================
 * PURPOSE
 * ============================================================================
 * Central export file for all UI primitive components.
 *
 * Import UI components from this file for cleaner imports:
 *
 * ```tsx
 * import { Button, WarningModal, Badge } from '@/components/ui';
 * ```
 *
 * ============================================================================
 * COMPONENTS
 * ============================================================================
 * - Button: Reusable button with multiple variants
 * - Card: Container component for content grouping
 * - Badge: Small status/label indicator
 * - ProgressBar: Visual progress indicator
 * - StatCard: Display statistics with icon and value
 * - SectionHeader: Section titles with optional actions
 * - WarningModal: Bottom sheet warning modal
 * ============================================================================
 */

export { default as Badge } from "./Badge";
export { default as Button } from "./Button";
export { default as Card } from "./Card";
export { Input } from "./Input";
export type { Iphone15ProProps } from "./Iphone15Pro";
export { default as Iphone15Pro } from "./Iphone15Pro";
export { default as ProgressBar } from "./ProgressBar";
export { default as SectionHeader } from "./SectionHeader";
export { default as StatCard } from "./StatCard";
export type { WarningModalProps, WarningVariant } from "./WarningModal";
export { default as WarningModal } from "./WarningModal";
