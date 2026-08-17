
import { unstable_cache as cache } from 'next/cache';
import { weeklyBuzzItems } from "@/lib/site-data/weekly-buzz";
import { sportEvents } from "@/lib/site-data/sport-events";
import { getPlaceholderImage } from "@/lib/server/image-blur-server";
import { generateProductSchema, digitalOfferShippingDetails, defaultMerchantReturnPolicy, defaultBrand } from '@/lib/schema';
import { siteConfig } from '@/lib/site-config';
import { plans } from '@/lib/site-data/pricing';

// This function fetches and processes all data required for the homepage in a single, cached operation.
export const getHomePageData = cache(
  async () => {
    const weeklyBuzzPromise = Promise.all(
      weeklyBuzzItems.map(async (item) => {
        const placeholder = await getPlaceholderImage(item.src);
        return { ...item, placeholder };
      })
    );

    const sportEventsPromise = Promise.all(
      sportEvents.map(async (item) => {
        const placeholder = await getPlaceholderImage(item.src);
        return { ...item, placeholder };
      })
    );

    const productSchemaPromise = Promise.resolve(generateProductSchema({
      name: "Premium IPTV Subscription Service",
      description: "Get the best IPTV service with over 24,000 live channels and a massive VOD library. Instant activation, HD/4K quality, and 24/7 support. Subscribe to the top IPTV provider today!",
      image: `${siteConfig.url}/api/og`,
      sku: "iptv-premium-service",
      mpn: "iptv-premium-service",
      brand: defaultBrand,

      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "USD",
        lowPrice: Math.min(...plans.map(p => p.price_monthly)).toFixed(2),
        highPrice: Math.max(...plans.map(p => p.price_monthly)).toFixed(2),
        offerCount: plans.length,
        offers: plans.map(plan => ({
          "@type": "Offer",
          name: `IPTV Provider - ${plan.name}`,
          price: plan.price.toFixed(2),
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: `${siteConfig.url}/tv/pricing`,
          validFrom: "2026-01-01T00:00:00Z",
          priceValidUntil: "2026-12-31",
          shippingDetails: digitalOfferShippingDetails,
          hasMerchantReturnPolicy: defaultMerchantReturnPolicy,
        }))
      }
    }));
    
    // Await all promises in parallel
    const [
      weeklyBuzzItemsWithPlaceholders,
      sportEventsWithPlaceholders,
      productSchema
    ] = await Promise.all([
      weeklyBuzzPromise,
      sportEventsPromise,
      productSchemaPromise
    ]);

    return {
      weeklyBuzzItemsWithPlaceholders,
      sportEventsWithPlaceholders,
      productSchema
    };
  },
  ['home-page-data'], // Cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'home-page'], // Tag for on-demand revalidation
  }
);

