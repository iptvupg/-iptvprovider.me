import Landing from "@/components/Landing";

const SITE = "https://www.iptvprovider.me";
const URL = `${SITE}/iptv-smarters-pro`;

export const metadata = {
  title: {
    absolute:
      "Best IPTV Service USA, Canada & Worldwide – 54,000+ Channels",
  },
  description:
    "Watch 54,000+ live channels & 120,000+ movies in HD/4K on any device with IPTV Smarters Pro. Free 24-hour trial, instant setup, no contract. From $7.50/mo.",
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    title: "IPTV Smarters Pro Subscription | 54,000+ Channels",
    description:
      "54,000+ live channels & 120,000+ movies & series in HD/4K on IPTV Smarters Pro. Free 24-hour trial. Instant activation.",
    siteName: "IPTV Provider",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "IPTV Smarters Pro — 54,000+ live channels & 120,000+ movies in HD/4K",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Smarters Pro Subscription | 54,000+ Channels",
    description:
      "54,000+ live channels & 120,000+ movies & series in HD/4K on IPTV Smarters Pro. Free 24-hour trial. Instant activation.",
    images: ["/opengraph-image"],
  },
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
    { "@type": "ListItem", position: 2, name: "IPTV Smarters Pro", item: URL },
  ],
};

// Freshness signal for AI/search. Dates reflect the page's real git history.
const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${URL}#webpage`,
  url: URL,
  name: "Best IPTV Service USA, Canada & Worldwide – 54,000+ Channels",
  isPartOf: { "@id": `${SITE}#website` },
  about: { "@id": `${SITE}#organization` },
  inLanguage: "en",
  datePublished: "2026-07-07",
  dateModified: "2026-07-08",
};

export default function IptvSmartersProPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <Landing />
    </>
  );
}
