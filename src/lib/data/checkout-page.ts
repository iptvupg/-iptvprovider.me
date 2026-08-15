
import { unstable_cache as cache } from 'next/cache';
import { generateBreadcrumbSchema } from '@/lib/schema';

// This function fetches and processes all data required for the checkout page in a single, cached operation.
export const getCheckoutPageData = cache(
  async () => {
    // Pages are served under /tv; breadcrumb URLs must match the 200 URL.
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me'}/tv`;

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "Checkout", item: `${baseUrl}/checkout` }
    ]);

    return {
      breadcrumbSchema,
    };
  },
  ['checkout-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'checkout-page'], // Tag for on-demand revalidation
  }
);

