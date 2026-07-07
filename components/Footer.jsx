import Logo from "./Logo";

const WHATSAPP = "https://wa.me/10000000000";

const QUICK_LINKS = [
  { label: "Home", href: "#top" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#steps" },
  { label: "Devices", href: "#devices" },
  { label: "FAQ", href: "#faq" },
];

const APPS = [
  "Smart TV",
  "Amazon Firestick",
  "Android",
  "Apple TV & iOS",
  "MAG Box",
  "Windows & macOS",
];

const SOCIAL = [
  {
    name: "X",
    path: "M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.8 22H1.7l7.9-9L1 2h7l4.8 6.4L18.9 2Z",
  },
  {
    name: "Instagram",
    path: "M12 7.6A4.4 4.4 0 1 0 12 16.4 4.4 4.4 0 0 0 12 7.6Zm0 7.3a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Zm5.6-7.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20 7.1c-.1-1.3-.4-2.5-1.4-3.4S16.5 2.4 15.2 2.3C13.8 2.2 9.9 2.2 8.5 2.3c-1.3.1-2.5.4-3.4 1.4S3.7 5.8 3.6 7.1c-.1 1.4-.1 5.3 0 6.7.1 1.3.4 2.5 1.4 3.4s2.1 1.3 3.4 1.4c1.4.1 5.3.1 6.7 0 1.3-.1 2.5-.4 3.4-1.4s1.3-2.1 1.4-3.4c.1-1.4.1-5.3 0-6.7Z",
  },
  {
    name: "YouTube",
    path: "M23 12s0-3.2-.4-4.7c-.2-.8-.9-1.5-1.7-1.7C19.4 5.2 12 5.2 12 5.2s-7.4 0-8.9.4c-.8.2-1.5.9-1.7 1.7C1 8.8 1 12 1 12s0 3.2.4 4.7c.2.8.9 1.5 1.7 1.7 1.5.4 8.9.4 8.9.4s7.4 0 8.9-.4c.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.7.4-4.7ZM9.8 15V9l5.2 3-5.2 3Z",
  },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="cv-section relative border-t border-[color:var(--hair)] pt-20"
    >
      <div className="container-x">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-secondary">
              The world&apos;s premier IPTV service. 20,000+ live channels and a
              huge VOD library, streamed in flawless HD &amp; 4K.
            </p>
            <div className="mt-7 flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border text-secondary transition-colors hairline hover:hairline-strong hover:text-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-tertiary">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[14px] text-secondary transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Supported apps */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-tertiary">
              Supported Apps
            </h3>
            <ul className="mt-4 space-y-3">
              {APPS.map((a) => (
                <li key={a} className="text-[14px] text-secondary">
                  {a}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.14em] text-tertiary">
              Contact
            </h3>
            <address className="mt-4 space-y-3 not-italic text-[14px] leading-relaxed text-secondary">
              <p>
                123 Digital Street,
                <br />
                Lizard City, LC 12345
              </p>
              <p>
                <a
                  href="mailto:support@iptvprovider.me"
                  className="transition-colors hover:text-primary"
                >
                  support@iptvprovider.me
                </a>
              </p>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-acid px-5 py-2.5 text-[13px] font-semibold text-[#041207] transition-transform duration-500 hover:scale-[1.03]"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[color:var(--hair)] py-8 sm:flex-row">
          <p className="text-[13px] text-tertiary">
            © {new Date().getFullYear()} IPTV Provider. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[13px] text-tertiary">
            <a href="#" className="transition-colors hover:text-primary">Terms</a>
            <a href="#" className="transition-colors hover:text-primary">Privacy</a>
            <a href="#" className="transition-colors hover:text-primary">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
