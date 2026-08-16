import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { ShieldCheck, Tv, Zap, Headphones, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full border-b border-hairline bg-canvas">
      <Container className="relative z-10 flex flex-col items-center justify-center py-20 text-center sm:py-28 lg:py-32">
        <div className="w-full max-w-4xl">
          <p className="eyebrow-cap mb-4 text-xs font-bold uppercase tracking-wider text-primary">
            #1 IPTV Streaming Provider (2026)
          </p>
          <h1 className="text-balance font-headline text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Best IPTV Service for Live TV, Sports &amp; Movies
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-relaxed text-body sm:text-xl">
            Stream <span className="text-primary font-bold">24,000+</span> live HD &amp; 4K channels, major live sports, and <span className="text-primary font-bold">80,000+</span> movies and TV series with instant activation across all your favorite devices.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button asChild size="xl" className="w-full sm:w-auto font-semibold bg-primary text-ink hover:bg-primary-active">
              <Link href="/tv/pricing">View Plans <ArrowRight size={18} className="ml-1" /></Link>
            </Button>
            <Button
              asChild
              size="xl"
              variant="outline"
              className="w-full sm:w-auto font-semibold border-hairline text-foreground hover:bg-surface-card hover:border-hairline-strong"
            >
              <Link href="/tv/iptv-free-trial">
                Free Trial
              </Link>
            </Button>
          </div>

          <div className="mt-14 border-t border-hairline pt-8">
            <p className="eyebrow-cap text-xs font-semibold text-muted-foreground tracking-wider mb-4">Why Subscribers Choose Us</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm font-medium text-foreground">
              <div className="flex items-center justify-center gap-2.5 rounded-lg border border-hairline bg-surface-card p-3.5">
                <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-body-strong">HD &amp; 4K Quality</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 rounded-lg border border-hairline bg-surface-card p-3.5">
                <Tv className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-body-strong">Multi-Device</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 rounded-lg border border-hairline bg-surface-card p-3.5">
                <Zap className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-body-strong">Instant Activation</span>
              </div>
              <div className="flex items-center justify-center gap-2.5 rounded-lg border border-hairline bg-surface-card p-3.5">
                <Headphones className="h-4 w-4 text-primary shrink-0" />
                <span className="font-semibold text-body-strong">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
