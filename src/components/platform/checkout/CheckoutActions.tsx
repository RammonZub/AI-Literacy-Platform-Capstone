/**
 * CheckoutActions
 *
 * PURPOSE: Keep the checkout CTA, security line, payment logos, and error
 * treatment visually consistent anywhere the offer page repeats a plan-selection
 * close on the page.
 */

interface CheckoutActionsProps {
  ctaLabel?: string;
  error?: string | null;
  isLoading?: boolean;
  onCheckout: () => void;
}

export function CheckoutActions({
  ctaLabel = "CONTINUE",
  error,
  isLoading = false,
  onCheckout,
}: CheckoutActionsProps) {
  return (
    <div className="mx-auto flex w-full max-w-[360px] flex-col items-center">
      <button
        className="inline-flex min-h-14 w-full items-center justify-center rounded-[16px] bg-[#0A73FF] px-6 text-center text-[15px] font-semibold text-white shadow-[0_16px_32px_rgba(10,115,255,0.22)] transition-transform duration-150 hover:translate-y-[-1px] disabled:translate-y-0 disabled:opacity-70"
        disabled={isLoading}
        onClick={onCheckout}
        type="button"
      >
        {isLoading ? "PROCESSING..." : ctaLabel}
      </button>

      <div className="mt-4 flex flex-col items-center gap-3">
        <div className="inline-flex items-center gap-2 text-[13px] font-medium text-[#6B7280]">
          <svg
            className="h-4 w-4 text-[#62B34E]"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 2 4 6v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V6z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span>Pay safe &amp; secure</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 opacity-85">
          <img
            alt="Visa"
            className="h-4 w-auto"
            src="https://cdn.jsdelivr.net/gh/datatrans/payment-logos@latest/assets/cards/visa.svg"
          />
          <img
            alt="Mastercard"
            className="h-4 w-auto"
            src="https://cdn.jsdelivr.net/gh/datatrans/payment-logos@latest/assets/cards/mastercard.svg"
          />
          <img
            alt="Discover"
            className="h-4 w-auto"
            src="https://cdn.jsdelivr.net/gh/datatrans/payment-logos@latest/assets/cards/discover.svg"
          />
          <img
            alt="PayPal"
            className="h-4 w-auto"
            src="https://cdn.jsdelivr.net/gh/datatrans/payment-logos@latest/assets/apm/paypal.svg"
          />
          <img
            alt="American Express"
            className="h-4 w-auto"
            src="https://cdn.jsdelivr.net/gh/datatrans/payment-logos@latest/assets/cards/american-express.svg"
          />
          <img
            alt="Maestro"
            className="h-4 w-auto"
            src="https://cdn.jsdelivr.net/gh/datatrans/payment-logos@latest/assets/cards/maestro.svg"
          />
        </div>
      </div>

      {error ? (
        <div className="mt-4 w-full rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-center text-sm font-medium text-[#B42318]">
          {error}
        </div>
      ) : null}
    </div>
  );
}

export default CheckoutActions;
