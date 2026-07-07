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
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Smarters Pro Subscription | 54,000+ Channels",
    description:
      "54,000+ live channels & 120,000+ movies & series in HD/4K on IPTV Smarters Pro. Free 24-hour trial. Instant activation.",
  },
};

export default function IptvSmartersProPage() {
  return <Landing />;
}
