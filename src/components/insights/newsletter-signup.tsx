"use client";

import { useState } from "react";
import { Mail, Check } from "lucide-react";

/**
 * Newsletter sign-up UI for the Insights hub.
 *
 * ⚠️ The lead / subscription backend is a later phase — this form does NOT yet
 * store the address anywhere. On submit it shows an honest "launching soon"
 * confirmation. Wire the real submission handler in when the backend exists.
 */
export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-full bg-white/10 px-6 py-4 text-sm text-white ring-1 ring-white/15">
        <Check className="size-5 shrink-0 text-gold-300" />
        <span>
          Thanks for your interest — our newsletter is launching soon, and
          you&apos;ll be among the first to hear.
        </span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <div className="relative flex-1">
        <Mail className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-navy-300" />
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          aria-label="Email address"
          className="h-12 w-full rounded-md border border-white/15 bg-white/10 pl-12 pr-4 text-sm text-white outline-none transition-colors placeholder:text-navy-200 focus:border-gold-400"
        />
      </div>
      <button
        type="submit"
        className="inline-flex h-12 shrink-0 items-center justify-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground shadow-soft transition-colors hover:bg-gold-600"
      >
        Subscribe
      </button>
    </form>
  );
}
