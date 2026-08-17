import { MetadataRoute } from 'next'
import { howToArticles } from '@/lib/how-to';
import { allCountries } from '@/lib/countries';
import { allGuides } from '@/lib/guides';

// Every route is served under the /tv prefix (see src/proxy.ts + the /tv
// rewrites in next.config.js). The sitemap must list the final 200 URLs — i.e.
// the /tv/* forms — otherwise every entry would be a 301 redirect.
const baseUrl = `${process.env.SITE_URL || 'https://www.iptvprovider.me'}/tv`;

export default function sitemap(): MetadataRoute.Sitemap {

  const devicePages: MetadataRoute.Sitemap = howToArticles.map((article) => ({
    url: `${baseUrl}/devices/${article.id}`,
    lastModified: new Date(article.dateModified),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const countryPages: MetadataRoute.Sitemap = allCountries.map((country) => ({
    url: `${baseUrl}/country/${country.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const guidePages: MetadataRoute.Sitemap = allGuides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(`${guide.updatedAt}T00:00:00Z`),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/iptv-free-trial`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iptv-1-month-subscription`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iptv-3-month-subscription`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iptv-6-month-subscription`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/iptv-12-month-subscription`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  return [
    ...staticPages,
    ...guidePages,
    ...devicePages,
    ...countryPages,
  ]
}
