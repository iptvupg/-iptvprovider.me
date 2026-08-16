
import { unstable_cache as cache } from 'next/cache';
import { notFound } from 'next/navigation';
import { getCountryById } from "@/lib/countries";
import { generateBreadcrumbSchema, generateServiceSchema, generateFAQPageSchema } from '@/lib/schema';
import { plans } from '@/lib/site-data/pricing';
import { getCountryEnrichment } from './country-enrichment';

const getPageFaqs = (name: string) => [
    {
        question: `Is your IPTV service available in ${name}?`,
        answer: `Yes, our IPTV service is fully available and optimized for viewers in ${name}. You get access to local channels as well as our full international lineup.`
    },
    {
        question: `How do I place an order for ${name}?`,
        answer: `To subscribe, contact our team directly via WhatsApp. Our support team will guide you through plan selection, confirm your order, and deliver your login credentials to your email immediately after payment.`
    },
    {
        question: `How fast is the activation process in ${name}?`,
        answer: `Activation is instant worldwide, including in ${name}. As soon as your payment is confirmed, you will receive your login credentials via email and can start streaming immediately.`
    },
    {
        question: `Do I need a VPN to use IPTV in ${name}?`,
        answer: `While not mandatory, we highly recommend using a VPN in ${name} to ensure your privacy and bypass any potential ISP throttling or blocking, guaranteeing the best possible streaming experience.`
    }
];

// This function fetches and processes all data required for a specific country page in a single, cached operation.
export const getCountryPageData = cache(
  async (countryId: string) => {
    // Pages are served under /tv; breadcrumb URLs must match the 200 URL.
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me'}/tv`;

    const country = getCountryById(countryId);
    if (!country) {
        notFound();
    }
    const { name } = country;

    const enrichment = getCountryEnrichment(countryId);
    const baseFaqs = getPageFaqs(name);
    const pageFaqs = enrichment
      ? [...enrichment.specificFaqs, ...baseFaqs.slice(1)]
      : baseFaqs;

    // Define all data fetching and processing promises
    const breadcrumbSchemaPromise = Promise.resolve(generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: "Locations", item: `${baseUrl}/locations` },
        { name: name, item: `${baseUrl}/country/${countryId}` }
    ]));

    const lowPrice = Math.min(...plans.map(p => p.price_monthly));
    const highPrice = Math.max(...plans.map(p => p.price_monthly));

    const serviceSchemaPromise = Promise.resolve(generateServiceSchema({
        serviceType: "IPTV Provider",
        providerName: "IPTV Provider",
        areaServed: { type: "Country", name },
        name: `IPTV Provider for ${name}`,
        description: `Premium IPTV service available in ${name} with over 24,000 channels, HD/4K quality, and instant setup.`,
        offers: {
            "@type": "AggregateOffer",
            priceCurrency: "USD",
            lowPrice: lowPrice.toFixed(2),
            highPrice: highPrice.toFixed(2),
            offerCount: plans.length,
        }
    }));

    const faqSchemaPromise = Promise.resolve(generateFAQPageSchema(pageFaqs));

    // Await all promises in parallel
    const [
      breadcrumbSchema,
      serviceSchema,
      faqSchema
    ] = await Promise.all([
      breadcrumbSchemaPromise,
      serviceSchemaPromise,
      faqSchemaPromise
    ]);

    return {
      country,
      enrichment,
      pageFaqs,
      breadcrumbSchema,
      serviceSchema,
      faqSchema
    };
  },
  ['country-page-data'], // Base cache key
  {
    revalidate: 3600, // Revalidate every hour
    tags: ['pages', 'country-page'], // Tag for on-demand revalidation
  }
);

