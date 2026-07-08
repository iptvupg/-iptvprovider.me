import Logo from "./Logo";

const WHATSAPP = "https://wa.me/447848197761";

// Absolute canonical-page targets so links resolve from any route.
const HOME = "/iptv-smarters-pro";
const QUICK_LINKS = [
  { label: "Home", href: `${HOME}#top` },
  { label: "Pricing", href: `${HOME}#pricing` },
  { label: "How it works", href: `${HOME}#steps` },
  { label: "Free Trial", href: "/iptv-free-trial-2026" },
  { label: "Devices", href: `${HOME}#devices` },
  { label: "FAQ", href: `${HOME}#faq` },
];

const APPS = [
  "Smart TV",
  "Amazon Firestick",
  "Android",
  "Apple TV & iOS",
  "MAG Box",
  "Windows & macOS",
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
              Premium IPTV for the USA, Canada &amp; worldwide. 54,000+ live
              channels and 120,000+ movies &amp; series, streamed in HD &amp; 4K.
            </p>
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
                English &amp; Spanish support, 24/7
                <br />
                <a
                  href="https://wa.me/447848197761"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  +44 7848 197761
                </a>
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

        <div className="flex items-center justify-center border-t border-[color:var(--hair)] py-8">
          <p className="text-[13px] text-tertiary">
            © {new Date().getFullYear()} IPTV Provider. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
