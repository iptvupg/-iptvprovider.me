'use client';

import Link from 'next/link';
import { FlagIcon } from '@/components/shared/FlagIcon';
import { ChevronRight, Globe } from 'lucide-react';

interface TickerCountry {
  name: string;
  id: string;
  code: string;
  count: string;
}

const featuredCountries: TickerCountry[] = [
  { name: 'USA', id: 'united-states', code: 'us', count: '5K+' },
  { name: 'UK', id: 'united-kingdom', code: 'gb', count: '3K+' },
  { name: 'Canada', id: 'canada', code: 'ca', count: '2K+' },
  { name: 'France', id: 'france', code: 'fr', count: '2K+' },
  { name: 'Germany', id: 'germany', code: 'de', count: '2K+' },
  { name: 'Spain', id: 'spain', code: 'es', count: '1.5K+' },
  { name: 'Italy', id: 'italy', code: 'it', count: '1.5K+' },
  { name: 'Brazil', id: 'brazil', code: 'br', count: '1K+' },
  { name: 'Mexico', id: 'mexico', code: 'mx', count: '800+' },
  { name: 'Japan', id: 'japan', code: 'jp', count: '500+' },
  { name: 'Korea', id: 'korea', code: 'kr', count: '400+' },
  { name: 'Australia', id: 'australia', code: 'au', count: '600+' },
  { name: 'India', id: 'india', code: 'in', count: '2K+' },
  { name: 'Portugal', id: 'portugal', code: 'pt', count: '500+' },
  { name: 'Netherlands', id: 'netherlands', code: 'nl', count: '600+' },
  { name: 'Turkey', id: 'turkey', code: 'tr', count: '1K+' },
  { name: 'Saudi Arabia', id: 'saudi-arabia', code: 'sa', count: '1K+' },
  { name: 'UAE', id: 'united-arab-emirates', code: 'ae', count: '800+' },
  { name: 'Egypt', id: 'egypt', code: 'eg', count: '600+' },
  { name: 'Morocco', id: 'morocco', code: 'ma', count: '400+' },
];

export function CountryTicker() {
  return (
    <section className="relative overflow-hidden py-10 bg-surface-soft border-y border-hairline" aria-label="Global Service Availability">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary border border-primary/20">
              <Globe className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Global Streaming Coverage</p>
              <h2 className="font-headline text-lg sm:text-xl font-bold tracking-tight text-foreground">
                Available in <span className="text-primary font-bold">197+ Countries</span> Worldwide
              </h2>
            </div>
          </div>
          <Link
            href="/tv/locations"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:underline transition-colors"
          >
            Explore all 197 country directories <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Infinite Scrolling Ticker Wrapper with Edge Gradients */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-28 bg-gradient-to-r from-surface-soft to-transparent" />
        
        {/* Right Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-28 bg-gradient-to-l from-surface-soft to-transparent" />

        {/* Ticker Track */}
        <div className="animate-ticker flex w-max gap-3 sm:gap-4 py-2">
          {/* First set */}
          {featuredCountries.map((country, idx) => (
            <Link
              key={`country-1-${idx}`}
              href={`/tv/country/${country.id}`}
              className="group flex items-center gap-2.5 rounded-lg border border-hairline bg-surface-card px-3.5 py-2.5 transition-all duration-200 hover:border-primary hover:bg-surface-elevated hover:-translate-y-0.5 shrink-0"
            >
              <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm">
                <FlagIcon countryCode={country.code} countryName={country.name} className="h-6 w-6 object-cover" />
              </span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {country.name}
              </span>
              <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                {country.count}
              </span>
            </Link>
          ))}

          {/* Duplicated set for seamless loop */}
          {featuredCountries.map((country, idx) => (
            <Link
              key={`country-2-${idx}`}
              href={`/tv/country/${country.id}`}
              className="group flex items-center gap-2.5 rounded-lg border border-hairline bg-surface-card px-3.5 py-2.5 transition-all duration-200 hover:border-primary hover:bg-surface-elevated hover:-translate-y-0.5 shrink-0"
              tabIndex={-1}
              aria-hidden="true"
            >
              <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full shadow-sm">
                <FlagIcon countryCode={country.code} countryName={country.name} className="h-6 w-6 object-cover" />
              </span>
              <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                {country.name}
              </span>
              <span className="rounded-full bg-primary/10 border border-primary/20 px-2 py-0.5 text-xs font-semibold text-primary">
                {country.count}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
