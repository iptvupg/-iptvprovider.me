import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Check } from "lucide-react";

export function FreeTrialBanner() {
  return (
    <section className="py-16 bg-card border-t border-b">
      <Container>
        <div className="rounded-2xl border bg-gradient-to-br from-primary/10 via-background to-card p-8 sm:p-12 text-center sm:text-left flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
              <Zap size={14} /> Test Before You Buy
            </div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-3">
              Start Your IPTV Free Trial
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">
              Experience 24,000+ live HD/4K channels, major live sports broadcasts, and 80,000+ VOD titles. Instant automated credentials delivered right to your email.
            </p>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1.5"><Check size={14} className="text-primary" /> Instant Activation</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-primary" /> No Credit Card Required</span>
              <span className="flex items-center gap-1.5"><Check size={14} className="text-primary" /> Works on All Devices</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Button asChild size="xl" className="font-semibold w-full sm:w-auto">
              <Link href="/tv/iptv-free-trial">
                Start Free Trial Now <ArrowRight size={18} className="ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
