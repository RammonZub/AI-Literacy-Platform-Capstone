/**
 * CheckoutFaq
 *
 * PURPOSE: Close checkout with a compact objection-handling FAQ in a clean
 * Tailwind implementation that matches the newer checkout design language.
 *
 * WHY this exists:
 * - checkout needs a self-contained FAQ block
 * - the section should evolve independently from older checkout layouts
 */

const FAQ_ITEMS = [
  {
    question: "What does the free assessment include, and when do I pay?",
    answer:
      "Onboarding and your personalized module recommendation are free before you create an account. After signup you receive a three-day trial of full lesson access; paid tiers are weekly (~$13), monthly ($50), or lifetime (~$140) in USD at current list prices.",
  },
  {
    question: "Do I need to be technical to use this platform?",
    answer:
      "No. It is built for busy professionals and beginners, not developers. Lessons are practical and designed to help you use AI confidently at work without coding.",
  },
  {
    question: "How much time do I need each day?",
    answer:
      "Most lessons are bite-sized and designed to fit into about 10 to 15 minutes a day, so you can keep learning without blocking off huge chunks of time.",
  },
  {
    question: "What do I actually get inside?",
    answer:
      "You get structured AI lessons, practical workflows, templates, and guided paths across the tools and use cases that matter most for real work.",
  },
  {
    question: "Can I cancel if I change my mind?",
    answer:
      "Yes. If you are on a subscription plan, you can manage or cancel it from your account. If you choose lifetime access, it is a one-time payment with no renewal.",
  },
  {
    question: "When do I get access?",
    answer:
      "Immediately after checkout. As soon as payment is successful, your access is unlocked and you can start learning right away.",
  },
];

export function CheckoutFaq() {
  return (
    <section className="overflow-hidden rounded-[28px] border border-[#E3E8F0] bg-white px-4 py-6 shadow-[0_14px_32px_rgba(15,23,42,0.04)] sm:px-6">
      <div className="mx-auto max-w-[320px] text-center">
        <h2 className="text-[1.45rem] font-semibold leading-[1.12] tracking-[-0.04em] text-[#111827]">
          Final questions before you start
        </h2>
      </div>

      <div className="mt-6 space-y-3">
        {FAQ_ITEMS.map((item) => (
          <details
            className="rounded-[18px] border border-[#E7ECF3] bg-[#FCFCFD] px-4 py-3"
            key={item.question}
          >
            <summary className="cursor-pointer list-none pr-6 text-[14px] font-semibold leading-6 text-[#111827] marker:hidden">
              {item.question}
            </summary>
            <p className="mt-2 text-[13px] leading-6 text-[#667085]">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default CheckoutFaq;
