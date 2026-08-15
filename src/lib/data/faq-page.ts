
import { unstable_cache as cache } from 'next/cache';
import { faqs } from "@/lib/site-data/faq";
import { generateBreadcrumbSchema, generateFAQPageSchema } from '@/lib/schema';


// This function fetches and processes all data required for the FAQ page in a single, cached operation.
export const getFaqPageData = cache(
  async () => {
    // Pages are served under /tv; breadcrumb URLs must match the 200 URL.
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me'}/tv`;

    const faqSchema = generateFAQPageSchema(faqs);

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "FAQ", item: `${baseUrl}/faq` }
    ]);

    return {
      faqSchema,
      breadcrumbSchema
    };
  },
  ['faq-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'faq-page'], // Tag for on-demand revalidation
  }
);

