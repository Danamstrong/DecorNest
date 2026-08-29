import Link from "next/link";

/**
 * Compact reader-support callout shown at the top of every blog post, above
 * the body. Terracotta-tinted to sit apart from the prose without shouting.
 */
export default function AffiliateDisclosure() {
  return (
    <aside className="mb-10 flex gap-3 rounded-xl border border-terracotta/25 bg-terracotta-tint/60 p-4 text-sm leading-relaxed text-ink sm:p-5">
      <svg
        viewBox="0 0 24 24"
        className="mt-0.5 h-5 w-5 shrink-0 text-terracotta-dark"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 11v5" />
        <path d="M12 8h.01" />
      </svg>
      <p>
        <strong className="font-semibold text-charcoal">Disclosure:</strong>{" "}
        DecorNest is reader-supported. When you buy through links on our site, we
        may earn an affiliate commission at no extra cost to you.{" "}
        <Link
          href="/disclaimer"
          className="whitespace-nowrap text-terracotta-dark underline decoration-terracotta/40 underline-offset-4 hover:text-terracotta"
        >
          Learn more
        </Link>
        .
      </p>
    </aside>
  );
}
