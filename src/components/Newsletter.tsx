"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Newsletter({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const address = email.trim();

    if (!EMAIL_RE.test(address)) {
      setStatus("error");
      setMessage("That email doesn’t look quite right.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: address }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You’re on the list — check your inbox for a welcome note.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Couldn’t reach the server. Please try again.");
    }
  }

  const busy = status === "loading";

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
          disabled={busy}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error" || status === "success") {
              setStatus("idle");
              setMessage("");
            }
          }}
          placeholder="you@email.com"
          className="w-full rounded-full border border-charcoal/15 bg-cream px-4 py-2.5 text-sm text-charcoal placeholder:text-ink/50 focus:border-terracotta disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={busy}
          className="whitespace-nowrap rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition-colors duration-200 ease-soft hover:bg-terracotta-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {busy ? "Subscribing…" : "Subscribe"}
        </button>
      </form>
      <div aria-live="polite" className="mt-2 min-h-[1.25rem] text-xs">
        {status === "success" && (
          <span className="text-sage-dark">{message}</span>
        )}
        {status === "error" && (
          <span className="text-terracotta-dark">{message}</span>
        )}
      </div>
    </div>
  );
}
