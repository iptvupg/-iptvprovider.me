export default function sitemap() {
  // Single-page site. The homepage "/" 301-redirects to /iptv-smarters-pro,
  // so the sitemap lists only the live, canonical, 200-status page — never the
  // redirecting root or hash fragments (#pricing/#faq), which Google ignores.
  const canonical = "https://www.iptvprovider.me/iptv-smarters-pro";
  return [
    {
      url: canonical,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
