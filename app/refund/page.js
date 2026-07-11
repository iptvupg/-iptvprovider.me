import PageShell from "@/components/layout/PageShell";
import { SITE } from "@/config";
import { pageMetadata } from "@/lib/metadata";

const URL = `${SITE}/refund`;

export const metadata = pageMetadata({
  title: "Refund Policy — 30-Day Money-Back | IPTV Provider",
  description:
    "IPTV Provider's 30-day money-back guarantee. How refunds work, what's covered, and how to request one from our support team.",
  canonical: URL,
  openGraph: {
    title: "Refund Policy | IPTV Provider",
    description: "Our 30-day money-back guarantee and how to request a refund.",
  },
});

const UPDATED = { iso: "2026-07-08", label: "8 July 2026" };

export default function RefundPage() {
  return (
    <PageShell
      slug="refund"
      eyebrow="Legal"
      breadcrumb="Refund Policy"
      title="Refund Policy"
      intro="Every paid subscription is backed by a 30-day money-back guarantee. If the service isn't right for you, tell us within 30 days of your purchase and we'll make it right."
      updated={UPDATED}
    >
      <h2>Our 30-day money-back guarantee</h2>
      <p>
        We want you to be confident in your subscription. That&apos;s why we
        offer a free 24-hour trial before you pay, and a 30-day money-back
        guarantee after you do. If you&apos;re not satisfied, contact us within
        30 days of your purchase date and we will refund your subscription.
      </p>

      <h2>How to request a refund</h2>
      <p>
        Requesting a refund is simple. Get in touch through either channel below
        and include the email address or order details you used when you signed
        up:
      </p>
      <ul>
        <li>
          Email{" "}
          <a href="mailto:support@iptvprovider.me">support@iptvprovider.me</a>
        </li>
        <li>
          Message us on WhatsApp at{" "}
          <a
            href="https://wa.me/447848197761"
            target="_blank"
            rel="noopener noreferrer"
          >
            +44 7848 197761
          </a>
        </li>
      </ul>
      <p>
        Before we process a refund, our support team will usually offer to help
        fix any issue you&apos;re having — a large share of problems are a quick
        settings or connection fix. If you still want to cancel, we&apos;ll go
        ahead with the refund.
      </p>

      <h2>How refunds are paid</h2>
      <p>
        Approved refunds are returned using the same payment method you used to
        buy the subscription wherever possible. The time it takes to appear
        depends on your payment provider — card and PayPal refunds are typically
        faster than other methods.
      </p>

      <h2>What isn&apos;t covered</h2>
      <p>
        The guarantee is intended for genuine customers evaluating the service.
        We may decline a refund where:
      </p>
      <ul>
        <li>The request is made more than 30 days after purchase.</li>
        <li>
          There is clear evidence of abuse, such as reselling or sharing your
          login details.
        </li>
        <li>
          The issue is caused by something outside the service, such as your own
          internet connection or an incompatible device, and you decline
          reasonable help to resolve it.
        </li>
      </ul>

      <h2>Questions</h2>
      <p>
        If you&apos;re unsure whether your situation is covered, just ask. Our
        support team is available 24/7 in English and Spanish and is happy to
        talk it through before you decide.
      </p>
    </PageShell>
  );
}
