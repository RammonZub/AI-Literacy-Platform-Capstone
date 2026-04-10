/**
 * Layout Components Barrel Export
 *
 * Layout components that define page structure and navigation.
 *
 * @see TopNav - Top navigation bar with avatar and streak
 * @see Container - Consistent width constraints for page content
 * @see PlatformLayoutClient - Client wrapper for platform layout with paywall support
 */

export type { ContainerProps, ContainerSize } from "./Container";
export { Container } from "./Container";
export type {
  PaywallContextValue,
  PlatformLayoutClientProps,
} from "./PlatformLayoutClient";
export { PlatformLayoutClient, usePaywall } from "./PlatformLayoutClient";
export type { PlatformRailProps, PlatformRailVariant } from "./PlatformRail";
export { default as PlatformRail } from "./PlatformRail";
export type { PlatformPageShellProps } from "./PlatformPageShell";
export { default as PlatformPageShell } from "./PlatformPageShell";
export { default as PlatformSidebar } from "./PlatformSidebar";
export { default as TopNav } from "./TopNav";
export { UserStatusBadge } from "./UserStatusBadge";
