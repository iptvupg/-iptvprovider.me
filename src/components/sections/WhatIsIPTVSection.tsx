import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ArrowRight, Tv, Wrench } from "lucide-react";

export function WhatIsIPTVSection() {
  return (
    <section className="py-16 sm:py-24 border-t bg-muted/20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <Tv size={16} /> Technical Overview
            </div>
            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground mb-4">
              What Is IPTV?
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">
              Internet Protocol Television (IPTV) is a digital television broadcasting technology that transmits live TV channels, sports broadcasts, and video-on-demand (VOD) media over standard broadband IP networks rather than traditional satellite dishes or cable lines.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Using modern protocols like HTTP Live Streaming (HLS), MPEG-TS packaging, and advanced H.265/AV1 video codecs, IPTV allows you to watch high-definition video seamlessly on Smart TVs, Firestick devices, smartphones, tablets, and computers anywhere with an internet connection.
            </p>
            <Link
              href="/tv/guides/what-is-iptv"
              className="inline-flex items-center gap-2 font-bold text-primary hover:underline text-sm"
            >
              → Complete IPTV Guide <ArrowRight size={16} />
            </Link>
          </div>

          <div id="setup-guides" className="rounded-lg border bg-card p-6 sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
              <Wrench size={16} /> Easy Installation
            </div>
            <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
              IPTV Setup &amp; Installation
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Get step-by-step setup instructions for your favorite player apps (TiviMate, IPTV Smarters, Smartone IPTV, VLC) across all hardware platforms:
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
              <Link href="/tv/guides/iptv-setup-guide" className="rounded border border-primary/50 bg-primary/5 p-3 hover:border-primary transition-colors flex items-center justify-between font-bold text-primary">
                <span>All Setup Guides</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
