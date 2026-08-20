
export const siteConfig = {
  name: "IPTVProvider.me",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.iptvprovider.me",
  ogImage: "/api/og",
  description: "Stream 24,000+ live TV channels and 80,000+ on-demand titles with high-speed server infrastructure, 60fps sports feeds, and 24/7 technical customer assistance.",
  links: {
    twitter: "https://twitter.com/iptvprovider",
    facebook: "https://facebook.com/iptvprovider",
    instagram: "https://instagram.com/iptvprovider",
    email: "support@iptvprovider.me",
  },
} as const;

export type SiteConfig = typeof siteConfig;

// Helper for generating page-specific metadata
export function generateMetadata({
  title,
  description,
  image,
  noIndex = false,
  canonical,
}: {
  title: string;
  description: string;
  image?: string;
  noIndex?: boolean;
  canonical?: string;
}) {
  const ogImageUrl = image || `${siteConfig.url}${siteConfig.ogImage}?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      // Pages are served under the /tv prefix, so the canonical must include it
      // to point at the final 200 URL rather than the pre-redirect path.
      canonical: canonical ? `${siteConfig.url}/tv${canonical}` : undefined,
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
      site: siteConfig.links.twitter,
      creator: siteConfig.links.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
