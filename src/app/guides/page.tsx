import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { allGuides } from "@/lib/guides";
import { Schema } from "@/components/shared/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { BookOpen, ChevronRight, HelpCircle, Laptop, Layers, ShieldCheck, Tv, Wrench } from "lucide-react";

export function generateMetadata(): Metadata {
  return generatePageMetadata({
    title: "IPTV Streaming Guides & Tutorials (2026)",
    description: "Comprehensive guides, troubleshooting tips, protocol breakdowns, and setup tutorials for IPTV streaming. Learn how IPTV works, compare options, and optimize your playback.",
    canonical: "/guides",
  });
}

const deviceGuides = [
  { id: "fire-tv", name: "Amazon Fire TV Stick", desc: "Downloader app & TiviMate setup for Firestick 4K" },
  { id: "android", name: "Android TV & Google TV", desc: "TiviMate & IPTV Smarters configuration for Android boxes" },
  { id: "samsung-tv", name: "Samsung Smart TV", desc: "Smartone IPTV & IBO Player setup on Tizen OS" },
  { id: "lg-tv", name: "LG Smart TV", desc: "webOS app installation & Xtream Codes API login" },
  { id: "apple-tv", name: "Apple TV 4K", desc: "iPlayTV & tvOS player configuration" },
  { id: "ios", name: "iPhone & iPad", desc: "GSE Smart IPTV & iOS setup guide" },
  { id: "windows", name: "Windows PC", desc: "VLC Media Player network stream configuration" },
  { id: "macos", name: "Mac / macOS", desc: "Native macOS player setup for Apple Silicon" },
  { id: "roku", name: "Roku Device", desc: "Screen mirroring & AirPlay casting guide" },
  { id: "mag", name: "Infomir MAG Box", desc: "Stalker Portal 1 URL & MAC address configuration" },
  { id: "troubleshooting", name: "Stream Troubleshooting", desc: "Fix IPTV buffering, lag, and connection drops" },
];

export default function GuidesIndexPage() {
  const baseUrl = `${process.env.NEXT_PUBLIC_BASE_URL || 'https://www.iptvprovider.me'}/tv`;
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: `${baseUrl}/` },
    { name: "Guides", item: `${baseUrl}/guides` }
  ]);

  const categories = Array.from(new Set(allGuides.map((g) => g.category)));

  return (
    <>
      <Schema id="breadcrumb" schema={breadcrumbSchema} />

      <main className="py-16 sm:py-24">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/tv" className="hover:text-foreground">Home</Link>
              </li>
              <li>/</li>
              <li className="font-medium text-foreground">Guides</li>
            </ol>
          </nav>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
              IPTV Streaming Guides & Knowledge Base
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Explore step-by-step installation guides, protocol specifications, EPG setup tutorials, buffering fixes, and hardware configuration guides.
            </p>
          </div>

          <section className="my-12 rounded-lg border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="text-primary h-6 w-6 shrink-0" />
              <h2 className="font-headline text-2xl font-bold tracking-tight">Editorial & Review Standards</h2>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Our streaming knowledge base is developed and maintained in accordance with strict technical standards:
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Terminology Consistency:</strong> Technical terms (such as HLS, MPEG-TS, Xtream Codes API, and XMLTV) conform strictly to telecommunications industry specifications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Platform Compatibility:</strong> Device setup procedures are verified against official platform operating workflows (Fire OS, Tizen OS, webOS, tvOS, and Android TV).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Software Separation:</strong> Standalone third-party player applications (e.g. TiviMate, IPTV Smarters) are explicitly distinguished from IPTV subscription service credentials.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                <span><strong>Regular Workflow Audits:</strong> Guides are updated whenever streaming operating systems or application interface workflows materially change.</span>
              </li>
            </ul>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 border-b pb-3 mb-6">
              <Tv className="text-primary h-6 w-6" />
              <h2 className="font-headline text-2xl font-bold tracking-tight">Device Setup Guides</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {deviceGuides.map((device) => (
                <div key={device.id} className="rounded-lg border bg-card p-4 hover:border-primary/50 transition-colors flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline font-bold text-base mb-1">
                      <Link href={`/tv/devices/${device.id}`} className="hover:text-primary">
                        {device.name}
                      </Link>
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {device.desc}
                    </p>
                  </div>
                  <Link
                    href={`/tv/devices/${device.id}`}
                    className="mt-4 text-xs text-primary font-medium inline-flex items-center gap-1 hover:underline"
                  >
                    View Setup Instructions <ChevronRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <div className="space-y-12">
            {categories.map((category) => {
              const categoryGuides = allGuides.filter((g) => g.category === category);
              return (
                <section key={category} className="space-y-6">
                  <div className="flex items-center gap-3 border-b pb-3">
                    {category === "Basics" && <BookOpen className="text-primary h-6 w-6" />}
                    {category === "Comparison" && <Layers className="text-primary h-6 w-6" />}
                    {category === "Setup" && <Wrench className="text-primary h-6 w-6" />}
                    {category === "Troubleshooting" && <HelpCircle className="text-primary h-6 w-6" />}
                    {category === "Apps & Hardware" && <Laptop className="text-primary h-6 w-6" />}
                    <h2 className="font-headline text-2xl font-bold tracking-tight">{category} Guides</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryGuides.map((guide) => (
                      <article
                        key={guide.slug}
                        className="rounded-lg border bg-card p-6 shadow-sm hover:border-primary/50 transition-colors flex flex-col justify-between"
                      >
                        <div>
                          <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                            {guide.category}
                          </div>
                          <h3 className="font-headline text-xl font-bold mb-3 hover:text-primary transition-colors">
                            <Link href={`/tv/guides/${guide.slug}`}>
                              {guide.title}
                            </Link>
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3">
                            {guide.description}
                          </p>
                        </div>
                        <div className="mt-6 pt-4 border-t flex items-center justify-between text-sm">
                          <span className="text-xs text-muted-foreground">
                            Updated {guide.updatedAt}
                          </span>
                          <Link
                            href={`/tv/guides/${guide.slug}`}
                            className="font-medium text-primary flex items-center gap-1 hover:underline"
                          >
                            Read Guide <ChevronRight size={16} />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </main>
    </>
  );
}
