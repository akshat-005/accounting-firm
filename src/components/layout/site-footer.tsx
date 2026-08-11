import Link from "next/link";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { footerNav, siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";

export function SiteFooter() {
  const { contact } = siteConfig;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Firm / NAP */}
          <div>
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-200">
              {siteConfig.tagline}
            </p>
            <address className="mt-6 space-y-3 text-sm not-italic text-navy-200">
              <p className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-400" />
                <span>
                  {contact.address.line1}, {contact.address.line2}
                  <br />
                  {contact.address.city}, {contact.address.state}{" "}
                  {contact.address.postalCode}
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-gold-400" />
                <a href={contact.phoneHref} className="hover:text-white">
                  {contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-gold-400" />
                <a href={contact.emailHref} className="hover:text-white">
                  {contact.email}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Clock className="size-4 shrink-0 text-gold-400" />
                <span>{contact.hours}</span>
              </p>
            </address>
          </div>

          {/* Link groups */}
          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-navy-200 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 border-t border-navy-800 pt-6">
          <p className="text-xs leading-relaxed text-navy-300">
            Investments in securities and mutual funds are subject to market risks.
            Read all scheme-related documents carefully. Ledger &amp; Legacy provides
            services subject to applicable regulatory requirements; registration and
            disclosure details are available on our{" "}
            <Link
              href="/regulatory-disclosures"
              className="underline decoration-gold-500/60 underline-offset-2 hover:text-white"
            >
              Regulatory Disclosures
            </Link>{" "}
            page. {/* ⚠️ Final regulatory wording to be reviewed by the firm's compliance/legal professional. */}
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-navy-300 sm:flex-row sm:items-center">
            <p>
              © {year} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white">
                Terms of Service
              </Link>
              <Link href="/regulatory-disclosures" className="hover:text-white">
                Regulatory Disclosures
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
