import HowToGuide, { WHATSAPP } from "@/components/HowToGuide";

import { SITE } from "@/lib/site";

const URL = `${SITE}/how-to/install-iptv-on-windows-mac`;

export const metadata = {
  title: { absolute: "How to Install IPTV on Windows & Mac (2026 Guide)" },
  description:
    "Watch IPTV on a Windows PC or Mac in minutes. Set up IPTV Smarters Pro desktop or use VLC with your M3U URL — step-by-step with EPG tips and fixes.",
  keywords: [
    "iptv on windows",
    "iptv on mac",
    "iptv smarters pro pc",
    "watch iptv on vlc",
  ],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: URL,
    title: "How to Install IPTV on Windows & Mac (2026 Guide)",
    description:
      "Set up IPTV on a Windows PC or Mac with IPTV Smarters Pro desktop or VLC.",
    siteName: "IPTV Provider",
    locale: "en_US",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Install IPTV on Windows & Mac" },
    ],
  },
};

const UPDATED = { iso: "2026-07-10", label: "10 July 2026" };

const STEPS = [
  {
    name: "Download IPTV Smarters Pro for desktop",
    text: "On your Windows PC or Mac, download the IPTV Smarters Pro desktop app from the official IPTV Smarters website. Choose the Windows (.exe) or macOS build to match your computer.",
  },
  {
    name: "Install the app",
    text: "Run the installer and follow the prompts. On macOS, if Gatekeeper blocks it, open System Settings → Privacy & Security and choose Open Anyway.",
  },
  {
    name: "Open the app and accept the terms",
    text: "Launch IPTV Smarters Pro and accept the terms of use to reach the login screen.",
  },
  {
    name: "Choose your login method",
    text: "Select “Login with Xtream Codes API” for a username, password and server URL, or “Load your playlist file or URL” to paste an M3U link. We send you both.",
  },
  {
    name: "Enter your details",
    text: "Type a profile name, then enter the login exactly as we sent it, and confirm. The app validates and loads your line.",
  },
  {
    name: "Start watching",
    text: "Your live channels, movies, series and TV guide appear. Pick a category and stream in a window or full screen.",
  },
];

const FAQ_ITEMS = [
  [
    "Can I just use VLC instead of an app?",
    "Yes. VLC plays an M3U link on both Windows and Mac: open VLC, choose Media → Open Network Stream (or File → Open Network on Mac), paste your M3U URL and press Play. The trade-off is that VLC has no TV guide (EPG) or categories — for that, use IPTV Smarters Pro desktop.",
  ],
  [
    "Where do I download IPTV Smarters Pro for PC or Mac?",
    "From the official IPTV Smarters website — avoid random third-party download sites. If you're unsure of the correct link, message our support team and we'll point you to the current official build.",
  ],
  [
    "macOS says the app is from an unidentified developer — is that a problem?",
    "That's just macOS Gatekeeper. Open System Settings → Privacy & Security, find the blocked app and click Open Anyway. It only needs approving once.",
  ],
  [
    "Do I need a powerful computer?",
    "No. Any modern Windows laptop or Mac handles HD streaming easily. For 4K, a stable 25 Mbps+ connection matters more than the CPU. Wired ethernet gives the smoothest picture.",
  ],
];

const BEFORE = [
  <li key="1">A Windows PC or a Mac connected to the internet.</li>,
  <li key="2">Permission to install apps (an admin account).</li>,
  <li key="3">
    Your login from an active subscription or{" "}
    <a href="/iptv-free-trial-2026">free 24-hour trial</a> — an Xtream Codes login
    or an M3U URL.
  </li>,
];

export default function InstallOnWindowsMacPage() {
  return (
    <HowToGuide
      slug="how-to/install-iptv-on-windows-mac"
      eyebrow="How-to · Windows & Mac"
      breadcrumb="Install on Windows & Mac"
      title="How to install IPTV on Windows & Mac"
      intro="You can watch IPTV on a Windows PC or Mac in about ten minutes. The easiest route is the IPTV Smarters Pro desktop app — install it, enter the login we send you, and your channels, movies and TV guide load with a full EPG. Prefer something lighter? VLC plays your M3U URL with no install of a dedicated app."
      updated={UPDATED}
      device="Windows & Mac"
      app="IPTV Smarters Pro (desktop) or VLC"
      totalTime="PT10M"
      chips={["⏱ About 10 minutes", "Difficulty: easy", "Smarters Pro or VLC"]}
      supplies={["Windows PC or Mac", "IPTV subscription or free-trial line"]}
      beforeItems={BEFORE}
      steps={STEPS}
      faqItems={FAQ_ITEMS}
    >
      <h2>Option B: watch in VLC</h2>
      <p>
        Already have VLC? You can skip the app install entirely:
      </p>
      <ul>
        <li>
          <strong>Windows</strong> — open VLC, go to Media → Open Network Stream,
          paste your M3U URL and press Play.
        </li>
        <li>
          <strong>macOS</strong> — open VLC, go to File → Open Network, paste your
          M3U URL and press Open.
        </li>
      </ul>
      <p>
        VLC is quick and reliable but has no TV guide or category layout. For the
        full experience — EPG, movies and series sections — use IPTV Smarters Pro
        desktop.
      </p>

      <h2>Xtream Codes or M3U?</h2>
      <p>
        We send both. Xtream Codes (username, password, server URL) loads the full
        TV guide automatically in IPTV Smarters Pro; the M3U URL is a single link
        that works in both Smarters and VLC.
      </p>

      <h2>If it won&apos;t play</h2>
      <p>
        Confirm the login or M3U URL was pasted exactly, check your firewall or
        VPN isn&apos;t blocking the app, and restart it. Still stuck? Message our
        24/7 team on{" "}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>
    </HowToGuide>
  );
}
