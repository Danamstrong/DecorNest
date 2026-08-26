export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`${align === "center" ? "text-center" : "text-left"} ${className ?? ""}`}
    >
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl sm:text-4xl font-medium text-charcoal">
        {title}
      </h2>
      <svg
        className={`mark-underline mt-2 h-3 w-24 ${align === "center" ? "mx-auto" : ""}`}
        viewBox="0 0 100 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 8c14-7 22 3 34-1s18-6 30-2 20 4 32-1"
          stroke="#D47A55"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
