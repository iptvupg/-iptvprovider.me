import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Schema } from "@/components/shared/Schema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getPricingPageData } from "@/lib/data/pricing-page";
import { plans } from "@/lib/site-data/pricing";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
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
  MonitorPlay,
  RotateCcw,
  Layers,
  Flame,
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function generateMetadata(): Metadata {
  const title = "IPTV Subscription Plans & Pricing 2026 | From $7.50/mo";
  const description =
    "Compare IPTV subscription plans from $7.50/month. 24,000+ live HD/4K channels, 80,000+ VOD titles, 2 concurrent connections, instant activation, and 7-day money-back guarantee.";

  return {
    ...generatePageMetadata({
      title,
      description,
      canonical: "/pricing",
    }),
    title: {
      absolute: title,
    },
  };
}

const planGuidance = [
  {
    title: "1-Month Subscription ($16.00)",
    scenario: "Best for Evaluation & Short-Term Flexibility",
    description:
      "Ideal for users wanting to test complete service performance under real-world household conditions without any long-term commitment. Includes full 2-device multi-streaming and 24/7 technical support.",
    features: ["Zero long-term contract", "Full 24,000+ channel catalog", "2 simultaneous connections"],
    recommendedFor: "New customers evaluating quality & short-term viewers",
    planId: "1-month",
  },
  {
    title: "3-Month Subscription ($39.00 — $13.00/mo)",
    scenario: "Best for Sports Seasons & Quarterly Cord-Cutting",
    description:
      "Saves 19% ($9.00 savings). Perfect for streaming full football, basketball, or motorsports seasons (Premier League, NFL, Champions League, Formula 1) with continuous 60fps feed stability.",
    features: ["Save 19% vs. monthly", "Covers a full quarterly season", "Includes all live PPV events"],
    recommendedFor: "Sports fans following tournament or league seasons",
    planId: "3-months",
  },
  {
    title: "6-Month Subscription ($60.00 — $10.00/mo)",
    scenario: "Best for Balanced Semi-Annual Household Savings",
    description:
      "Saves 38% ($36.00 savings). A balanced mid-tier option providing predictable semi-annual household entertainment with priority streaming server allocation and complete VOD updates.",
    features: ["Save 38% vs. monthly", "Just $10.00 per month", "Daily updated 80,000+ VOD library"],
    recommendedFor: "Families & households seeking budget-friendly multi-room streaming",
    planId: "6-months",
  },
  {
    title: "12-Month Subscription ($90.00 — $7.50/mo)",
    scenario: "Best Value: Maximum Savings & Priority Support",
    description:
      "Saves 53% ($102.00 savings). Our lowest monthly rate at just $7.50/mo. Includes dedicated VIP support routing, maximum load balancing priority, and unconditional 7-day money-back protection.",
    features: ["Lowest price: $7.50/month", "Save 53% ($102/year)", "VIP priority customer assistance"],
    recommendedFor: "Permanent cord-cutters seeking the ultimate value and stability",
    planId: "12-months",
    isPopular: true,
  },
];

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

export default async function PricingPage() {
  const { pricingGraphSchema, pricingPageFaqs } = await getPricingPageData();

  return (
    <>
      <Schema id="pricing-graph" schema={pricingGraphSchema as any} />

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
                <li className="font-medium text-foreground">IPTV Subscription Plans &amp; Pricing</li>
              </ol>
            </nav>
          </Container>
        </section>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-hairline bg-gradient-to-b from-surface-card/60 via-canvas to-canvas">
          <Container>
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary mb-6">
                <Sparkles className="h-3.5 w-3.5" /> Transparent Plans &amp; Flexible Billing
              </div>

              <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-foreground">
                IPTV Subscription Plans &amp; Pricing
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl text-body leading-relaxed">
                Stream 24,000+ live HD &amp; 4K channels, 80,000+ VOD movies and complete TV series, and live PPV sports on 2 concurrent devices. Choose your flexible subscription tier — all paid plans include instant activation and a 7-day money-back guarantee.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-md font-semibold px-8 h-12 shadow-sm">
                  <a href="#pricing-plans">
                    Choose Your Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-md font-semibold px-8 h-12 border-hairline">
                  <Link href="/tv/iptv-free-trial">
                    Start 24-Hour Free Trial
                  </Link>
                </Button>
              </div>

              {/* Trust Checkpoints */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-hairline">
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>24,000+ Live Channels</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>2 Simultaneous Connections</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>7-Day Money-Back Guarantee</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground">
                  <Check className="h-4 w-4 text-primary shrink-0" />
                  <span>Instant Automated Activation</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Pricing Cards Grid */}
        <section id="pricing-plans" className="py-20 sm:py-28 bg-canvas">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-14">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Select Your Duration
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Simple, Transparent IPTV Subscription Pricing
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                All plans include identical full-catalog access, 2 concurrent device streams, anti-freeze stability, and 24/7 customer support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
              {plans.map((plan) => {
                const isFeatured = plan.isPopular;
                return (
                  <Card
                    key={plan.name}
                    className={cn(
                      "relative flex h-full flex-col rounded-xl border transition-all duration-200",
                      isFeatured
                        ? "bg-primary text-ink border-primary shadow-lg ring-2 ring-primary/50"
                        : "bg-surface-card border-hairline text-foreground hover:border-hairline-strong shadow-sm"
                    )}
                  >
                    {isFeatured && (
                      <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-0 bg-ink text-white font-bold uppercase tracking-wider text-[10px] px-3.5 py-1 shadow-md">
                        <Flame className="h-3 w-3 mr-1 inline" /> Most Popular (Save 53%)
                      </Badge>
                    )}

                    <CardHeader className="pb-4 pt-6 text-center">
                      <CardTitle
                        className={cn(
                          "eyebrow-cap text-xs font-bold uppercase tracking-wider",
                          isFeatured ? "text-ink/80" : "text-muted-foreground"
                        )}
                      >
                        {plan.name} Plan
                      </CardTitle>

                      <div className="mt-3 flex items-baseline justify-center gap-1">
                        <span
                          className={cn(
                            "font-headline text-4xl sm:text-5xl font-extrabold tracking-tight",
                            isFeatured ? "text-ink" : "text-foreground"
                          )}
                        >
                          ${plan.price.toFixed(2)}
                        </span>
                        <span
                          className={cn(
                            "text-sm font-medium",
                            isFeatured ? "text-ink/70" : "text-muted-foreground"
                          )}
                        >
                          / {plan.duration}
                        </span>
                      </div>

                      <div className="mt-2 min-h-[22px]">
                        {plan.price_monthly !== plan.price ? (
                          <span
                            className={cn(
                              "inline-block text-xs font-bold px-2 py-0.5 rounded",
                              isFeatured ? "bg-ink/15 text-ink" : "bg-primary/10 text-primary"
                            )}
                          >
                            Just ${plan.price_monthly.toFixed(2)}/month ({plan.savings})
                          </span>
                        ) : (
                          <span className={cn("text-xs font-medium", isFeatured ? "text-ink/70" : "text-muted-foreground")}>
                            Standard monthly billing
                          </span>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="flex-1 px-6 pb-6 pt-2">
                      <div className={cn("border-t my-4", isFeatured ? "border-ink/20" : "border-hairline")} />
                      <ul className="space-y-3">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5 text-xs sm:text-sm">
                            <Check
                              className={cn(
                                "mt-0.5 h-4 w-4 flex-shrink-0",
                                isFeatured ? "text-ink" : "text-primary"
                              )}
                            />
                            <span className={cn("leading-tight", isFeatured ? "text-ink font-medium" : "text-body")}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 pt-2">
                        <Button
                          asChild
                          size="lg"
                          className={cn(
                            "w-full font-bold shadow-sm transition-all",
                            isFeatured
                              ? "bg-ink text-white hover:bg-black"
                              : "bg-primary text-primary-foreground hover:bg-primary/90"
                          )}
                        >
                          <Link href={plan.url}>
                            Get Started Now <ArrowRight className="ml-1.5 h-4 w-4" />
                          </Link>
                        </Button>

                        <div className="mt-3 text-center">
                          <Link
                            href="https://wa.me/447848197761"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "inline-flex items-center gap-1.5 text-xs font-medium transition-opacity hover:opacity-80",
                              isFeatured ? "text-ink/80" : "text-muted-foreground"
                            )}
                          >
                            <SiWhatsapp className="h-3 w-3" /> Or order via WhatsApp
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </Container>
        </section>

        {/* Plan Comparison Table */}
        <section className="py-16 sm:py-24 border-t border-hairline bg-surface-card/30">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Detailed Feature Matrix
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Compare IPTV Subscription Plans
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Side-by-side comparison of duration, effective rates, device concurrency, and guarantees.
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-hairline bg-surface-card shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-hairline bg-surface-elevated text-foreground font-semibold">
                    <th className="p-4 sm:p-5">Feature / Dimension</th>
                    <th className="p-4 sm:p-5 text-center">1 Month</th>
                    <th className="p-4 sm:p-5 text-center">3 Months</th>
                    <th className="p-4 sm:p-5 text-center">6 Months</th>
                    <th className="p-4 sm:p-5 text-center bg-primary/10 text-primary">
                      12 Months (Best Value)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-hairline">
                  <tr>
                    <td className="p-4 font-medium text-foreground">Total Price</td>
                    <td className="p-4 text-center font-bold text-foreground">$16.00</td>
                    <td className="p-4 text-center font-bold text-foreground">$39.00</td>
                    <td className="p-4 text-center font-bold text-foreground">$60.00</td>
                    <td className="p-4 text-center font-bold text-primary bg-primary/5">$90.00</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Effective Monthly Rate</td>
                    <td className="p-4 text-center text-body">$16.00 / mo</td>
                    <td className="p-4 text-center text-body">$13.00 / mo</td>
                    <td className="p-4 text-center text-body">$10.00 / mo</td>
                    <td className="p-4 text-center font-semibold text-primary bg-primary/5">$7.50 / mo</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Discount Savings</td>
                    <td className="p-4 text-center text-muted-foreground">—</td>
                    <td className="p-4 text-center font-semibold text-emerald-400">Save 19%</td>
                    <td className="p-4 text-center font-semibold text-emerald-400">Save 38%</td>
                    <td className="p-4 text-center font-bold text-emerald-400 bg-primary/5">Save 53% ($102/yr)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Concurrent Device Streams</td>
                    <td className="p-4 text-center text-body">2 Devices</td>
                    <td className="p-4 text-center text-body">2 Devices</td>
                    <td className="p-4 text-center text-body">2 Devices</td>
                    <td className="p-4 text-center font-semibold text-foreground bg-primary/5">2 Devices</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Live TV Channels</td>
                    <td className="p-4 text-center text-body">24,000+ HD/4K</td>
                    <td className="p-4 text-center text-body">24,000+ HD/4K</td>
                    <td className="p-4 text-center text-body">24,000+ HD/4K</td>
                    <td className="p-4 text-center text-body bg-primary/5">24,000+ HD/4K</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">VOD Movies &amp; Series</td>
                    <td className="p-4 text-center text-body">80,000+ Titles</td>
                    <td className="p-4 text-center text-body">80,000+ Titles</td>
                    <td className="p-4 text-center text-body">80,000+ Titles</td>
                    <td className="p-4 text-center text-body bg-primary/5">80,000+ Titles</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Live Sports &amp; PPV</td>
                    <td className="p-4 text-center text-body">Included (60fps)</td>
                    <td className="p-4 text-center text-body">Included (60fps)</td>
                    <td className="p-4 text-center text-body">Included (60fps)</td>
                    <td className="p-4 text-center text-body bg-primary/5">Included (60fps)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Anti-Freeze Technology</td>
                    <td className="p-4 text-center text-body">Yes</td>
                    <td className="p-4 text-center text-body">Yes</td>
                    <td className="p-4 text-center text-body">Yes</td>
                    <td className="p-4 text-center text-body bg-primary/5">Yes (Priority Routing)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Electronic TV Guide (EPG)</td>
                    <td className="p-4 text-center text-body">Yes (7-Day)</td>
                    <td className="p-4 text-center text-body">Yes (7-Day)</td>
                    <td className="p-4 text-center text-body">Yes (7-Day)</td>
                    <td className="p-4 text-center text-body bg-primary/5">Yes (7-Day)</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Money-Back Guarantee</td>
                    <td className="p-4 text-center text-body">7 Days</td>
                    <td className="p-4 text-center text-body">7 Days</td>
                    <td className="p-4 text-center text-body">7 Days</td>
                    <td className="p-4 text-center text-body bg-primary/5">7 Days</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Activation Speed</td>
                    <td className="p-4 text-center text-body">&lt;5 Minutes</td>
                    <td className="p-4 text-center text-body">&lt;5 Minutes</td>
                    <td className="p-4 text-center text-body">&lt;5 Minutes</td>
                    <td className="p-4 text-center text-body bg-primary/5">&lt;5 Minutes</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-foreground">Dedicated Plan Page</td>
                    <td className="p-4 text-center">
                      <Link href="/tv/iptv-1-month-subscription" className="text-xs font-semibold text-primary hover:underline">
                        1-Month Details →
                      </Link>
                    </td>
                    <td className="p-4 text-center">
                      <Link href="/tv/iptv-3-month-subscription" className="text-xs font-semibold text-primary hover:underline">
                        3-Month Details →
                      </Link>
                    </td>
                    <td className="p-4 text-center">
                      <Link href="/tv/iptv-6-month-subscription" className="text-xs font-semibold text-primary hover:underline">
                        6-Month Details →
                      </Link>
                    </td>
                    <td className="p-4 text-center bg-primary/5">
                      <Link href="/tv/iptv-12-month-subscription" className="text-xs font-bold text-primary hover:underline">
                        12-Month Details →
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* Buyer Guidance: Which Plan Should I Choose? */}
        <section className="py-16 sm:py-24 bg-canvas border-t border-hairline">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Buyer Decision Guide
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Which IPTV Subscription Plan Should You Choose?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Practical, scenario-based guidance to help you select the exact tier that fits your viewing habits and budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {planGuidance.map((item) => (
                <div
                  key={item.title}
                  className={cn(
                    "rounded-xl border p-6 sm:p-8 flex flex-col justify-between transition-all",
                    item.isPopular
                      ? "border-primary/50 bg-surface-card shadow-sm ring-1 ring-primary/30"
                      : "border-hairline bg-surface-card hover:border-hairline-strong"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <h3 className="font-headline text-xl font-bold text-foreground">{item.title}</h3>
                      {item.isPopular && (
                        <Badge className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider">
                          Best Value
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                      {item.scenario}
                    </p>
                    <p className="text-sm text-body leading-relaxed mb-5">{item.description}</p>

                    <div className="space-y-2 mb-6">
                      {item.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-foreground font-medium">
                          <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-hairline flex items-center justify-between">
                    <span className="text-xs text-muted-foreground font-medium">
                      Recommended for: <strong className="text-foreground">{item.recommendedFor}</strong>
                    </span>
                    <Button asChild size="sm" variant={item.isPopular ? "default" : "outline"} className="rounded-md font-semibold text-xs">
                      <Link href={`/checkout?plan=${item.planId}`}>
                        Select <ChevronRight className="h-3 w-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Features Included Section */}
        <section className="py-16 sm:py-24 border-t border-hairline bg-surface-card/40">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Full-Access Platform
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                What&apos;s Included in Every IPTV Subscription
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Regardless of the billing duration you choose, every account receives our complete premium feature suite.
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
        <section className="py-16 sm:py-24 border-t border-hairline bg-canvas">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Universal Compatibility
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Supported Devices &amp; Player Applications
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Our IPTV subscription delivers standard Xtream Codes API and M3U playlist credentials, compatible with all leading hardware and player apps.
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
                    <span>View Setup Guide</span>
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
                  <Link href="/tv/guides/how-to-choose-an-iptv-service">Buyer Guide</Link>
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* How Activation Works (3-Step Lifecycle) */}
        <section className="py-16 sm:py-24 border-t border-hairline bg-surface-card/30">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Instant Activation
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                How Your IPTV Subscription Works in 3 Steps
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Get up and running in less than 5 minutes with zero technical hassle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-xl border border-hairline bg-surface-card p-6 text-center relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-headline text-xl font-bold border border-primary/20">
                  1
                </div>
                <h3 className="font-headline text-lg font-bold text-foreground mb-2">Choose Your Plan</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Select your desired subscription length (1, 3, 6, or 12 months) and complete checkout via secure card, crypto, or WhatsApp.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-surface-card p-6 text-center relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-headline text-xl font-bold border border-primary/20">
                  2
                </div>
                <h3 className="font-headline text-lg font-bold text-foreground mb-2">Receive Credentials</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Within 1–5 minutes, your Xtream Codes API login credentials and M3U playlist URLs are generated and sent to your email and WhatsApp.
                </p>
              </div>

              <div className="rounded-xl border border-hairline bg-surface-card p-6 text-center relative">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-headline text-xl font-bold border border-primary/20">
                  3
                </div>
                <h3 className="font-headline text-lg font-bold text-foreground mb-2">Connect &amp; Stream</h3>
                <p className="text-xs sm:text-sm text-body leading-relaxed">
                  Enter your credentials into TiviMate, IPTV Smarters, IBO Player, or your preferred player app and enjoy 24,000+ live HD/4K channels.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* Free Trial vs. Paid Subscription Comparison Box */}
        <section className="py-16 sm:py-20 border-t border-hairline bg-canvas">
          <Container>
            <div className="mx-auto max-w-4xl rounded-2xl border border-hairline bg-gradient-to-r from-surface-card via-surface-elevated to-surface-card p-8 sm:p-10 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                    Evaluation vs. Membership
                  </div>
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-foreground">
                    Want to Test Before Subscribing?
                  </h3>
                  <p className="mt-3 text-sm text-body leading-relaxed">
                    If you want to evaluate server latency and channel availability before choosing a paid plan, try our <strong>24-Hour Free Trial</strong> (1 stream, zero credit card required). Paid subscriptions unlock <strong>2 simultaneous connections</strong>, priority bandwidth, full VOD access, and our 7-day money-back guarantee.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
                  <Button asChild size="lg" className="font-bold">
                    <Link href="/tv/iptv-free-trial">
                      Get 24h Free Trial <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-hairline font-semibold">
                    <a href="#pricing-plans">View Paid Plans</a>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-16 sm:py-24 border-t border-hairline bg-surface-card/40">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-12">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Direct Answers
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                IPTV Subscription — Frequently Asked Questions
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body">
                Clear, factual answers to common questions about pricing, renewals, device streaming, and guarantees.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="space-y-3">
                {pricingPageFaqs.map((faq, i) => (
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
        <section className="py-16 sm:py-24 border-t border-hairline bg-gradient-to-b from-surface-card to-canvas text-center">
          <Container>
            <div className="mx-auto max-w-3xl">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                Ready to Experience Premium IPTV Streaming?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-body leading-relaxed">
                Join thousands of satisfied viewers worldwide. Instant activation, 24,000+ live channels, 2 device streams, and an unconditional 7-day money-back guarantee.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-md font-bold px-8 h-12 shadow-sm">
                  <a href="#pricing-plans">
                    Choose Your Plan <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
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

