import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PlanPageData } from "@/lib/site-data/plan-pages-data";
import { generatePlanGraphSchema } from "@/lib/schema";
import { plans } from "@/lib/site-data/pricing";
import { cn } from "@/lib/utils";
import {
  Check,
  Tv,
  Zap,
  ShieldCheck,
  Headphones,
  Sparkles,
  ArrowRight,
  Clock,
  CreditCard,
  Film,
  Trophy,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  BookOpen,
  RotateCcw,
  Flame,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

const includedFeatures = [
  {
    icon: Tv,
    title: "24,000+ Live Channels",
    description: "Full lineup of global live TV channels from the USA, UK, Canada, Europe, Latin America, and worldwide with full EPG program guides.",
  },
  {
    icon: Film,
    title: "80,000+ VOD Movies & Series",
    description: "On-demand streaming library updated daily with the latest blockbuster cinema releases, 4K HDR movies, and complete series boxsets.",
  },
  {
    icon: Smartphone,
    title: "2 Concurrent Device Streams",
    description: "Stream on two independent household devices simultaneously under one account without additional connection fees.",
  },
  {
    icon: Clock,
    title: "Instant Automated Activation",
    description: "Credentials (Xtream Codes API & M3U playlist URLs) are generated and delivered to your email and WhatsApp within 1 to 5 minutes.",
  },
  {
    icon: Trophy,
    title: "All Live Sports & PPV Events",
    description: "Unrestricted live access to Premier League, UEFA Champions League, NFL, NBA, MLB, NHL, UFC, Boxing, and international sports in 60fps.",
  },
  {
    icon: ShieldCheck,
    title: "Anti-Freeze Server System",
    description: "Multi-datacenter redundant load balancers and optimized CDN routing prevent stream freezing and buffering during peak live events.",
  },
  {
    icon: Headphones,
    title: "24/7 Multilingual Support",
    description: "Direct technical assistance from real streaming engineers available 24 hours a day via WhatsApp, email, and live ticketing.",
  },
  {
    icon: RotateCcw,
    title: "7-Day Money-Back Guarantee",
    description: "Risk-free purchase protection. If our engineering team cannot resolve any technical playback issue within 7 days, receive a full refund.",
  },
];

const supportedPlatforms = [
  { name: "Amazon Firestick & Fire TV", href: "/tv/devices/fire-tv", app: "TiviMate / Smarters Pro" },
  { name: "Android TV & Google TV", href: "/tv/devices/android", app: "TiviMate / XCIPTV" },
  { name: "Samsung Smart TV (Tizen)", href: "/tv/devices/smart-tv", app: "IBO Player / Smart IPTV" },
  { name: "LG Smart TV (webOS)", href: "/tv/devices/smart-tv", app: "IBO Player / Nanomid" },
  { name: "Apple TV 4K & iOS", href: "/tv/devices/apple-tv", app: "IPTVX / GSE Smart IPTV" },
  { name: "Windows PC & macOS", href: "/tv/devices/windows-pc", app: "IPTV Smarters / VLC" },
  { name: "MAG Boxes & Formuler", href: "/tv/devices/troubleshooting", app: "Stalker Portal / MyTVOnline" },
  { name: "Playback Troubleshooting", href: "/tv/devices/troubleshooting", app: "ISP & Cache Optimization" },
];

interface PlanDetailPageProps {
  data: PlanPageData;
}

export function PlanDetailPage({ data }: PlanDetailPageProps) {
  const planSchema = generatePlanGraphSchema({
    slug: data.slug,
    name: data.name,
    metaTitle: data.metaTitle,
    metaDescription: data.metaDescription,
    price: data.price,
    durationLabel: data.durationLabel,
    faqs: data.faqs,
  });

  return (
    <>
      <Schema id={`plan-graph-${data.planId}`} schema={planSchema as any} />

      <main className="min-h-screen bg-canvas text-foreground">
        {/* Breadcrumb Navigation */}
        <section className="border-b border-hairline bg-surface-card/40 py-3">
          <Container>
            <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/tv" className="transition-colors hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/tv/pricing" className="transition-colors hover:text-foreground">
                    Pricing
                  </Link>
                </li>
                <li>/</li>
                <li className="font-medium text-foreground">{data.name} Plan</li>
              </ol>
            </nav>
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-hairline bg-gradient-to-b from-surface-card/60 via-canvas to-canvas">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                <Sparkles className="h-3.5 w-3.5" /> {data.eyebrow}
              </div>

              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                {data.h1}
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-body leading-relaxed">
                {data.heroSubtitle}
              </p>

              {/* Featured Plan Card in Hero */}
              <div className="mx-auto mt-10 max-w-lg">
                <Card
                  className={cn(
                    "relative flex flex-col rounded-2xl border text-foreground shadow-lg transition-all",
                    data.isPopular
                      ? "border-primary bg-primary/5 ring-2 ring-primary/40"
                      : "border-hairline bg-surface-card"
                  )}
                >
                  {data.savings && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-0 bg-primary text-primary-foreground font-bold uppercase tracking-wider text-[10px] px-3.5 py-1 shadow-md">
                      <Flame className="h-3 w-3 mr-1 inline" /> {data.savings} ({data.savingsDollars})
                    </Badge>
                  )}

                  <CardHeader className="pt-8 pb-4 text-center">
                    <CardTitle className="eyebrow-cap text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {data.name} Subscription Tier
                    </CardTitle>

                    <div className="mt-4 flex items-baseline justify-center gap-1.5">
                      <span className="font-headline text-5xl sm:text-6xl font-extrabold tracking-tight text-foreground">
                        ${data.price.toFixed(2)}
                      </span>
                      <span className="text-sm font-medium text-muted-foreground">
                        / {data.durationLabel.toLowerCase()}
                      </span>
                    </div>

                    <p className="mt-2 text-sm font-semibold text-primary">
                      {data.monthlyEquivalent !== data.price
                        ? `Equivalent to just $${data.monthlyEquivalent.toFixed(2)} / month`
                        : "Flexible 30-day pay-as-you-go billing"}
                    </p>
                  </CardHeader>

                  <CardContent className="px-6 sm:px-8 pb-8">
                    <div className="border-t border-hairline my-4" />

                    <div className="grid grid-cols-2 gap-3 text-left mb-6">
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>24,000+ Channels</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>80,000+ VOD Titles</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>2 Device Streams</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs font-medium text-foreground">
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        <span>7-Day Guarantee</span>
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full font-bold h-12 text-base shadow-sm">
                      <Link href={data.checkoutUrl}>
                        Get {data.name} Access Now <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground pt-2">
                      <Link
                        href="https://wa.me/447848197761"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                      >
                        <SiWhatsapp className="h-3.5 w-3.5 text-emerald-400" /> Order on WhatsApp
                      </Link>
                      <Link href="/tv/pricing" className="hover:text-foreground underline transition-colors">
                        Compare all plans →
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Trust Checkpoints */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-hairline">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Instant Activation (&lt;5 min)</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>2 Simultaneous Streams</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>7-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>No Auto-Renew Contracts</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Why Choose This Plan Section */}
        <section className="py-16 sm:py-24 bg-canvas border-b border-hairline">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                    Plan Overview &amp; Value
                  </p>
                  <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                    {data.whyChooseHeading}
                  </h2>
                  <p className="mt-4 text-base text-body leading-relaxed">
                    {data.whyChooseText}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    <strong>Ideal for:</strong> {data.idealFor}
                  </p>
                </div>

                <div className="rounded-2xl border border-hairline bg-surface-card p-6 sm:p-8 shadow-sm">
                  <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                    {data.buyerScenarioTitle}
                  </h3>
                  <p className="text-xs sm:text-sm text-body leading-relaxed mb-6">
                    {data.buyerScenarioText}
                  </p>

                  <div className="space-y-3 border-t border-hairline pt-4">
                    {data.buyerChecklist.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* What Is Included Section */}
        <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/40">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Full-Access Platform
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                What&apos;s Included in Your {data.name} Subscription
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Every subscription includes unrestricted access to our complete live streaming, on-demand catalog, and multi-room viewing features.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {includedFeatures.map((feat) => (
                <div
                  key={feat.title}
                  className="rounded-xl border border-hairline bg-surface-card p-6 transition-all hover:border-hairline-strong"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-surface-elevated text-primary border border-hairline">
                    <feat.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-headline text-base font-bold text-foreground">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-body leading-relaxed">{feat.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Supported Devices & App Ecosystem */}
        <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Universal Compatibility
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Compatible Devices &amp; Player Applications
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Your {data.name} subscription provides standard Xtream Codes API and M3U playlist credentials compatible with all leading streaming players.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {supportedPlatforms.map((platform) => (
                <Link
                  key={platform.name}
                  href={platform.href}
                  className="group rounded-xl border border-hairline bg-surface-card p-5 transition-all hover:border-primary hover:shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-headline text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Recommended: <span className="text-body font-medium">{platform.app}</span>
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs font-semibold text-primary pt-3 border-t border-hairline">
                    <span>Setup Guide</span>
                    <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Technical Resources Callout */}
            <div className="mt-10 mx-auto max-w-3xl rounded-xl border border-hairline bg-surface-card p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-surface-elevated text-primary border border-hairline shrink-0">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-headline text-sm font-bold text-foreground">Need Technical Setup Guidance?</h4>
                  <p className="text-xs text-muted-foreground">Read our comprehensive installation walkthrough or check playback optimization tips.</p>
                </div>
              </div>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button asChild variant="outline" size="sm" className="w-full sm:w-auto text-xs font-semibold border-hairline">
                  <Link href="/tv/guides/iptv-setup-guide">Setup Guide</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="w-full sm:w-auto text-xs font-semibold border-hairline">
                  <Link href="/tv/pricing">All Plans</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* How Activation Works (3-Step Lifecycle) */}
        <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/30">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Instant Activation
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                How Your {data.name} Subscription Works in 3 Steps
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Get up and running in less than 5 minutes with automated credential delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-xl border border-hairline bg-surface-card p-6 text-center relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-headline text-xl font-bold border border-primary/20">
                  1
                </div>
                <h3 className="font-headline text-lg font-bold text-foreground mb-2">Order {data.name} Plan</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Complete secure payment (${data.price.toFixed(2)}) with zero hidden setup fees or forced recurring auto-billing.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-surface-card p-6 text-center relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-headline text-xl font-bold border border-primary/20">
                  2
                </div>
                <h3 className="font-headline text-lg font-bold text-foreground mb-2">Receive Credentials</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Within 1–5 minutes, your Xtream Codes API username, password, and M3U playlist URLs arrive via email and WhatsApp.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-surface-card p-6 text-center relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-headline text-xl font-bold border border-primary/20">
                  3
                </div>
                <h3 className="font-headline text-lg font-bold text-foreground mb-2">Connect &amp; Stream</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Enter your credentials into TiviMate, IPTV Smarters, IBO Player, or your favorite player app and enjoy 24,000+ live HD/4K channels.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Plan Comparison Table with Active Plan Highlighted */}
        <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Side-by-Side Comparison
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Compare {data.name} vs. Other Subscription Tiers
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Evaluate pricing, savings, and duration options across our complete subscription lineup.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-hairline bg-surface-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-hairline bg-surface-elevated text-foreground font-semibold">
                    <th className="p-4 sm:p-5">Feature / Dimension</th>
                    <th className={cn("p-4 sm:p-5 text-center", data.planId === "1-month" && "bg-primary/10 text-primary font-bold")}>
                      1 Month {data.planId === "1-month" && "(Selected)"}
                    </th>
                    <th className={cn("p-4 sm:p-5 text-center", data.planId === "3-months" && "bg-primary/10 text-primary font-bold")}>
                      3 Months {data.planId === "3-months" && "(Selected)"}
                    </th>
                    <th className={cn("p-4 sm:p-5 text-center", data.planId === "6-months" && "bg-primary/10 text-primary font-bold")}>
                      6 Months {data.planId === "6-months" && "(Selected)"}
                    </th>
                    <th className={cn("p-4 sm:p-5 text-center", data.planId === "12-months" && "bg-primary/10 text-primary font-bold")}>
                      12 Months {data.planId === "12-months" && "(Selected)"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-4 font-medium text-foreground">Total Price</td>
                    <td className={cn("p-4 text-center font-bold", data.planId === "1-month" ? "text-primary bg-primary/5" : "text-foreground")}>$16.00</td>
                    <td className={cn("p-4 text-center font-bold", data.planId === "3-months" ? "text-primary bg-primary/5" : "text-foreground")}>$39.00</td>
                    <td className={cn("p-4 text-center font-bold", data.planId === "6-months" ? "text-primary bg-primary/5" : "text-foreground")}>$60.00</td>
                    <td className={cn("p-4 text-center font-bold", data.planId === "12-months" ? "text-primary bg-primary/5" : "text-foreground")}>$90.00</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Effective Monthly Rate</td>
                    <td className={cn("p-4 text-center text-body", data.planId === "1-month" && "font-semibold text-primary bg-primary/5")}>$16.00 / mo</td>
                    <td className={cn("p-4 text-center text-body", data.planId === "3-months" && "font-semibold text-primary bg-primary/5")}>$13.00 / mo</td>
                    <td className={cn("p-4 text-center text-body", data.planId === "6-months" && "font-semibold text-primary bg-primary/5")}>$10.00 / mo</td>
                    <td className={cn("p-4 text-center text-body", data.planId === "12-months" && "font-semibold text-primary bg-primary/5")}>$7.50 / mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Discount Savings</td>
                    <td className={cn("p-4 text-center text-muted-foreground", data.planId === "1-month" && "bg-primary/5")}>—</td>
                    <td className={cn("p-4 text-center font-semibold text-emerald-400", data.planId === "3-months" && "bg-primary/5")}>Save 19%</td>
                    <td className={cn("p-4 text-center font-semibold text-emerald-400", data.planId === "6-months" && "bg-primary/5")}>Save 38%</td>
                    <td className={cn("p-4 text-center font-bold text-emerald-400", data.planId === "12-months" && "bg-primary/5")}>Save 53% ($102/yr)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Concurrent Device Streams</td>
                    <td className="p-4 text-center text-body">2 Devices</td>
                    <td className="p-4 text-center text-body">2 Devices</td>
                    <td className="p-4 text-center text-body">2 Devices</td>
                    <td className="p-4 text-center text-body">2 Devices</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Live TV Channels</td>
                    <td className="p-4 text-center text-body">24,000+ HD/4K</td>
                    <td className="p-4 text-center text-body">24,000+ HD/4K</td>
                    <td className="p-4 text-center text-body">24,000+ HD/4K</td>
                    <td className="p-4 text-center text-body">24,000+ HD/4K</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">VOD Movies &amp; Series</td>
                    <td className="p-4 text-center text-body">80,000+ Titles</td>
                    <td className="p-4 text-center text-body">80,000+ Titles</td>
                    <td className="p-4 text-center text-body">80,000+ Titles</td>
                    <td className="p-4 text-center text-body">80,000+ Titles</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Money-Back Guarantee</td>
                    <td className="p-4 text-center text-body">7 Days</td>
                    <td className="p-4 text-center text-body">7 Days</td>
                    <td className="p-4 text-center text-body">7 Days</td>
                    <td className="p-4 text-center text-body">7 Days</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Action</td>
                    <td className="p-4 text-center">
                      {data.planId === "1-month" ? (
                        <span className="text-xs font-bold text-primary">Current Page</span>
                      ) : (
                        <Link href="/tv/iptv-1-month-subscription" className="text-xs font-semibold text-primary hover:underline">
                          View 1M Plan
                        </Link>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {data.planId === "3-months" ? (
                        <span className="text-xs font-bold text-primary">Current Page</span>
                      ) : (
                        <Link href="/tv/iptv-3-month-subscription" className="text-xs font-semibold text-primary hover:underline">
                          View 3M Plan
                        </Link>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {data.planId === "6-months" ? (
                        <span className="text-xs font-bold text-primary">Current Page</span>
                      ) : (
                        <Link href="/tv/iptv-6-month-subscription" className="text-xs font-semibold text-primary hover:underline">
                          View 6M Plan
                        </Link>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {data.planId === "12-months" ? (
                        <span className="text-xs font-bold text-primary">Current Page</span>
                      ) : (
                        <Link href="/tv/iptv-12-month-subscription" className="text-xs font-semibold text-primary hover:underline">
                          View 12M Plan
                        </Link>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-6 text-center">
              <Link href="/tv/pricing" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
                Explore complete pricing matrix on our main pricing hub <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </Container>
        </section>

        {/* Free Trial vs. Paid Subscription Comparison Box */}
        <section className="py-16 sm:py-20 border-b border-hairline bg-surface-card/40">
          <Container>
            <div className="mx-auto max-w-4xl rounded-2xl border border-hairline bg-gradient-to-r from-surface-card via-surface-elevated to-surface-card p-8 sm:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                    Risk-Free Testing Available
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-foreground">
                    Want to Test Before Ordering {data.name}?
                  </h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    If you prefer to test streaming latency and channel stability before purchasing, you can request an instant <strong>24-Hour Free Trial</strong> (1 connection, zero credit card required). Our paid {data.name} subscription provides <strong>2 simultaneous connections</strong>, full VOD library access, and our 7-day money-back guarantee.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
                  <Button asChild size="lg" className="font-bold">
                    <Link href="/tv/iptv-free-trial">
                      Get 24h Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-hairline font-semibold">
                    <Link href={data.checkoutUrl}>
                      Buy {data.name} Plan (${data.price.toFixed(2)})
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Direct Answers
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                {data.name} IPTV Subscription — Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Direct, factual answers regarding pricing, connections, delivery, and guarantees for the {data.name} plan.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {data.faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-xl border border-hairline bg-surface-card px-5 transition-all data-[state=open]:border-primary/50 data-[state=open]:shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-headline text-base font-semibold hover:no-underline py-4 text-foreground">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-body leading-relaxed pb-4 pt-1">
                      <p>{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </section>

        {/* Bottom Conversion Banner */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-surface-card to-canvas text-center">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Ready to Start Your {data.name} IPTV Subscription?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body leading-relaxed">
                Instant automated activation, 24,000+ live HD/4K channels, 2 device streams, and an unconditional 7-day money-back guarantee for just ${data.price.toFixed(2)}.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-md font-bold px-8 h-12 shadow-sm">
                  <Link href={data.checkoutUrl}>
                    Get {data.name} Access Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md font-semibold px-8 h-12 border-hairline">
                  <Link href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                    <SiWhatsapp className="mr-2 h-4 w-4 text-emerald-400" /> WhatsApp Support
                  </Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
