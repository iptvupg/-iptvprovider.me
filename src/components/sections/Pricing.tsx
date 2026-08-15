
"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { plans } from "@/lib/site-data/pricing";
import { Container } from "../shared/Container";
import { SectionHeader } from "../shared/SectionHeader";
import { Reveal } from "../shared/Reveal";
import { Badge } from "../ui/badge";
import Link from "next/link";

export function Pricing() {
  return (
    // DESIGN-ollama.md: flat white pricing band. Hairline cards, no lift/shadow.
    // The single popular tier inverts to surface-dark #171717 — the one
    // "look here" moment per page.
    <section id="pricing" className="polarity-light border-t border-border py-20 sm:py-28">
      <Container>
        <SectionHeader
          title="Choose your IPTV provider package"
          subtitle="Select the perfect plan from one of the best IPTV providers. All plans come with our full feature set."
        />
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <Card className={cn(
                "group relative flex h-full flex-col rounded-lg border transition-colors",
                // Featured tier: single inverted surface-dark card (DESIGN-ollama.md).
                plan.isPopular
                  ? "polarity-dark border-transparent"
                  : "border-border"
              )}>
                {plan.isPopular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-0 bg-primary text-primary-foreground">Best Value</Badge>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="eyebrow-cap text-xs font-semibold text-muted-foreground">{plan.name}</CardTitle>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="font-headline text-5xl font-extrabold tracking-tight text-foreground">${plan.price}</span>
                    <span className="text-sm text-muted-foreground">/ {plan.duration.toLowerCase()}</span>
                  </div>
                  <p className="mt-1 h-5 text-sm font-medium text-muted-foreground">
                    {plan.price_monthly !== plan.price
                      ? `Just $${plan.price_monthly.toFixed(2)}/month`
                      : ""}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-foreground/70" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild size="lg" className="w-full">
                    <Link 
                      href={`https://wa.me/447848197761?text=${encodeURIComponent(`Hello, I would like to order the ${plan.name} plan ($${plan.price})`)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Order Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
