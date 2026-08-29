import SceneImage from "@/components/SceneImage";
import { SITE_URL } from "@/lib/site";

/**
 * End-of-post save card. Renders a 2:3 pin-friendly graphic (title + category
 * over the post's illustration) and a button that opens Pinterest's
 * pin-create flow pre-filled with this article's URL and description.
 */
export default function PinterestShareBlock({
  slug,
  title,
  category,
  image,
  imageAlt,
  description,
}: {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  description: string;
}) {
  const postUrl = `${SITE_URL}/blog/${slug}`;
  const pinUrl =
    "https://www.pinterest.com/pin/create/button/?" +
    `url=${encodeURIComponent(postUrl)}` +
    `&description=${encodeURIComponent(description)}`;

  return (
    <div className="mt-14 overflow-hidden rounded-2xl border border-charcoal/10 bg-surface sm:flex">
      <div className="relative aspect-[2/3] w-full bg-surface2 sm:w-56 sm:shrink-0">
        <SceneImage
          src={image}
          alt={imageAlt}
          sizes="(min-width: 640px) 224px, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[0.65rem] font-semibold uppercase tracking-widest2 text-cream/80">
            {category}
          </p>
          <p className="mt-1 font-display text-lg font-medium leading-tight text-cream">
            {title}
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center p-6 sm:p-8">
        <p className="eyebrow mb-2">Save it for later</p>
        <p className="font-display text-xl font-medium text-charcoal">
          Keep this article on hand
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink">
          Pin it to your decor board and come back to it when you&rsquo;re ready
          to work on the room.
        </p>
        <a
          href={pinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-terracotta px-6 py-2.5 text-sm font-medium text-cream transition-colors duration-200 ease-soft hover:bg-terracotta-dark"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.86 6.36 9.32-.09-.79-.17-2 .03-2.86.19-.82 1.2-5.2 1.2-5.2s-.31-.62-.31-1.53c0-1.43.83-2.5 1.86-2.5.88 0 1.3.66 1.3 1.45 0 .88-.56 2.2-.85 3.42-.24 1.02.51 1.85 1.52 1.85 1.83 0 3.23-1.93 3.23-4.7 0-2.46-1.77-4.18-4.29-4.18-2.92 0-4.64 2.19-4.64 4.46 0 .88.34 1.83.76 2.34a.3.3 0 0 1 .07.29c-.08.32-.25 1.02-.28 1.16-.04.18-.15.22-.34.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.04 6.6-6.04 3.46 0 6.15 2.47 6.15 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.22.87-.83 1.96-1.24 2.62.93.29 1.92.44 2.95.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
          Pin this article
        </a>
      </div>
    </div>
  );
}
