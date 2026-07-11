import PageShell from "@/components/PageShell";
import { SITE } from "@/config";
import { faqSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const URL = `${SITE}/learn`;

export const metadata = pageMetadata({
  title: "Learn IPTV — How It Works, Setup & Guides | IPTV Provider",
  description:
    "Learn what IPTV is, how it works, what you need to watch it, and how it compares to cable and streaming. Plain-English guides for beginners and beyond.",
  canonical: URL,
  openGraph: {
    title: "Learn IPTV — How It Works, Setup & Guides",
    description:
      "Plain-English IPTV guides: what it is, how it works, and how to get started.",
  },
});

const UPDATED = { iso: "2026-07-09", label: "9 July 2026" };

// Live guides only — cards link to pages that actually resolve. The hub grows
// as more cluster pages ship.
const GUIDES = [
  {
    href: "/learn/iptv-explained",
    kicker: "Basics",
    title: "What is IPTV?",
    body: "A plain-English explanation of Internet Protocol TV — what it is, how streams are delivered, and what you need to watch.",
  },
  {
    href: "/how-to",
    kicker: "Setup",
    title: "How to set up IPTV",
    body: "Step-by-step installation guides for Firestick, Smart TV, Android, Apple TV and more.",
  },
  {
    href: "/how-to/install-iptv-on-firestick",
    kicker: "How-to",
    title: "Install IPTV on Firestick",
    body: "The most popular setup: get IPTV Smarters Pro running on an Amazon Firestick in about 10 minutes.",
  },
  {
    href: "/compare/iptv-smarters-pro-vs-tivimate",
    kicker: "Compare",
    title: "Smarters Pro vs TiviMate",
    body: "Choosing a player app? Compare the two most popular IPTV apps on interface, TV guide, devices and price.",
  },
  {
    href: "/iptv-subscription-plans",
    kicker: "Plans",
    title: "IPTV subscription plans",
    body: "Compare 1, 3, 6 and 12-month plans — the same 54,000+ channels on every one, from $7.50/mo.",
  },
];

const FAQ_ITEMS = [
  [
    "What do I need to watch IPTV?",
    "Three things: a device (Smart TV, Firestick, phone, or computer), a stable internet connection of around 15–25 Mbps for HD/4K, and an IPTV app such as IPTV Smarters Pro loaded with a subscription or free-trial line.",
  ],
  [
    "Is IPTV hard to set up?",
    "No. On most devices you install a free player app, enter the login details we send you, and start watching. Our step-by-step how-to guides walk through each device, and support is available 24/7 if you get stuck.",
  ],
  [
    "Can I try IPTV before paying?",
    "Yes. We offer a free 24-hour trial with the full channel and movie library so you can test picture quality and your favourite channels on your own device before choosing a plan.",
  ],
];

const itemListLd = itemListSchema(GUIDES);

const faqLd = faqSchema(FAQ_ITEMS);

export default function LearnHubPage() {
  return (
    <PageShell
      slug="learn"
      eyebrow="Learn"
      breadcrumb="Learn"
      title="Learn IPTV"
      intro="New to IPTV or want to get more from it? Start with the basics, then follow our setup and troubleshooting guides. Everything here is written in plain English — no jargon required."
      updated={UPDATED}
      schemas={[itemListLd, faqLd]}
      contentClassName="max-w-5xl"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {GUIDES.map((g) => (
          <a
            key={g.href}
            href={g.href}
            className="surface hairline group flex flex-col rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1 hover:hairline-strong"
          >
            <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-acid">
              {g.kicker}
            </span>
            <h2 className="mt-3 font-display text-[22px] font-semibold tracking-editorial text-primary">
              {g.title}
            </h2>
            <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-secondary">
              {g.body}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-primary">
              Read guide
              <span
                aria-hidden
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </a>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-[color:var(--hair-strong)] bg-[var(--bg-2)] p-8 text-center sm:p-12">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.4rem)] font-semibold tracking-editorial text-primary">
          Ready to see it for yourself?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-secondary">
          Reading only gets you so far. Start a free 24-hour trial and test the
          full channel and movie library on your own device — no card required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/iptv-free-trial-2026"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-7 py-3.5 text-[15px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03] active:scale-95"
          >
            Start free trial
            <span aria-hidden>→</span>
          </a>
          <a
            href="/iptv-subscription-plans"
            className="inline-flex items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-semibold text-primary transition-colors duration-500 hairline hover:hairline-strong"
          >
            View plans
          </a>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.2rem)] font-semibold tracking-editorial text-primary">
          Common questions
        </h2>
        <div className="mt-6 divide-y divide-[color:var(--hair)] border-y border-[color:var(--hair)]">
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
              <p className="mt-3 text-[14.5px] leading-relaxed text-secondary">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
