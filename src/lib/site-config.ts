/**
 * Single source of truth for the firm's public identity (NAP), navigation,
 * and contact channels. Keep Name / Address / Phone consistent everywhere
 * (site + Google Business Profile) for local SEO.
 *
 * ⚠️ PLACEHOLDER VALUES — the business must review and confirm all real-world
 * details (address, phone, email, registration numbers) before launch.
 * Contact channels can be overridden per-environment via NEXT_PUBLIC_* env vars.
 */

const phone = process.env.NEXT_PUBLIC_FIRM_PHONE ?? "+91 00000 00000";
const whatsapp = process.env.NEXT_PUBLIC_FIRM_WHATSAPP ?? "910000000000";
const email = process.env.NEXT_PUBLIC_FIRM_EMAIL ?? "hello@ledgerandlegacy.com";

export const siteConfig = {
  name: "Ledger & Legacy",
  shortName: "Ledger & Legacy",
  tagline: "Tax, compliance and wealth advisory for Kolkata and beyond.",
  description:
    "Ledger & Legacy is a Kolkata-based financial services firm offering tax & compliance and investment & wealth advisory. Book a free consultation.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ledgerandlegacy.com",
  locale: "en_IN",

  // Name / Address / Phone — keep identical across the site & Google Business Profile.
  contact: {
    phone, // human-readable, e.g. "+91 98765 43210"
    phoneHref: `tel:${phone.replace(/[^+\d]/g, "")}`,
    email,
    emailHref: `mailto:${email}`,
    whatsapp, // digits only, country code first, no "+"
    whatsappMessage:
      "Hello, I found Ledger & Legacy through your website and would like to know more about your services.",
    address: {
      line1: "[Office address line 1]",
      line2: "[Office address line 2]",
      city: "Kolkata",
      state: "West Bengal",
      postalCode: "[PIN]",
      country: "India",
    },
    hours: "Mon–Sat, 10:00–19:00 IST",
    // Google Maps embed / place URL — supply once the Business Profile is live.
    mapsUrl: process.env.NEXT_PUBLIC_MAPS_URL ?? "",
  },

  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  },
} as const;

/** Build a wa.me deep link with an optional pre-filled message. */
export function whatsappLink(message: string = siteConfig.contact.whatsappMessage) {
  return `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

/** Primary navigation shared by the desktop header and mobile drawer. */
export const mainNav: NavItem[] = [
  {
    label: "Tax & Compliance",
    href: "/tax-compliance",
    description: "ITR, GST, ROC, incorporation and more.",
  },
  {
    label: "Investment & Wealth",
    href: "/investment-wealth",
    description: "Financial planning, wealth and portfolio advisory.",
  },
  { label: "Insights", href: "/insights", description: "Articles, guides & resources." },
  { label: "About", href: "/about", description: "Our story, team and credentials." },
  { label: "Contact", href: "/contact", description: "Reach us by phone, email or WhatsApp." },
];

/** Footer link groups (legal + regulatory live here per the PRD). */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Services",
    items: [
      { label: "Tax & Compliance", href: "/tax-compliance" },
      { label: "Investment & Wealth", href: "/investment-wealth" },
      { label: "Book a Consultation", href: "/consultation" },
      { label: "Refer a Friend", href: "/referral" },
    ],
  },
  {
    title: "Firm",
    items: [
      { label: "About", href: "/about" },
      { label: "Insights", href: "/insights" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Regulatory Disclosures", href: "/regulatory-disclosures" },
    ],
  },
];
