import Image from "next/image";
import type { Photo } from "@/lib/unsplash";

/**
 * Full-bleed editorial photo that fills its positioned parent. Every caller
 * wraps it in a sized, `relative`, `overflow-hidden` container (usually
 * rounded) — the image then covers that box at any aspect ratio. Sources are
 * direct Unsplash links resolved at build time; Next's image optimizer
 * handles resizing and format negotiation from there.
 *
 * Pass `credit` to satisfy the Unsplash attribution guideline: `showCredit`
 * renders a small visible "Photo — Name / Unsplash" line over the image,
 * otherwise the photographer's name still lands on the `title` attribute.
 */
export default function SceneImage({
  src,
  alt,
  credit,
  showCredit = false,
  sizes = "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw",
  priority = false,
  className = "object-cover",
}: {
  src: string;
  alt: string;
  credit?: Photo["credit"];
  showCredit?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        title={credit ? `Photo by ${credit.name} on Unsplash` : undefined}
        className={className}
      />
      {showCredit && credit && (
        <span className="pointer-events-none absolute bottom-1.5 right-2 z-10 text-[0.6rem] leading-none text-cream/70 mix-blend-difference">
          Photo{" "}
          <a
            href={credit.profile}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="pointer-events-auto underline decoration-cream/40 underline-offset-2 hover:text-cream"
          >
            {credit.name}
          </a>{" "}
          /{" "}
          <a
            href={credit.unsplash}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="pointer-events-auto underline decoration-cream/40 underline-offset-2 hover:text-cream"
          >
            Unsplash
          </a>
        </span>
      )}
    </>
  );
}
