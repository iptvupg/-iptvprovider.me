import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrialForm from "@/components/TrialForm";
import { SITE, WHATSAPP } from "@/config";
import { faqSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const URL = `${SITE}/iptv-free-trial-2026`;

export const metadata = pageMetadata({
  title: "Free IPTV Trial 2026 — 24 Hours, No Card | 54,000+ Channels",
  description:
    "Start a free 24-hour IPTV trial. Test 54,000+ live channels and 120,000+ movies & series in HD/4K on any device before you buy. No credit card required.",
  canonical: URL,
  keywords: [
    "IPTV free trial",
    "free IPTV trial 2026",
    "24 hour IPTV trial",
    "IPTV trial no credit card",
    "test IPTV",
    "IPTV Smarters Pro free trial",
  ],
  openGraph: {
    title: "Free IPTV Trial 2026 — 24 Hours, No Card Required",
    description:
      "Test 54,000+ live channels & 120,000+ movies in HD/4K free for 24 hours. Works on Firestick, Smart TV, Android, iOS and more.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Free 24-hour IPTV trial — 54,000+ channels in HD/4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free IPTV Trial 2026 — 24 Hours, No Card Required",
    description:
      "Test 54,000+ live channels & 120,000+ movies in HD/4K free for 24 hours. No credit card.",
    images: ["/opengraph-image"],
  },
});

const HERO_TRUST = [
  "No credit card required",
  "Full channel + movie library",
  "Reply in 1–30 minutes",
];

const FEATURES = [
  {
    title: "24-hour free trial",
    body: "Try the full service for a day — every live channel and every movie unlocked. No card, no commitment.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "54,000+ live channels",
    body: "Sports, news, entertainment and international channels from around the world, all in one place.",
    icon: (
      <>
        <rect x="2.5" y="4.5" width="19" height="13" rx="2" />
        <path d="M8 21h8M12 17.5V21" />
      </>
    ),
  },
  {
    title: "120,000+ movies & series",
    body: "A huge on-demand library of blockbuster films and box-set series, updated as new releases drop.",
    icon: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M10 8.5v7l6-3.5-6-3.5Z" />
      </>
    ),
  },
  {
    title: "7-day EPG & anti-freeze",
    body: "A clean 7-day TV guide plus stable, buffer-free streams in up to 4K on any modern device.",
    icon: (
      <>
        <path d="M4 7h16M4 12h10M4 17h7" />
      </>
    ),
  },
];

const STEPS = [
  {
    n: "01",
    title: "Download an IPTV app",
    body: "We recommend IPTV Smarters Pro or TiviMate. Both are free on the app store for your device.",
  },
  {
    n: "02",
    title: "Apply for your trial code",
    body: "Fill in the short form above. We send your 24-hour trial line back to you — usually within minutes.",
  },
  {
    n: "03",
    title: "Activate & start watching",
    body: "Enter the details into your app and you're instantly streaming live TV, sports and movies.",
  },
  {
    n: "04",
    title: "Pick a plan you love",
    body: "Happy with it? Choose 1, 3, 6, 12 or 24 months and keep everything running with no interruption.",
  },
];

const FAQ_ITEMS = [
  [
    "Is the IPTV trial really free?",
    "Yes. The 24-hour trial is completely free and no credit card is required. It's simply a way to test the channels, movies and picture quality before you decide to buy.",
  ],
  [
    "How long does the free trial last?",
    "24 hours. The trial line is valid for a full day so you have time to test it on your device, check your favourite channels and confirm the stream quality.",
  ],
  [
    "What's the difference between the trial and a paid subscription?",
    "The free trial code is valid for 24 hours. Paid subscriptions give you extended access — 1, 3, 6, 12 or 24 months — with the same 54,000+ channels and 120,000+ movies & series.",
  ],
  [
    "Which devices work with the trial?",
    "Android TV boxes, Amazon Firestick, Smart TVs, Nvidia Shield, Android phones and tablets, Apple TV and iOS, Windows, macOS and MAG boxes. If it runs an IPTV player, it works.",
  ],
  [
    "How soon will I get my trial line?",
    "After you apply you'll normally receive your trial details within 1 to 30 minutes. Please check your email inbox and spam folder, or continue the chat on WhatsApp.",
  ],
  [
    "Why might my IPTV not be working?",
    "The most common causes are an unstable internet connection, an expired code or a blocked IP. A quick app restart or a VPN usually fixes it — or message our 24/7 support and we'll sort it out.",
  ],
];

const COMPATIBLE = [
  "Android TV Box",
  "Amazon Firestick",
  "Smart TV",
  "Nvidia Shield",
  "Android Phone & Tablet",
  "Apple TV & iOS",
  "Windows & macOS",
  "MAG Box",
];

const faqLd = faqSchema(FAQ_ITEMS);

const breadcrumbLd = breadcrumbSchema([
  { name: "Home", item: SITE },
  { name: "IPTV Free Trial", item: URL },
]);

export default function IptvFreeTrialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="noise" aria-hidden />
      <Navbar />

      <main className="relative">
        {/* Hero + form */}
        <section
          id="top"
          className="relative overflow-hidden pt-36 pb-20 sm:pt-40 sm:pb-24"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[4%] h-[440px] w-[760px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(0,255,132,0.13),transparent)] blur-[70px]" />
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1px, transparent 1px)",
                color: "var(--fg)",
                backgroundSize: "40px 40px",
                maskImage:
                  "radial-gradient(70% 55% at 30% 15%, #000 0%, transparent 72%)",
                WebkitMaskImage:
                  "radial-gradient(70% 55% at 30% 15%, #000 0%, transparent 72%)",
              }}
            />
          </div>

          <div className="container-x grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow">
                <span className="h-1 w-1 rounded-full bg-acid shadow-[0_0_10px_2px_rgba(0,255,132,0.7)]" />
                IPTV Free Trial · 24 hours
              </p>
              <h1 className="mt-6 max-w-2xl font-display text-[clamp(2.4rem,6vw,4.4rem)] font-semibold leading-[1.02] tracking-editorial text-primary">
                Try IPTV free for{" "}
                <span className="relative text-primary">
                  24 hours
                  <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-acid/80 sm:h-2" />
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-pretty text-[16px] leading-relaxed text-secondary sm:text-[17px]">
                Evaluating an IPTV service before you pay is your right. Test
                54,000+ live channels and 120,000+ movies &amp; series in up to
                4K on any device — completely free, no credit card required.
              </p>
              <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
                {HERO_TRUST.map((t) => (
                  <li
                    key={t}
                    className="flex items-center gap-2 text-[13.5px] text-secondary"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-acid"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-7 py-3.5 text-[15px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03] active:scale-95"
                >
                  Apply now
                  <span aria-hidden>→</span>
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-semibold text-primary transition-colors duration-500 hairline hover:hairline-strong"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-acid"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            <TrialForm />
          </div>
        </section>

        {/* Features */}
        <section className="cv-section relative py-20 sm:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Why choose us</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.04] tracking-editorial text-primary">
                Everything unlocked during your free trial
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-secondary">
                The trial isn&apos;t a stripped-back demo. You get the same
                channels, movies and 4K quality that paid members enjoy.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="surface hairline group rounded-3xl p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border text-acid hairline transition-colors duration-500 group-hover:hairline-strong">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {f.icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 font-display text-[19px] font-semibold tracking-editorial text-primary">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-secondary">
                    {f.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to get started */}
        <section id="steps" className="cv-section relative py-20 sm:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">How to get started</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.04] tracking-editorial text-primary">
                Streaming in 4 simple steps
              </h2>
            </div>

            <div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="surface hairline relative rounded-3xl p-8"
                >
                  <span className="font-display text-[2.4rem] font-semibold leading-none tracking-editorial text-[color:var(--hair-strong)]">
                    {s.n}
                  </span>
                  <h3 className="mt-6 font-display text-[19px] font-semibold tracking-editorial text-primary">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-secondary">
                    {s.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[color:var(--hair)] bg-[var(--bg-2)] p-6 text-center sm:p-8">
              <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-acid">
                Compatible with
              </p>
              <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                {COMPATIBLE.map((c) => (
                  <li
                    key={c}
                    className="rounded-full border border-[color:var(--hair-strong)] px-4 py-1.5 text-[13px] text-secondary"
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="cv-section relative py-20 sm:py-28">
          <div className="container-x">
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Free trial FAQ</p>
              <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.2rem)] font-semibold leading-[1.04] tracking-editorial text-primary">
                Common questions about the trial
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
                Ready to elevate your entertainment?
              </h2>
              <p className="relative mx-auto mt-5 max-w-xl text-[15.5px] leading-relaxed text-secondary">
                Grab your free 24-hour trial code, test it on any device, then
                pick the plan that suits you. Seamless streaming starts now.
              </p>
              <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#apply"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-8 py-4 text-[15px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03] active:scale-95"
                >
                  Start free trial
                  <span aria-hidden>→</span>
                </a>
                <a
                  href="/iptv-smarters-pro#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full border px-8 py-4 text-[15px] font-semibold text-primary transition-colors duration-500 hairline hover:hairline-strong"
                >
                  View subscription plans
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
