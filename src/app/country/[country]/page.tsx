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

  const title = `Best IPTV Provider in ${country.name} | Reliable Streaming`;
  const description = `Get the best IPTV Provider in ${country.name}. Enjoy 24,000+ channels, HD/4K quality, and instant activation. Perfect for sports, movies, and TV shows in ${country.name}.`;

  return generatePageMetadata({
    title,
    description,
    canonical: `/country/${params.country}`,
  });
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
                <ol className="flex items-center gap-2">
                    <li>
                        <Link href="/tv" className="hover:text-foreground">Home</Link>
                    </li>
                    <li>/</li>
                    <li>
                        <Link href="/tv/locations" className="hover:text-foreground">Locations</Link>
                    </li>
                    <li>/</li>
                    <li>
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
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button asChild size="lg">
                <Link href="/tv/pricing">Get Your Plan for {name}</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/tv/iptv-free-trial">Start Your Free Trial in {name}</Link>
              </Button>
            </div>
          </div>

          <section className="py-16 sm:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Us for {name}?</h2>
              <p className="mt-4 text-muted-foreground">We are the top-rated IPTV provider in {name} for a reason. Our service is optimized for viewers in your country, offering unparalleled stability and channel selection.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Tv size={20} className="text-primary"/> Local & International Channels</h3>
                    <p className="text-muted-foreground">Get access to all local {name} channels plus thousands of international sports, movies, and news channels.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Zap size={20} className="text-primary"/> Instant Activation</h3>
                    <p className="text-muted-foreground">Your IPTV Provider is activated immediately after payment. Start watching in {name} within minutes.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Check size={20} className="text-primary"/> HD/4K Quality</h3>
                    <p className="text-muted-foreground">Enjoy a superior viewing experience with crystal clear streaming, perfect for the modern TVs available in {name}.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Shield size={20} className="text-primary"/> Anti-Freeze Technology</h3>
                    <p className="text-muted-foreground">Our powerful servers ensure a smooth, buffer-free experience, even during peak times in {name}.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><MessageCircle size={20} className="text-primary"/> 24/7 Support</h3>
                    <p className="text-muted-foreground">Our dedicated support team is available 24/7 to assist our customers in {name} with any questions.</p>
                </div>
                <div className="rounded-lg bg-muted/30 p-6 dark:bg-card/50">
                    <h3 className="mb-2 flex items-center gap-2 font-headline text-xl"><Smartphone size={20} className="text-primary"/> Works on All Devices</h3>
                    <p className="text-muted-foreground">Watch on your Smart TV, Android, iOS, Fire Stick, or computer anywhere in {name}.</p>
                </div>
            </div>
          </section>

          <section className="mb-16 rounded-lg border bg-card p-6 sm:p-8">
            <h2 className="font-headline text-2xl font-bold tracking-tight mb-2 flex items-center gap-2">
              <BookOpen className="text-primary h-6 w-6" /> Recommended IPTV Guides
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Learn how to set up and optimize your IPTV streaming setup in {name} with our step-by-step technical guides:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-md border p-4 bg-background hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1">
                  <Link href="/tv/guides/what-is-iptv" className="hover:text-primary">
                    Learn how IPTV works
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Understanding IPTV technology and network protocols.</p>
                <Link href="/tv/guides/what-is-iptv" className="text-xs text-primary font-medium inline-flex items-center gap-1">
                  Read Article <ChevronRight size={14} />
                </Link>
              </div>

              <div className="rounded-md border p-4 bg-background hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1">
                  <Link href="/tv/guides/iptv-setup-guide" className="hover:text-primary">
                    Complete IPTV setup guide
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Step-by-step app installation across all streaming hardware.</p>
                <Link href="/tv/guides/iptv-setup-guide" className="text-xs text-primary font-medium inline-flex items-center gap-1">
                  Read Guide <ChevronRight size={14} />
                </Link>
              </div>

              <div className="rounded-md border p-4 bg-background hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1">
                  <Link href="/tv/guides/iptv-buffering-troubleshooting" className="hover:text-primary">
                    How to fix IPTV buffering
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Fix stream lag, packet loss, and connection drops.</p>
                <Link href="/tv/guides/iptv-buffering-troubleshooting" className="text-xs text-primary font-medium inline-flex items-center gap-1">
                  Read Guide <ChevronRight size={14} />
                </Link>
              </div>

              <div className="rounded-md border p-4 bg-background hover:border-primary transition-colors">
                <h3 className="font-semibold text-sm mb-1">
                  <Link href="/tv/devices/fire-tv" className="hover:text-primary">
                    Set up IPTV on Fire TV
                  </Link>
                </h3>
                <p className="text-xs text-muted-foreground mb-3">Downloader app and player setup for Firestick 4K.</p>
                <Link href="/tv/devices/fire-tv" className="text-xs text-primary font-medium inline-flex items-center gap-1">
                  View Device Guide <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </section>

          <section className="bg-muted/30 py-16 dark:bg-card/30 sm:py-24 rounded-lg">
              <Container>
                  <div className="mx-auto max-w-3xl text-center">
                      <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">FAQs about IPTV in {name}</h2>
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
