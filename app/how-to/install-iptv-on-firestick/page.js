import HowToGuide, { WHATSAPP } from "@/components/HowToGuide";

import { SITE } from "@/lib/site";

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

const BEFORE = [
  <li key="1">An Amazon Firestick or Fire TV connected to your TV and the internet.</li>,
  <li key="2">
    A stable connection — 5GHz Wi-Fi or ethernet gives the smoothest playback.
  </li>,
  <li key="3">
    Your login details from an active subscription or{" "}
    <a href="/iptv-free-trial-2026">free 24-hour trial</a> (an Xtream Codes login
    or an M3U URL).
  </li>,
];

export default function InstallOnFirestickPage() {
  return (
    <HowToGuide
      slug="how-to/install-iptv-on-firestick"
      eyebrow="How-to · Firestick"
      breadcrumb="Install on Firestick"
      title="How to install IPTV on Firestick"
      intro="You can get IPTV running on an Amazon Firestick in about 10 minutes using the free IPTV Smarters Pro app. Install the app, enter the login details we send you, and your channels, movies and TV guide load automatically. No sideloading required on current Firesticks."
      updated={UPDATED}
      device="Amazon Firestick"
      app="IPTV Smarters Pro"
      totalTime="PT10M"
      chips={["⏱ About 10 minutes", "Difficulty: easy", "App: IPTV Smarters Pro"]}
      supplies={["Amazon Firestick or Fire TV", "IPTV subscription or free-trial line"]}
      beforeItems={BEFORE}
      steps={STEPS}
      stepsHeading="Install IPTV on Firestick: step by step"
      faqItems={FAQ_ITEMS}
    >
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
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>

      <h2>Other devices</h2>
      <p>
        Prefer a different device? We have step-by-step guides for{" "}
        <a href="/how-to/install-iptv-on-android">Android</a>,{" "}
        <a href="/how-to/install-iptv-on-smart-tv">Smart TVs</a>,{" "}
        <a href="/how-to/install-iptv-on-apple-tv">Apple TV &amp; iOS</a> and{" "}
        <a href="/how-to/install-iptv-on-windows-mac">Windows &amp; Mac</a> too.
      </p>
    </HowToGuide>
  );
}
