
import { unstable_cache as cache } from 'next/cache';
import { pricingPageFaqs } from "@/lib/site-data/pricing-page-faq";
import { generatePricingGraphSchema } from "@/lib/schema";

export const getPricingPageData = cache(
  async () => {
    const pricingGraphSchema = generatePricingGraphSchema(pricingPageFaqs);

    return {
      pricingGraphSchema,
      pricingPageFaqs,
    };
  },
  ['pricing-page-data'],
  {
    revalidate: 3600,
    tags: ['pages', 'pricing-page'],
  }
);

