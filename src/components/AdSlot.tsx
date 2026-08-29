/**
 * Reserved space for a future ad unit (Mediavine / AdSense). The container
 * holds a fixed min-height at every breakpoint so dropping a real unit in
 * later does not push the surrounding paragraphs around or change their
 * line-height on mobile. Rendered as a labeled dashed placeholder until then.
 */
export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div
      className="my-10 flex min-h-[280px] w-full items-center justify-center rounded-lg border border-dashed border-charcoal/20 bg-surface/50 sm:min-h-[250px]"
      role="complementary"
      aria-label={label}
    >
      <span className="text-[0.7rem] font-medium uppercase tracking-widest2 text-charcoal/40">
        {label}
      </span>
    </div>
  );
}
