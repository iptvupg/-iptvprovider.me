import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/site";

const URL = `${SITE}/privacy`;

export const metadata = {
  title: { absolute: "Privacy Policy | IPTV Provider" },
  description:
    "How IPTV Provider collects, uses and protects the information you share when you request a free trial, buy a subscription or contact our support team.",
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: URL,
    title: "Privacy Policy | IPTV Provider",
    description:
      "How IPTV Provider collects, uses and protects your information.",
    siteName: "IPTV Provider",
    locale: "en_US",
  },
};

const UPDATED = { iso: "2026-07-08", label: "8 July 2026" };

export default function PrivacyPage() {
  return (
    <PageShell
      slug="privacy"
      eyebrow="Legal"
      breadcrumb="Privacy Policy"
      title="Privacy Policy"
      intro="This policy explains what information IPTV Provider collects, why we collect it, and the choices you have. We keep data collection to the minimum needed to activate your service and answer your questions."
      updated={UPDATED}
    >
      <h2>Information we collect</h2>
      <p>
        We only collect the information you give us directly. Depending on how
        you get in touch, that may include:
      </p>
      <ul>
        <li>
          <strong>Contact details</strong> — the email address, phone number or
          WhatsApp number you use to request a free trial or subscription.
        </li>
        <li>
          <strong>Order details</strong> — the plan you choose and the device
          type you intend to use, so we can send the right setup instructions.
        </li>
        <li>
          <strong>Support messages</strong> — the content of any message you
          send us so we can help you and keep a record of the conversation.
        </li>
      </ul>
      <p>
        We do not ask you to enter payment card details on this website. Payments
        are arranged directly with our team over WhatsApp or email using your
        chosen method (card, PayPal or cryptocurrency), and we do not store full
        card numbers on our servers.
      </p>

      <h2>How we use your information</h2>
      <ul>
        <li>To create and activate your trial or paid subscription.</li>
        <li>To send you login details, setup guides and renewal reminders.</li>
        <li>To respond to your questions and provide technical support.</li>
        <li>
          To detect and prevent fraud or abuse of the service, and to meet our
          legal obligations.
        </li>
      </ul>
      <p>
        We do not sell your personal information, and we do not share it with
        third parties except where it is necessary to deliver the service (for
        example, a payment processor you choose) or where the law requires it.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        This site uses a small amount of local browser storage to remember your
        theme preference (light or dark). We may use privacy-respecting analytics
        to understand which pages are popular and how the site performs. This
        data is aggregated and is not used to identify you personally.
      </p>

      <h2>How long we keep your data</h2>
      <p>
        We keep your contact and order details for as long as your subscription
        is active and for a reasonable period afterwards to handle renewals,
        refunds and support requests. When the information is no longer needed we
        delete it or anonymise it.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask us to access, correct or delete the personal information we
        hold about you, or to stop sending you marketing messages. To make a
        request, email{" "}
        <a href="mailto:support@iptvprovider.me">support@iptvprovider.me</a> and
        we will respond as quickly as we can. Depending on where you live, you
        may also have rights under local data-protection laws such as the GDPR.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable technical and organisational measures to protect your
        information against loss, misuse and unauthorised access. No method of
        transmission over the internet is completely secure, but we work to keep
        your data safe and to limit the information we hold to what we actually
        need.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will change
        the &ldquo;last updated&rdquo; date at the top of the page. Significant
        changes will be highlighted where appropriate.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about your privacy or this policy? Email{" "}
        <a href="mailto:support@iptvprovider.me">support@iptvprovider.me</a> or
        message us on WhatsApp at{" "}
        <a
          href="https://wa.me/447848197761"
          target="_blank"
          rel="noopener noreferrer"
        >
          +44 7848 197761
        </a>
        .
      </p>
    </PageShell>
  );
}
