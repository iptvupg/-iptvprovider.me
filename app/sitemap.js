export default function sitemap() {
  const base = "https://www.iptvprovider.me";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/#pricing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#features`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#faq`, changeFrequency: "monthly", priority: 0.5 },
  ];
}
