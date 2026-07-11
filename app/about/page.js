import PageShell from "@/components/layout/PageShell";
import { SITE } from "@/config";
import { pageMetadata } from "@/lib/metadata";

const URL = `${SITE}/about`;

export const metadata = pageMetadata({
  title: "About IPTV Provider — Who We Are",
  description:
    "IPTV Provider delivers 54,000+ live channels and 120,000+ movies & series in HD/4K to viewers in the USA, Canada and worldwide, with 24/7 support.",
  canonical: URL,
  openGraph: {
    title: "About IPTV Provider",
    description:
      "Who we are: premium IPTV for the USA, Canada and worldwide with 24/7 support.",
  },
});

export default function AboutPage() {
  return (
    <PageShell
      slug="about"
      eyebrow="About us"
      breadcrumb="About"
      title="About IPTV Provider"
      intro="We help people around the world watch the live TV, sports and movies they love — on the devices they already own, without the cost and lock-in of traditional cable."
    >
      <h2>What we do</h2>
      <p>
        IPTV Provider is a premium internet TV service. We give members access to
        more than 54,000 live channels and over 120,000 movies and series in HD
        and up to 4K, streamed through popular IPTV player apps such as IPTV
        Smarters Pro and TiviMate. It works on Smart TVs, Amazon Firestick,
        Android, Apple TV and iOS, Windows, macOS and MAG boxes — if a device can
        run an IPTV app, it can run our service.
      </p>

      <h2>Who we serve</h2>
      <p>
        Our members are spread across the USA, Canada and the wider world. Many
        come to us to follow live sport, keep up with international and
        home-country channels while abroad, or simply replace an expensive cable
        package with something more flexible. Whatever the reason, the goal is the
        same: reliable streaming that just works.
      </p>

      <h2>How we&apos;re different</h2>
      <ul>
        <li>
          <strong>Try before you buy.</strong> A free 24-hour trial lets you test
          the full library on your own device before you pay anything.
        </li>
        <li>
          <strong>No lock-in.</strong> Subscriptions are billed once with no
          automatic renewal, and every plan is backed by a 30-day money-back
          guarantee.
        </li>
        <li>
          <strong>Real support.</strong> Our team is available 24/7 in English
          and Spanish over WhatsApp and email to help with setup and any issues.
        </li>
      </ul>

      <h2>Our commitment</h2>
      <p>
        We focus on stability and honesty: clear pricing, a genuine free trial,
        anti-freeze streaming technology, and support that actually replies. We
        would rather help you fix an issue than lose you as a member — and if the
        service isn&apos;t right for you, our money-back guarantee makes leaving
        easy.
      </p>

      <h2>Get in touch</h2>
      <p>
        Want to learn more before you start? Read about our{" "}
        <a href="/iptv-free-trial-2026">free trial</a>, check the{" "}
        <a href="/iptv-smarters-pro#pricing">plans and pricing</a>, or{" "}
        <a href="/contact">contact our team</a> any time.
      </p>
    </PageShell>
  );
}
