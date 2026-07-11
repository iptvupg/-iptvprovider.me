import PageShell from "@/components/layout/PageShell";
import { SITE } from "@/config";
import { faqSchema, articleSchema } from "@/lib/schema";
import { articleMetadata } from "@/lib/metadata";

const URL = `${SITE}/learn/iptv-explained`;

export const metadata = articleMetadata({
  title: "What Is IPTV? How Internet TV Works in 2026",
  description:
    "IPTV explained in plain English: what IPTV means, how it delivers live TV and movies over the internet, what you need to watch it, and how it compares to cable and satellite.",
  canonical: URL,
  keywords: [
    "what is iptv",
    "iptv meaning",
    "how iptv works",
    "iptv explained",
    "internet protocol television",
  ],
  openGraph: {
    title: "What Is IPTV? How Internet TV Works in 2026",
    description:
      "IPTV explained: what it is, how it works, and what you need to start watching.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "What is IPTV?" }],
  },
});

const UPDATED = { iso: "2026-07-09", label: "9 July 2026" };

const COMPARE = [
  ["How it's delivered", "Internet connection", "Coaxial cable", "Satellite dish"],
  ["Extra hardware", "None (app on your device)", "Cable box", "Dish + receiver"],
  ["Channels", "54,000+ + on-demand", "Fixed package", "Fixed package"],
  ["On-demand library", "120,000+ movies & series", "Limited", "Limited"],
  ["Contract", "Billed once, no lock-in", "12–24 months", "12–24 months"],
  ["Works while travelling", "Yes, anywhere online", "No", "No"],
];

const FAQ_ITEMS = [
  [
    "What does IPTV stand for?",
    "IPTV stands for Internet Protocol Television. It means television delivered over the internet using the same IP networking that carries websites and email, instead of over an aerial, cable or satellite signal.",
  ],
  [
    "Is IPTV the same as streaming services like Netflix?",
    "They use the same underlying technology, but IPTV usually focuses on live TV channels and a large on-demand library through a single app, whereas services like Netflix offer only their own on-demand catalogue. IPTV is closer to a full cable replacement.",
  ],
  [
    "What internet speed do I need for IPTV?",
    "Around 15 Mbps is comfortable for HD and roughly 25 Mbps or more for 4K. A stable wired or strong Wi-Fi connection matters more than raw speed for smooth, buffer-free playback.",
  ],
  [
    "What devices can I watch IPTV on?",
    "Smart TVs, Amazon Firestick and Fire TV, Android TV boxes, Apple TV and iPhone/iPad, Windows and macOS computers, NVIDIA Shield and MAG boxes. If a device can run an IPTV player app, it can play IPTV.",
  ],
  [
    "Do I need a special box to watch IPTV?",
    "No. You watch through a free app such as IPTV Smarters Pro on a device you probably already own. There's no proprietary set-top box required, unlike traditional cable or satellite.",
  ],
];

const articleLd = articleSchema({
  headline: "What Is IPTV? How Internet TV Works in 2026",
  description:
    "IPTV explained: what it is, how it delivers live TV and movies over the internet, and how it compares to cable and satellite.",
  url: URL,
  datePublished: "2026-07-09",
  dateModified: UPDATED.iso,
});

const faqLd = faqSchema(FAQ_ITEMS);

export default function IptvExplainedPage() {
  return (
    <PageShell
      slug="learn/iptv-explained"
      eyebrow="Basics"
      parent={{ name: "Learn", href: "/learn" }}
      breadcrumb="What is IPTV?"
      title="What is IPTV?"
      intro="IPTV (Internet Protocol Television) delivers live TV channels and on-demand video over a standard internet connection instead of an aerial, satellite dish or cable line. You watch through an app such as IPTV Smarters Pro on a TV, phone, Firestick or computer — no special hardware required."
      updated={UPDATED}
      author="IPTV Provider Editorial"
      schemas={[articleLd, faqLd]}
    >
      <h2>What IPTV means</h2>
      <p>
        <strong>IPTV stands for Internet Protocol Television.</strong> It is
        television delivered over the internet using the same IP networking that
        carries websites, email and video calls. Instead of receiving a broadcast
        signal through an aerial, coaxial cable or satellite dish, your device
        requests each channel or movie from a server and plays it back in real
        time.
      </p>
      <p>
        Because it travels over the internet, IPTV works on ordinary devices you
        already own and isn&apos;t tied to a fixed cable running into your home.
        That&apos;s what makes it flexible: the same subscription can follow you
        to a different room, a different device, or a different country.
      </p>

      <h2>How IPTV works (in 4 steps)</h2>
      <ul>
        <li>
          <strong>1. Content is captured.</strong> Live channels and video-on-demand
          files are collected and prepared for streaming.
        </li>
        <li>
          <strong>2. It&apos;s encoded and packaged.</strong> The video is compressed
          into streaming formats (such as HLS) at different qualities — SD, HD and
          4K — so it can travel efficiently over the internet.
        </li>
        <li>
          <strong>3. It&apos;s served on demand.</strong> The streams sit on servers
          and are indexed in a playlist (an M3U link or Xtream Codes login) plus an
          electronic programme guide (EPG).
        </li>
        <li>
          <strong>4. Your app plays it.</strong> An IPTV player like IPTV Smarters
          Pro reads your playlist, requests the channel you pick, and plays it
          back — usually within a second or two.
        </li>
      </ul>

      <h2>IPTV vs cable vs satellite</h2>
      <p>
        The biggest practical differences are the hardware, the flexibility and
        the size of the library:
      </p>
      <div className="not-prose my-6 overflow-hidden rounded-2xl border border-[color:var(--hair)]">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="bg-[var(--bg-2)]">
              <th className="px-4 py-3 font-semibold text-primary sm:px-5"> </th>
              <th className="px-4 py-3 font-semibold text-acid sm:px-5">IPTV</th>
              <th className="px-4 py-3 font-semibold text-primary sm:px-5">Cable</th>
              <th className="px-4 py-3 font-semibold text-primary sm:px-5">Satellite</th>
            </tr>
          </thead>
          <tbody>
            {COMPARE.map(([label, iptv, cable, sat]) => (
              <tr key={label} className="border-t border-[color:var(--hair)]">
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-primary sm:px-5"
                >
                  {label}
                </th>
                <td className="px-4 py-3 text-secondary sm:px-5">{iptv}</td>
                <td className="px-4 py-3 text-tertiary sm:px-5">{cable}</td>
                <td className="px-4 py-3 text-tertiary sm:px-5">{sat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>What you need to watch IPTV</h2>
      <ul>
        <li>
          <strong>A device</strong> — a Smart TV, Amazon Firestick, Android TV box,
          Apple TV, phone, tablet or computer.
        </li>
        <li>
          <strong>A stable internet connection</strong> — about 15 Mbps for HD and
          25 Mbps or more for 4K.
        </li>
        <li>
          <strong>An IPTV player app</strong> — IPTV Smarters Pro is the most popular
          and works on almost everything.
        </li>
        <li>
          <strong>A subscription or trial line</strong> — the login details that
          unlock the channels and movies.
        </li>
      </ul>

      <h2>Types of IPTV content</h2>
      <ul>
        <li>
          <strong>Live TV</strong> — channels broadcasting in real time, just like
          traditional TV.
        </li>
        <li>
          <strong>Video on demand (VOD)</strong> — a library of movies and series you
          start whenever you like.
        </li>
        <li>
          <strong>Catch-up TV</strong> — rewind or replay programmes that already
          aired, using the EPG.
        </li>
      </ul>

      <h2>Is IPTV right for you?</h2>
      <p>
        IPTV suits anyone who wants more channels and a bigger on-demand library
        than cable for less money, without a long contract — especially sports
        fans, households following international channels, and cord-cutters
        replacing an expensive TV package. The best way to know is to try it:
        our <a href="/iptv-free-trial-2026">free 24-hour trial</a> gives you the
        full library on your own device before you decide.
      </p>
      <p>
        Ready to set it up? Follow our{" "}
        <a href="/how-to/install-iptv-on-firestick">Firestick install guide</a> or
        browse all <a href="/how-to">setup guides</a>, and compare{" "}
        <a href="/iptv-subscription-plans">subscription plans</a> when you&apos;re
        ready.
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
    </PageShell>
  );
}
