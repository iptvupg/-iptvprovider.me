import { Container } from "@/components/shared/Container";
import { Tv, Film, Smartphone, Clock, Trophy, Shield } from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "24,000+ Live Channels",
    description: "Access premium channel lineups from the USA, UK, Canada, Europe, and worldwide covering news, entertainment, and kids programming."
  },
  {
    icon: Film,
    title: "80,000+ VOD Library",
    description: "Stream the latest movies and binge-worthy TV series. Our on-demand catalog is updated daily with new releases in HD & 4K."
  },
  {
    icon: Smartphone,
    title: "Multi-Device Compatibility",
    description: "Watch on any device—Amazon Fire Stick, Android TV, Samsung Tizen, LG webOS, Apple TV, iOS, Windows, Mac, or MAG box."
  },
  {
    icon: Clock,
    title: "Instant Activation",
    description: "No waiting. Your subscription login details (Server URL, Xtream Codes API credentials) are delivered automatically within minutes."
  },
  {
    icon: Trophy,
    title: "All Live Sports & PPV Events",
    description: "Never miss a game. Get live HD access to Premier League, NFL, NBA, MLB, UFC, Boxing, F1, and all major PPV events."
  },
  {
    icon: Shield,
    title: "Anti-Freeze Technology",
    description: "Our high-bandwidth server infrastructure and load-balancing protocols distribute traffic across multiple redundant servers for smooth, uninterrupted streaming."
  }
];

export function WhyChoose() {
  return (
    <section className="py-16 sm:py-24 border-b bg-card/20">
      <Container>
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight sm:text-4xl">
            Why Choose Our IPTV Service?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience reliable high-definition TV streaming backed by modern infrastructure and 24/7 technical support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="rounded-lg border bg-card p-6 shadow-sm hover:border-primary/50 transition-colors">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-headline text-xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
