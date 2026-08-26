import Link from "next/link";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-baseline gap-1 font-display text-2xl tracking-tight text-charcoal ${className ?? ""}`}
      aria-label="DecorNest home"
    >
      <span className="font-medium">Decor</span>
      <span className="italic font-medium text-terracotta">Nest</span>
    </Link>
  );
}
