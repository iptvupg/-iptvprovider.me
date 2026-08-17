import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { howToArticles, getSafeArticleData } from "@/lib/how-to";
import { Check, Clock, Wrench, BookOpen, ChevronRight, ArrowRight, Tv } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import InternalLinks from "@/components/shared/InternalLinks";
import { Schema } from "@/components/shared/Schema";
import { generateArticleSchema, generateHowToSchema, generateFAQPageSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { plans } from "@/lib/site-data/pricing";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { getPlaceholderImage } from "@/lib/server/image-blur-server";
import { getGuideBySlug } from "@/lib/guides";

const devicePairings: Record<string, string[]> = {
  'fire-tv': ['android', 'samsung-tv', 'apple-tv'],
  'android': ['fire-tv', 'samsung-tv', 'troubleshooting'],
  'samsung-tv': ['lg-tv', 'fire-tv', 'android'],
  'lg-tv': ['samsung-tv', 'fire-tv', 'apple-tv'],
  'apple-tv': ['ios', 'macos', 'fire-tv'],
  'ios': ['apple-tv', 'macos', 'android'],
  'windows': ['macos', 'android', 'troubleshooting'],
  'macos': ['windows', 'ios', 'apple-tv'],
  'roku': ['fire-tv', 'samsung-tv', 'troubleshooting'],
  'mag': ['android', 'fire-tv', 'troubleshooting'],
  'troubleshooting': ['fire-tv', 'android', 'samsung-tv'],
};

type Props = {
  params: Promise<{ device: string; }>;
};

type ArticleType = (NonNullable<ReturnType<typeof getSafeArticleData>> & {
    image?: {
        imageUrl: string;
        imageHint: string;
        width?: number;
        height?: number;
        blurDataURL?: string;
    }
}) | undefined;

async function getArticleData(deviceId: string): Promise<ArticleType> {
    const article = getSafeArticleData(deviceId);
    if (!article) return undefined;

    const imageInfo = PlaceHolderImages.find(img => img.id === `guide-image-${article.id}`);
    if (!imageInfo) return { ...article, image: undefined };

    const blurDataURL = await getPlaceholderImage(imageInfo.imageUrl);
    return {
        ...article,
        image: {
            ...imageInfo,
            blurDataURL,
        },
    };
}

function StructuredData({ article }: { article: ArticleType }) {
    if (!article) return null;
    const { id, title, description, steps, faqs, image, datePublished, dateModified, primaryKeyword, totalTime } = article;
    const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me'}/tv`;

    const articleSchema = generateArticleSchema({
        headline: title,
        description,
        image: image?.imageUrl,
        datePublished,
        dateModified,
        url: `${baseUrl}/devices/${id}`,
    });

    const howToSchema = generateHowToSchema({
        name: title,
        description: description,
        totalTime: totalTime,
        image: image ? {
            url: image.imageUrl,
            width: image.width,
            height: image.height
        } : undefined,
        steps: steps.map((step, index) => ({
            name: step.title,
            text: step.description.replace(/<[^>]+>/g, ''),
            url: `${baseUrl}/devices/${id}#step-${index + 1}`,
        })),
    });

    const faqSchema = faqs ? generateFAQPageSchema(faqs) : null;

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", item: `${baseUrl}/` },
        { name: title, item: `${baseUrl}/devices/${id}` }
    ]);

    return (
        <>
            <Schema id="article" schema={articleSchema} />
            <Schema id="how-to" schema={howToSchema} />
            {faqSchema && <Schema id="faq" schema={faqSchema} />}
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
        </>
    );
}

export async function generateMetadata(props: Props): Promise<Metadata> {
    const params = await props.params;
    const article = getSafeArticleData(params.device);

    if (!article) {
      notFound();
    }

    const { title, description } = article;

    const baseMeta = generatePageMetadata({
      title,
      description,
      canonical: `/devices/${params.device}`,
    });

    return {
      ...baseMeta,
      title: {
        absolute: title,
      },
    };
}

export default async function HowToPage(props: { params: Promise<{ device: string }>}) {
    const params = await props.params;
    const article = await getArticleData(params.device);

    if (!article) {
      notFound();
    }

    const { title, description, directAnswer, steps, troubleshooting, faqs, image, primaryKeyword, id, totalTime, dateModified, relatedGuideSlugs } = article;
    const extraSections = 'extraSections' in article ? (article as unknown as { extraSections?: { id: string; title: string; content: string }[] }).extraSections : undefined;
    const totalTimeInMinutes = totalTime?.replace('PT', '').replace('M', '');

    const relatedGuides = (relatedGuideSlugs || [])
      .map((slug: string) => getGuideBySlug(slug))
      .filter((g): g is NonNullable<typeof g> => Boolean(g));

    const relatedDeviceIds = devicePairings[id] || howToArticles.filter(a => a.id !== id).slice(0, 3).map(a => a.id);
    const relatedDevicesList = relatedDeviceIds
      .map(devId => howToArticles.find(a => a.id === devId))
      .filter((d): d is NonNullable<typeof d> => Boolean(d));

    return (
      <>
        <StructuredData article={article} />
        <main className="py-12 sm:py-20">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/tv" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/tv/devices/troubleshooting" className="hover:text-foreground">
                    Device Guides
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
                  {title}
                </li>
              </ol>
            </nav>

            <article>
              <header className="mb-8 text-center sm:text-left border-b pb-8">
                <p className="eyebrow-cap mb-3 text-xs font-semibold text-primary uppercase tracking-wider">Device Setup Guide</p>
                <h1 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  {title}
                </h1>
                <p className="mt-4 max-w-3xl text-lg text-muted-foreground font-medium">
                  {description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
                  {totalTimeInMinutes && (
                    <div className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Estimated Setup: {totalTimeInMinutes} minutes</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <span>Last Updated:</span>
                    <time dateTime={dateModified}>{new Date(dateModified).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  </div>
                </div>
              </header>

              {directAnswer && (
                <div className="my-8 rounded-lg bg-primary/10 border border-primary/20 p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Direct Setup Summary:
                  </div>
                  <p className="text-base font-semibold text-foreground">
                    {directAnswer}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <Card className="not-prose my-6">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">What You Need Before Starting</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2.5 text-sm my-0">
                          <li className="flex items-center gap-3"><Check className="h-4 w-4 flex-shrink-0 text-primary" /> A compatible {primaryKeyword} connected to display</li>
                          <li className="flex items-center gap-3"><Check className="h-4 w-4 flex-shrink-0 text-primary" /> High-speed internet (minimum 25 Mbps recommended)</li>
                          <li className="flex items-center gap-3"><Check className="h-4 w-4 flex-shrink-0 text-primary" /> Active IPTV provider credentials (Xtream API or M3U link)</li>
                          <li className="flex items-center gap-3"><Check className="h-4 w-4 flex-shrink-0 text-primary" /> Compatible player software installed on device</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <h2 className="font-headline text-2xl font-bold tracking-tight mt-8 mb-4">Step-by-Step Installation Guide for {primaryKeyword}</h2>
                    <p className="text-muted-foreground text-base mb-6">Follow these step-by-step configuration instructions to get live TV channels and VOD media running on your {primaryKeyword}:</p>
                    
                    <div className="space-y-8 my-8">
                      {steps.map((step, index) => (
                        <div key={index} id={`step-${index + 1}`} className="flex gap-6">
                          <div className="flex flex-col items-center">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">{index + 1}</div>
                            {index < steps.length - 1 && <div className="w-px flex-grow bg-border mt-2" />}
                          </div>
                          <div>
                            <h3 className="font-headline text-xl font-semibold mt-1 mb-2">{step.title}</h3>
                            <div className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    {troubleshooting && troubleshooting.length > 0 && (
                      <div className="my-10 rounded-lg border bg-muted/20 p-6 sm:p-8">
                        <h2 className="font-headline text-2xl font-bold tracking-tight mb-4 flex items-center gap-2">
                          <Wrench className="text-primary h-6 w-6" /> Device Troubleshooting & Solutions
                        </h2>
                        <div className="space-y-4">
                          {troubleshooting.map((item, idx) => (
                            <div key={idx} className="rounded-md border bg-background p-4">
                              <h3 className="font-semibold text-foreground text-base mb-1">Issue: {item.problem}</h3>
                              <p className="text-sm text-muted-foreground">{item.solution}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {extraSections && extraSections.length > 0 && extraSections.map((section: { id: string; title: string; content: string }) => (
                      <div key={section.id} className="my-10">
                        <h2 className="font-headline text-2xl font-bold mb-4">{section.title}</h2>
                        <div className="text-muted-foreground text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: section.content }} />
                      </div>
                    ))}

                    {faqs && (
                      <div className="my-10 rounded-lg bg-muted/30 p-6 sm:p-8">
                        <h2 className="font-headline text-2xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                          {faqs.map((faq, i) => (
                            <AccordionItem key={i} value={`item-${i}`}>
                              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                              <AccordionContent className="text-muted-foreground">
                                <p>{faq.answer}</p>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    )}

                    {relatedGuides.length > 0 && (
                      <div className="my-10 border-t pt-8">
                        <h3 className="font-headline text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
                          <BookOpen className="text-primary h-5 w-5" /> Recommended Informational Guides
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {relatedGuides.map((guide) => (
                            <div key={guide.slug} className="rounded-lg border p-4 hover:border-primary transition-colors">
                              <h4 className="font-bold text-sm mb-2">
                                <Link href={`/tv/guides/${guide.slug}`} className="hover:text-primary">
                                  {guide.title}
                                </Link>
                              </h4>
                              <Link
                                href={`/tv/guides/${guide.slug}`}
                                className="text-xs text-primary font-medium inline-flex items-center gap-1 mt-1"
                              >
                                Read Guide <ChevronRight size={14} />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {relatedDevicesList.length > 0 && (
                      <div className="my-10 border-t pt-8">
                        <h3 className="font-headline text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
                          <Tv className="text-primary h-5 w-5" /> Other Device Setup Guides
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                          {relatedDevicesList.map((dev) => (
                            <div key={dev.id} className="rounded-lg border border-hairline bg-surface-card p-4 transition-colors hover:border-hairline-strong hover:bg-surface-elevated">
                              <h4 className="font-bold text-sm mb-1 text-foreground">
                                <Link href={`/tv/devices/${dev.id}`} className="hover:text-primary">
                                  {dev.primaryKeyword || dev.title}
                                </Link>
                              </h4>
                              <Link
                                href={`/tv/devices/${dev.id}`}
                                className="text-xs text-primary font-medium inline-flex items-center gap-1 mt-2"
                              >
                                View Setup Guide <ChevronRight size={14} />
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="not-prose my-10 rounded-lg border bg-card p-6 sm:p-8 text-center sm:text-left shadow-sm">
                      <h3 className="font-headline text-xl font-bold tracking-tight text-foreground mb-2">Ready to Start Watching on Your {primaryKeyword}?</h3>
                      <p className="text-muted-foreground mb-6 text-sm">Experience crystal-clear live TV streaming and VOD with instant activation on your device.</p>
                      <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
                        <Button asChild size="lg" variant="default">
                          <Link href="/tv/pricing" className="flex items-center gap-2">
                            View Pricing & Plans <ArrowRight size={16} />
                          </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                          <Link href="/tv/iptv-free-trial">
                            Start 24-Hour Free Trial
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <aside className="lg:col-span-1 space-y-8">
                  {image && image.blurDataURL && (
                    <Card>
                      <CardContent className="p-0">
                        <Image
                          src={image.imageUrl}
                          alt={`${primaryKeyword} - ${title}`}
                          width={image.width || 600}
                          height={image.height || 400}
                          data-ai-hint={image.imageHint}
                          priority
                          className="object-cover rounded-lg w-full h-auto"
                          placeholder="blur"
                          blurDataURL={image.blurDataURL}
                        />
                      </CardContent>
                    </Card>
                  )}
                  <InternalLinks currentId={id} />
                </aside>
              </div>
            </article>
          </Container>
        </main>
      </>
    );
}

export async function generateStaticParams() {
  return howToArticles.map((article) => ({
    device: article.id,
  }));
}
