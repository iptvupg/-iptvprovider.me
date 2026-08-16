import { Button } from "@/components/ui/button";
import { Container } from "../shared/Container";
import { Reveal } from "../shared/Reveal";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 sm:py-28 border-t border-hairline bg-canvas">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-lg bg-primary p-10 text-center md:p-16 text-ink shadow-none">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="font-headline text-3xl font-extrabold text-ink sm:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
                Choose Your IPTV Plan &amp; Start Streaming
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-ink/85 font-medium">
                Get instant access to 24,000+ live HD &amp; 4K channels, major live sports, and 80,000+ on-demand movies. Instant automated setup.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="xl" className="w-full sm:w-auto font-semibold bg-ink text-white hover:bg-ink/90 active:bg-black">
                  <Link href="/tv/pricing">
                    Choose Your IPTV Plan <ArrowRight size={18} className="ml-1" />
                  </Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="w-full sm:w-auto border-ink/40 text-ink hover:bg-ink/10 font-semibold">
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
