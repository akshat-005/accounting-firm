"use client";

import { useState } from "react";
import { MessageCircle, Mail, Check, AlertCircle } from "lucide-react";
import { siteConfig, whatsappLink } from "@/lib/site-config";

/**
 * Refer-a-friend form.
 *
 * ⚠️ No lead backend yet (Phase 3) — composes the referral and delivers it via
 * the firm's live channels (WhatsApp / email). A consent checkbox is required
 * because the visitor is sharing a third party's contact details.
 */

const inputClass =
  "h-11 w-full rounded-md border bg-card px-3.5 text-sm shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-navy-400";
const labelClass = "mb-1.5 block text-sm font-medium text-navy-900";

export function ReferralForm() {
  const [yourName, setYourName] = useState("");
  const [yourPhone, setYourPhone] = useState("");
  const [friendName, setFriendName] = useState("");
  const [friendContact, setFriendContact] = useState("");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);

  function buildBody() {
    return [
      "New referral from the website:",
      "",
      `Referred by: ${yourName} (${yourPhone})`,
      `Friend's name: ${friendName}`,
      friendContact ? `Friend's contact: ${friendContact}` : null,
      note ? `Note: ${note}` : null,
      "",
      "The referrer confirmed they have the friend's permission to share these details.",
    ]
      .filter(Boolean)
      .join("\n");
  }

  const mailtoHref = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    "Referral from the website",
  )}&body=${encodeURIComponent(buildBody())}`;

  function validate() {
    if (!yourName.trim() || !yourPhone.trim() || !friendName.trim()) {
      setError("Please fill in your name, your phone, and your friend's name.");
      return false;
    }
    if (!consent) {
      setError("Please confirm you have your friend's permission to share their details.");
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

  function handleEmailClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    setSentVia("email");
  }

  if (sentVia) {
    return (
      <div className="rounded-2xl border bg-card p-8 text-center shadow-soft">
        <span className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-success/10 text-success">
          <Check className="size-7" />
        </span>
        <h2 className="mt-5 text-2xl text-navy-900">Thank you, {yourName.split(" ")[0]}!</h2>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          We&apos;ve opened {sentVia === "whatsapp" ? "WhatsApp" : "your email app"} with
          the referral filled in — just press send. We&apos;ll reach out to{" "}
          {friendName.split(" ")[0]} respectfully, and let you know once we&apos;ve
          connected.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={sendWhatsApp}
      className="rounded-2xl border bg-card p-6 shadow-soft sm:p-8"
    >
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
        Your details
      </p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="r-name">
            Your name <span className="text-danger">*</span>
          </label>
          <input
            id="r-name"
            className={inputClass}
            value={yourName}
            onChange={(e) => setYourName(e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="r-phone">
            Your phone <span className="text-danger">*</span>
          </label>
          <input
            id="r-phone"
            type="tel"
            className={inputClass}
            value={yourPhone}
            onChange={(e) => setYourPhone(e.target.value)}
            placeholder="+91 …"
            autoComplete="tel"
          />
        </div>
      </div>

      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600">
        Who you&apos;re referring
      </p>
      <div className="mt-3 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="r-friend">
            Friend&apos;s name <span className="text-danger">*</span>
          </label>
          <input
            id="r-friend"
            className={inputClass}
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            placeholder="Their name"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="r-friend-contact">
            Friend&apos;s phone or email{" "}
            <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="r-friend-contact"
            className={inputClass}
            value={friendContact}
            onChange={(e) => setFriendContact(e.target.value)}
            placeholder="How we can reach them"
          />
        </div>
      </div>

      <div className="mt-5">
        <label className={labelClass} htmlFor="r-note">
          A short note <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id="r-note"
          rows={3}
          className="w-full rounded-md border bg-card px-3.5 py-2.5 text-sm shadow-soft outline-none transition-colors placeholder:text-muted-foreground focus:border-navy-400"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="What might they need help with?"
        />
      </div>

      <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 size-4 shrink-0 accent-navy-800"
        />
        <span>
          I confirm I have my friend&apos;s permission to share their details with{" "}
          {siteConfig.shortName}.
        </span>
      </label>

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
          <MessageCircle className="size-4" /> Send via WhatsApp
        </button>
        <a
          href={mailtoHref}
          onClick={handleEmailClick}
          className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-md border border-navy-800/25 px-5 text-sm font-semibold text-navy-800 transition-colors hover:bg-navy-50"
        >
          <Mail className="size-4" /> Send via Email
        </a>
      </div>
    </form>
  );
}
