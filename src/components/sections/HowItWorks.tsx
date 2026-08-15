import { Package, Key, Settings, Tv } from "lucide-react";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";

const steps = [
  {
    number: "01",
    icon: Package,
    title: "1. Choose a Plan",
    description: "Select the subscription plan that best fits your needs, from 1 month to our best-value 12-month package."
  },
  {
    number: "02",
    icon: Key,
    title: "2. Get Activation Details",
    description: "Your M3U playlist URL and Xtream Codes API login credentials are delivered automatically to your email within minutes."
  },
  {
    number: "03",
    icon: Settings,
    title: "3. Set Up Your Device",
    description: "Follow our simple step-by-step setup guides to configure TiviMate, IPTV Smarters, or your Smart TV player app."
  },
  {
    number: "04",
    icon: Tv,
    title: "4. Start Watching",
    description: "Enjoy 24,000+ live HD/4K channels, live sports broadcasts, and 80,000+ on-demand movies and TV series immediately."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 border-t">
      <Container>
        <SectionHeader
          title="How IPTV Subscription Works"
          subtitle="Get started in four easy steps. Setup takes less than five minutes on any supported device."
        />
        <Reveal>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center text-center rounded-lg border bg-card p-6">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border bg-muted/30 text-primary font-bold">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{step.number}</div>
                <h3 className="mb-2 font-headline text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
