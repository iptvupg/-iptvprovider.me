import AnimatedHeading from "@/components/animations/AnimatedHeading";
import { CheckoutButton } from "@/components/forms/Checkout";
import Reveal from "@/components/animations/Reveal";

export default function FinalCTA() {
  return (
    <section className="cv-section relative py-16 sm:py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[32px] bg-acid px-8 py-16 text-center sm:px-16 sm:py-24">
          {/* subtle texture */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "radial-gradient(#041207 1px, transparent 1px)",
              backgroundSize: "26px 26px",
            }}
          />
          <div className="relative">
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#041207]/70">
              Free 24-hour trial
            </p>
            <AnimatedHeading
              delay={0.05}
              className="mx-auto mt-5 max-w-3xl font-display text-[clamp(2rem,6vw,4rem)] font-semibold leading-[1.02] tracking-editorial text-[#041207]"
              lines={[<span key="1">Start streaming in the next five minutes</span>]}
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-6 max-w-lg text-[16px] leading-relaxed text-[#041207]/75">
                54,000+ live channels and 120,000+ movies &amp; series in up to
                4K, on every device you own. Pick a plan and your login arrives by
                email right away.
              </p>
            </Reveal>

            <Reveal
              delay={0.25}
              className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <CheckoutButton
                className="group inline-flex items-center gap-2 rounded-full bg-[#041207] px-8 py-4 text-[15px] font-semibold text-acid transition-transform duration-500 hover:scale-[1.03] active:scale-95"
              >
                Get Started
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </CheckoutButton>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-[#041207]/25 px-8 py-4 text-[15px] font-semibold text-[#041207] transition-colors duration-500 hover:border-[#041207]/50"
              >
                View Plans
              </a>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
