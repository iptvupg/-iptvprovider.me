import "./globals.css";
import {
  Inter,
  Sora,
  Instrument_Serif,
  JetBrains_Mono,
} from "next/font/google";

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});
const display = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE = "https://www.iptvprovider.me";

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "IPTV Provider — The World's Premier IPTV Service | 20,000+ Channels",
    template: "%s | IPTV Provider",
  },
  description:
    "The world's premier IPTV Provider. 20,000+ live channels, an extensive VOD library in HD/4K. Instant activation, anti-freeze technology, all devices. From just $7.50/mo.",
  keywords: [
    "IPTV",
    "premium IPTV",
    "4K IPTV",
    "live TV streaming",
    "IPTV subscription",
    "sports streaming",
    "20000 channels",
  ],
  authors: [{ name: "Aurora IPTV" }],
  openGraph: {
    type: "website",
    url: SITE,
    title: "IPTV Provider — The World's Premier IPTV Service",
    description:
      "20,000+ live channels & extensive VOD in HD/4K. Instant activation. Anti-freeze technology.",
    siteName: "IPTV Provider",
  },
  twitter: {
    card: "summary_large_image",
    title: "IPTV Provider — The World's Premier IPTV Service",
    description:
      "20,000+ live channels & extensive VOD in HD/4K. Instant activation. Anti-freeze technology.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE },
};

export const viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "IPTV Provider",
  description:
    "Premium HD/4K IPTV streaming with 20,000+ channels and an extensive VOD library.",
  brand: { "@type": "Brand", name: "IPTV Provider" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "18420",
  },
  offers: {
    "@type": "Offer",
    price: "12.99",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${display.variable} ${serif.variable} ${mono.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.classList.add('light');}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
