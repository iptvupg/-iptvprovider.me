import { Hero } from "@/components/sections/Hero";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Pricing } from "@/components/sections/Pricing";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Devices } from "@/components/sections/Devices";
import { WhatIsIPTVSection } from "@/components/sections/WhatIsIPTVSection";
import { FreeTrialBanner } from "@/components/sections/FreeTrialBanner";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { faqs } from "@/lib/site-data/faq";
import { generateHomeGraphSchema } from "@/lib/schema";
import { Schema } from "@/components/shared/Schema";

export default function Home() {
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
