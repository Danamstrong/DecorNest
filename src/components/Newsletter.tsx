"use client";

import { useState, FormEvent } from "react";

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValid) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <div>
      {!compact && (
        <p className="mb-4 text-sm leading-relaxed text-ink">
          One email a week: new rooms, a few things worth buying, nothing
          else.
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex max-w-sm flex-col gap-2 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder="you@email.com"
          className="w-full rounded-full border border-charcoal/15 bg-cream px-4 py-2.5 text-sm text-charcoal placeholder:text-ink/50 focus:border-terracotta"
        />
        <button
          type="submit"
          className="whitespace-nowrap rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-200 ease-soft hover:bg-terracotta-dark"
        >
          Subscribe
        </button>
      </form>
      <div aria-live="polite" className="mt-2 min-h-[1.25rem] text-xs">
        {status === "success" && (
          <span className="text-sage-dark">
            You&rsquo;re on the list — welcome in.
          </span>
        )}
        {status === "error" && (
          <span className="text-terracotta-dark">
            That email doesn&rsquo;t look quite right.
          </span>
        )}
      </div>
    </div>
  );
}
