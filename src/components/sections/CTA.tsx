import { Button } from "@/components/ui/button";
import { Container } from "../shared/Container";
import { Reveal } from "../shared/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-28 border-t">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-night p-10 text-center md:p-16 border border-border/20 shadow-xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Choose Your IPTV Plan &amp; Start Streaming
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-white/70">
                Get instant access to 24,000+ live HD &amp; 4K channels, major live sports, and 80,000+ on-demand movies. Instant automated setup.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="xl" className="w-full sm:w-auto font-semibold">
                  <Link href="/tv/pricing">
                    Choose Your IPTV Plan <ArrowRight size={18} className="ml-1" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                  <Link href="/tv/iptv-free-trial">
                    Start Free Trial
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
