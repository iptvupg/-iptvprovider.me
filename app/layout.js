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
    default: "Best IPTV Service USA, Canada & Latin America | 54,000+ Channels",
    template: "%s | IPTV Provider",
  },
  description:
    "Stream 54,000+ live channels and 120,000+ movies & series in 4K on any device. Free 24-hour trial, instant setup, no contract. IPTV plans from $7.50/mo.",
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
  authors: [{ name: "Aurora IPTV" }],
  openGraph: {
    type: "website",
    url: SITE,
    title: "Best IPTV Service USA, Canada & Latin America",
    description:
      "54,000+ live channels & 120,000+ movies & series in HD/4K. Free 24-hour trial. Instant activation.",
    siteName: "IPTV Provider",
    locale: "en_US",
    // og:image is supplied automatically by app/opengraph-image.js — declaring
    // it here too would emit duplicate og:image tags.
  },
  twitter: {
    card: "summary_large_image",
    title: "Best IPTV Service USA, Canada & Latin America",
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

const FAQ_ITEMS = [
  [
    "How do I set up my subscription after I buy?",
    "As soon as your order is confirmed, we email your login credentials and a step-by-step setup guide, usually within minutes. Enter your details into any supported app and you're watching.",
  ],
  [
    "Which devices work with our IPTV service?",
    "Smart TVs, Firestick, Apple TV, Roku, MAG boxes, Android, iOS, Windows and Mac. If it connects to the internet and runs an IPTV player, it works.",
  ],
  [
    "How fast is activation?",
    "Minutes. Once your payment is confirmed on WhatsApp, your login arrives by email straight away.",
  ],
  [
    "What internet speed do I need?",
    "Around 15 Mbps for smooth HD and 25 Mbps or more for stable 4K. A wired connection or solid Wi-Fi gives the best result.",
  ],
  [
    "Do you offer a free IPTV trial?",
    "Yes, a free 24-hour trial. Test the channels and picture quality before you pay anything.",
  ],
  [
    "Is there a money-back guarantee?",
    "Yes, 30 days. If the service isn't right for you, ask for a refund and you'll get it.",
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
        "Premium IPTV service for the USA, Canada and Latin America with 54,000+ live channels and 120,000+ movies & series in HD/4K.",
    },
    {
      "@type": "Product",
      name: "IPTV Provider",
      description:
        "Premium HD/4K IPTV streaming with 54,000+ live channels and 120,000+ movies & series.",
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
