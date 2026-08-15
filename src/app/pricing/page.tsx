import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { Pricing } from "@/components/sections/Pricing";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { SubscriptionFeatures } from "@/components/sections/SubscriptionFeatures";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { Check, BookOpen, Wrench, ChevronRight } from "lucide-react";

export function generateMetadata(): Metadata {
    const title = "IPTV Subscription Plans & Pricing 2026 | From $7.50/mo";
    const description = "Compare IPTV subscription plans from $7.50/month. 24,000+ HD/4K channels, instant activation, 7-day money-back guarantee. Choose your plan and start streaming today.";
    
    return {
      ...generatePageMetadata({
          title,
          description,
          canonical: "/pricing",
      }),
      title: {
        absolute: title,
      }
    };
}

export default async function IPTVSubscription() {
    const {
      productSchema,
      breadcrumbSchema, 
      faqSchema,
      pricingPageFaqs
    } = await getPricingPageData();

  return (
    <>
      <Schema id="product" schema={productSchema} />
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="faq" schema={faqSchema} />

      <main>
        <section className="py-16 sm:py-24">
            <Container>
                <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                  <ol className="flex items-center gap-2">
                    <li>
                      <Link href="/tv" className="hover:text-foreground">
                        Home
                      </Link>
                    </li>
                    <li>/</li>
                    <li>
                        Pricing
                    </li>
                  </ol>
                </nav>

                <div className="text-center">
                  <p className="eyebrow-cap mb-5 text-sm font-medium text-muted-foreground">Plans &amp; Pricing</p>
                  <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">IPTV Subscription <span className="chip-lime">Plans</span> &amp; Pricing</h1>
                  <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
                      Stream 24,000+ live channels in HD & 4K quality. Choose the IPTV subscription that fits your needs — all plans include instant activation and 7-day money-back guarantee.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 24,000+ Channels</div>
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Instant Activation</div>
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 7-Day Guarantee</div>
                    <div className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> 24/7 Support</div>
                </div>
            </Container>
        </section>

        <Pricing />

        <SubscriptionFeatures />

        <section className="py-12 border-t">
          <Container>
            <div className="mx-auto max-w-3xl rounded-lg border bg-card p-6 sm:p-8">
              <h2 className="font-headline text-xl font-bold tracking-tight mb-2 flex items-center gap-2">
                <BookOpen className="text-primary h-5 w-5" /> Need Help Setting Up Your Service?
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                Explore our step-by-step technical setup tutorials and playback troubleshooting guides:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <Link
                  href="/tv/guides/iptv-setup-guide"
                  className="rounded-md border p-3 hover:border-primary transition-colors flex items-center justify-between font-medium text-foreground"
                >
                  <span>Read the complete IPTV setup guide</span>
                  <ChevronRight size={16} className="text-primary shrink-0" />
                </Link>
                <Link
                  href="/tv/devices/troubleshooting"
                  className="rounded-md border p-3 hover:border-primary transition-colors flex items-center justify-between font-medium text-foreground"
                >
                  <span>Troubleshooting IPTV buffering and playback issues</span>
                  <ChevronRight size={16} className="text-primary shrink-0" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24">
          <Container>
              <div className="mx-auto max-w-3xl text-center">
                  <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">IPTV Subscription — Frequently Asked Questions</h2>
              </div>
              <div className="mx-auto mt-8 max-w-3xl">
                <Accordion type="single" collapsible>
                  {pricingPageFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`item-${i}`}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>
                        <p>{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
          </Container>
        </section>
      </main>
    </>
  );
}
