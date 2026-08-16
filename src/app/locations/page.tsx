import Link from 'next/link';
import type { Metadata } from 'next';
import { Container } from '@/components/shared/Container';
import { allCountries } from '@/lib/countries';
import { FlagIcon } from '@/components/shared/FlagIcon';
import { getLocationsPageData } from '@/lib/data/locations-page';
import { Schema } from '@/components/shared/Schema';
import { generateMetadata as generatePageMetadata } from '@/lib/site-config';
import { BookOpen, Tv, ChevronRight } from 'lucide-react';

export function generateMetadata(): Metadata {
    const title = "IPTV Provider Service Locations | Available Worldwide";
    const description = "Our IPTV Provider is available in over 100 countries worldwide. Find your country and get the best IPTV streaming service for your region.";
    
    return generatePageMetadata({
        title,
        description,
        canonical: "/locations",
    });
}

export default async function LocationsPage() {
    const { breadcrumbSchema } = await getLocationsPageData();

    return (
        <>
            <Schema id="breadcrumb" schema={breadcrumbSchema} />
            <main className="py-16 sm:py-24">
                <Container>
                     <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted-foreground">
                      <ol className="flex flex-wrap items-center gap-2">
                        <li>
                          <Link href="/tv" className="hover:text-foreground">
                            Home
                          </Link>
                        </li>
                        <li>/</li>
                        <li className="text-foreground font-medium">
                            Service Locations
                        </li>
                      </ol>
                    </nav>
                    <div className="text-center">
                        <p className="eyebrow-cap mb-5 text-sm font-medium text-muted-foreground">Available Worldwide</p>
                        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
                            IPTV Provider Service Locations
                        </h1>
                        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
                            We offer our premium IPTV Provider in 197 countries worldwide. Find your country below to get started with the best streaming service in your region.
                        </p>
                    </div>

                    <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-y py-8">
                        <div>
                            <h2 className="font-headline text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
                                <BookOpen className="text-primary h-5 w-5" /> Informational IPTV Guides
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">Master IPTV technology, setup workflows, and performance optimization:</p>
                            <ul className="space-y-2.5 text-sm">
                                <li>
                                    <Link href="/tv/guides/what-is-iptv" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        What is IPTV? Technical & Functional Overview <ChevronRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tv/guides/how-does-iptv-work" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        How Does IPTV Work? Architecture & Protocols <ChevronRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tv/guides/iptv-setup-guide" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        Complete IPTV Setup Guide <ChevronRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tv/guides/iptv-buffering-troubleshooting" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        IPTV Buffering & Freezing Troubleshooting <ChevronRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tv/guides/how-to-choose-an-iptv-service" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        How to Choose an IPTV Service <ChevronRight size={14} />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="font-headline text-xl font-bold tracking-tight mb-4 flex items-center gap-2">
                                <Tv className="text-primary h-5 w-5" /> Device Setup Guides
                            </h2>
                            <p className="text-sm text-muted-foreground mb-4">Step-by-step installation instructions for popular streaming hardware:</p>
                            <ul className="space-y-2.5 text-sm">
                                <li>
                                    <Link href="/tv/devices/fire-tv" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        Amazon Fire TV Stick Setup Guide <ChevronRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tv/devices/android" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        Android TV & Google TV Installation <ChevronRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tv/devices/samsung-tv" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        Samsung Smart TV (Tizen OS) Guide <ChevronRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tv/devices/lg-tv" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        LG Smart TV (webOS) Activation <ChevronRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/tv/devices/apple-tv" className="font-medium hover:text-primary inline-flex items-center gap-1">
                                        Apple TV 4K (tvOS) Setup Guide <ChevronRight size={14} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2 className="font-headline text-2xl font-bold tracking-tight mb-6">Global Country Directory</h2>
                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                        {allCountries.map(country => (
                            <li key={country.id} className="flex">
                                <Link 
                                    href={`/tv/country/${country.id}`}
                                    className="flex w-full min-h-[52px] items-center gap-3 rounded-lg border border-hairline bg-surface-card p-3 transition-colors hover:border-hairline-strong hover:bg-surface-elevated"
                                >
                                    <FlagIcon countryCode={country.code} countryName={country.name} className="h-5 w-5 flex-shrink-0" />
                                    <span className="font-medium text-sm text-body-strong leading-tight">{country.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </Container>
            </main>
        </>
    );
}
