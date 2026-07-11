import Landing from "@/components/layout/Landing";
import { SITE } from "@/config";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/metadata";

const URL = `${SITE}/iptv-smarters-pro`;

export const metadata = pageMetadata({
  title: "Best IPTV Service USA, Canada & Worldwide – 54,000+ Channels",
  description:
    "Watch 54,000+ live channels & 120,000+ movies in HD/4K on any device with IPTV Smarters Pro. Free 24-hour trial, instant setup, no contract. From $7.50/mo.",
  canonical: URL,
  robots: false,
  openGraph: {
    title: "IPTV Smarters Pro Subscription | 54,000+ Channels",
    description:
      "54,000+ live channels & 120,000+ movies & series in HD/4K on IPTV Smarters Pro. Free 24-hour trial. Instant activation.",
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
});

const breadcrumbLd = breadcrumbSchema([
  { name: "Home", item: SITE },
  { name: "IPTV Smarters Pro", item: URL },
]);

// Freshness signal for AI/search. Dates reflect the page's real git history.
const webPageLd = webPageSchema({
  url: URL,
  name: "Best IPTV Service USA, Canada & Worldwide – 54,000+ Channels",
  datePublished: "2026-07-07",
  dateModified: "2026-07-10",
});

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
