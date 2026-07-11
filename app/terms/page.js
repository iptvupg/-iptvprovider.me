import PageShell from "@/components/PageShell";
import { SITE } from "@/config";
import { pageMetadata } from "@/lib/metadata";

const URL = `${SITE}/terms`;

export const metadata = pageMetadata({
  title: "Terms of Service | IPTV Provider",
  description:
    "The terms that apply when you use IPTV Provider — free trials, subscriptions, acceptable use, payments and our 30-day money-back guarantee.",
  canonical: URL,
  openGraph: {
    title: "Terms of Service | IPTV Provider",
    description:
      "The terms that apply when you use IPTV Provider's trials and subscriptions.",
  },
});

const UPDATED = { iso: "2026-07-08", label: "8 July 2026" };

export default function TermsPage() {
  return (
    <PageShell
      slug="terms"
      eyebrow="Legal"
      breadcrumb="Terms of Service"
      title="Terms of Service"
      intro="These terms set out the agreement between you and IPTV Provider when you use our website, request a free trial or take out a subscription. By using the service you agree to them."
      updated={UPDATED}
    >
      <h2>The service</h2>
      <p>
        IPTV Provider supplies access to a streaming service that works with
        third-party IPTV player apps such as IPTV Smarters Pro and TiviMate. We
        provide the login details you need to use the service on your own
        compatible devices. We are a reseller of access and are not affiliated
        with, and do not own, the third-party apps or the underlying broadcast
        rights.
      </p>

      <h2>Free trial</h2>
      <p>
        We offer a free 24-hour trial so you can test the service before you buy.
        The trial gives you access to the full channel and movie library. It is
        intended for genuine evaluation only, and we may limit or refuse trials
        that appear to be abused.
      </p>

      <h2>Subscriptions and payment</h2>
      <ul>
        <li>
          Subscriptions are available in fixed terms (for example 1, 3, 6, 12 or
          24 months) and are billed once at the start of the term.
        </li>
        <li>
          There is no automatic renewal. Your access simply ends when the term
          finishes unless you choose to renew.
        </li>
        <li>
          Payments are arranged directly with our team by card, PayPal or
          cryptocurrency. Your subscription is activated once payment is
          confirmed.
        </li>
      </ul>

      <h2>Acceptable use</h2>
      <p>You agree that you will not:</p>
      <ul>
        <li>
          Resell, redistribute or share your login details with people outside
          your household.
        </li>
        <li>Use the service for any unlawful purpose.</li>
        <li>
          Attempt to disrupt, reverse-engineer or overload the service or its
          infrastructure.
        </li>
      </ul>
      <p>
        We may suspend or terminate access, without refund, where these terms are
        seriously or repeatedly breached.
      </p>

      <h2>Service availability</h2>
      <p>
        We work to keep the service stable and available, but we cannot guarantee
        uninterrupted access. Streams may occasionally be affected by your
        internet connection, your device, maintenance or events outside our
        control. If you experience problems, our support team is available 24/7 to
        help.
      </p>

      <h2>Money-back guarantee</h2>
      <p>
        Paid subscriptions are covered by a 30-day money-back guarantee. Full
        details are on our{" "}
        <a href="/refund">refund policy</a> page.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, IPTV Provider is not liable for
        any indirect or consequential loss arising from your use of, or inability
        to use, the service. Nothing in these terms limits any rights you have
        under mandatory consumer-protection law.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The version published on
        this page, with the date shown above, is the one that applies. Continued
        use of the service after an update means you accept the revised terms.
      </p>

      <h2>Contact</h2>
      <p>
        If you have any questions about these terms, email{" "}
        <a href="mailto:support@iptvprovider.me">support@iptvprovider.me</a> or
        message us on{" "}
        <a
          href="https://wa.me/447848197761"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
        .
      </p>
    </PageShell>
  );
}
