import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://www.iptvprovider.me";

// Shared shell for the standalone trust / legal pages (privacy, terms, refund,
// about, contact). Renders the site chrome plus a consistent header and a
// long-form `.prose-legal` body, and injects BreadcrumbList + WebPage JSON-LD
// in the initial server-rendered HTML.
export default function PageShell({
  slug,
  eyebrow,
  title,
  intro,
  breadcrumb,
  updated,
  children,
}) {
  const url = `${SITE}/${slug}`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE },
      { "@type": "ListItem", position: 2, name: breadcrumb, item: url },
    ],
  };

  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    isPartOf: { "@id": `${SITE}#website` },
    about: { "@id": `${SITE}#organization` },
    inLanguage: "en",
    ...(updated ? { dateModified: updated.iso } : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }}
      />
      <div className="noise" aria-hidden />
      <Navbar />

      <main className="relative">
        <section className="relative overflow-hidden pt-36 pb-14 sm:pt-40 sm:pb-16">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-[4%] h-[380px] w-[680px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(0,255,132,0.1),transparent)] blur-[70px]" />
          </div>
          <div className="container-x">
            <nav aria-label="Breadcrumb" className="text-[13px] text-tertiary">
              <a
                href="/iptv-smarters-pro#top"
                className="transition-colors hover:text-primary"
              >
                Home
              </a>
              <span className="mx-2 text-[color:var(--hair-strong)]">/</span>
              <span className="text-secondary">{breadcrumb}</span>
            </nav>
            {eyebrow ? (
              <p className="eyebrow mt-8">
                <span className="h-1 w-1 rounded-full bg-acid shadow-[0_0_10px_2px_rgba(0,255,132,0.7)]" />
                {eyebrow}
              </p>
            ) : null}
            <h1 className="mt-5 max-w-3xl font-display text-[clamp(2.2rem,5.5vw,3.6rem)] font-semibold leading-[1.04] tracking-editorial text-primary">
              {title}
            </h1>
            {intro ? (
              <p className="mt-6 max-w-2xl text-pretty text-[16px] leading-relaxed text-secondary sm:text-[17px]">
                {intro}
              </p>
            ) : null}
            {updated ? (
              <p className="mt-6 text-[13px] text-tertiary">
                Last updated{" "}
                <time dateTime={updated.iso}>{updated.label}</time>
              </p>
            ) : null}
          </div>
        </section>

        <section className="relative pb-24">
          <div className="container-x">
            <div className="prose-legal max-w-3xl">{children}</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
