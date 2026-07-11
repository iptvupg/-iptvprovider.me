import "./globals.css";
import { Inter, Sora } from "next/font/google";
import { SITE } from "@/config";
import { CONTEXT, organizationSchema, websiteSchema } from "@/lib/schema";

const geist = Inter({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
  // Body font: not render-critical above the fold; swap avoids FOIT without
  // adding a second render-blocking preload competing with the LCP heading.
  preload: false,
});
const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
});

export const metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "Best IPTV Service USA, Canada & Worldwide – 54,000+ Channels",
    template: "%s | IPTV Provider",
  },
  description:
    "Watch 54,000+ live channels & 120,000+ movies in HD/4K on any device with IPTV Smarters Pro. Free 24-hour trial, instant setup, no contract. From $7.50/mo.",
  keywords: [
    "IPTV",
    "best IPTV service",
    "IPTV subscription",
    "4K IPTV",
    "IPTV free trial",
    "live TV streaming",
    "IPTV Firestick",
    "54000 channels",
  ],
  authors: [{ name: "IPTV Provider" }],
  creator: "IPTV Provider",
  publisher: "IPTV Provider",
  openGraph: {
    type: "website",
    url: SITE,
    title: "Best IPTV Service USA, Canada & Worldwide",
    description:
      "54,000+ live channels & 120,000+ movies & series in HD/4K. Free 24-hour trial. Instant activation.",
    siteName: "IPTV Provider",
    locale: "en_US",
    // og:image is supplied automatically by app/opengraph-image.js — declaring
    // it here too would emit duplicate og:image tags.
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Service USA, Canada & Worldwide",
    description:
      "54,000+ live channels & 120,000+ movies & series in HD/4K. Free 24-hour trial. Instant activation.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE },
  verification: {
    google: "WayUe3dolb9UPFpMPHfTYy8CS-T1RkpFYqGvAkW5XqI",
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": CONTEXT,
  "@graph": [
    organizationSchema(),
    websiteSchema(),
    {
      "@type": "Product",
      name: "IPTV Smarters Pro Subscription",
      description:
        "Premium HD/4K IPTV subscription for IPTV Smarters Pro with 54,000+ live channels and 120,000+ movies & series.",
      image: `${SITE}/opengraph-image`,
      brand: { "@type": "Brand", name: "IPTV Provider" },
      // Four real, purchasable plans (1/3/6/12 months). AggregateOffer exposes
      // the price range for rich results; nested Offers keep per-plan detail.
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: "16",
        highPrice: "90",
        offerCount: 4,
        availability: "https://schema.org/InStock",
        url: `${SITE}/iptv-subscription-plans`,
        offers: [
          { name: "1 Month", price: "16" },
          { name: "3 Months", price: "39" },
          { name: "6 Months", price: "60" },
          { name: "12 Months", price: "90" },
        ].map((p) => ({
          "@type": "Offer",
          name: `${p.name} IPTV Subscription`,
          price: p.price,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          url: `${SITE}/iptv-subscription-plans`,
          // Near-term validity so Product eligibility isn't flagged as stale.
          priceValidUntil: "2026-12-31",
          // Mirrors the on-page 30-day money-back guarantee (no fabrication).
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: ["US", "CA", "GB"],
            returnPolicyCategory:
              "https://schema.org/MerchantReturnFiniteReturnWindow",
            merchantReturnDays: 30,
            returnFees: "https://schema.org/FreeReturn",
          },
        })),
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${display.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Warm up the third-party image CDN that serves the poster art. */}
        <link
          rel="preconnect"
          href="https://wsrv.nl"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://wsrv.nl" />
      </head>
      <body className="font-sans antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');try{if(localStorage.getItem('theme')==='light')document.documentElement.classList.add('light');}catch(e){}",
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
