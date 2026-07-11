import HowToGuide, { WHATSAPP } from "@/components/HowToGuide";

import { SITE } from "@/lib/site";

const URL = `${SITE}/how-to/install-iptv-on-apple-tv`;

export const metadata = {
  title: { absolute: "How to Install IPTV on Apple TV & iOS (2026 Guide)" },
  description:
    "Install IPTV on Apple TV, iPhone and iPad from the App Store in minutes. Set up an IPTV player, add your login and load channels — plus AirPlay tips and fixes.",
  keywords: [
    "iptv on apple tv",
    "iptv on iphone",
    "install iptv ios",
    "iptv smarters apple tv",
  ],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: URL,
    title: "How to Install IPTV on Apple TV & iOS (2026 Guide)",
    description:
      "Set up IPTV on Apple TV, iPhone and iPad using the App Store.",
    siteName: "IPTV Provider",
    locale: "en_US",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Install IPTV on Apple TV & iOS" },
    ],
  },
};

const UPDATED = { iso: "2026-07-10", label: "10 July 2026" };

const STEPS = [
  {
    name: "Open the App Store",
    text: "On Apple TV open the App Store from the home screen; on iPhone or iPad open the App Store app. Make sure the device is signed in and online.",
  },
  {
    name: "Search for an IPTV player",
    text: "Search for “IPTV Smarters”, “iPlayTV” or “GSE Smart IPTV”. Install the one that appears — all three are on tvOS (Apple TV) and iOS (iPhone/iPad).",
  },
  {
    name: "Open the app",
    text: "Launch the player and accept the terms of use to reach the login or add-playlist screen.",
  },
  {
    name: "Add your playlist",
    text: "Choose the Xtream Codes option to enter a username, password and server URL, or the playlist option to paste your M3U URL. We send you both.",
  },
  {
    name: "Enter the details we send you",
    text: "Type the login exactly as provided. On Apple TV, the on-screen keyboard or the Apple TV Remote app on your phone makes typing quicker.",
  },
  {
    name: "Start watching",
    text: "The app loads your live channels, movies, series and TV guide. Pick a category and stream.",
  },
];

const FAQ_ITEMS = [
  [
    "Which IPTV app is best on Apple TV?",
    "IPTV Smarters and iPlayTV are the most popular on tvOS and both handle Xtream Codes and M3U logins well. GSE Smart IPTV is a solid free alternative. They all play the same line from us, so choose whichever you find easiest to navigate with the Apple TV remote.",
  ],
  [
    "Can I AirPlay IPTV from my iPhone to Apple TV?",
    "You can mirror from an iPhone app via AirPlay, but a live stream is smoother when the player app is installed directly on the Apple TV. If you only have an iPhone or iPad, watching on the device itself works perfectly.",
  ],
  [
    "Do these apps work on older Apple TV models?",
    "IPTV players require a 4th-generation Apple TV (tvOS) or later, since earlier models have no App Store. On iPhone and iPad, any reasonably current iOS version is fine.",
  ],
  [
    "Is there a free option on iOS?",
    "Yes — GSE Smart IPTV and the free tier of IPTV Smarters both cover basic playback. You still need an active subscription or free-trial line from us to watch any channels.",
  ],
];

const BEFORE = [
  <li key="1">
    An Apple TV (4th gen or later), iPhone or iPad connected to the internet.
  </li>,
  <li key="2">You're signed in to the App Store with an Apple ID.</li>,
  <li key="3">
    Your login from an active subscription or{" "}
    <a href="/iptv-free-trial-2026">free 24-hour trial</a> — an Xtream Codes login
    or an M3U URL.
  </li>,
];

export default function InstallOnAppleTvPage() {
  return (
    <HowToGuide
      slug="how-to/install-iptv-on-apple-tv"
      eyebrow="How-to · Apple TV & iOS"
      breadcrumb="Install on Apple TV & iOS"
      title="How to install IPTV on Apple TV & iOS"
      intro="You can set up IPTV on Apple TV, iPhone or iPad in a few minutes using a free player from the App Store, such as IPTV Smarters or iPlayTV. Install the app, add the login we send you, and your channels, movies and TV guide load automatically — no jailbreak or sideloading required."
      updated={UPDATED}
      device="Apple TV & iOS"
      totalTime="PT8M"
      chips={["⏱ 5–10 minutes", "Difficulty: easy", "App Store: tvOS & iOS"]}
      supplies={["Apple TV, iPhone or iPad", "IPTV subscription or free-trial line"]}
      beforeItems={BEFORE}
      steps={STEPS}
      faqItems={FAQ_ITEMS}
    >
      <h2>Apple TV vs iPhone/iPad</h2>
      <ul>
        <li>
          <strong>Apple TV (tvOS)</strong> — the best living-room experience. Install
          the player from the tvOS App Store and navigate with the Siri Remote.
        </li>
        <li>
          <strong>iPhone / iPad (iOS)</strong> — great for watching on the go. The
          same apps install from the iOS App Store and take the identical login.
        </li>
      </ul>

      <h2>Xtream Codes or M3U?</h2>
      <p>
        We send both. Xtream Codes (username, password, server URL) also loads the
        full TV guide (EPG); an M3U URL is a single link containing all your
        channels. Use whichever the app prefers.
      </p>

      <h2>If it won&apos;t play</h2>
      <p>
        Re-check the login was typed exactly (the Apple TV Remote app on your phone
        avoids typos), confirm the device is online, and reopen the app. Still
        stuck? Message our 24/7 team on{" "}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        . Not sure which app to pick? Compare{" "}
        <a href="/compare/iptv-smarters-pro-vs-tivimate">
          IPTV Smarters Pro vs TiviMate
        </a>
        .
      </p>
    </HowToGuide>
  );
}
