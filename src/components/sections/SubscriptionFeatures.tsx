import { Tv, Zap, Shield, MessageCircle, Smartphone, Film, Trophy, Clock, GitCommit } from "lucide-react";
import { Container } from "../shared/Container";

const features = [
    { 
        icon: Tv, 
        title: "24,000+ Live Channels",
        description: "Access premium channels from the USA, UK, Canada, and worldwide, covering news, entertainment, and kids' programming."
    },
    { 
        icon: Film, 
        title: "80,000+ VOD Library",
        description: "Stream the latest movies and binge-worthy TV series. Our on-demand library is updated daily with new releases and classics."
    },
    { 
        icon: Smartphone, 
        title: "Multi-Device Streaming",
        description: "Watch on any device—Smart TV, Android, iOS, Fire Stick, and more. Your subscription works everywhere, at home or on the go."
    },
    { 
        icon: Clock, 
        title: "Instant Activation",
        description: "No waiting. Your IPTV subscription is activated within minutes of payment, with credentials delivered instantly to your email."
    },
    { 
        icon: Trophy, 
        title: "All Sports & PPV Events",
        description: "Never miss a game. Get live access to NFL, NBA, MLB, NHL, Premier League, UFC, Boxing, and all major PPV events."
    },
    { 
        icon: Shield, 
        title: "Anti-Freeze Technology",
        description: "Our advanced anti-freeze technology and load balancing ensure smooth, uninterrupted streaming with 99.9% uptime."
    },
    { 
        icon: MessageCircle, 
        title: "24/7 Customer Support",
        description: "Get help whenever you need it. Our expert support team is available around the clock via live chat, email, and WhatsApp."
    },
    { 
        icon: GitCommit, 
        title: "Electronic Program Guide (EPG)",
        description: "A full TV guide shows you what's on now and what's coming up. Set reminders and never miss your favorite shows."
    },
];

export function SubscriptionFeatures() {
    return (
        <section className="py-16 sm:py-24 bg-canvas border-t border-hairline">
          <Container>
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow-cap mb-3 text-xs font-bold uppercase tracking-wider text-primary">
                Full-Access Platform
              </p>
              <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                What's Included in Every IPTV Subscription
              </h2>
              <p className="mt-4 text-lg text-body leading-relaxed">
                No matter which plan you choose, you get access to our complete feature set.
              </p>
            </div>
            <ul className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, i) => (
                    <li key={i} className="rounded-lg border border-hairline bg-surface-card p-6 transition-colors hover:border-hairline-strong">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-surface-elevated text-primary border border-hairline">
                            <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 font-headline text-lg font-bold text-foreground">
                            {feature.title}
                        </h3>
                        <p className="text-sm text-body leading-relaxed">{feature.description}</p>
                    </li>
                ))}
            </ul>
          </Container>
        </section>
    );
}
