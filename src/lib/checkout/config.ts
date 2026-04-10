/**
 * Checkout offer config — route metadata and layout constraints for `/checkout`.
 */

export const checkoutOfferConfig = {
  offerVariant: "default",
  publicRouteBase: "/checkout",
  versionId: "checkout",
} as const;

/**
 * Shared layout: capped column width on large viewports; full-width on phones.
 */
export const checkoutPageLayout = {
  contentMaxWidthClass: "max-w-[min(100%,26.25rem)]",
} as const;

export default checkoutOfferConfig;
