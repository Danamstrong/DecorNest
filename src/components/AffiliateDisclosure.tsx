export default function AffiliateDisclosure() {
  return (
    <div
      role="note"
      aria-label="Affiliate disclosure"
      className="mb-8 flex gap-3 rounded-xl border border-terracotta/25 bg-terracotta-tint px-4 py-3.5 sm:px-5"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-terracotta-dark" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <line x1="12" y1="11" x2="12" y2="16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="7.75" r="1" fill="currentColor" />
      </svg>
      <p className="text-[0.8rem] leading-relaxed text-ink">
        <strong className="text-charcoal">Disclosure:</strong> DecorNest is
        reader-supported. When you buy through links on our site, we may
        earn an affiliate commission at no extra cost to you.{" "}
        <a href="/disclaimer" className="text-terracotta-dark underline decoration-terracotta/40 underline-offset-2 hover:text-terracotta">
          Learn more
        </a>
        .
      </p>
    </div>
  );
}
