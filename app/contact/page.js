import PageShell from "@/components/PageShell";

const SITE = "https://www.iptvprovider.me";
const URL = `${SITE}/contact`;

export const metadata = {
  title: { absolute: "Contact IPTV Provider — 24/7 Support" },
  description:
    "Contact IPTV Provider by WhatsApp or email. 24/7 support in English and Spanish for free trials, subscriptions, setup and refunds.",
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: URL,
    title: "Contact IPTV Provider",
    description: "24/7 support in English and Spanish by WhatsApp or email.",
    siteName: "IPTV Provider",
    locale: "en_US",
  },
};

export default function ContactPage() {
  return (
    <PageShell
      slug="contact"
      eyebrow="Contact"
      breadcrumb="Contact"
      title="Contact our team"
      intro="We're here 24/7 in English and Spanish. Whether you want to start a free trial, ask about a plan or get help with setup, the fastest way to reach us is WhatsApp."
    >
      <h2>WhatsApp</h2>
      <p>
        The quickest way to get an answer. Message us any time and we&apos;ll
        usually reply within a few minutes:{" "}
        <a
          href="https://wa.me/447848197761"
          target="_blank"
          rel="noopener noreferrer"
        >
          +44 7848 197761
        </a>
        .
      </p>

      <h2>Email</h2>
      <p>
        Prefer email? Write to{" "}
        <a href="mailto:support@iptvprovider.me">support@iptvprovider.me</a> and
        our support team will get back to you. Please include the email address
        or order details you used when you signed up so we can find your account
        quickly.
      </p>

      <h2>Support hours</h2>
      <p>
        Our support team is available 24 hours a day, 7 days a week, in English
        and Spanish. There&apos;s no ticket queue to wait in — you talk directly
        with a person who can help.
      </p>

      <h2>What we can help with</h2>
      <ul>
        <li>Starting or extending your free 24-hour trial.</li>
        <li>Choosing and activating a subscription plan.</li>
        <li>Setting up IPTV Smarters Pro or another app on your device.</li>
        <li>Fixing buffering, login or connection problems.</li>
        <li>Renewals, billing questions and refunds.</li>
      </ul>

      <h2>Before you get in touch</h2>
      <p>
        Many common questions are already answered on our{" "}
        <a href="/iptv-smarters-pro#faq">FAQ</a>, and you can start streaming for
        free from the{" "}
        <a href="/iptv-free-trial-2026">free trial page</a>. If you still need a
        hand, we&apos;re only a message away.
      </p>
    </PageShell>
  );
}
