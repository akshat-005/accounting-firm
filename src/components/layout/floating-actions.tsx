"use client";

import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Persistent floating contact actions: click-to-call + WhatsApp.
 * Icon-only on mobile; expands with a label on larger screens. Stacked in a
 * single fixed container so the two pills stay aligned regardless of width.
 */
export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* Click-to-call */}
      <a
        href={siteConfig.contact.phoneHref}
        aria-label={`Call us on ${siteConfig.contact.phone}`}
        className="inline-flex items-center gap-2 rounded-full bg-navy-800 px-4 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-700 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Phone className="size-5" />
        <span className="hidden sm:inline">Call Us</span>
      </a>
      {/* WhatsApp */}
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lift transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <MessageCircle className="size-5" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
