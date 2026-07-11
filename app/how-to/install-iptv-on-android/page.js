import HowToGuide, { WHATSAPP } from "@/components/HowToGuide";
import { SITE } from "@/config";
import { articleMetadata } from "@/lib/metadata";

const URL = `${SITE}/how-to/install-iptv-on-android`;

export const metadata = articleMetadata({
  title: "How to Install IPTV on Android (2026 Step-by-Step)",
  description:
    "Install IPTV on Android phone, tablet or TV box in about 5 minutes. Set up IPTV Smarters Pro from Google Play, enter your login and load channels — with fixes.",
  canonical: URL,
  keywords: [
    "iptv on android",
    "install iptv android",
    "iptv smarters pro android",
    "android tv box iptv",
  ],
  openGraph: {
    title: "How to Install IPTV on Android (2026 Step-by-Step)",
    description:
      "Set up IPTV Smarters Pro on Android phone, tablet or TV box in about 5 minutes.",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Install IPTV on Android" },
    ],
  },
});

const UPDATED = { iso: "2026-07-10", label: "10 July 2026" };

const STEPS = [
  {
    name: "Open the Google Play Store",
    text: "On your Android phone, tablet or TV box, open the Play Store from the home screen or app drawer.",
  },
  {
    name: "Search for IPTV Smarters Pro",
    text: "Type “IPTV Smarters Pro” in the search bar and select the app from the results.",
  },
  {
    name: "Install the app",
    text: "Tap Install and wait for it to download. On Android TV, use the on-screen remote to confirm. Then open the app.",
  },
  {
    name: "Accept the terms",
    text: "Accept the terms of use on first launch to reach the login screen.",
  },
  {
    name: "Choose your login method",
    text: "Pick “Login with Xtream Codes API” for a username and password, or “Load your playlist file or URL” to paste an M3U link. We send both when you start a trial or subscription.",
  },
  {
    name: "Enter your details and watch",
    text: "Enter the username, password and server URL (or paste your M3U URL) exactly as sent, then tap Add User. The app loads your channels, movies, series and TV guide.",
  },
];

const FAQ_ITEMS = [
  [
    "Does this work on Android TV boxes and Google TV?",
    "Yes. The same IPTV Smarters Pro app installs from the Play Store on Android phones, tablets, Android TV boxes, Google TV devices and most Android-based projectors. The steps are identical — just use your remote to navigate on TV.",
  ],
  [
    "IPTV Smarters Pro isn't in my Play Store — what now?",
    "On some regions or older boxes it may not appear. You can sideload the official APK using a file manager, or install TiviMate or XCIPTV instead. Message our support team and we'll send the right link for your device.",
  ],
  [
    "Can I cast IPTV from my Android phone to the TV?",
    "You can, but casting a live stream over Chromecast can stutter. For the smoothest picture, install the app directly on the TV device (Android TV box, Firestick or Smart TV) rather than casting from a phone.",
  ],
  [
    "How much internet speed do I need?",
    "Around 15 Mbps for HD and 25 Mbps or more for 4K. On a phone, Wi-Fi is more stable than mobile data for continuous streaming.",
  ],
];

const BEFORE = [
  <li key="1">An Android phone, tablet or TV box connected to the internet.</li>,
  <li key="2">
    The Google Play Store (or a file manager if you need to sideload).
  </li>,
  <li key="3">
    Your login from an active subscription or{" "}
    <a href="/iptv-free-trial-2026">free 24-hour trial</a> — an Xtream Codes login
    or an M3U URL.
  </li>,
];

export default function InstallOnAndroidPage() {
  return (
    <HowToGuide
      slug="how-to/install-iptv-on-android"
      eyebrow="How-to · Android"
      breadcrumb="Install on Android"
      title="How to install IPTV on Android"
      intro="You can set up IPTV on any Android phone, tablet or TV box in about five minutes with the free IPTV Smarters Pro app from Google Play. Install it, enter the login details we send you, and your channels, movies and TV guide load automatically."
      updated={UPDATED}
      device="Android"
      app="IPTV Smarters Pro"
      totalTime="PT5M"
      chips={["⏱ About 5 minutes", "Difficulty: easy", "App: IPTV Smarters Pro"]}
      supplies={["Android phone, tablet or TV box", "IPTV subscription or free-trial line"]}
      beforeItems={BEFORE}
      steps={STEPS}
      faqItems={FAQ_ITEMS}
    >
      <h2>Xtream Codes or M3U?</h2>
      <p>
        IPTV Smarters Pro accepts both formats and we send you each one — use
        whichever is easier:
      </p>
      <ul>
        <li>
          <strong>Xtream Codes API</strong> — a username, password and server URL.
          This also pulls in the full TV guide (EPG) automatically.
        </li>
        <li>
          <strong>M3U URL</strong> — a single link containing all your channels.
        </li>
      </ul>

      <h2>If channels won&apos;t load or buffer</h2>
      <p>
        Force-close and reopen the app, confirm you&apos;re on Wi-Fi rather than
        mobile data, and check the login was entered exactly as sent. If it still
        won&apos;t play, our 24/7 team can help — message us on{" "}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>

      <h2>Watching on a TV instead?</h2>
      <p>
        Using an Amazon Firestick or a Smart TV? Follow the{" "}
        <a href="/how-to/install-iptv-on-firestick">Firestick guide</a> or the{" "}
        <a href="/how-to/install-iptv-on-smart-tv">Smart TV guide</a> instead — and
        if you&apos;re still deciding on an app, see{" "}
        <a href="/compare/iptv-smarters-pro-vs-tivimate">
          IPTV Smarters Pro vs TiviMate
        </a>
        .
      </p>
    </HowToGuide>
  );
}
