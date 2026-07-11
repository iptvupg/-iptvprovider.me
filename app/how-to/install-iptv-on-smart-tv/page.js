import HowToGuide, { WHATSAPP } from "@/components/layout/HowToGuide";

import { SITE } from "@/config";
import { articleMetadata } from "@/lib/metadata";

const URL = `${SITE}/how-to/install-iptv-on-smart-tv`;

export const metadata = articleMetadata({
  title: "How to Install IPTV on Smart TV — Samsung & LG (2026)",
  description:
    "Install IPTV on a Samsung or LG Smart TV in minutes. Set up an IPTV player from the app store, add your playlist and load channels — plus a Firestick fallback.",
  canonical: URL,
  keywords: [
    "iptv on smart tv",
    "install iptv samsung tv",
    "iptv on lg tv",
    "smart iptv setup",
  ],
  openGraph: {
    title: "How to Install IPTV on Smart TV — Samsung & LG (2026)",
    description:
      "Set up IPTV on a Samsung or LG Smart TV using the built-in app store.",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Install IPTV on Smart TV" },
    ],
  },
});

const UPDATED = { iso: "2026-07-10", label: "10 July 2026" };

const STEPS = [
  {
    name: "Open your TV's app store",
    text: "On Samsung, open the Apps store (Smart Hub); on LG, open the LG Content Store. Make sure the TV is connected to the internet first.",
  },
  {
    name: "Search for an IPTV player",
    text: "Search for an IPTV player such as “IBO Player”, “Smart IPTV” or “IPTV Smarters”. Availability varies by TV model and region — install the one that appears for your set.",
  },
  {
    name: "Open the app and note your device ID",
    text: "Launch the app. Most Samsung/LG players show a MAC address or device key on screen — write it down, as some apps use it to link your playlist.",
  },
  {
    name: "Add your playlist",
    text: "If the app has an on-screen login, enter your Xtream Codes details or M3U URL directly. If it uses a web portal (Smart IPTV, IBO), go to that portal on a phone or computer, enter the MAC/device key and paste your M3U URL.",
  },
  {
    name: "Enter the details we send you",
    text: "Use the Xtream Codes username, password and server URL, or the single M3U URL — exactly as provided when you start a trial or subscription.",
  },
  {
    name: "Reload and watch",
    text: "Reopen or refresh the app. Your live channels, movies, series and TV guide load, ready to stream.",
  },
];

const FAQ_ITEMS = [
  [
    "Which app should I use on a Samsung or LG TV?",
    "It depends on what your model's store offers. IBO Player and Smart IPTV are the most common on Samsung Tizen and LG webOS; some models also have IPTV Smarters. All of them play the same line from us — pick whichever installs cleanly on your set.",
  ],
  [
    "Why do I need the TV's MAC address?",
    "Apps like Smart IPTV and IBO Player tie your playlist to the TV using its MAC address or a device key, then let you upload the M3U URL on their website. You only do this once. Our support team can walk you through it if the portal is unclear.",
  ],
  [
    "My Smart TV has no IPTV app — what can I do?",
    "Older or region-limited TVs sometimes have no compatible player. The simplest fix is a cheap Amazon Firestick or Android TV box plugged into an HDMI port — then follow our Firestick or Android guide. The picture quality is identical.",
  ],
  [
    "Is casting from my phone a good alternative?",
    "For occasional viewing, yes, but casting a live stream can stutter. Installing a player directly on the TV (or using a Firestick) gives a far more stable picture.",
  ],
];

const BEFORE = [
  <li key="1">A Samsung or LG Smart TV connected to the internet.</li>,
  <li key="2">A phone or computer handy in case the app uses a web portal.</li>,
  <li key="3">
    Your login from an active subscription or{" "}
    <a href="/iptv-free-trial-2026">free 24-hour trial</a> — an Xtream Codes login
    or an M3U URL.
  </li>,
];

export default function InstallOnSmartTvPage() {
  return (
    <HowToGuide
      slug="how-to/install-iptv-on-smart-tv"
      eyebrow="How-to · Smart TV"
      breadcrumb="Install on Smart TV"
      title="How to install IPTV on Smart TV"
      intro="You can watch IPTV on a Samsung or LG Smart TV by installing an IPTV player from the built-in app store, then adding the playlist we send you. Samsung and LG apps differ slightly — some take your login on screen, others via a quick web portal — and this guide covers both."
      updated={UPDATED}
      device="Smart TV"
      totalTime="PT10M"
      chips={["⏱ About 10 minutes", "Difficulty: easy–moderate", "Samsung & LG"]}
      supplies={["Samsung or LG Smart TV", "IPTV subscription or free-trial line"]}
      beforeItems={BEFORE}
      steps={STEPS}
      faqItems={FAQ_ITEMS}
    >
      <h2>Samsung vs LG: what&apos;s different</h2>
      <ul>
        <li>
          <strong>Samsung (Tizen)</strong> — install from the Apps store in Smart
          Hub. IBO Player and Smart IPTV are the usual choices and often use a web
          portal keyed to your TV&apos;s MAC address.
        </li>
        <li>
          <strong>LG (webOS)</strong> — install from the LG Content Store. The same
          player apps apply; the on-screen steps look slightly different but the
          idea is identical.
        </li>
      </ul>

      <h2>Xtream Codes or M3U?</h2>
      <p>
        We send both so you can use whichever your chosen app supports. Xtream
        Codes (username, password, server URL) also loads the full TV guide (EPG)
        automatically; an M3U URL is a single link with all your channels.
      </p>

      <h2>If the app won&apos;t load your channels</h2>
      <p>
        Double-check the M3U URL or login was entered exactly, confirm the TV
        firmware is up to date, and restart the app. Still stuck? Our 24/7 team can
        help — message us on{" "}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        . Prefer a simpler route? Plug in a{" "}
        <a href="/how-to/install-iptv-on-firestick">Firestick</a> and you&apos;re
        done in ten minutes.
      </p>
    </HowToGuide>
  );
}
