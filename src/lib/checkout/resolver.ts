/**
 * Checkout version resolver
 *
 * PURPOSE: Resolve which internal checkout implementation should render behind
 * the stable public `/checkout/[checkoutId]` route.
 *
 * CURRENT STRATEGY:
 * - single canonical checkout implementation behind `/checkout/[checkoutId]`
 *
 * If the checkout experience ever branches again, this resolver is the place
 * to switch on a first-party variant signal.
 */

import { checkoutOfferConfig } from "./config";

export type CheckoutVersionId = typeof checkoutOfferConfig.versionId;

export async function resolveCheckoutVersion(): Promise<CheckoutVersionId> {
  return checkoutOfferConfig.versionId;
}

export default resolveCheckoutVersion;
