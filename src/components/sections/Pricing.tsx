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
    <section id="pricing" className="border-t border-hairline bg-canvas py-20 sm:py-28">
      <Container>
        <SectionHeader
          title="Choose your IPTV provider package"
          subtitle="Select the perfect plan from one of the best IPTV providers. All plans come with our full feature set."
        />
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan, i) => {
            const isFeatured = plan.isPopular;
            return (
              <Reveal key={plan.name} delay={i * 0.1}>
                <Card
                  className={cn(
                    "group relative flex h-full flex-col rounded-lg border transition-all duration-200",
                    isFeatured
                      ? "bg-primary text-ink border-primary shadow-none"
                      : "bg-surface-card border-hairline text-foreground hover:border-hairline-strong"
                  )}
                >
                  {isFeatured && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border-0 bg-ink text-white font-bold uppercase tracking-wider text-[10px] px-3 py-1">
                      Best Value
                    </Badge>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle
                      className={cn(
                        "eyebrow-cap text-xs font-semibold",
                        isFeatured ? "text-ink/80" : "text-muted-foreground"
                      )}
                    >
                      {plan.name}
                    </CardTitle>
                    <div className="mt-3 flex items-baseline gap-1.5">
                      <span
                        className={cn(
                          "font-headline text-5xl font-extrabold tracking-tight",
                          isFeatured ? "text-ink" : "text-foreground"
                        )}
                      >
                        ${plan.price}
                      </span>
                      <span
                        className={cn(
                          "text-sm font-medium",
                          isFeatured ? "text-ink/70" : "text-muted-foreground"
                        )}
                      >
                        / {plan.duration.toLowerCase()}
                      </span>
                    </div>
                    <p
                      className={cn(
                        "mt-1 h-5 text-sm font-semibold",
                        isFeatured ? "text-ink/85" : "text-muted-foreground"
                      )}
                    >
                      {plan.price_monthly !== plan.price
                        ? `Just $${plan.price_monthly.toFixed(2)}/month`
                        : ""}
                    </p>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className={cn(
                              "mt-0.5 h-4 w-4 flex-shrink-0",
                              isFeatured ? "text-ink" : "text-primary"
                            )}
                          />
                          <span
                            className={cn(
                              "text-sm font-normal",
                              isFeatured ? "text-ink" : "text-body"
                            )}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      size="lg"
                      className={cn(
                        "w-full font-semibold",
                        isFeatured
                          ? "bg-ink text-white hover:bg-ink/90 active:bg-black"
                          : "bg-primary text-ink hover:bg-primary-active active:bg-primary-active"
                      )}
                    >
                      <Link
                        href={`https://wa.me/447848197761?text=${encodeURIComponent(
                          `Hello, I would like to order the ${plan.name} plan ($${plan.price})`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Order Now
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
