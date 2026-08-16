import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { allCountries } from "@/lib/countries";
import { Check, Shield, Tv, Zap, MessageCircle, Smartphone, BookOpen, ChevronRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCountryPageData } from "@/lib/data/country-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { notFound } from "next/navigation";
import { getCountryById } from "@/lib/countries";

type Props = {
  params: Promise<{ country: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const country = getCountryById(params.country);

  if (!country) {
    notFound();
  }

  const title = `Best IPTV in ${country.name} (2026) | #1 Provider`;
  const description = `Get the best IPTV Provider in ${country.name}. Enjoy 24,000+ channels, HD/4K quality, and instant activation. Perfect for sports, movies, and TV shows in ${country.name}.`;

  return {
    ...generatePageMetadata({
      title,
      description,
      canonical: `/country/${params.country}`,
    }),
    title: {
      absolute: title,
    }
  };
}

export default async function CountryPage(props: { params: Promise<{ country: string }>}) {
  const params = await props.params;
  const {
    country,
    pageFaqs,
    breadcrumbSchema,
    serviceSchema,
    faqSchema
  } = await getCountryPageData(params.country);

  const { name } = country;

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="service" schema={serviceSchema} />
      <Schema id="faq" schema={faqSchema} />

      <main className="py-16 sm:py-24">
        <Container>
             <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                <ol className="flex flex-wrap items-center justify-center gap-2">
                    <li>
                        <Link href="/tv" className="hover:text-foreground">Home</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/tv/locations" className="hover:text-foreground">Locations</Link>
                    </li>
                    <li>/</li>
                    <li className="text-foreground font-medium">
                        {name}
                    </li>
                </ol>
            </nav>

          <div className="text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
              The #1 IPTV Provider in {name}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Experience the best IPTV streaming in {name} with over 24,000 channels, movies, and series in stunning HD & 4K quality. Instant activation and 24/7 support guaranteed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 max-w-xl mx-auto w-full">
              <Button asChild size="lg" className="w-full sm:w-auto h-auto min-h-[44px] py-2.5 px-6 whitespace-normal text-center leading-snug">
                <Link href="/tv/pricing">Get Your Plan for {name}</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-auto min-h-[44px] py-2.5 px-6 whitespace-normal text-center leading-snug">
                <Link href="/tv/iptv-free-trial">Start Your Free Trial in {name}</Link>
              </Button>
            </div>
          </div>

          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us for {name}?</h2>
              <p className="mt-4 text-muted-foreground">We are the top-rated IPTV provider in {name} for a reason. Our service is optimized for viewers in your country, offering unparalleled stability and channel selection.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl font-bold text-foreground"><Tv size={20} className="text-primary"/> Local & International Channels</h3>
                    <p className="text-body text-sm leading-relaxed">Get access to all local {name} channels plus thousands of international sports, movies, and news channels.</p>
                </div>
                <div className="rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl font-bold text-foreground"><Zap size={20} className="text-primary"/> Instant Activation</h3>
                    <p className="text-body text-sm leading-relaxed">Your IPTV Provider is activated immediately after payment. Start watching in {name} within minutes.</p>
                </div>
                <div className="rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl font-bold text-foreground"><Check size={20} className="text-primary"/> HD/4K Quality</h3>
                    <p className="text-body text-sm leading-relaxed">Enjoy a superior viewing experience with crystal clear streaming, perfect for the modern TVs available in {name}.</p>
                </div>
                <div className="rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl font-bold text-foreground"><Shield size={20} className="text-primary"/> Anti-Freeze Technology</h3>
                    <p className="text-body text-sm leading-relaxed">Our powerful servers ensure a smooth, buffer-free experience, even during peak times in {name}.</p>
                </div>
                <div className="rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl font-bold text-foreground"><MessageCircle size={20} className="text-primary"/> 24/7 Support</h3>
                    <p className="text-body text-sm leading-relaxed">Our dedicated support team is available 24/7 to assist our customers in {name} with any questions.</p>
                </div>
                <div className="rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl font-bold text-foreground"><Smartphone size={20} className="text-primary"/> Works on All Devices</h3>
                    <p className="text-body text-sm leading-relaxed">Watch on your Smart TV, Android, iOS, Fire Stick, or computer anywhere in {name}.</p>
                </div>
            </div>
          </section>

          <section className="mb-16 rounded-lg border border-hairline bg-surface-card p-6 sm:p-8">
            <h2 className="font-headline text-2xl font-bold tracking-tight mb-2 flex items-center gap-2 text-foreground">
              <BookOpen className="text-primary h-6 w-6" /> Recommended IPTV Guides
            </h2>
            <p className="text-sm text-body mb-6">
              Learn how to set up and optimize your IPTV streaming setup in {name} with our step-by-step technical guides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="rounded-md border border-hairline p-4 bg-canvas hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1 text-foreground">
                  <Link href="/tv/guides/iptv-setup-guide" className="hover:text-primary">
                    Complete IPTV setup guide
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Step-by-step app installation across all streaming hardware.</p>
                <Link href="/tv/guides/iptv-setup-guide" className="text-xs text-primary font-semibold inline-flex items-center gap-1">
                  Read Setup Guide <ChevronRight size={14} />
                </Link>
              </div>

              <div className="rounded-md border border-hairline p-4 bg-canvas hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1 text-foreground">
                  <Link href="/tv/devices/fire-tv" className="hover:text-primary">
                    Amazon Fire TV Stick Setup
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Downloader app and player setup for Fire TV Stick 4K & Max.</p>
                <Link href="/tv/devices/fire-tv" className="text-xs text-primary font-semibold inline-flex items-center gap-1">
                  View Fire TV Guide <ChevronRight size={14} />
                </Link>
              </div>

              <div className="rounded-md border border-hairline p-4 bg-canvas hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1 text-foreground">
                  <Link href="/tv/devices/android" className="hover:text-primary">
                    Android & Google TV Setup
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Setup instructions for Android TV, Google TV, and TV boxes.</p>
                <Link href="/tv/devices/android" className="text-xs text-primary font-semibold inline-flex items-center gap-1">
                  View Android Guide <ChevronRight size={14} />
                </Link>
              </div>

              <div className="rounded-md border border-hairline p-4 bg-canvas hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1 text-foreground">
                  <Link href="/tv/devices/samsung-tv" className="hover:text-primary">
                    Samsung Smart TV (Tizen OS)
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">How to stream on Samsung Smart TVs with dedicated IPTV players.</p>
                <Link href="/tv/devices/samsung-tv" className="text-xs text-primary font-semibold inline-flex items-center gap-1">
                  View Samsung Guide <ChevronRight size={14} />
                </Link>
              </div>

              <div className="rounded-md border border-hairline p-4 bg-canvas hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1 text-foreground">
                  <Link href="/tv/devices/apple-tv" className="hover:text-primary">
                    Apple TV 4K (tvOS) Setup
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Installation and configuration for Apple TV 4K and iOS devices.</p>
                <Link href="/tv/devices/apple-tv" className="text-xs text-primary font-semibold inline-flex items-center gap-1">
                  View Apple TV Guide <ChevronRight size={14} />
                </Link>
              </div>

              <div className="rounded-md border border-hairline p-4 bg-canvas hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1 text-foreground">
                  <Link href="/tv/guides/iptv-buffering-troubleshooting" className="hover:text-primary">
                    Fix Buffering & Lag
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Optimize buffer settings, DNS, and ISP routing for smooth streaming.</p>
                <Link href="/tv/guides/iptv-buffering-troubleshooting" className="text-xs text-primary font-semibold inline-flex items-center gap-1">
                  Read Optimization Guide <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-surface-card border border-hairline py-16 sm:py-24 rounded-lg">
              <Container>
                  <div className="mx-auto max-w-3xl text-center">
                      <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">FAQs about IPTV in {name}</h2>
                  </div>
                  <div className="mx-auto mt-8 max-w-3xl">
                    <Accordion type="single" collapsible>
                      {pageFaqs.map((faq, i) => (
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

        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return allCountries.map((country) => ({
    country: country.id,
  }));
}
