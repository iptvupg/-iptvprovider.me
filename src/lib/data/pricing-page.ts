
import { unstable_cache as cache } from 'next/cache';
import { plans } from "@/lib/site-data/pricing";
import { pricingPageFaqs } from "@/lib/site-data/pricing-page-faq";
import { generateProductSchema, generateBreadcrumbSchema, generateFAQPageSchema } from "@/lib/schema";
import { siteConfig } from '../site-config';

// This function fetches and processes all data required for the pricing page in a single, cached operation.
export const getPricingPageData = cache(
  async () => {
    // Pages are served under /tv; breadcrumb + offer URLs must match the 200 URL.
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me'}/tv`;

    // Define all data fetching and processing promises
    const productSchemaPromise = Promise.resolve(generateProductSchema({
      name: "IPTV Subscription",
      description: "Premium IPTV subscription with 24,000+ live channels, 80,000+ VOD content, HD/4K streaming, and 24/7 support.",
      image: "https://images-cdn.ubuy.co.in/633fee9c3a16a463ad2f7388-iptv-subscription-not-box-including.jpg",

      brand: {
        "@type": "Brand",
        name: siteConfig.name,
      },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...plans.map(p => p.price_monthly)).toFixed(2),
        highPrice: Math.max(...plans.map(p => p.price_monthly)).toFixed(2),
        offerCount: plans.length,
        offers: plans.map(plan => ({
            "@type": "Offer",
            "name": `IPTV Subscription - ${plan.name}`,
            "price": plan.price.toFixed(2),
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock",
            "url": `${baseUrl}/pricing`,
            "priceValidUntil": "2026-12-31",
            "itemCondition": "https://schema.org/NewCondition",
            "seller": {
              "@type": "Organization",
              "name": "IPTV Provider"
            }
        }))
      }
    }));

    const breadcrumbSchemaPromise = Promise.resolve(generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "Pricing", item: `${baseUrl}/pricing` }
    ]));

    const faqSchemaPromise = Promise.resolve(generateFAQPageSchema(pricingPageFaqs));

    // Await all promises in parallel for maximum efficiency
    const [
      productSchema,
      breadcrumbSchema,
      faqSchema,
    ] = await Promise.all([
      productSchemaPromise,
      breadcrumbSchemaPromise,
      faqSchemaPromise,
    ]);

    return {
      productSchema,
      breadcrumbSchema,
      faqSchema,
      pricingPageFaqs, // Pass static data through as well
    };
  },
  ['pricing-page-data'], // Unique cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'pricing-page'], // Tag for on-demand revalidation
  }
);
