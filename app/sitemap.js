export default function sitemap() {
  // Live, canonical, 200-status pages only — never the redirecting root or hash
  // fragments (#pricing/#faq), which Google ignores. The homepage "/"
  // 301-redirects to /iptv-smarters-pro, so it is not listed here.
  const base = "https://www.iptvprovider.me";
  const lastModified = new Date();
  return [
    {
      url: `${base}/iptv-smarters-pro`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/iptv-free-trial-2026`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/iptv-subscription-plans`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Topic-cluster hubs and guides.
    ...[
      "learn",
      "learn/iptv-explained",
      "how-to",
      "how-to/install-iptv-on-firestick",
    ].map((slug) => ({
      url: `${base}/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    })),
    // Trust / legal pages — indexable but low priority.
    ...["about", "contact", "privacy", "terms", "refund"].map((slug) => ({
      url: `${base}/${slug}`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    })),
  ];
}
