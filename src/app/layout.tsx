
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Nunito, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ContactSheet } from "@/components/shared/ContactSheet";
import { ProgressBar } from '@/components/shared/ProgressBar';
import { Analytics } from "@/components/shared/Analytics";
import { Schema } from "@/components/shared/Schema";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site-config";

// Display tier — Nunito is the open substitute for SF Pro Rounded, the
// soft-geometric rounded display face used on headings (DESIGN-ollama.md).
const display = Nunito({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
  variable: "--font-display",
  fallback: ["system-ui", "sans-serif"],
  preload: true,
});

// Code tier — JetBrains Mono for the install-snippet pill and terminal
// mockups (DESIGN-ollama.md).
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-mono",
  fallback: ["monospace"],
  preload: true,
});

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Best IPTV Service 2026 — 24,000+ Live Channels & 4K VOD`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  referrer: 'origin-when-cross-origin',
  keywords: [
    'best IPTV provider', 'iptv providers', 'best iptv providers', 'iptv service provider',
    'buy IPTV', 'IPTV subscription', 'IPTV USA', 'IPTV UK', 'IPTV service',
    'premium IPTV', 'cheap IPTV', 'IPTV channels', 'live TV streaming',
    '4K IPTV', 'sports IPTV', 'VOD streaming'
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${siteConfig.url}/tv`,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — IPTV Service in USA, UK & Worldwide`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Best Streaming Service`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — IPTV Service in USA, UK & Worldwide`,
    description: siteConfig.description,
    creator: '@iptvprovider',
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'WayUe3dolb9UPFpMPHfTYy8CS-T1RkpFYqGvAkW5XqI',
    yandex: '4cafd334f7cdc146',
    other: {
      'msvalidate.01': 'CEC29E9356C1B062CC9637E64D68C778',
    },
  },
  alternates: {
    // The homepage's indexable URL is /tv (root 301-redirects there).
    canonical: '/tv',
    languages: {
      'en-US': '/tv',
      'x-default': '/tv',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/android-chrome-192x192.png', type: 'image/png', sizes: '192x192' },
      { url: '/android-chrome-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning className={cn(
        "font-body antialiased",
        display.variable,
        mono.variable
      )}>
       <head>
          <Schema id="organization" schema={generateOrganizationSchema()} />
          <Schema id="website" schema={generateWebSiteSchema()} />
          <link rel="dns-prefetch" href="https://www.google-analytics.com"/>
        </head>
      <body>
        <ProgressBar />
        <Analytics />
        {process.env.NODE_ENV === 'production' && (
          <>
            <Script
                src="https://cdn.visitors.now/v.js"
                data-token="0a9ca441-3262-415a-a3ac-e06859feeeba"
                strategy="afterInteractive"
            />
            <Script
                src="https://analytics.ahrefs.com/analytics.js"
                id="ahrefs-analytics"
                strategy="afterInteractive"
            />
          </>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
            >
              Skip to main content
            </a>
            <Navbar />
            <main id="main-content" className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ContactSheet />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
