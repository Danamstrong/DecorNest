export default function AdSlot({ id = "in-article-ad" }: { id?: string }) {
  return (
    <div
      className="not-prose my-10 flex min-h-[100px] w-full items-center justify-center rounded-xl border border-dashed border-charcoal/15 bg-surface/50 text-[0.7rem] uppercase tracking-widest2 text-ink/40"
      aria-hidden="true"
    >
      <div id={id} className="w-full text-center">
        Advertisement
      </div>
    </div>
  );
}
