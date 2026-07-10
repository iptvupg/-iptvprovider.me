import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SITE = "https://www.iptvprovider.me";

// Shared shell for the standalone content pages (trust/legal pages and the
// topic-cluster learn/how-to/compare/fix pages). Renders the site chrome plus a
// consistent header, injects BreadcrumbList + WebPage JSON-LD in the initial
// server-rendered HTML, and accepts extra JSON-LD (Article, HowTo, FAQPage…)
// via `schemas`.
//
// Props:
//   slug            path without leading slash, e.g. "learn/iptv-explained"
//   eyebrow, title, intro, updated ({ iso, label })
//   breadcrumb      label for the current page's crumb
//   parent          optional { name, href } middle crumb (e.g. Learn)
//   schemas         optional array of extra JSON-LD objects
//   contentClassName  wrapper class for the body (default: prose)
export default function PageShell({
  slug,
  eyebrow,
  title,
  intro,
  breadcrumb,
  parent,
  updated,
  author,
  schemas = [],
  contentClassName = "prose-legal max-w-3xl",
  children,
}) {
  const url = `${SITE}/${slug}`;

  const crumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE },
  ];
  if (parent) {
    crumbItems.push({
      "@type": "ListItem",
      position: 2,
      name: parent.name,
      item: `${SITE}${parent.href}`,
    });
  }
  crumbItems.push({
    "@type": "ListItem",
    position: crumbItems.length + 1,
    name: breadcrumb,
    item: url,
  });

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbItems,
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

  const allSchemas = [breadcrumbLd, webPageLd, ...schemas];

  return (
    <>
      {allSchemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
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
              {parent ? (
                <>
                  <span className="mx-2 text-[color:var(--hair-strong)]">/</span>
                  <a
                    href={parent.href}
                    className="transition-colors hover:text-primary"
                  >
                    {parent.name}
                  </a>
                </>
              ) : null}
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
                {author ? (
                  <>
                    By{" "}
                    <span className="text-secondary">{author}</span>
                    <span className="mx-2 text-[color:var(--hair-strong)]">
                      ·
                    </span>
                  </>
                ) : null}
                Last updated{" "}
                <time dateTime={updated.iso}>{updated.label}</time>
              </p>
            ) : null}
          </div>
        </section>

        <section className="relative pb-24">
          <div className="container-x">
            <div className={contentClassName}>{children}</div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
