import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";
import { CheckoutProvider, CheckoutButton } from "@/components/Checkout";

const SITE = "https://www.iptvprovider.me";
const URL = `${SITE}/iptv-subscription-plans`;
const WHATSAPP = "https://wa.me/447848197761";

export const metadata = {
  title: {
    absolute: "IPTV Subscription Plans & Pricing 2026 | From $7.50/mo",
  },
  description:
    "Compare IPTV subscription plans: 1, 3, 6 and 12-month options from $7.50/mo. Every plan includes 54,000+ live channels and 120,000+ movies in HD/4K. Billed once, no auto-renewal, 30-day money-back guarantee.",
  keywords: [
    "IPTV subscription",
    "IPTV subscription plans",
    "IPTV pricing",
    "buy IPTV subscription",
    "IPTV plans",
    "cheap IPTV subscription",
    "IPTV Smarters Pro subscription",
  ],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: URL,
    title: "IPTV Subscription Plans & Pricing 2026 — From $7.50/mo",
    description:
      "1, 3, 6 and 12-month IPTV plans with 54,000+ channels & 120,000+ movies in HD/4K. Billed once, no auto-renewal, 30-day money-back guarantee.",
    siteName: "IPTV Provider",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "IPTV subscription plans from $7.50/mo — 54,000+ channels in HD/4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Subscription Plans & Pricing 2026 — From $7.50/mo",
    description:
      "1, 3, 6 and 12-month IPTV plans with 54,000+ channels & 120,000+ movies. Billed once, no auto-renewal.",
    images: ["/opengraph-image"],
  },
};

// Real plan data — mirrors components/Pricing.jsx so the on-page cards and the
// Product schema never drift apart.
const PLANS = [
  { name: "1 Month", price: 16, months: 1, per: "$16.00 / month" },
  { name: "3 Months", price: 39, months: 3, per: "$13.00 / month · save 19%" },
  { name: "6 Months", price: 60, months: 6, per: "$10.00 / month · save 38%" },
  { name: "12 Months", price: 90, months: 12, per: "$7.50 / month · save 53%" },
];

const COMPARE = [
  ["Live TV channels", "54,000+ on every plan"],
  ["Movies & series (VOD)", "120,000+ on every plan"],
  ["Picture quality", "4K, HD & SD"],
  ["Devices supported", "Smart TV, Firestick, Android, iOS, MAG, PC"],
  ["TV guide (EPG) & catch-up", "Included"],
  ["Anti-freeze technology", "Included"],
  ["Billing", "Billed once — no auto-renewal"],
  ["Money-back guarantee", "30 days"],
  ["Support", "24/7 in English & Spanish"],
];

const FAQ_ITEMS = [
  [
    "How much does an IPTV subscription cost?",
    "Plans start at $7.50/month on the 12-month option ($90 billed once). Shorter terms are $16 for 1 month, $39 for 3 months and $60 for 6 months. Every plan includes the full 54,000+ channel and 120,000+ movie library — you only pay less per month by choosing a longer term.",
  ],
  [
    "Which IPTV subscription plan is the best value?",
    "The 12-month plan is the best value at $7.50/month — a 53% saving versus paying monthly. If you'd rather try a shorter commitment first, the 1 or 3-month plans give you the exact same channels and quality.",
  ],
  [
    "Is the subscription billed monthly or once?",
    "Once. You pay a single price for your chosen term (1, 3, 6 or 12 months) and there is no automatic renewal. When the term ends, your access simply stops unless you decide to renew.",
  ],
  [
    "How do I pay for my IPTV subscription?",
    "You can pay by card (Visa/Mastercard), PayPal or cryptocurrency (USDT). After you choose a plan, our team confirms your payment and activates your subscription — usually within minutes.",
  ],
  [
    "Can I get a refund if I change my mind?",
    "Yes. Every paid plan is backed by a 30-day money-back guarantee. If the service isn't right for you, contact our support team within 30 days and we'll refund you. See our refund policy for full details.",
  ],
  [
    "Do I need a separate subscription for each device?",
    "One subscription streams on your household devices — Smart TV, Amazon Firestick, Android, Apple TV and iOS, Windows, macOS and MAG boxes. If you need to watch on several screens at the exact same time, ask our team about multi-connection options.",
  ],
];

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    {
      "@type": "ListItem",
      position: 2,
      name: "IPTV Subscription Plans",
      item: URL,
    },
  ],
};

const productLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Subscription",
  description:
    "Premium HD/4K IPTV subscription with 54,000+ live channels and 120,000+ movies & series, available in 1, 3, 6 and 12-month plans.",
  image: `${SITE}/opengraph-image`,
  brand: { "@type": "Brand", name: "IPTV Provider" },
  offers: PLANS.map((p) => ({
    "@type": "Offer",
    name: `${p.name} IPTV Subscription`,
    price: p.price.toFixed(2),
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: URL,
    priceValidUntil: "2026-12-31",
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: ["US", "CA", "GB"],
      returnPolicyCategory:
        "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 30,
      returnFees: "https://schema.org/FreeReturn",
    },
  })),
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${URL}#webpage`,
  url: URL,
  name: "IPTV Subscription Plans & Pricing 2026",
  isPartOf: { "@id": `${SITE}#website` },
  about: { "@id": `${SITE}#organization` },
  inLanguage: "en",
  dateModified: "2026-07-08",
};

export default function IptvSubscriptionPlansPage() {
  return (
    <CheckoutProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <div className="noise" aria-hidden />
      <Navbar />

      <main className="relative">
        {/* Hero */}
        <section className="relative overflow-hidden pt-36 pb-12 sm:pt-40 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[4%] h-[420px] w-[720px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(0,255,132,0.12),transparent)] blur-[70px]" />
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1px, transparent 1px)",
                color: "var(--fg)",
                backgroundSize: "40px 40px",
                maskImage:
                  "radial-gradient(70% 55% at 50% 15%, #000 0%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(70% 55% at 50% 15%, #000 0%, transparent 72%)",
              }}
            />
          </div>
          <div className="container-x text-center">
            <nav
              aria-label="Breadcrumb"
              className="mx-auto text-[13px] text-tertiary"
            >
              <a
                href="/iptv-smarters-pro#top"
                className="transition-colors hover:text-primary"
              >
                Home
              </a>
              <span className="mx-2 text-[color:var(--hair-strong)]">/</span>
              <span className="text-secondary">IPTV Subscription Plans</span>
            </nav>
            <p className="eyebrow mt-8 justify-center">
              <span className="h-1 w-1 rounded-full bg-acid shadow-[0_0_10px_2px_rgba(0,255,132,0.7)]" />
              Pricing · From $7.50/mo
            </p>
            <h1 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.4rem,6vw,4.4rem)] font-semibold leading-[1.02] tracking-editorial text-primary">
              IPTV subscription plans &amp; pricing
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-[16px] leading-relaxed text-secondary sm:text-[17px]">
              Every plan unlocks the same 54,000+ live channels and 120,000+
              movies &amp; series in up to 4K — you simply choose how long you
              want. Longer terms cost less per month. Billed once, no
              auto-renewal, and backed by a 30-day money-back guarantee.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <CheckoutButton
                plan={{ name: "12 Months", price: 90 }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-7 py-3.5 text-[15px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03] active:scale-95"
              >
                Get the best-value plan
                <span aria-hidden>→</span>
              </CheckoutButton>
              <a
                href="/iptv-free-trial-2026"
                className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-semibold text-primary transition-colors duration-500 hairline hover:hairline-strong"
              >
                Try free for 24 hours first
              </a>
            </div>
          </div>
        </section>

        {/* Plan cards (shared component — real prices + working checkout) */}
        <Pricing />

        {/* What's included — comparison table */}
        <section className="cv-section relative py-20 sm:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">What&apos;s included</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.04] tracking-editorial text-primary">
                The same full service on every plan
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-secondary">
                There are no stripped-back tiers. Whichever term you pick, you
                get everything below.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-[color:var(--hair)]">
              <table className="w-full border-collapse text-left">
                <tbody>
                  {COMPARE.map(([label, value], i) => (
                    <tr
                      key={label}
                      className={
                        i % 2 === 0 ? "bg-[var(--bg-2)]" : "bg-transparent"
                      }
                    >
                      <th
                        scope="row"
                        className="border-b border-[color:var(--hair)] px-5 py-4 text-[14px] font-medium text-primary sm:px-7"
                      >
                        {label}
                      </th>
                      <td className="border-b border-[color:var(--hair)] px-5 py-4 text-[14px] text-secondary sm:px-7">
                        {value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-center text-[13px] text-tertiary">
              Pay by card, PayPal or cryptocurrency (USDT). Your subscription is
              activated once payment is confirmed — usually within minutes.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="cv-section relative py-20 sm:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Subscription FAQ</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.04] tracking-editorial text-primary">
                Questions about IPTV plans
              </h2>
            </div>

            <div className="mx-auto mt-12 max-w-3xl divide-y divide-[color:var(--hair)] border-y border-[color:var(--hair)]">
              {FAQ_ITEMS.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium text-primary">
                    {q}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-acid hairline transition-transform duration-300 group-open:rotate-45">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-secondary">
                    {a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-20 sm:py-28">
          <div className="container-x">
            <div className="relative overflow-hidden rounded-[2rem] border border-[color:var(--hair-strong)] bg-[var(--bg-2)] px-6 py-16 text-center sm:px-12">
              <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(0,255,132,0.14),transparent)] blur-[60px]" />
              <h2 className="relative mx-auto max-w-2xl font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.04] tracking-editorial text-primary">
                Not sure yet? Start with a free trial
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-secondary">
                Test the full channel and movie library free for 24 hours on your
                own device, then pick the plan that fits. No card required.
              </p>
              <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="/iptv-free-trial-2026"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-8 py-4 text-[15px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03] active:scale-95"
                >
                  Start free trial
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-[15px] font-semibold text-primary transition-colors duration-500 hairline hover:hairline-strong"
                >
                  Ask us on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </CheckoutProvider>
  );
}
