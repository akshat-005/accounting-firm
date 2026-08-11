"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import { mainNav, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      {/* Utility bar */}
      <div className="hidden border-b border-navy-800/60 bg-navy-900 text-navy-100 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-1.5 text-xs">
          <p className="tracking-wide">{siteConfig.tagline}</p>
          <div className="flex items-center gap-5">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-1.5 hover:text-white"
            >
              <Phone className="size-3.5" /> {siteConfig.contact.phone}
            </a>
            <span aria-hidden className="text-navy-700">
              |
            </span>
            <a href={siteConfig.contact.emailHref} className="hover:text-white">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "border-b bg-background/90 backdrop-blur transition-shadow",
          scrolled ? "shadow-soft" : "shadow-none",
        )}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-18 lg:px-8">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {mainNav.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-navy-900"
                      : "text-foreground/80 hover:text-navy-900 hover:bg-navy-50",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href="/consultation"
              size="md"
              variant="primary"
              className="hidden sm:inline-flex"
            >
              Book a Consultation
            </Button>
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
