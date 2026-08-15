import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { ShieldCheck, Tv, Zap, Headphones, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full border-b border-border bg-background">
      <Container className="relative z-10 flex flex-col items-center justify-center py-20 text-center sm:py-28 lg:py-32">
        <div className="w-full max-w-4xl">
          <p className="eyebrow-cap mb-4 text-xs font-semibold uppercase tracking-wider text-primary">
            #1 IPTV Streaming Provider (2026)
          </p>
          <h1 className="text-balance font-headline text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Best IPTV Service for Live TV, Sports &amp; Movies
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Stream 24,000+ live HD &amp; 4K channels, major live sports, and 80,000+ movies and TV series with instant activation across all your favorite devices.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="xl" className="w-full sm:w-auto font-semibold">
              <Link href="/tv/pricing">View Plans <ArrowRight size={18} className="ml-1" /></Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="w-full sm:w-auto font-semibold"
            >
              <Link href="/tv/iptv-free-trial">
                Free Trial
              </Link>
            </Button>
          </div>

          <div className="mt-12 border-t pt-8">
            <p className="text-xs uppercase font-bold text-muted-foreground tracking-wider mb-4">Why Subscribers Choose Us</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-medium text-foreground">
              <div className="flex items-center justify-center gap-2 rounded-lg border bg-muted/20 p-3">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span>HD &amp; 4K Quality</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border bg-muted/20 p-3">
                <Tv className="h-4 w-4 text-primary shrink-0" />
                <span>Multi-Device</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border bg-muted/20 p-3">
                <Zap className="h-4 w-4 text-primary shrink-0" />
                <span>Instant Activation</span>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border bg-muted/20 p-3">
                <Headphones className="h-4 w-4 text-primary shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
