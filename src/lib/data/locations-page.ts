
import { unstable_cache as cache } from 'next/cache';
import { generateBreadcrumbSchema } from '@/lib/schema';

// This function fetches and processes all data required for the locations page in a single, cached operation.
export const getLocationsPageData = cache(
  async () => {
    // Pages are served under /tv; breadcrumb URLs must match the 200 URL.
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me'}/tv`;

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "Service Locations", item: `${baseUrl}/locations` }
    ]);

    return {
      breadcrumbSchema,
    };
  },
  ['locations-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'locations-page'], // Tag for on-demand revalidation
  }
);

