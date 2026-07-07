import Link from "next/link";

const DEST = "/iptv-smarters-pro";
const WHATSAPP = "https://wa.me/447848197761";

export const metadata = {
  title: "Page not found — best IPTV service, 54,000+ channels",
  description:
    "That page went off-air, but our IPTV subscription is one click away. 54,000+ live channels & 120,000+ movies in 4K. Free 24-hour trial, from $7.50/mo.",
  robots: { index: false, follow: true },
};

const TRUST = [
  "54,000+ live channels",
  "120,000+ movies & series",
  "Up to 4K quality",
  "Free 24-hour trial",
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24">
      {/* backdrop — mirrors the hero */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[var(--bg)]" />
        <div className="absolute left-1/2 top-[8%] h-[440px] w-[760px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(0,255,132,0.13),transparent)] blur-[70px]" />
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "radial-gradient(currentColor 1px, transparent 1px)",
            color: "var(--fg)",
            backgroundSize: "40px 40px",
            maskImage:
              "radial-gradient(75% 55% at 50% 30%, #000 0%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(75% 55% at 50% 30%, #000 0%, transparent 72%)",
          }}
        />
      </div>

      <div className="container-x text-center">
        <p className="eyebrow justify-center">
          <span className="h-1 w-1 rounded-full bg-acid shadow-[0_0_10px_2px_rgba(0,255,132,0.7)]" />
          Error 404 · Signal lost
        </p>

        <p className="mx-auto mt-8 font-display text-[clamp(4rem,14vw,8rem)] font-semibold leading-none tracking-editorial text-primary">
          404
        </p>

        <h1 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(1.6rem,4.5vw,2.8rem)] font-semibold leading-[1.05] tracking-editorial text-primary">
          This channel went off-air
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-[16px] leading-relaxed text-secondary sm:text-[17px]">
          The page you were after doesn&rsquo;t exist &mdash; but the best seat
          in the house does. Stream{" "}
          <span className="font-medium text-primary">54,000+ live channels</span>{" "}
          and{" "}
          <span className="font-medium text-primary">120,000+ movies</span> in
          up to 4K on every device, with a free 24-hour trial and plans from{" "}
          <span className="font-medium text-primary">$7.50/mo</span>.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`${DEST}#pricing`}
            className="group relative inline-flex items-center gap-2 rounded-full bg-acid px-7 py-3.5 text-[15px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03] active:scale-95"
          >
            <span className="absolute -inset-2 -z-10 rounded-full bg-acid/35 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
            View IPTV plans
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              &rarr;
            </span>
          </Link>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border px-7 py-3.5 text-[15px] font-semibold text-primary transition-colors duration-500 hairline hover:hairline-strong"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-acid"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Start free trial on WhatsApp
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {TRUST.map((t) => (
            <li
              key={t}
              className="flex items-center gap-2 text-[13px] text-secondary"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-acid"
              >
                <path d="m5 12.5 4 4L19 6.5" />
              </svg>
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <Link
            href={DEST}
            className="link-underline text-[14px] font-medium text-tertiary hover:text-primary"
          >
            &larr; Back to homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
