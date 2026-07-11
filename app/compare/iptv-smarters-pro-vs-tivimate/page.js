import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/site";
import { faqSchema } from "@/lib/schema";

const URL = `${SITE}/compare/iptv-smarters-pro-vs-tivimate`;

export const metadata = {
  title: {
    absolute: "IPTV Smarters Pro vs TiviMate (2026): Which Is Better?",
  },
  description:
    "IPTV Smarters Pro vs TiviMate compared: interface, TV guide, device support, price and setup. See which IPTV player app suits your setup — both work with our line.",
  keywords: [
    "IPTV Smarters Pro vs TiviMate",
    "best IPTV player app",
    "TiviMate vs IPTV Smarters",
    "IPTV player comparison",
  ],
  alternates: { canonical: URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: URL,
    title: "IPTV Smarters Pro vs TiviMate (2026): Which Is Better?",
    description:
      "Interface, EPG, device support and price compared — pick the right IPTV player app.",
    siteName: "IPTV Provider",
    locale: "en_US",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
};

const UPDATED = { iso: "2026-07-10", label: "10 July 2026" };

// Feature-by-feature comparison. Facts reflect each app's publicly documented
// behaviour at time of writing; both play the same line from us.
const COMPARE = [
  [
    "Best for",
    "Beginners & all devices",
    "Power users on Android TV",
  ],
  ["Interface", "Simple, poster-led layout", "Polished, guide-first layout"],
  ["TV guide (EPG)", "Clean, built-in EPG", "Best-in-class EPG & now/next"],
  [
    "Platforms",
    "Android, Fire TV, iOS, Windows, Mac",
    "Android & Android TV / Fire TV",
  ],
  ["Price", "Free", "Free · optional Premium (paid)"],
  ["Recording", "No", "Yes (Premium)"],
  ["Multiple playlists", "One at a time", "Yes (Premium)"],
  ["Learning curve", "Very low", "Low–moderate"],
  ["Login formats", "Xtream Codes & M3U", "Xtream Codes & M3U"],
];

const FAQ_ITEMS = [
  [
    "Is TiviMate better than IPTV Smarters Pro?",
    "Neither is universally better — it depends on your device and how you watch. TiviMate has the more refined live-TV guide and is a favourite on Android TV boxes and Firestick, but its best features sit behind a paid Premium tier and it doesn't run on iPhone, iPad or Windows. IPTV Smarters Pro is free, simpler to set up and runs on almost every platform, which makes it the safer first choice for most people.",
  ],
  [
    "Can I use both apps with one subscription?",
    "Yes. Your subscription is a login (Xtream Codes or an M3U URL), not an app. You can enter the same details into IPTV Smarters Pro, TiviMate or any compatible player and watch on multiple devices — switching apps never changes your plan.",
  ],
  [
    "Is TiviMate free?",
    "TiviMate is free to download and covers basic live-TV playback. Features like recording, multiple playlists and reminders require a one-off or annual TiviMate Premium purchase. IPTV Smarters Pro is fully free.",
  ],
  [
    "Which app should a beginner install first?",
    "IPTV Smarters Pro. It works on the widest range of devices, takes about two minutes to set up with the login we send you, and has the gentlest learning curve. You can always add TiviMate later if you want a more advanced TV guide.",
  ],
];

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IPTV Smarters Pro vs TiviMate (2026): Which Is Better?",
  description:
    "A side-by-side comparison of IPTV Smarters Pro and TiviMate across interface, TV guide, device support, price and setup.",
  image: `${SITE}/opengraph-image`,
  author: { "@id": `${SITE}#organization` },
  publisher: { "@id": `${SITE}#organization` },
  reviewedBy: { "@id": `${SITE}#organization` },
  mainEntityOfPage: { "@id": `${URL}#webpage` },
  datePublished: "2026-07-10",
  dateModified: UPDATED.iso,
  inLanguage: "en",
};

const faqLd = faqSchema(FAQ_ITEMS);

export default function SmartersVsTivimatePage() {
  return (
    <PageShell
      slug="compare/iptv-smarters-pro-vs-tivimate"
      eyebrow="Comparison · Player apps"
      parent={{ name: "Comparisons", href: "/compare" }}
      breadcrumb="Smarters Pro vs TiviMate"
      title="IPTV Smarters Pro vs TiviMate"
      intro="IPTV Smarters Pro is the better first choice for most people: it's free and runs on nearly every device. TiviMate has the superior live-TV guide and is ideal on Android TV or Firestick, but its best features are paid and it doesn't work on iPhone or Windows. Both play the exact same channels from your subscription."
      updated={UPDATED}
      author="IPTV Provider Editorial"
      schemas={[articleLd, faqLd]}
    >
      <h2>The short answer</h2>
      <p>
        <strong>
          Pick IPTV Smarters Pro if you want a free, no-fuss app that works on
          any device; pick TiviMate if you watch mostly live TV on an Android TV
          box or Firestick and want the best programme guide.
        </strong>{" "}
        Because your subscription is a login rather than an app, you can install
        both and decide for yourself — switching players never affects your
        channels, movies or plan.
      </p>

      <h2>Side-by-side comparison</h2>
      <p>
        Both apps read the same Xtream Codes or M3U line we send you. The
        differences are the interface, the TV guide and which devices each runs
        on:
      </p>
      <div className="not-prose my-6 overflow-hidden rounded-2xl border border-[color:var(--hair)]">
        <table className="w-full border-collapse text-left text-[14px]">
          <thead>
            <tr className="bg-[var(--bg-2)]">
              <th className="px-4 py-3 font-semibold text-primary sm:px-5"> </th>
              <th className="px-4 py-3 font-semibold text-acid sm:px-5">
                IPTV Smarters Pro
              </th>
              <th className="px-4 py-3 font-semibold text-primary sm:px-5">
                TiviMate
              </th>
            </tr>
          </thead>
          <tbody>
            {COMPARE.map(([label, smarters, tivimate]) => (
              <tr key={label} className="border-t border-[color:var(--hair)]">
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-primary sm:px-5"
                >
                  {label}
                </th>
                <td className="px-4 py-3 text-secondary sm:px-5">{smarters}</td>
                <td className="px-4 py-3 text-tertiary sm:px-5">{tivimate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>IPTV Smarters Pro: strengths &amp; trade-offs</h2>
      <p>
        IPTV Smarters Pro is the most widely used IPTV player, and it&apos;s the
        one we recommend to newcomers. It is completely free, installs in a couple
        of minutes, and runs on the broadest set of platforms — Android and
        Android TV, Amazon Fire TV and Firestick, iPhone, iPad, Windows and Mac.
        The interface is poster-led and easy to navigate, with live TV, movies and
        series split into clear sections.
      </p>
      <ul>
        <li>
          <strong>Best for:</strong> beginners, mixed households, and anyone
          watching across phones, tablets and TVs.
        </li>
        <li>
          <strong>Trade-off:</strong> no built-in recording, and the programme
          guide, while clean, is less advanced than TiviMate&apos;s.
        </li>
      </ul>

      <h2>TiviMate: strengths &amp; trade-offs</h2>
      <p>
        TiviMate is built for live TV and is a favourite among people who use an
        Android TV box or Firestick as their main screen. Its electronic
        programme guide is the best in class, with a fast now/next grid,
        reminders and a genuinely TV-like experience. A free tier covers basic
        playback, while a paid TiviMate Premium upgrade unlocks recording,
        multiple playlists and more.
      </p>
      <ul>
        <li>
          <strong>Best for:</strong> power users and cord-cutters who mostly watch
          live channels on Android TV or Firestick.
        </li>
        <li>
          <strong>Trade-off:</strong> the best features are paid, and it does not
          run on iPhone, iPad or Windows.
        </li>
      </ul>

      <h2>Which should you choose?</h2>
      <p>
        If you&apos;re setting up IPTV for the first time, start with{" "}
        <a href="/how-to/install-iptv-on-firestick">IPTV Smarters Pro</a> — it&apos;s
        free, universal and quick to configure with the login we provide. If you
        watch live TV on an Android TV box or Firestick and care most about a
        rich programme guide, TiviMate is worth the small Premium cost. Many
        subscribers keep both installed and switch depending on the device.
      </p>
      <p>
        Either way, you need an active line first. New here? Read{" "}
        <a href="/learn/iptv-explained">what IPTV is</a>, grab a{" "}
        <a href="/iptv-free-trial-2026">free 24-hour trial</a>, or compare{" "}
        <a href="/iptv-subscription-plans">subscription plans</a> from $7.50/mo —
        all of them work in both apps.
      </p>

      <h2>Frequently asked questions</h2>
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
    </PageShell>
  );
}
