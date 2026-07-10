import PageShell from "@/components/PageShell";

const SITE = "https://www.iptvprovider.me";
const URL = `${SITE}/how-to/install-iptv-on-firestick`;

export const metadata = {
  title: { absolute: "How to Install IPTV on Firestick (2026 Step-by-Step)" },
  description:
    "Install IPTV on an Amazon Firestick in about 10 minutes. Step-by-step guide to setting up IPTV Smarters Pro, entering your login and loading channels — plus buffering fixes.",
  keywords: [
    "iptv on firestick",
    "install iptv firestick",
    "iptv smarters pro firestick",
    "firestick iptv setup",
  ],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: URL,
    title: "How to Install IPTV on Firestick (2026 Step-by-Step)",
    description:
      "Set up IPTV Smarters Pro on Amazon Firestick in about 10 minutes.",
    siteName: "IPTV Provider",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Install IPTV on Firestick",
      },
    ],
  },
};

const UPDATED = { iso: "2026-07-09", label: "9 July 2026" };

const STEPS = [
  {
    name: "Search for IPTV Smarters Pro",
    text: "From the Fire TV home screen, open Find > Search and type “IPTV Smarters Pro”. Select it from the results.",
  },
  {
    name: "Download and install the app",
    text: "Choose Get or Download to install IPTV Smarters Pro from the Amazon Appstore. Wait for it to finish, then select Open.",
  },
  {
    name: "Accept the terms",
    text: "Open the app and accept the terms of use to reach the login screen.",
  },
  {
    name: "Choose your login method",
    text: "Select “Login with Xtream Codes API” for a username and password, or “Load your playlist file or URL” to paste an M3U link. We send you both when you start a trial or subscription.",
  },
  {
    name: "Enter your details",
    text: "Type any name for the profile, then enter the username, password and server URL (or paste your M3U URL) exactly as we sent them. Select Add User.",
  },
  {
    name: "Start watching",
    text: "The app loads your live channels, movies, series and TV guide. Pick a category and start streaming.",
  },
];

const FAQ_ITEMS = [
  [
    "Is IPTV Smarters Pro on the Amazon Appstore?",
    "Yes. On current Firesticks you can search for IPTV Smarters Pro and install it directly from the Appstore — no sideloading or Downloader app needed. If it isn't available in your region, our support team can send an alternative method.",
  ],
  [
    "What do I enter to activate it?",
    "Either an Xtream Codes login (a username, password and server URL) or a single M3U URL. We send both when you sign up, so you can use whichever your app prefers.",
  ],
  [
    "Why is IPTV buffering on my Firestick?",
    "Usually it's the connection or the device running low on memory. Restart the Firestick, use 5GHz Wi-Fi or ethernet, and close background apps. See our Firestick buffering fixes for the full checklist.",
  ],
  [
    "Do I need a VPN on Firestick?",
    "A VPN isn't required to watch, but some users add one if their internet provider slows down streaming traffic. It's optional and down to personal preference.",
  ],
];

const howToLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Install IPTV on Amazon Firestick",
  description:
    "Set up IPTV Smarters Pro on an Amazon Firestick and load your channels in about 10 minutes.",
  totalTime: "PT10M",
  image: `${SITE}/opengraph-image`,
  supply: [
    { "@type": "HowToSupply", name: "Amazon Firestick or Fire TV" },
    { "@type": "HowToSupply", name: "IPTV subscription or free-trial line" },
  ],
  tool: [{ "@type": "HowToTool", name: "IPTV Smarters Pro app" }],
  step: STEPS.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
    url: `${URL}#step-${i + 1}`,
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

export default function InstallOnFirestickPage() {
  return (
    <PageShell
      slug="how-to/install-iptv-on-firestick"
      eyebrow="How-to · Firestick"
      parent={{ name: "How to set up IPTV", href: "/how-to" }}
      breadcrumb="Install on Firestick"
      title="How to install IPTV on Firestick"
      intro="You can get IPTV running on an Amazon Firestick in about 10 minutes using the free IPTV Smarters Pro app. Install the app, enter the login details we send you, and your channels, movies and TV guide load automatically. No sideloading required on current Firesticks."
      updated={UPDATED}
      author="IPTV Provider Editorial"
      schemas={[howToLd, faqLd]}
    >
      <div className="not-prose mb-8 flex flex-wrap gap-3">
        <span className="rounded-full border border-[color:var(--hair-strong)] px-4 py-1.5 text-[13px] text-secondary">
          ⏱ About 10 minutes
        </span>
        <span className="rounded-full border border-[color:var(--hair-strong)] px-4 py-1.5 text-[13px] text-secondary">
          Difficulty: easy
        </span>
        <span className="rounded-full border border-[color:var(--hair-strong)] px-4 py-1.5 text-[13px] text-secondary">
          App: IPTV Smarters Pro
        </span>
      </div>

      <h2>Before you start</h2>
      <p>Make sure you have these ready:</p>
      <ul>
        <li>An Amazon Firestick or Fire TV connected to your TV and the internet.</li>
        <li>A stable connection — 5GHz Wi-Fi or ethernet gives the smoothest playback.</li>
        <li>
          Your login details from an active subscription or{" "}
          <a href="/iptv-free-trial-2026">free 24-hour trial</a> (an Xtream Codes
          login or an M3U URL).
        </li>
      </ul>

      <h2>Install IPTV on Firestick: step by step</h2>
      <ol className="mt-4 list-none space-y-4 pl-0">
        {STEPS.map((s, i) => (
          <li
            key={s.name}
            id={`step-${i + 1}`}
            className="surface hairline flex gap-4 rounded-2xl p-5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-acid text-[14px] font-bold text-[#041207]">
              {i + 1}
            </span>
            <div>
              <h3 className="font-display text-[17px] font-semibold tracking-editorial text-primary">
                {s.name}
              </h3>
              <p className="mt-1.5 text-[14.5px] leading-relaxed text-secondary">
                {s.text}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <h2>Loading your playlist</h2>
      <p>
        IPTV Smarters Pro accepts two formats and we send you both — use whichever
        is easier:
      </p>
      <ul>
        <li>
          <strong>Xtream Codes API</strong> — a username, password and server URL.
          This also pulls in the full TV guide (EPG) automatically.
        </li>
        <li>
          <strong>M3U URL</strong> — a single link containing your channels. Handy
          if you prefer to paste one address.
        </li>
      </ul>

      <h2>If it keeps buffering</h2>
      <p>
        Buffering on Firestick is almost always the connection or the device
        running low on memory. Restart the Firestick, switch to 5GHz Wi-Fi or
        ethernet, and close apps running in the background. If it persists, our{" "}
        24/7 support team can help — message us on{" "}
        <a href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>

      <h2>Frequently asked questions</h2>
      <div className="mt-4 divide-y divide-[color:var(--hair)] border-y border-[color:var(--hair)]">
        {FAQ_ITEMS.map(([q, a]) => (
          <details key={q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15.5px] font-medium text-primary">
              {q}
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-acid hairline transition-transform duration-300 group-open:rotate-45">
                <svg
                  width="14"
                  height="14"
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
            <p className="mt-2 text-[14px] leading-relaxed text-secondary">{a}</p>
          </details>
        ))}
      </div>

      <div className="not-prose mt-12 rounded-[2rem] border border-[color:var(--hair-strong)] bg-[var(--bg-2)] p-8 text-center">
        <h2 className="font-display text-[clamp(1.5rem,4vw,2.2rem)] font-semibold tracking-editorial text-primary">
          No line yet?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-secondary">
          Start a free 24-hour trial and follow this guide with the full channel
          and movie library — no card required.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
    </PageShell>
  );
}
