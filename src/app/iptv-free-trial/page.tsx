import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Container } from "@/components/shared/Container";
import { Check, Tv, Zap, Shield, MessageCircle, Smartphone, UserCheck, Star, ArrowRight, Clock, Film, Trophy, Laptop, Globe, Wifi, AlertCircle, HelpCircle, RefreshCw, Layers } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";
import { getIptvFreeTrialPageData } from "@/lib/data/iptv-free-trial-page";
import { Schema } from "@/components/shared/Schema";
import { generateMetadata as generatePageMetadata } from "@/lib/site-config";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function generateMetadata(): Metadata {
    const title = "IPTV Free Trial (2026): Instant 24-Hour Access — No Credit Card";
    const description = "Get an instant 24-hour IPTV free trial with 24,000+ live HD/4K channels, 60fps sports & 80,000+ VOD. No credit card required. Start streaming in minutes →";
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
    { icon: Tv, title: "24,000+ Live Channels", text: "Unrestricted access to premium local and international live TV feeds from the USA, UK, Canada, Europe, and worldwide." },
    { icon: Trophy, title: "Live Sports in 60FPS & PPV", text: "Stream Premier League, Champions League, NFL, NBA, MLB, UFC PPV, and Formula 1 in fluid 60fps high definition." },
    { icon: Film, title: "80,000+ Movies & TV Series", text: "On-demand VOD library with the latest blockbuster movies, complete multi-season series, and daily content updates." },
    { icon: Zap, title: "Anti-Freeze 4K & FHD Servers", text: "Adaptive bitrate streaming powered by redundant H.265/HEVC video codecs and 99.9% uptime server load balancers." },
];

const evaluationCriteria = [
    {
        title: "1. Channel Zapping Speed & Latency",
        description: "Test channel zap times and network responsiveness. Our low-latency infrastructure delivers prompt EPG loading and sub-second channel switching."
    },
    {
        title: "2. 4K Live Sports & 60FPS Smoothness",
        description: "Verify fluid 60fps motion clarity during live football, basketball, and racing events without frame drops, ghosting, or stutter."
    },
    {
        title: "3. Electronic Program Guide (EPG) Accuracy",
        description: "Confirm that interactive TV guide schedules, channel logos, and program descriptions populate accurately in your player app."
    },
    {
        title: "4. Multi-App & Hardware Compatibility",
        description: "Test your trial credentials on top player apps like TiviMate, IPTV Smarters Pro, IBO Player, or VLC across Firestick, Smart TVs, and PCs."
    },
    {
        title: "5. Real-Time Support Responsiveness",
        description: "Message our digital support team on WhatsApp at any point during your trial to evaluate our 24/7 technical customer assistance firsthand."
    },
    {
        title: "6. Video-on-Demand (VOD) Performance",
        description: "Test fast-forward, rewind, multi-language subtitle tracks, and dual audio streams across our 80,000+ movie and series catalog."
    }
];

const supportedDevices = [
    { name: "Amazon Fire TV & Firestick", href: "/tv/devices/fire-tv", app: "TiviMate / Smarters Pro" },
    { name: "Android TV & Google TV", href: "/tv/devices/android", app: "TiviMate / XCIPTV" },
    { name: "Samsung Smart TV (Tizen)", href: "/tv/devices/samsung-tv", app: "IBO Player / Smartone" },
    { name: "LG Smart TV (webOS)", href: "/tv/devices/lg-tv", app: "IBO Player / Nanomid" },
    { name: "Apple TV 4K & iOS", href: "/tv/devices/apple-tv", app: "IPTVX / GSE Smart IPTV" },
    { name: "Windows PC & Laptop", href: "/tv/devices/windows", app: "IPTV Smarters / VLC" },
    { name: "macOS (MacBook & iMac)", href: "/tv/devices/macos", app: "Smarters Pro / VLC" },
    { name: "Infomir MAG Boxes", href: "/tv/devices/mag", app: "Stalker Portal / MAC" },
];

const howItWorksSteps = [
    {
        id: "step1",
        number: 1,
        title: "Request Trial on WhatsApp",
        description: "Click the 'Start Free Trial on WhatsApp' button to open a direct chat with our 24/7 activation team. No credit card or billing details are ever required.",
    },
    {
        id: "step2",
        number: 2,
        title: "Receive Login Credentials",
        description: "Our team instantly delivers your unique Xtream Codes API credentials (Server URL, Username, Password) alongside your M3U Plus playlist URL in minutes.",
    },
    {
        id: "step3",
        number: 3,
        title: "Install App & Start Streaming",
        description: "Enter your credentials into your favorite IPTV player app (such as TiviMate, IPTV Smarters Pro, or IBO Player) and enjoy 24 hours of full, unrestricted access.",
    }
];

const speedRequirements = [
    { resolution: "Standard Definition (SD / 720p)", speed: "8 – 10 Mbps", connection: "Wi-Fi or Mobile 4G/5G", idealFor: "Standard channels on mobile or tablet" },
    { resolution: "Full HD (1080p @ 60fps)", speed: "15 – 20 Mbps", connection: "5 GHz Wi-Fi or Ethernet", idealFor: "Live sports, news, and 1080p entertainment" },
    { resolution: "Ultra HD (4K Streams & PPV)", speed: "25 – 35 Mbps", connection: "Hardwired Ethernet (Recommended)", idealFor: "4K live broadcasts, 4K VOD movies, and PPV" },
];

const troubleshootingTips = [
    {
        title: "Login Failed / Invalid Details",
        icon: AlertCircle,
        solution: "Ensure there are no trailing spaces before or after your username, password, or server URL when copying from WhatsApp."
    },
    {
        title: "Stream Freezing or Buffering",
        icon: RefreshCw,
        solution: "Clear your player app's cache in device settings, restart your home router, or switch your stream format from HLS to MPEG-TS in player settings."
    },
    {
        title: "EPG TV Guide Not Loading",
        icon: Layers,
        solution: "Go to your app's EPG settings and click 'Update EPG' or 'Force Reload' to sync the latest XMLTV television schedule feed."
    },
    {
        title: "ISP Throttling During Live Sports",
        icon: Shield,
        solution: "If your speed drops only during major live sports, your ISP may be throttling streaming traffic. Connecting a VPN instantly restores full speed."
    }
];

const comparisonRows = [
    { feature: "Channel Lineup", trial: "24,000+ Live Channels", paid: "24,000+ Live Channels" },
    { feature: "On-Demand VOD", trial: "80,000+ Movies & Series", paid: "80,000+ Movies & Series" },
    { feature: "Stream Quality", trial: "4K UHD, Full HD & HD", paid: "4K UHD, Full HD & HD" },
    { feature: "Sports in 60FPS", trial: "Full Access Included", paid: "Full Access Included" },
    { feature: "Simultaneous Connections", trial: "1 Active Connection", paid: "2 Connections Included" },
    { feature: "Trial Duration", trial: "24 Hours (Full Access)", paid: "1, 3, 6, or 12 Months" },
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
                                24-Hour Evaluation Account
                            </p>
                            <h1 className="text-balance font-headline text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                                IPTV Free Trial: Instant 24-Hour Access <br className="hidden sm:inline" />
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

                {/* Technical Overview & Definition for AEO / Snippets */}
                <section className="py-12 sm:py-16 border-b border-hairline bg-surface-card/20">
                    <Container>
                        <div className="mx-auto max-w-4xl rounded-xl border border-hairline bg-surface-card p-6 sm:p-8">
                            <div className="text-xs font-semibold uppercase tracking-wider text-primary mb-2 flex items-center gap-2">
                                <Tv size={16} /> Service Definition &amp; Formats
                            </div>
                            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-foreground mb-3">
                                What Is an IPTV Free Trial &amp; How Does It Work?
                            </h2>
                            <p className="text-base text-body leading-relaxed mb-4">
                                An <strong>IPTV free trial</strong> is a time-limited, no-cost test access pass provided by an IPTV service provider that allows prospective subscribers to evaluate live channel quality, sports broadcast stability, video-on-demand (VOD) performance, Electronic Program Guide (EPG) accuracy, and player app compatibility before purchasing a paid subscription.
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                Upon requesting your trial, our automated provisioning system generates standard <strong>Xtream Codes API</strong> credentials (Server URL, Username, and Password) alongside an <strong>M3U Plus playlist</strong> URL. These credentials can be entered directly into your preferred media player app (such as TiviMate, IPTV Smarters Pro, IBO Player, or VLC) without installing unverified third-party APKs or entering payment information.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm font-semibold">
                                <Link href="/tv/guides/what-is-iptv" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                                    What Is IPTV? <ArrowRight size={14} />
                                </Link>
                                <Link href="/tv/guides/m3u-vs-xtream-codes-api" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                                    M3U vs. Xtream Codes <ArrowRight size={14} />
                                </Link>
                                <Link href="/tv/guides/iptv-apps-and-players" className="inline-flex items-center gap-1.5 text-primary hover:underline">
                                    Best IPTV Players <ArrowRight size={14} />
                                </Link>
                                <Link href="/tv/guides/how-to-choose-an-iptv-service" className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground hover:underline">
                                    How to Choose a Provider <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* 3-Step Activation Walkthrough */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
                    <Container>
                        <SectionHeader
                            title="How to Activate Your Free IPTV Trial in 3 Steps"
                            subtitle="Instant automated provisioning delivered right to your WhatsApp in minutes."
                        />
                        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                            {howItWorksSteps.map((step) => (
                                <div id={step.id} key={step.number} className="flex flex-col items-center text-center rounded-lg border border-hairline bg-surface-card p-6">
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
                                    Request Your Instant Trial on WhatsApp
                                </Link>
                            </Button>
                        </div>
                    </Container>
                </section>

                {/* What to Test During Your Free Trial */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/20">
                    <Container>
                        <div className="mx-auto max-w-3xl text-center">
                            <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                Buyer&apos;s Evaluation Checklist
                            </p>
                            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                                What to Test During Your 24-Hour IPTV Trial
                            </h2>
                            <p className="mt-4 text-base text-body leading-relaxed">
                                Use your 24 hours to evaluate our streaming infrastructure and confirm that our service meets your entertainment standards before deciding to subscribe.
                            </p>
                        </div>

                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

                {/* Everything Included in the Trial */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
                    <Container>
                        <SectionHeader
                            title="Everything Included in Your 24-Hour Test Account"
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

                {/* Compatible Devices & Setup Guides */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/30">
                    <Container>
                        <SectionHeader
                            title="Compatible Hardware Platforms &amp; Installation Guides"
                            subtitle="Our IPTV trial works seamlessly with all major streaming devices and media player applications."
                        />

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {supportedDevices.map((device, i) => (
                                <Link
                                    key={i}
                                    href={device.href}
                                    className="flex flex-col justify-between rounded-lg border border-hairline bg-surface-card p-4 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{device.name}</span>
                                        <ArrowRight size={16} className="text-muted-foreground" />
                                    </div>
                                    <span className="mt-2 text-xs font-normal text-muted-foreground">Recommended: {device.app}</span>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Internet Speed Requirements */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
                    <Container>
                        <div className="mx-auto max-w-3xl text-center mb-10">
                            <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                Bandwidth Specifications
                            </p>
                            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                                Internet Speed &amp; Network Requirements
                            </h2>
                            <p className="mt-4 text-base text-body leading-relaxed">
                                Ensure your home broadband connection meets our recommended bandwidth thresholds for smooth, buffer-free playback.
                            </p>
                        </div>

                        <div className="mx-auto max-w-4xl overflow-hidden rounded-lg border border-hairline bg-surface-card">
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="border-b border-hairline bg-surface-card/80 text-foreground font-headline font-bold">
                                        <tr>
                                            <th className="p-4">Stream Quality</th>
                                            <th className="p-4 text-primary">Minimum Speed</th>
                                            <th className="p-4">Recommended Connection</th>
                                            <th className="p-4">Ideal Use Case</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-hairline text-body">
                                        {speedRequirements.map((row, idx) => (
                                            <tr key={idx} className="hover:bg-canvas/50">
                                                <td className="p-4 font-semibold text-foreground">{row.resolution}</td>
                                                <td className="p-4 text-primary font-bold">{row.speed}</td>
                                                <td className="p-4 text-foreground">{row.connection}</td>
                                                <td className="p-4 text-muted-foreground text-xs">{row.idealFor}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <p className="mt-4 text-xs text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed">
                            Note: These bandwidth benchmarks reflect dedicated download speeds for a single stream. If multiple household members are gaming, video conferencing, or streaming simultaneously on the same network, we recommend an overall broadband plan of 50–100 Mbps to prevent local network bottlenecks.
                        </p>
                    </Container>
                </section>

                {/* Instant Troubleshooting During Trial */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/20">
                    <Container>
                        <div className="mx-auto max-w-3xl text-center mb-10">
                            <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                Quick Troubleshooting Guide
                            </p>
                            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                                Common Trial Connection Solutions
                            </h2>
                            <p className="mt-4 text-base text-body leading-relaxed">
                                If you encounter connection issues during your test, these 4 rapid fixes resolve 99% of common player setup errors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {troubleshootingTips.map((tip, idx) => (
                                <div key={idx} className="rounded-lg border border-hairline bg-surface-card p-6 flex gap-4">
                                    <div className="h-10 w-10 shrink-0 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                        <tip.icon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-headline font-bold text-foreground mb-1">{tip.title}</h3>
                                        <p className="text-sm text-body leading-relaxed">{tip.solution}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <Link href="/tv/guides/how-to-fix-iptv-buffering" className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-sm">
                                Read Full IPTV Buffering &amp; Troubleshooting Guide <ArrowRight size={15} />
                            </Link>
                        </div>
                    </Container>
                </section>

                {/* Free Trial vs Paid Subscription Table */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-canvas">
                    <Container>
                        <div className="mx-auto max-w-3xl text-center mb-10">
                            <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                                Transparent Comparison
                            </p>
                            <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                                24-Hour Free Trial vs. Paid Subscription Plans
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

                {/* What Happens When Trial Expires */}
                <section className="py-16 sm:py-24 border-b border-hairline bg-surface-card/30">
                    <Container>
                        <div className="mx-auto max-w-3xl rounded-xl border border-hairline bg-surface-card p-6 sm:p-10 text-center sm:text-left">
                            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-foreground mb-3">
                                What Happens When Your 24-Hour Trial Expires?
                            </h2>
                            <p className="text-sm sm:text-base text-body leading-relaxed mb-4">
                                Once your 24 hours of test access conclude, your trial account automatically deactivates. Because we do not collect credit cards or billing details upfront, you will never receive unexpected charges or auto-renewals.
                            </p>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                If you decide to continue streaming with a full subscription, our team can seamlessly extend your existing username and password so you never have to re-configure your player app or re-import your favorite channel lists.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Button asChild size="default" className="bg-primary text-ink hover:bg-primary-active font-semibold">
                                    <Link href="/tv/pricing">
                                        View Subscription Packages ($7.50/mo)
                                    </Link>
                                </Button>
                                <Button asChild size="default" variant="outline" className="border-hairline text-foreground hover:bg-surface-card">
                                    <Link href="https://wa.me/447848197761" target="_blank" rel="noopener noreferrer">
                                        <SiWhatsapp className="mr-2 h-4 w-4" /> Message Support on WhatsApp
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-16 sm:py-24 border-b border-hairline bg-canvas">
                    <Container>
                        <SectionHeader
                            title="Frequently Asked Questions About Our IPTV Free Trial"
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
                                    Ready to Start Your 24-Hour Free Trial?
                                </h2>
                                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
                                    Experience our low-latency streaming infrastructure, EPG accuracy, and multi-device compatibility on your own hardware for 24 hours with zero upfront payment.
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
