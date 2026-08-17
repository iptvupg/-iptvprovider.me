import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { Check, Tv, Zap, Shield, MessageCircle, Smartphone, UserCheck, Star, ArrowRight, Clock, Film, Trophy, Laptop, Globe } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function generateMetadata(): Metadata {
    const title = "Free Trial IPTV (2026): 24-Hour Instant Access — No Credit Card";
    const description = "Get an instant 24-hour free trial for IPTV with access to 24,000+ live HD/4K channels, live sports & VOD. No credit card required. Start streaming in minutes →";
    return {
      ...generatePageMetadata({
          title,
          description,
          canonical: "/iptv-free-trial",
      }),
      title: {
        absolute: title,
      }
    };
}

const trialHighlights = [
    { icon: Tv, title: "24,000+ Live Channels", text: "Full access to local and international premium live TV feeds from the USA, UK, Canada, and 197 countries worldwide." },
    { icon: Trophy, title: "Live Sports & Major PPV", text: "Stream NFL, NBA, MLB, Premier League, Champions League, UFC, and Boxing in 60fps high definition." },
    { icon: Film, title: "80,000+ Movies & Series", text: "On-demand VOD library with the latest blockbuster releases, classic cinema, and complete multi-season TV shows." },
    { icon: Zap, title: "4K & FHD Stream Quality", text: "Adaptive bitrate streaming powered by H.265/HEVC video codecs and redundant server load balancing." },
];

const evaluationCriteria = [
    {
        title: "1. Channel Switching Speed & Latency",
        description: "Test channel zap times and network responsiveness. Our low-latency server network ensures prompt EPG loading and instant channel changes."
    },
    {
        title: "2. 4K Live Sports & 60fps Smoothness",
        description: "Verify fluid 60fps playback during high-motion live sports broadcasts without frame drops or motion stutter on high-definition displays."
    },
    {
        title: "3. App Compatibility on Your Device",
        description: "Test your credentials on popular player apps like TiviMate, IPTV Smarters Pro, IBO Player, or VLC across Smart TVs, Firestick, and mobile."
    },
    {
        title: "4. Support Team Responsiveness",
        description: "Message our support team on WhatsApp anytime during your trial to evaluate our 24/7 customer assistance firsthand."
    }
];

const supportedDevices = [
    { name: "Amazon Fire TV & Firestick", href: "/tv/devices/fire-tv" },
    { name: "Android TV & Google TV", href: "/tv/devices/android" },
    { name: "Samsung Smart TV (Tizen)", href: "/tv/devices/samsung-tv" },
    { name: "LG Smart TV (webOS)", href: "/tv/devices/lg-tv" },
    { name: "Apple TV 4K (tvOS)", href: "/tv/devices/apple-tv" },
    { name: "Windows PC & Mac", href: "/tv/devices/windows" },
    { name: "iOS (iPhone & iPad)", href: "/tv/devices/ios" },
    { name: "Troubleshooting & Buffering Guide", href: "/tv/devices/troubleshooting" },
];

const howItWorksSteps = [
    {
        number: 1,
        title: "Request Trial on WhatsApp",
        description: "Click the 'Start Free Trial on WhatsApp' button to open a direct chat with our 24/7 activation team.",
    },
    {
        number: 2,
        title: "Receive Login Credentials",
        description: "Our automated team delivers your unique Xtream Codes API login (Server URL, Username, Password) and M3U playlist URL in minutes.",
    },
    {
        number: 3,
        title: "Install App & Start Streaming",
        description: "Enter your credentials into your favorite IPTV player app on Firestick, Smart TV, or mobile and enjoy 24 hours of full access.",
    }
];

const comparisonRows = [
    { feature: "Channel Lineup", trial: "24,000+ Live Channels", paid: "24,000+ Live Channels" },
    { feature: "On-Demand VOD", trial: "80,000+ Movies & Series", paid: "80,000+ Movies & Series" },
    { feature: "Stream Quality", trial: "4K UHD, Full HD & HD", paid: "4K UHD, Full HD & HD" },
    { feature: "Simultaneous Connections", trial: "1 Active Connection", paid: "2 Connections Included" },
    { feature: "Duration", trial: "24 Hours (Full Access)", paid: "1, 3, 6, or 12 Months" },
    { feature: "Cost", trial: "$0.00 (100% Free)", paid: "From $7.50 / month" },
    { feature: "Credit Card Required", trial: "No Credit Card Needed", paid: "Major Cards / Bank Transfer" },
    { feature: "Commitment / Contract", trial: "Zero Obligation", paid: "No Long-Term Contracts" },
    { feature: "Satisfaction Guarantee", trial: "Automatic Expiry", paid: "7-Day Money-Back Guarantee" },
];

export default async function IptvFreeTrialPage() {
    const { trialGraphSchema, trialFaqs } = await getIptvFreeTrialPageData();

    return (
        <>
            <Schema id="trial-graph" schema={trialGraphSchema as any} />

            <main className="bg-canvas text-foreground">
                {/* Hero Section */}
                <section className="relative w-full border-b border-hairline py-16 sm:py-24 lg:py-28 text-center bg-canvas">
                    <Container>
                        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-body">
                            <ol className="flex items-center justify-center gap-2">
                                <li>
                                    <Link href="/tv" className="hover:text-foreground transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li className="text-muted-foreground">/</li>
                                <li className="font-medium text-foreground">
                                    IPTV Free Trial
                                </li>
                            </ol>
                        </nav>

                        <div className="mx-auto max-w-4xl">
                            <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                100% Risk-Free IPTV Test (2026)
                            </p>
                            <h1 className="text-balance font-headline text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                                Free Trial IPTV: 24-Hour Instant Access <br className="hidden sm:inline" />
                                <span className="text-primary">(No Credit Card Required)</span>
                            </h1>
                            <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-relaxed text-body sm:text-xl">
                                Test <strong>24,000+</strong> live HD &amp; 4K channels, major live sports in 60fps, and <strong>80,000+</strong> VOD movies and series with instant automated credential delivery. Zero commitment, no payment details needed.
                            </p>

                            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                                <Button asChild size="xl" className="w-full sm:w-auto font-semibold bg-primary text-ink hover:bg-primary-active">
                                    <Link href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                        <SiWhatsapp className="mr-2 h-5 w-5" />
                                        Start Free Trial on WhatsApp
                                    </Link>
                                </Button>
                                <Button asChild size="xl" variant="outline" className="w-full sm:w-auto font-semibold border-hairline text-foreground hover:bg-surface-card hover:border-hairline-strong">
                                    <Link href="/tv/pricing">
                                        View Paid Plans ($7.50/mo) <ArrowRight size={16} className="ml-1" />
                                    </Link>
                                </Button>
                            </div>

                            <p className="mt-4 text-xs font-medium text-muted-foreground">
                                ✓ 24-Hour Full Access &bull; ✓ No Credit Card Required &bull; ✓ Instant Activation &bull; ✓ Zero Auto-Renewal
                            </p>
                        </div>
                    </Container>
                </section>

                {/* What You Get in the Trial */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/30">
                    <Container>
                        <SectionHeader
                            title="What You Get in Your IPTV Free Trial"
                            subtitle="Experience the complete, unrestricted catalog of our premium IPTV service for 24 hours."
                        />
                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {trialHighlights.map((feature, index) => (
                                <Card key={index} className="border-hairline bg-surface-card transition-all hover:border-hairline-strong">
                                    <CardHeader className="pb-3">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                            <feature.icon className="h-6 w-6" />
                                        </div>
                                        <CardTitle className="mt-4 text-xl font-bold text-foreground font-headline">
                                            {feature.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-body leading-relaxed">{feature.text}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* What to Test During Your Free Trial */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
                    <Container>
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                Buyer&apos;s Evaluation Checklist
                            </p>
                            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                                What to Test During Your 24-Hour Trial
                            </h2>
                            <p className="mt-4 text-base text-body leading-relaxed">
                                Use your 24 hours to evaluate our streaming infrastructure and confirm that our service meets your entertainment standards before deciding to subscribe.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            {evaluationCriteria.map((item, idx) => (
                                <div key={idx} className="rounded-lg border border-hairline bg-surface-card p-6">
                                    <h3 className="font-headline text-lg font-bold text-foreground mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-body leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Compatible Devices & Setup Guides */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/30">
                    <Container>
                        <SectionHeader
                            title="Compatible Devices &amp; Installation Guides"
                            subtitle="Our IPTV trial works with all major streaming devices and media player applications (TiviMate, IPTV Smarters Pro, IBO Player, VLC)."
                        />

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {supportedDevices.map((device, i) => (
                                <Link
                                    key={i}
                                    href={device.href}
                                    className="flex items-center justify-between rounded-lg border border-hairline bg-surface-card p-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                                >
                                    <span>{device.name}</span>
                                    <ArrowRight size={16} className="text-muted-foreground" />
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* How It Works - 3 Easy Steps */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
                    <Container>
                        <SectionHeader
                            title="Get Your Free Trial in 3 Easy Steps"
                            subtitle="Instant automated provisioning delivered right to your WhatsApp in minutes."
                        />
                        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                            {howItWorksSteps.map((step) => (
                                <div key={step.number} className="flex flex-col items-center text-center rounded-lg border border-hairline bg-surface-card p-6">
                                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary font-headline text-2xl font-bold">
                                        {step.number}
                                    </div>
                                    <h3 className="mb-2 font-headline text-xl font-bold text-foreground">{step.title}</h3>
                                    <p className="text-sm text-body leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 text-center">
                            <Button asChild size="lg" className="bg-primary text-ink hover:bg-primary-active font-semibold">
                                <Link href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                    <SiWhatsapp className="mr-2 h-5 w-5" />
                                    Request Your Instant Trial Now
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </section>

                {/* Free Trial vs Paid Subscription Table */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/30">
                    <Container>
                        <div className="mx-auto max-w-3xl text-center mb-10">
                            <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                Transparent Comparison
                            </p>
                            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                                Free Trial vs. Paid Subscription
                            </h2>
                            <p className="mt-4 text-base text-body leading-relaxed">
                                See how our 24-hour test compares to full subscription membership.
                            </p>
                        </div>

                        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-hairline bg-surface-card">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="border-b border-hairline bg-surface-card/80 text-foreground font-headline font-bold">
                                        <tr>
                                            <th className="p-4">Feature / Dimension</th>
                                            <th className="p-4 text-primary">24-Hour Free Trial</th>
                                            <th className="p-4">Full Subscription Plan</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-hairline text-body">
                                        {comparisonRows.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-canvas/50">
                                                <td className="p-4 font-semibold text-foreground">{row.feature}</td>
                                                <td className="p-4 text-foreground">{row.trial}</td>
                                                <td className="p-4 text-foreground font-medium">{row.paid}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <Link href="/tv/pricing" className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-sm">
                                Explore All Full Subscription Plans ($7.50–$16.00/mo) <ArrowRight size={15} />
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-16 sm:py-24 border-b border-hairline bg-canvas">
                    <Container>
                        <SectionHeader
                            title="Free Trial — Frequently Asked Questions"
                            subtitle="Everything you need to know about testing our IPTV service before purchasing a subscription."
                        />
                        <div className="mx-auto mt-10 max-w-3xl">
                            <Accordion type="single" collapsible className="w-full">
                                {trialFaqs.map((faq, i) => (
                                    <AccordionItem key={i} value={`item-${i}`} className="border-hairline">
                                        <AccordionTrigger className="text-left font-headline font-semibold text-foreground hover:text-primary">
                                            {faq.question}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-body leading-relaxed text-sm">
                                            <p>{faq.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </Container>
                </section>

                {/* Final Closing CTA */}
                <section className="py-16 sm:py-24 bg-surface-card/40">
                    <Container>
                        <div className="relative overflow-hidden rounded-xl border border-hairline bg-night p-8 text-center md:p-14 shadow-2xl">
                            <div className="relative z-10 mx-auto max-w-3xl">
                                <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                    Instant Automated Setup
                                </p>
                                <h2 className="font-headline text-3xl font-extrabold text-white sm:text-5xl">
                                    Ready to Test the #1 IPTV Provider?
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
                                    Start your 24-hour all-access pass with 24,000+ live channels, major sports in 60fps, and 80,000+ VOD movies. Zero payment details required.
                                </p>
                                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                    <Button asChild size="xl" className="w-full sm:w-auto font-semibold bg-primary text-ink hover:bg-primary-active">
                                        <Link href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                            <SiWhatsapp className="mr-2 h-5 w-5" />
                                            Get Your Free Trial on WhatsApp
                                        </Link>
                                    </Button>
                                    <Button asChild size="xl" variant="outline" className="w-full sm:w-auto font-semibold border-white/20 text-white hover:bg-white/10">
                                        <Link href="/tv/pricing">
                                            View Subscription Plans
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
        </>
    );
}
