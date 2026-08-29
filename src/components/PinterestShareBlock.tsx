import SceneIllustration from "./illustrations/SceneIllustration";
import type { SceneVariant } from "./illustrations/SceneIllustration";

export default function PinterestShareBlock({
  title,
  category,
  scene,
  url,
}: {
  title: string;
  category: string;
  scene: SceneVariant;
  url: string;
}) {
  const pinHref = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`;

  return (
    <div className="not-prose my-14 flex flex-col items-center rounded-2xl bg-surface p-6 text-center sm:p-10">
      <p className="eyebrow">Save this for later</p>
      <h3 className="mt-2 font-display text-2xl font-medium text-charcoal">
        Pin it to your decor board
      </h3>

      <div className="relative mt-7 aspect-[2/3] w-full max-w-[220px] overflow-hidden rounded-xl shadow-card">
        <SceneIllustration variant={scene} className="h-full w-full" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/85 via-charcoal/40 to-transparent p-4 pt-10">
          <p className="text-left text-[0.65rem] font-medium uppercase tracking-widest2 text-terracotta-light">
            {category}
          </p>
          <p className="mt-1 text-left font-display text-base font-medium leading-snug text-cream">
            {title}
          </p>
        </div>
      </div>

      
        href={pinHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-cream transition-colors duration-200 ease-soft hover:bg-terracotta-dark"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.35 9.31-.09-.79-.17-2.01.04-2.87.19-.79 1.23-5.03 1.23-5.03s-.31-.63-.31-1.55c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.25-.87 3.5-.25 1.04.53 1.9 1.56 1.9 1.87 0 3.31-1.97 3.31-4.82 0-2.52-1.81-4.28-4.4-4.28-3 0-4.76 2.25-4.76 4.57 0 .9.35 1.87.78 2.4.09.1.1.2.07.3-.08.32-.25 1.04-.29 1.18-.05.19-.15.23-.35.14-1.32-.61-2.14-2.53-2.14-4.08 0-3.32 2.41-6.37 6.96-6.37 3.65 0 6.49 2.6 6.49 6.08 0 3.63-2.29 6.54-5.46 6.54-1.07 0-2.07-.55-2.41-1.21l-.66 2.5c-.24.92-.88 2.07-1.31 2.77.99.3 2.03.47 3.12.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
        </svg>
        Pin this article
      </a>
    </div>
  );
}
