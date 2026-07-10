import PageShell from "@/components/PageShell";

const SITE = "https://www.iptvprovider.me";
const URL = `${SITE}/how-to`;

export const metadata = {
  title: {
    absolute: "How to Set Up IPTV on Any Device — Install Guides | IPTV Provider",
  },
  description:
    "Step-by-step guides to set up IPTV on Firestick, Android TV, Smart TV, Apple TV, Windows and more. Install the app, load your playlist and start watching.",
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: URL,
    title: "How to Set Up IPTV on Any Device",
    description:
      "Step-by-step IPTV install guides for Firestick, Smart TV, Android, Apple TV and more.",
    siteName: "IPTV Provider",
    locale: "en_US",
  },
};

const UPDATED = { iso: "2026-07-10", label: "10 July 2026" };

const GUIDES = [
  {
    href: "/how-to/install-iptv-on-firestick",
    kicker: "Firestick",
    title: "Install IPTV on Firestick",
    body: "Get IPTV Smarters Pro running on an Amazon Firestick or Fire TV in about 10 minutes.",
  },
  {
    href: "/how-to/install-iptv-on-android",
    kicker: "Android",
    title: "Install IPTV on Android",
    body: "Phone, tablet or Android TV box — set up IPTV Smarters Pro from Google Play in about 5 minutes.",
  },
  {
    href: "/how-to/install-iptv-on-smart-tv",
    kicker: "Smart TV",
    title: "Install IPTV on Smart TV",
    body: "Samsung and LG Smart TVs: install a player from the app store and add your playlist.",
  },
  {
    href: "/how-to/install-iptv-on-apple-tv",
    kicker: "Apple TV & iOS",
    title: "Install IPTV on Apple TV & iOS",
    body: "Apple TV, iPhone and iPad — set up an App Store player like IPTV Smarters or iPlayTV.",
  },
  {
    href: "/how-to/install-iptv-on-mag-box",
    kicker: "MAG Box",
    title: "Set up IPTV on a MAG box",
    body: "No app needed — enter your portal URL in the settings, reboot and start watching.",
  },
  {
    href: "/how-to/install-iptv-on-windows-mac",
    kicker: "Windows & Mac",
    title: "Install IPTV on Windows & Mac",
    body: "Use IPTV Smarters Pro desktop or VLC to watch on a PC or Mac with a full TV guide.",
  },
];

const NEXT_LINKS = [
  { href: "/learn/iptv-explained", label: "What is IPTV?" },
  {
    href: "/compare/iptv-smarters-pro-vs-tivimate",
    label: "Smarters Pro vs TiviMate",
  },
  { href: "/iptv-free-trial-2026", label: "Free 24-hour trial" },
  { href: "/iptv-subscription-plans", label: "Subscription plans" },
];

const FAQ_ITEMS = [
  [
    "What do I need before I start?",
    "A compatible device, a stable internet connection, an IPTV player app (we recommend IPTV Smarters Pro), and the login details from your subscription or free trial. Most setups take under 10 minutes.",
  ],
  [
    "Which app should I install?",
    "IPTV Smarters Pro is the easiest all-rounder and works on nearly every device. TiviMate is popular on Android TV boxes and Firestick for its polished live-TV guide. Both work with your line from us.",
  ],
  [
    "Do I enter an M3U link or Xtream Codes?",
    "Either works — we can send you both. Xtream Codes (a username, password and server URL) is usually the simplest to enter, while an M3U URL is a single link. Our per-device guides show exactly where each goes.",
  ],
];

const itemListLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: GUIDES.map((g, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: g.title,
    url: `${SITE}${g.href}`,
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

export default function HowToHubPage() {
  return (
    <PageShell
      slug="how-to"
      eyebrow="Setup guides"
      breadcrumb="How to set up IPTV"
      title="How to set up IPTV on any device"
      intro="Pick your device and follow the steps. Each guide covers installing the app, entering your login details and loading channels — with troubleshooting tips if anything sticks."
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
              Open guide
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

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-[14px]">
        <span className="text-tertiary">Next steps:</span>
        {NEXT_LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="font-medium text-secondary underline decoration-[color:var(--hair-strong)] underline-offset-4 transition-colors hover:text-primary"
          >
            {l.label}
          </a>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl">
        <h2 className="font-display text-[clamp(1.6rem,4vw,2.2rem)] font-semibold tracking-editorial text-primary">
          Setup FAQ
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
