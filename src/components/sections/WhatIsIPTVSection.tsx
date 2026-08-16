import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowRight, Tv, Wrench, ExternalLink } from "lucide-react";

export function WhatIsIPTVSection() {
  return (
    <section className="py-16 sm:py-24 border-t bg-muted/20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <Tv size={16} /> Technical Overview &amp; Guide
            </div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-4">
              What Is IP Television (IPTV)?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Internet Protocol Television (IPTV) is a digital broadcasting technology that transmits live IPTV stream channels, sports broadcasts, and video-on-demand (VOD) media over broadband IP networks rather than traditional cable lines or satellite dishes.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Using standardized protocols like HTTP Live Streaming (HLS RFC 8216), MPEG-TS packaging, and advanced H.265/HEVC video codecs, IPTV enables seamless 4K and Full HD playback on Smart TVs, Firestick devices, smartphones, and computers.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <Link
                href="/tv/guides/what-is-iptv"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                What Is IPTV? <ArrowRight size={15} />
              </Link>
              <Link
                href="/tv/guides/how-to-choose-an-iptv-service"
                className="inline-flex items-center gap-1.5 text-primary hover:underline"
              >
                How to Choose a Provider <ArrowRight size={15} />
              </Link>
              <Link
                href="/tv/guides/is-iptv-legal"
                className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:underline"
              >
                Legality &amp; Licensing <ArrowRight size={15} />
              </Link>
              <a
                href="https://en.wikipedia.org/wiki/Internet_Protocol_television"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground hover:underline"
                title="Read more on Wikipedia"
              >
                Wikipedia Reference <ExternalLink size={13} />
              </a>
            </div>
          </div>

          <div id="setup-guides" className="rounded-lg border bg-card p-6 sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <Wrench size={16} /> Easy Installation
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
              IPTV Setup &amp; Installation Guides
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Get step-by-step setup instructions for your favorite player apps (TiviMate, IPTV Smarters Pro, IBO Player, VLC) across all hardware platforms:
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm font-medium">
              <Link href="/tv/devices/fire-tv" className="rounded border p-3 hover:border-primary transition-colors flex items-center justify-between text-foreground">
                <span>Amazon Fire TV</span>
                <ArrowRight size={14} className="text-muted-foreground" />
              </Link>
              <Link href="/tv/devices/android" className="rounded border p-3 hover:border-primary transition-colors flex items-center justify-between text-foreground">
                <span>Android / Google TV</span>
                <ArrowRight size={14} className="text-muted-foreground" />
              </Link>
              <Link href="/tv/devices/samsung-tv" className="rounded border p-3 hover:border-primary transition-colors flex items-center justify-between text-foreground">
                <span>Samsung Smart TV</span>
                <ArrowRight size={14} className="text-muted-foreground" />
              </Link>
              <Link href="/tv/devices/lg-tv" className="rounded border p-3 hover:border-primary transition-colors flex items-center justify-between text-foreground">
                <span>LG Smart TV</span>
                <ArrowRight size={14} className="text-muted-foreground" />
              </Link>
              <Link href="/tv/devices/apple-tv" className="rounded border p-3 hover:border-primary transition-colors flex items-center justify-between text-foreground">
                <span>Apple TV 4K</span>
                <ArrowRight size={14} className="text-muted-foreground" />
              </Link>
              <Link href="/tv/devices/windows" className="rounded border p-3 hover:border-primary transition-colors flex items-center justify-between text-foreground">
                <span>Windows PC</span>
                <ArrowRight size={14} className="text-muted-foreground" />
              </Link>
              <Link href="/tv/devices/troubleshooting" className="rounded border p-3 hover:border-primary transition-colors flex items-center justify-between text-foreground">
                <span>Troubleshooting</span>
                <ArrowRight size={14} className="text-muted-foreground" />
              </Link>
              <Link href="/tv/guides" className="rounded border border-primary/50 bg-primary/5 p-3 hover:border-primary transition-colors flex items-center justify-between font-bold text-primary">
                <span>All Knowledge Guides</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
