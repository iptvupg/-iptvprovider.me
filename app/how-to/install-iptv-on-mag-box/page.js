import HowToGuide, { WHATSAPP } from "@/components/HowToGuide";

import { SITE } from "@/lib/site";

const URL = `${SITE}/how-to/install-iptv-on-mag-box`;

export const metadata = {
  title: { absolute: "How to Set Up IPTV on a MAG Box (2026 Portal Guide)" },
  description:
    "Set up IPTV on a MAG box in minutes. Enter your portal URL in the settings, reboot, and load channels — no app install needed. MAC address and troubleshooting tips.",
  keywords: [
    "iptv on mag box",
    "mag box portal url",
    "setup iptv mag 254 322 424",
    "mag box iptv setup",
  ],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: URL,
    title: "How to Set Up IPTV on a MAG Box (2026 Portal Guide)",
    description:
      "Enter your portal URL on a MAG box and load channels — no app needed.",
    siteName: "IPTV Provider",
    locale: "en_US",
    images: [
      { url: "/opengraph-image", width: 1200, height: 630, alt: "Set up IPTV on a MAG box" },
    ],
  },
};

const UPDATED = { iso: "2026-07-10", label: "10 July 2026" };

const STEPS = [
  {
    name: "Connect the MAG box",
    text: "Plug the MAG box into your TV via HDMI and connect it to the internet with an ethernet cable or Wi-Fi dongle. Power it on and wait for the main menu.",
  },
  {
    name: "Open Settings",
    text: "From the main menu, open Settings (the gear icon, or press the SET/SETUP button on the remote).",
  },
  {
    name: "Go to System Settings → Servers → Portals",
    text: "Navigate to System Settings, then Servers, then Portals. This is where the box connects to your provider.",
  },
  {
    name: "Enter your portal URL",
    text: "In the Portal 1 name field type any label (e.g. “IPTV”), and in the Portal 1 URL field paste the portal/STB URL we send you. Save the changes.",
  },
  {
    name: "Reboot the portal",
    text: "Go back and choose Restart Portal (or power-cycle the box). The MAG reconnects using your new portal.",
  },
  {
    name: "Start watching",
    text: "On reload the box loads your live channels, movies, series and TV guide, ready to stream.",
  },
];

const FAQ_ITEMS = [
  [
    "What is a portal URL and where do I get it?",
    "A portal (or STB) URL is a single web address that tells the MAG box where to pull your channels from. It replaces the app-and-login setup used on Firestick or Android. We generate it for you when you start a subscription or trial — just ask for the MAG/portal URL.",
  ],
  [
    "Why do you need my MAG box's MAC address?",
    "MAG portals are usually locked to the box's MAC address for security. You'll find it on a sticker underneath the box and in Settings → System Settings → Device. Send it to us and we'll tie your portal URL to that box.",
  ],
  [
    "Which MAG models does this work on?",
    "The same steps apply to popular models such as MAG 254, 256, 322, 324, 349, 420, 424 and 524. Menu wording can vary slightly by firmware, but Settings → System Settings → Servers → Portals is the path on nearly all of them.",
  ],
  [
    "There's no app store on my MAG box — is that normal?",
    "Yes. MAG boxes don't use downloadable apps; they load everything through the portal URL. If you'd rather use an app-based setup, an Android TV box or Firestick is an easy alternative — see those guides.",
  ],
];

const BEFORE = [
  <li key="1">A MAG box (e.g. 254, 322, 424) connected to your TV and the internet.</li>,
  <li key="2">
    The box&apos;s MAC address (on the sticker underneath or in Settings → Device).
  </li>,
  <li key="3">
    A portal/STB URL from your active subscription or{" "}
    <a href="/iptv-free-trial-2026">free 24-hour trial</a> — tell us it&apos;s for a
    MAG box and we&apos;ll send the portal link.
  </li>,
];

export default function InstallOnMagBoxPage() {
  return (
    <HowToGuide
      slug="how-to/install-iptv-on-mag-box"
      eyebrow="How-to · MAG Box"
      breadcrumb="Set up on MAG Box"
      title="How to set up IPTV on a MAG box"
      intro="A MAG box doesn't use apps — instead you enter a portal URL in the settings and the box loads your channels automatically. Setup takes about five minutes: connect the box, open Settings → System Settings → Servers → Portals, paste the portal URL we send you, and reboot."
      updated={UPDATED}
      device="MAG Box"
      totalTime="PT5M"
      chips={["⏱ About 5 minutes", "Difficulty: easy", "Portal URL — no app"]}
      supplies={["MAG box (254/322/424 etc.)", "Portal URL tied to your box's MAC"]}
      beforeIntro="Have these ready before you begin:"
      beforeItems={BEFORE}
      steps={STEPS}
      stepsHeading="Set up IPTV on a MAG box: step by step"
      faqItems={FAQ_ITEMS}
    >
      <h2>Why MAG setup is different</h2>
      <p>
        Unlike a Firestick or Android box, a MAG streamer has no app store. It talks
        to your provider through a single <strong>portal URL</strong> that&apos;s
        locked to the box&apos;s MAC address. Once that URL is saved, everything —
        channels, movies and the TV guide — is managed server-side, so there&apos;s
        nothing to update on the box itself.
      </p>

      <h2>If the portal won&apos;t connect</h2>
      <p>
        Confirm the portal URL was typed exactly (including http:// or https:// and
        any trailing slash), check the box has a working internet connection, and
        make sure you sent us the correct MAC address. A restart of the portal
        usually resolves the rest. Still stuck? Our 24/7 team can help — message us
        on{" "}
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
        .
      </p>

      <h2>Prefer an app-based device?</h2>
      <p>
        If the portal setup feels fiddly, an{" "}
        <a href="/how-to/install-iptv-on-android">Android TV box</a> or a{" "}
        <a href="/how-to/install-iptv-on-firestick">Firestick</a> gives you the same
        channels through a simpler app-and-login flow.
      </p>
    </HowToGuide>
  );
}
