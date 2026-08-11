/**
 * Service catalogue for the two pillar pages (Tax & Compliance, Investment & Wealth).
 *
 * Each service carries the plain-English content shown in its info panel:
 * a short explanation, who it's for, what's typically needed, and related
 * services. Kept framework-agnostic (pure data) so both server pages and the
 * client <ServiceExplorer> can import it.
 *
 * ⚠️ Copy is written to be accurate and non-promissory. Any regulatory /
 * disclosure wording (esp. investment services) must be reviewed by the firm's
 * compliance professional before launch.
 *
 * Note on naming: the firm's raw list contained SEO variants ("X" vs "X Kolkata").
 * The user-facing list below is de-duplicated; the keyword variants live in each
 * page's metadata instead so the visible service list doesn't read repetitively.
 */

export type ServiceInfo = {
  /** Stable id — also passed to /consultation?service=<slug>. */
  slug: string;
  name: string;
  /** Very short (5–7 word) label shown on the flat service cards. */
  tagline?: string;
  /** 1–2 sentence, plain-English explanation. */
  basic: string;
  /** Who the service typically makes sense for. */
  idealFor: string[];
  /** Documents / information typically needed. */
  documents: string[];
  /** Slugs of related services (same page). */
  related: string[];
};

export type ServiceGroup = {
  /** Anchor id (used by the "what do you need help with" cards). */
  id: string;
  title: string;
  /** Icon key mapped to a lucide icon in the component. */
  icon: string;
  services: ServiceInfo[];
};

/* ------------------------------------------------------------------ *
 * TAX & COMPLIANCE
 * ------------------------------------------------------------------ */

export const taxGroups: ServiceGroup[] = [
  {
    id: "income-tax",
    title: "Income Tax",
    icon: "receipt",
    services: [
      {
        slug: "itr-filing",
        name: "ITR Filing",
        basic:
          "Preparation and filing of your annual income tax return — we compute your income, apply the deductions you're eligible for, and file accurately and on time so you stay compliant and avoid penalties.",
        idealFor: [
          "Salaried individuals",
          "Professionals & freelancers",
          "Business owners",
          "Anyone with multiple income sources",
        ],
        documents: [
          "PAN & Aadhaar",
          "Form 16 / salary details",
          "Form 26AS & AIS (tax credit statements)",
          "Bank interest & capital-gains statements",
          "Proof of tax-saving investments (80C, 80D, etc.)",
          "Previous year's ITR, if applicable",
        ],
        related: ["tax-planning", "tax-notice", "tds"],
      },
      {
        slug: "tax-planning",
        name: "Tax Planning & Advisory",
        basic:
          "Year-round guidance to legally structure your income, investments and expenses so you make full use of the deductions and provisions available to you — planning your taxes ahead, not just filing them.",
        idealFor: [
          "Salaried individuals wanting to save more",
          "Professionals",
          "Business owners",
          "Investors",
        ],
        documents: [
          "Income details",
          "Existing investments",
          "Your financial goals",
          "Previous returns",
        ],
        related: ["itr-filing", "tds", "tax-notice"],
      },
      {
        slug: "tax-notice",
        name: "Income Tax Notice, Assessment & Appeal",
        basic:
          "Support when the Income Tax Department raises a query, notice, scrutiny or assessment — we help you understand what it means, prepare the right response, and represent your case through assessment and appeal.",
        idealFor: [
          "Anyone who has received a notice",
          "Individuals under scrutiny or assessment",
          "Businesses",
        ],
        documents: [
          "The notice you received",
          "Related ITR & computation",
          "Supporting financial documents",
        ],
        related: ["itr-filing", "tax-planning"],
      },
      {
        slug: "tds",
        name: "TDS & TCS Compliance",
        basic:
          "End-to-end handling of tax deducted or collected at source — calculation, deposit and periodic return filing — so your business stays compliant and everyone you pay gets accurate tax credit.",
        idealFor: [
          "Employers",
          "Businesses making specified payments",
          "Firms & companies",
        ],
        documents: [
          "Deductee details & PANs",
          "Payment & challan records",
          "Previous TDS returns",
        ],
        related: ["itr-filing", "accounting"],
      },
    ],
  },
  {
    id: "gst",
    title: "GST",
    icon: "percent",
    services: [
      {
        slug: "gst-registration",
        name: "GST Registration",
        basic:
          "Getting your business registered under GST. Registration is generally required once turnover crosses ₹40 lakh for goods or ₹20 lakh for services (₹20 lakh / ₹10 lakh in special-category states), and for inter-state and e-commerce sellers — we assess whether it applies to you and see it through to your GSTIN.",
        idealFor: [
          "New businesses",
          "Businesses crossing the turnover threshold",
          "Inter-state sellers & e-commerce",
        ],
        documents: [
          "PAN & Aadhaar",
          "Business proof / registration",
          "Address proof",
          "Bank details",
        ],
        related: ["gst-returns", "incorporation"],
      },
      {
        slug: "gst-returns",
        name: "GST Return Filing",
        basic:
          "Timely, accurate filing of your periodic GST returns — reconciling sales, purchases and input tax credit so you stay compliant and avoid late fees.",
        idealFor: [
          "GST-registered businesses",
          "Traders & manufacturers",
          "Service providers",
        ],
        documents: [
          "Sales & purchase invoices",
          "Previous returns",
          "GST login details",
        ],
        related: ["gst-registration", "gst-notice", "accounting"],
      },
      {
        slug: "gst-notice",
        name: "GST Notice, Assessment & Appeal",
        basic:
          "Assistance with GST notices, mismatches, assessments and appeals — understanding the issue, preparing a considered response and representing your case.",
        idealFor: [
          "Businesses that received a GST notice",
          "Cases with return or input-credit mismatches",
        ],
        documents: [
          "The notice you received",
          "Filed returns",
          "Supporting invoices & records",
        ],
        related: ["gst-returns", "tax-notice"],
      },
    ],
  },
  {
    id: "business-setup",
    title: "Business Setup",
    icon: "building",
    services: [
      {
        slug: "incorporation",
        name: "Company & LLP Incorporation",
        basic:
          "Setting up your business the right way — choosing the right structure (Private Limited, LLP and more), name approval, documentation and registration.",
        idealFor: [
          "Founders & entrepreneurs",
          "Partnerships going corporate",
          "New ventures",
        ],
        documents: [
          "PAN & Aadhaar of directors/partners",
          "Address proof",
          "Registered office proof",
          "Passport-size photographs",
        ],
        related: ["roc", "startup-msme", "trademark"],
      },
      {
        slug: "roc",
        name: "ROC & MCA Compliance",
        basic:
          "Ongoing company-law compliance with the Registrar of Companies and MCA — annual filings (AOC-4 and MGT-7 for companies; Form 8 and Form 11 for LLPs), director KYC (DIR-3 KYC), statutory registers and event-based filings — filed on time to avoid daily late-filing penalties.",
        idealFor: ["Private Limited companies", "LLPs", "Company directors"],
        documents: [
          "Incorporation documents",
          "Financial statements",
          "Board resolutions",
        ],
        related: ["incorporation", "accounting"],
      },
      {
        slug: "startup-msme",
        name: "Startup India & MSME Registration",
        basic:
          "Registering your venture under MSME (Udyam) — a size-based registration open to most businesses — and/or Startup India (DPIIT recognition) for eligible innovative startups, so you can access the benefits, schemes and exemptions you qualify for.",
        idealFor: [
          "Early-stage startups",
          "Small & medium businesses",
          "Manufacturers & service units",
        ],
        documents: [
          "Business registration",
          "PAN & Aadhaar",
          "Business activity details",
        ],
        related: ["incorporation", "trademark"],
      },
      {
        slug: "trademark",
        name: "Trademark Registration",
        basic:
          "Protecting your brand name and logo — a clearance search, choosing the right class (of the 45 Nice classes), filing Form TM-A, and following through on any examination objection or opposition.",
        idealFor: [
          "New & growing brands",
          "Businesses & startups",
          "Product & service companies",
        ],
        documents: [
          "Brand name / logo",
          "Applicant details",
          "Proof of business",
        ],
        related: ["incorporation", "startup-msme"],
      },
    ],
  },
  {
    id: "accounting",
    title: "Accounting & Records",
    icon: "book",
    services: [
      {
        slug: "accounting",
        name: "Accounting & Bookkeeping",
        basic:
          "Keeping your books accurate and up to date — recording transactions, reconciliations and periodic financial statements, using tools like Tally, Zoho Books or QuickBooks.",
        idealFor: [
          "Small & medium businesses",
          "Startups",
          "Professionals & firms",
        ],
        documents: [
          "Bank statements",
          "Sales & purchase records",
          "Expense bills",
        ],
        related: ["audit-support", "gst-returns", "tds"],
      },
      {
        slug: "audit-support",
        name: "Audit Support & Compliance Reporting",
        basic:
          "Support for statutory, tax and internal audits — preparing schedules, reconciliations and reports, and coordinating the audit through to completion.",
        idealFor: [
          "Companies & firms requiring audit",
          "Businesses seeking an internal review",
        ],
        documents: [
          "Books of accounts",
          "Financial statements",
          "Supporting records",
        ],
        related: ["accounting", "roc"],
      },
      {
        slug: "custom-enquiry",
        name: "Custom Compliance Enquiry",
        basic:
          "Not sure which service fits? Tell us your situation and we'll advise on what's needed and how we can help.",
        idealFor: [
          "Anyone unsure where to start",
          "Unique or mixed requirements",
        ],
        documents: [
          "A short description of your requirement",
          "Any relevant documents",
        ],
        related: ["accounting", "tax-planning"],
      },
    ],
  },
];

/* ------------------------------------------------------------------ *
 * INVESTMENT & WEALTH
 * ------------------------------------------------------------------ */

export const investmentServices: ServiceInfo[] = [
  {
    slug: "investment-advisory",
    name: "Investment Advisory Services",
    tagline: "Informed guidance on where to invest",
    basic:
      "Objective, personalised guidance on where and how to invest — aligned to your goals, timeframe and comfort with risk — so your decisions are informed rather than guesswork.",
    idealFor: [
      "First-time & experienced investors",
      "Anyone wanting a second opinion",
      "People investing without a clear plan",
    ],
    documents: [
      "Your financial goals",
      "Existing investments",
      "Income & savings",
      "Your comfort with risk",
    ],
    related: ["financial-planning", "wealth-management", "mutual-fund"],
  },
  {
    slug: "financial-planning",
    name: "Financial Planning & Advisory",
    tagline: "A roadmap for all your goals",
    basic:
      "A structured plan for your money across life goals — saving, investing, protection and cash flow — bringing the whole picture together into one roadmap.",
    idealFor: [
      "Individuals & families",
      "People planning big goals (home, education)",
      "Anyone wanting a clear roadmap",
    ],
    documents: [
      "Your goals & timelines",
      "Income & expenses",
      "Existing investments & loans",
    ],
    related: ["investment-advisory", "wealth-management", "asset-management"],
  },
  {
    slug: "wealth-management",
    name: "Wealth Management",
    tagline: "Your whole wealth, managed together",
    basic:
      "Comprehensive, ongoing management of your wealth — coordinating investments, planning and periodic reviews as a single, continuing relationship.",
    idealFor: [
      "Established professionals",
      "Families building wealth",
      "Investors with growing portfolios",
    ],
    documents: [
      "Your overall financial position",
      "Goals & priorities",
      "Existing investments",
    ],
    related: ["portfolio-management", "financial-planning", "asset-management"],
  },
  {
    slug: "portfolio-management",
    name: "Portfolio Management Services (PMS)",
    tagline: "Professionally managed portfolios for larger investors",
    basic:
      "Professionally managed investment portfolios for larger investors, handled by SEBI-registered portfolio managers. PMS has a minimum investment of ₹50 lakh per client (as mandated by SEBI) and is subject to market risk.",
    idealFor: [
      "HNIs & seasoned investors",
      "Investors who can commit ₹50 lakh or more",
    ],
    documents: [
      "Investment amount & goals",
      "Your risk profile",
      "KYC & financial details",
    ],
    related: ["wealth-management", "asset-management", "investment-advisory"],
  },
  {
    slug: "mutual-fund",
    name: "Mutual Fund Advisory",
    tagline: "The right funds for your goals",
    basic:
      "Help choosing and reviewing mutual funds suited to your goals and risk profile, and staying on track over time. Mutual fund investments are subject to market risk.",
    idealFor: ["New & regular investors", "SIP investors", "Goal-based savers"],
    documents: [
      "Your goals & timeframe",
      "Comfort with risk",
      "Existing funds, if any",
    ],
    related: ["investment-advisory", "financial-planning", "asset-management"],
  },
  {
    slug: "asset-management",
    name: "Asset Management Services",
    tagline: "Your asset mix, balanced and reviewed",
    basic:
      "Managing and balancing your mix of assets across categories, with periodic review and rebalancing to keep it aligned to your objectives.",
    idealFor: [
      "Investors with varied assets",
      "Those wanting hands-off management",
    ],
    documents: ["Existing assets & investments", "Your goals", "Risk profile"],
    related: ["wealth-management", "portfolio-management", "financial-planning"],
  },
  {
    slug: "financial-consultancy",
    name: "Financial Consultancy",
    tagline: "Clear answers to specific money questions",
    basic:
      "One-off or ongoing consultation on a specific financial question or decision — a clear, unbiased perspective for when you need one.",
    idealFor: [
      "Anyone with a specific question",
      "Individuals & business owners",
    ],
    documents: ["A description of your query", "Relevant financial details"],
    related: ["financial-planning", "investment-advisory", "wealth-management"],
  },
];

/** Flat slug → service lookup across both pillars (for resolving "related"). */
export const serviceBySlug: Record<string, ServiceInfo> = Object.fromEntries(
  [...taxGroups.flatMap((g) => g.services), ...investmentServices].map((s) => [
    s.slug,
    s,
  ]),
);
