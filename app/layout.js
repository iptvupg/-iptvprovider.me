import "./globals.css";
import { Inter, Sora } from "next/font/google";

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
    locale: "en_US",
    // og:image is supplied automatically by app/opengraph-image.js — declaring
    // it here too would emit duplicate og:image tags.
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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050505" },
    { media: "(prefers-color-scheme: light)", color: "#f6f6f4" },
  ],
  width: "device-width",
  initialScale: 1,
};

const FAQ_ITEMS = [
  [
    "What is IPTV and how does it work?",
    "IPTV (Internet Protocol Television) streams live TV and on-demand content over your internet connection instead of satellite or cable. Once subscribed, you receive login details and can watch instantly on any compatible device.",
  ],
  [
    "Which devices are supported?",
    "Our service works on Smart TVs, Amazon Fire Stick, Android, iOS, Windows, Mac, Apple TV, Roku, MAG boxes and more — any device with a compatible IPTV player.",
  ],
  [
    "How fast is activation?",
    "Activation is instant. After checkout you receive your subscription details within minutes and can start streaming right away.",
  ],
  [
    "What internet speed do I need?",
    "We recommend at least 15 Mbps for HD and 25 Mbps for stable 4K streaming.",
  ],
  [
    "Do you offer a money-back guarantee?",
    "Yes. We offer a satisfaction guarantee — contact our support team if you experience any issues.",
  ],
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}#organization`,
      name: "IPTV Provider",
      url: SITE,
      description:
        "The world's premier IPTV Provider offering 20,000+ live channels and an extensive VOD library in HD/4K.",
    },
    {
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
        price: "7.50",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: SITE,
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map(([q, a]) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
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
