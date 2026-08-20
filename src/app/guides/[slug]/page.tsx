import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { allGuides, getGuideBySlug } from "@/lib/guides";
import { getGuidePageData } from "@/lib/data/guide-page";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, Info, Tv } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const guide = getGuideBySlug(params.slug);

  if (!guide) {
    notFound();
  }

  const baseMeta = generatePageMetadata({
    title: guide.title,
    description: guide.description,
    canonical: `/guides/${params.slug}`,
  });

  return {
    ...baseMeta,
    title: {
      absolute: guide.title,
    },
  };
}

export default async function GuidePage(props: Props) {
  const params = await props.params;
  const { guide, breadcrumbSchema, articleSchema, faqSchema } = await getGuidePageData(params.slug);

  const relatedGuidesList = guide.relatedGuides
    .map((s) => getGuideBySlug(s))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />
      <Schema id="article" schema={articleSchema} />
      <Schema id="faq" schema={faqSchema} />

      <main className="py-12 sm:py-20">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/tv" className="hover:text-foreground">Home</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/tv/guides" className="hover:text-foreground">Guides</Link>
              </li>
              <li>/</li>
              <li className="font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
                {guide.h1}
              </li>
            </ol>
          </nav>

          <article className="max-w-4xl mx-auto">
            <header className="mb-10 text-center sm:text-left border-b pb-8">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                Category: {guide.category}
              </div>
              <h1 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                {guide.h1}
              </h1>
              <p className="mt-4 text-xl text-muted-foreground font-medium">
                {guide.summary}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span>By {guide.author.name} ({guide.author.role})</span>
                <span>•</span>
                <span>Last Updated: {guide.updatedAt}</span>
              </div>
            </header>

            {guide.editorialMethodology && (
              <div className="mb-10 rounded-lg bg-muted/40 border p-4 text-xs text-muted-foreground flex items-start gap-3">
                <Info size={16} className="text-primary mt-0.5 shrink-0" />
                <div>
                  <span className="font-semibold text-foreground">Editorial & Review Standards: </span>
                  {guide.editorialMethodology}
                </div>
              </div>
            )}

            <div className="space-y-12 leading-relaxed">
              {guide.sections.map((section) => (
                <section key={section.id} id={section.id} className="scroll-mt-20">
                  <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground mb-4">
                    {section.heading}
                  </h2>

                  {section.directAnswer && (
                    <div className="my-4 rounded-lg bg-primary/10 border border-primary/20 p-5">
                      <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                        Direct Answer:
                      </div>
                      <p className="text-base font-semibold text-foreground">
                        {section.directAnswer}
                      </p>
                    </div>
                  )}

                  <div className="space-y-4 text-muted-foreground text-base">
                    {section.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {section.bulletPoints && section.bulletPoints.length > 0 && (
                    <ul className="mt-4 space-y-3">
                      {section.bulletPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-base text-foreground">
                          <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.definitionList && section.definitionList.length > 0 && (
                    <dl className="mt-6 space-y-4 rounded-lg border bg-muted/20 p-5">
                      {section.definitionList.map((item, i) => (
                        <div key={i} className="border-b pb-3 last:border-0 last:pb-0">
                          <dt className="font-headline font-bold text-foreground text-sm flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-primary" />
                            {item.term}
                          </dt>
                          <dd className="mt-1 text-sm text-muted-foreground pl-4">
                            {item.definition}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  )}

                  {section.table && (
                    <div className="mt-6">
                      <div className="sm:hidden mb-2 text-xs text-muted-foreground flex items-center gap-1.5">
                        <span>← Scroll table horizontally to view all columns →</span>
                      </div>
                      <div className="overflow-x-auto rounded-lg border border-hairline bg-surface-card">
                        <table className="w-full text-left text-sm min-w-[500px]">
                          <thead className="bg-surface-elevated text-foreground border-b border-hairline font-bold">
                            <tr>
                              {section.table.headers.map((h, i) => (
                                <th key={i} className="p-3.5 whitespace-nowrap">{h}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-hairline text-body">
                            {section.table.rows.map((row, rIndex) => (
                              <tr key={rIndex} className="hover:bg-surface-elevated/50 transition-colors">
                                {row.map((cell, cIndex) => (
                                  <td key={cIndex} className="p-3.5 font-medium text-foreground">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                </section>
              ))}

              <section id="faq" className="pt-8 border-t">
                <h2 className="font-headline text-2xl font-bold tracking-tight text-foreground mb-6">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {guide.faq.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {relatedGuidesList.length > 0 && (
                <section className="pt-8 border-t">
                  <h3 className="font-headline text-xl font-bold text-foreground mb-4">
                    Related Informational Guides
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {relatedGuidesList.map((g) => (
                      <Link
                        key={g.slug}
                        href={`/tv/guides/${g.slug}`}
                        className="rounded-lg border p-4 hover:border-primary transition-colors block"
                      >
                        <h4 className="font-bold text-sm text-foreground mb-1">
                          {g.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {g.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}


              <section className="pt-8 border-t">
                <div className="rounded-lg border bg-card p-6 sm:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                      Ready to Start Streaming IPTV?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Access 24,000+ live HD/4K channels with instant activation and 24/7 technical support.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 shrink-0">
                    <Button asChild size="default" variant="default">
                      <Link href="/tv/pricing">
                        View Pricing Plans <ArrowRight size={16} />
                      </Link>
                    </Button>
                    <Button asChild size="default" variant="outline">
                      <Link href="/tv/iptv-free-trial">
                        Free Trial
                      </Link>
                    </Button>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return allGuides.map((guide) => ({
    slug: guide.slug,
  }));
}
