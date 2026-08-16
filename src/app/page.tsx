import { Hero } from "@/components/sections/Hero";
import { CountryTicker } from "@/components/sections/CountryTicker";
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
import { generateHomeGraphSchema } from "@/lib/schema";
import { Schema } from "@/components/shared/Schema";

export default async function Home() {
  await getHomePageData();
  const homeGraphSchema = generateHomeGraphSchema(
    faqs.map((item: { question: string; answer: string }) => ({
      question: item.question,
      answer: item.answer,
    }))
  );

  return (
    <>
      <Schema id="home-graph" schema={homeGraphSchema as any} />
      <Hero />
      <CountryTicker />
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
