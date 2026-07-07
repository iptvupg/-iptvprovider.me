export default function sitemap() {
  const base = "https://www.iptvprovider.me";
  // Single-page site: only the canonical URL is a valid sitemap entry. Google
  // ignores hash fragments, so listing #pricing/#faq etc. adds no value.
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ];
}
