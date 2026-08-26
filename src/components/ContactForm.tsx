"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: Record<string, string> = {};
    if (name.length < 2) nextErrors.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "That email address doesn't look valid.";
    if (message.length < 10)
      nextErrors.message = "Say a little more — at least 10 characters.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    // No backend is wired up yet — this simulates a network round trip so
    // the form's success and error states can be reviewed end to end.
    window.setTimeout(() => {
      setStatus("success");
      e.currentTarget?.reset?.();
    }, 600);
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-sage-tint p-8 text-center">
        <p className="font-display text-2xl font-medium text-charcoal">
          Message sent — thank you.
        </p>
        <p className="mt-2 text-sm text-ink">
          I read every note myself and usually reply within a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-charcoal">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-ink/50 focus:border-terracotta"
          placeholder="Your name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-xs text-terracotta-dark">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-charcoal">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-ink/50 focus:border-terracotta"
          placeholder="you@email.com"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="mt-1 text-xs text-terracotta-dark">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-charcoal">
          What&rsquo;s this about?
        </label>
        <select
          id="topic"
          name="topic"
          defaultValue="general"
          className="w-full rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal focus:border-terracotta"
        >
          <option value="general">General question</option>
          <option value="room-help">I&rsquo;m stuck on a room</option>
          <option value="collaboration">Collaboration or press</option>
          <option value="site">Something&rsquo;s off on the site</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-charcoal">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full resize-none rounded-xl border border-charcoal/15 bg-cream px-4 py-3 text-sm text-charcoal placeholder:text-ink/50 focus:border-terracotta"
          placeholder="Tell me a bit about your space, or what you're wondering about."
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-terracotta-dark">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-terracotta px-6 py-3.5 text-sm font-medium text-cream transition-colors duration-200 ease-soft hover:bg-terracotta-dark disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
