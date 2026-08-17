import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { footerLinks } from "@/lib/site-data/footer";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    // DESIGN-ollama.md: flat footer, plain hairline divider — no squiggle.
    <footer className="border-t border-border bg-background">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Your premier IPTV Provider for unlocking a world of entertainment. The most reliable choice for all your streaming needs.
            </p>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Device Setup Guides</h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.supportedLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Customer Support</h3>
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>{footerLinks.contact.supportHours}</p>
              <p>
                <a href={`mailto:${footerLinks.contact.email}`} className="hover:text-foreground">
                  {footerLinks.contact.email}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t py-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IPTV Provider. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 sm:mt-0">
            <Link href={siteConfig.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="text-muted-foreground hover:text-foreground"><Facebook className="h-5 w-5" /></Link>
            <Link href={siteConfig.links.twitter} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Twitter" className="text-muted-foreground hover:text-foreground"><Twitter className="h-5 w-5" /></Link>
            <Link href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="text-muted-foreground hover:text-foreground"><Instagram className="h-5 w-5" /></Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
