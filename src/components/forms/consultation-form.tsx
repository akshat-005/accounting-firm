"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageCircle, Mail, Check, AlertCircle } from "lucide-react";
import { taxGroups, investmentServices } from "@/lib/services";
import { siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Consultation request form.
 *
 * ⚠️ No lead backend yet (Phase 3). Instead of a fake submit, this composes the
 * enquiry and hands it off through the firm's live channels — WhatsApp or email —
 * pre-filled with the details, so requests actually reach the firm in the interim.
 * When the Supabase lead/CRM backend exists, swap the handlers for a POST.
 */

const serviceGroups = [
  {
    group: "Tax & Compliance",
    items: taxGroups.flatMap((g) => g.services).map((s) => ({ slug: s.slug, name: s.name })),
  },
  {
    group: "Investment & Wealth",
    items: investmentServices.map((s) => ({ slug: s.slug, name: s.name })),
  },
];

const slugToName = new Map(
  serviceGroups.flatMap((g) => g.items).map((i) => [i.slug, i.name]),
);

const inputClass =
  "h-11 w-full rounded-md border bg-card px-3.5 text-sm shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-navy-400";
const labelClass = "mb-1.5 block text-sm font-medium text-navy-900";

export function ConsultationForm() {
  const params = useSearchParams();
  const initialService = params.get("service") ?? "general";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(
    slugToName.has(initialService) ? initialService : "general",
  );
  const [when, setWhen] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);

  const serviceLabel = slugToName.get(service) ?? "General enquiry";

  function buildBody() {
    return [
      "New consultation request from the website:",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      email ? `Email: ${email}` : null,
      `Service: ${serviceLabel}`,
      when ? `Preferred time: ${when}` : null,
      message ? `Message: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");
  }

  function validate() {
    if (!name.trim() || !phone.trim()) {
      setError("Please enter your name and phone number so we can reach you.");
      return false;
    }
    setError("");
    return true;
  }

  function sendWhatsApp(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    window.open(whatsappLink(buildBody()), "_blank", "noopener,noreferrer");
    setSentVia("whatsapp");
  }

  function sendEmail() {
    if (!validate()) return;
    const subject = `Consultation request — ${serviceLabel}`;
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(buildBody())}`;
    setSentVia("email");
  }

  if (sentVia) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-soft">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-success/10 text-success">
          <Check className="size-7" />
        </span>
        <h2 className="mt-5 text-2xl text-navy-900">Almost there, {name.split(" ")[0]}!</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          We&apos;ve opened{" "}
          {sentVia === "whatsapp" ? "WhatsApp" : "your email app"} with your request
          filled in — just press send and we&apos;ll get back to you. If nothing
          opened, you can reach us directly:
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={siteConfig.contact.phoneHref}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-navy-800/25 px-5 text-sm font-medium text-navy-800 transition-colors hover:bg-navy-50"
          >
            Call {siteConfig.contact.phone}
          </a>
          <a
            href={whatsappLink(buildBody())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="size-4" /> Open WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={sendWhatsApp}
      className="rounded-2xl border bg-card p-6 shadow-soft sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="c-name">
            Full name <span className="text-danger">*</span>
          </label>
          <input
            id="c-name"
            className={inputClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="c-phone">
            Phone <span className="text-danger">*</span>
          </label>
          <input
            id="c-phone"
            type="tel"
            className={inputClass}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 …"
            autoComplete="tel"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="c-email">
            Email <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="c-email"
            type="email"
            className={inputClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="c-service">
            What can we help with?
          </label>
          <select
            id="c-service"
            className={inputClass}
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="general">Not sure yet / General enquiry</option>
            {serviceGroups.map((g) => (
              <optgroup key={g.group} label={g.group}>
                {g.items.map((i) => (
                  <option key={i.slug} value={i.slug}>
                    {i.name}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="c-when">
          Best time to reach you <span className="text-muted-foreground">(optional)</span>
        </label>
        <input
          id="c-when"
          className={inputClass}
          value={when}
          onChange={(e) => setWhen(e.target.value)}
          placeholder="e.g. Weekday mornings"
        />
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="c-message">
          Anything you&apos;d like to add?{" "}
          <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="c-message"
          rows={4}
          className="w-full rounded-md border bg-card px-3.5 py-2.5 text-sm shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-navy-400"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="A short note about your situation…"
        />
      </div>

      {error ? (
        <p className="mt-4 flex items-center gap-2 text-sm text-danger">
          <AlertCircle className="size-4 shrink-0" /> {error}
        </p>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md bg-[#25D366] px-5 text-sm font-semibold text-white shadow-soft transition-opacity hover:opacity-90"
        >
          <MessageCircle className="size-4" /> Request via WhatsApp
        </button>
        <button
          type="button"
          onClick={sendEmail}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-navy-800/25 px-5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
        >
          <Mail className="size-4" /> Request via Email
        </button>
      </div>
      <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
        By sending your request you agree to our{" "}
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-gold-600">
          Privacy Policy
        </a>
        . We&apos;ll only use your details to respond to your enquiry.
      </p>
    </form>
  );
}
