import PageShell from "@/components/PageShell";
import { SITE } from "@/config";
import { faqSchema, itemListSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const URL = `${SITE}/compare`;

export const metadata = pageMetadata({
  title: "IPTV App & Service Comparisons — Side-by-Side | IPTV Provider",
  description:
    "Honest side-by-side IPTV comparisons: IPTV Smarters Pro vs TiviMate, app features, device support and setup. Pick the right player for your setup.",
  canonical: URL,
  openGraph: {
    title: "IPTV App & Service Comparisons",
    description:
      "Side-by-side IPTV player and service comparisons to help you choose the right setup.",
  },
});

const UPDATED = { iso: "2026-07-10", label: "10 July 2026" };

const GUIDES = [
  {
    href: "/compare/iptv-smarters-pro-vs-tivimate",
    kicker: "Player apps",
    title: "IPTV Smarters Pro vs TiviMate",
    body: "The two most popular IPTV player apps compared: interface, EPG, device support and which one to pick.",
  },
  {
    href: "/learn/iptv-explained",
    kicker: "Start here",
    title: "What is IPTV?",
    body: "Understand how IPTV works and what a player app actually does before you choose one.",
  },
  {
    href: "/how-to/install-iptv-on-firestick",
    kicker: "Setup",
    title: "Install IPTV on Firestick",
    body: "Once you've picked an app, follow the 10-minute Firestick install walkthrough.",
  },
  {
    href: "/iptv-subscription-plans",
    kicker: "Plans",
    title: "Subscription plans",
    body: "Every app here works with your line from us. Compare plans from $7.50/mo.",
  },
];

const FAQ_ITEMS = [
  [
    "Does the app I choose change what I can watch?",
    "No. The channels, movies and TV guide come from your subscription line, not the app. IPTV Smarters Pro and TiviMate both play the same content — the difference is the interface, the guide layout and which devices each runs on best.",
  ],
  [
    "Are these apps free?",
    "The player apps are free to download. TiviMate offers an optional paid Premium tier that unlocks extras like multiple playlists and recording, but the core playback is free. You still need a subscription or free-trial line from a provider to watch anything.",
  ],
  [
    "Which app works with your service?",
    "Both do. We send you an Xtream Codes login and an M3U URL that work in IPTV Smarters Pro, TiviMate and most other players, so you can switch apps any time without changing your subscription.",
  ],
];

const itemListLd = itemListSchema(GUIDES);

const faqLd = faqSchema(FAQ_ITEMS);

export default function CompareHubPage() {
  return (
    <PageShell
      slug="compare"
      eyebrow="Comparisons"
      breadcrumb="IPTV comparisons"
      title="IPTV app & service comparisons"
      intro="Choosing an IPTV player is separate from choosing a subscription. These side-by-side comparisons break down the real differences — interface, TV guide, device support and price — so you can pick the setup that fits how you watch."
      updated={UPDATED}
      author="IPTV Provider Editorial"
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
              Read comparison
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

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.2rem)] font-semibold tracking-editorial text-primary">
          Comparisons FAQ
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
