/**
 * Platform Components Barrel Export
 *
 * Platform-specific components organized by feature.
 * Learning journey, lesson viewing, module browsing, profile settings.
 */

export * from "./certificate";
export * from "./feedback";
export * from "./home";
export * from "./learning";
export * from "./lessons";
export * from "./modules";
// Direct export for PaywallPopup (standalone component at platform level)
export { PaywallPopup } from "./PaywallPopup";
export * from "./profile";
