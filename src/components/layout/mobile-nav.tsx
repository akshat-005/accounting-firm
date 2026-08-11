"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { mainNav, siteConfig, whatsappLink } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);

  // Lock body scroll + allow Escape to close while open.
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-900 hover:bg-navy-50"
      >
        <Menu className="size-6" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-navy-950/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col bg-background shadow-lift">
            <div className="flex items-center justify-between border-b px-5 py-4">
              <span className="font-display text-lg font-semibold text-navy-900">
                Menu
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-navy-900 hover:bg-navy-50"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
              {mainNav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={close}
                    className={cn(
                      "rounded-md px-3 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-navy-50 text-navy-900"
                        : "text-foreground hover:bg-muted",
                    )}
                  >
                    {item.label}
                    {item.description ? (
                      <span className="mt-0.5 block text-sm font-normal text-muted-foreground">
                        {item.description}
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <div className="grid gap-3 border-t px-5 py-5">
              <Button href="/consultation" size="lg" variant="primary" onClick={close}>
                Book a Free Consultation
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  href={siteConfig.contact.phoneHref}
                  size="md"
                  variant="outline"
                  onClick={close}
                >
                  <Phone /> Call
                </Button>
                <Button
                  href={whatsappLink()}
                  size="md"
                  variant="outline"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={close}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
