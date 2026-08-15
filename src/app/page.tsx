import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Devices } from "@/components/sections/Devices";
import { WhatIsIPTVSection } from "@/components/sections/WhatIsIPTVSection";
import { FreeTrialBanner } from "@/components/sections/FreeTrialBanner";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { getHomePageData } from "@/lib/data/home-page";
import { faqs } from "@/lib/site-data/faq";
import { generateFAQPageSchema } from "@/lib/schema";
import { Schema } from "@/components/shared/Schema";

export default async function Home() {
  const { productSchema } = await getHomePageData();
  const faqSchema = generateFAQPageSchema(
    faqs.map((item: { question: string; answer: string }) => ({
      question: item.question,
      answer: item.answer,
    }))
  );

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="faq" schema={faqSchema} />
      <Hero />
      <WhyChoose />
      <Pricing />
      <HowItWorks />
      <Devices />
      <WhatIsIPTVSection />
      <FreeTrialBanner />
      <FAQ />
      <CTA />
    </>
  );
}
