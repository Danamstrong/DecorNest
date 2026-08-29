/**
 * Build-time interior photography from the Unsplash API.
 *
 * Every page that shows a photo is statically generated, so these calls run
 * during `next build` (and again on the ISR revalidate window). Results are
 * cached by Next's fetch cache, deduped per query, and fall back to a curated
 * static set whenever the key is missing or a request fails — static
 * generation must never break because Unsplash is slow or rate-limiting us.
 */

const ACCESS_KEY = process.env.UNSPLASH_ACCESS_KEY;
const API = "https://api.unsplash.com";

// One week. Unsplash's index shifts slowly and the demo tier allows only
// 50 requests/hour, so there's no value in refreshing more often.
const REVALIDATE = 60 * 60 * 24 * 7;

const UTM = "?utm_source=DecorNest&utm_medium=referral";

export interface Photo {
  src: string;
  alt: string;
  /** Attribution — required by the Unsplash API guidelines. Null when a
   *  static fallback is used (nothing to credit). */
  credit: { name: string; profile: string; unsplash: string } | null;
}

/**
 * Curated, hand-verified fallbacks. Keyed by the same query string passed to
 * {@link getInteriorPhoto}. Used when `UNSPLASH_ACCESS_KEY` is unset or a
 * request fails.
 */
const FALLBACKS: Record<string, Photo> = {
  "calm minimalist living room with sofa and floor lamp": {
    src: "https://images.unsplash.com/photo-1638741280080-02e3f4267020?auto=format&fit=crop&w=1600&q=80",
    alt: "A grey sofa layered with striped and velvet cushions beside a slim black floor lamp in soft light",
    credit: null,
  },
  "cozy reading nook armchair by a window": {
    src: "https://images.unsplash.com/photo-1758024836397-2c9c698087f0?auto=format&fit=crop&w=1600&q=80",
    alt: "A rounded terracotta armchair tucked into a reading nook beneath an arched window",
    credit: null,
  },
  "wood dining table under pendant lights": {
    src: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?auto=format&fit=crop&w=1600&q=80",
    alt: "A solid wood dining table and chairs under warm pendant lights, opening onto a garden",
    credit: null,
  },
  "terracotta clay pots earthy tones": {
    src: "https://images.unsplash.com/photo-1719173150322-e75de9901efb?auto=format&fit=crop&w=1600&q=80",
    alt: "Stacked terracotta pots in warm, earthy clay tones",
    credit: null,
  },
  "styled bookshelf with books and objects": {
    src: "https://images.unsplash.com/photo-1633813122125-882b7cba1f7f?auto=format&fit=crop&w=1600&q=80",
    alt: "A styled shelf with books arranged by colour, a small plant, and a marble arch object",
    credit: null,
  },
  "framed art gallery wall": {
    src: "https://images.unsplash.com/photo-1697620734013-b7890bbeb02b?auto=format&fit=crop&w=1600&q=80",
    alt: "A densely styled gallery wall of framed prints in mixed colours and sizes",
    credit: null,
  },
  "warm minimalist small living room with an armchair": {
    src: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1600&q=80",
    alt: "A warm minimalist living room with a linen armchair, mid-century sideboard, and herringbone floor",
    credit: null,
  },
  "bright organised kitchen counter": {
    src: "https://images.unsplash.com/photo-1592506119503-c0b18879bd5a?auto=format&fit=crop&w=1600&q=80",
    alt: "A bright, uncluttered kitchen with a white island, wood cabinetry, and a few ceramic pieces on the counter",
    credit: null,
  },
  "terracotta and sage green interior decor": {
    src: "https://images.unsplash.com/photo-1716838882910-3b0138fee3d0?auto=format&fit=crop&w=1600&q=80",
    alt: "Round terracotta clay vases on a shelf with a green palm frond falling across them",
    credit: null,
  },
  "small studio apartment with built-in shelving": {
    src: "https://images.unsplash.com/photo-1641910531704-c64ea00273c2?auto=format&fit=crop&w=1600&q=80",
    alt: "Floor-to-ceiling built-in bookshelves framing a doorway in a compact room",
    credit: null,
  },
  "cozy autumn living room with candles and throw blankets": {
    src: "https://images.unsplash.com/photo-1721510275545-5e5163f17bf0?auto=format&fit=crop&w=1600&q=80",
    alt: "A cozy autumn corner with a lit candle, a chunky knit throw, and a terracotta patterned cushion on a linen sofa",
    credit: null,
  },
  "linen throw pillows on a neutral sofa": {
    src: "https://images.unsplash.com/photo-1743854636910-7d14285c9ded?auto=format&fit=crop&w=1600&q=80",
    alt: "A neutral linen sofa styled with a mix of striped, textured, and tufted throw pillows",
    credit: null,
  },
  "entryway with a console table, mirror, and coat hooks": {
    src: "https://images.unsplash.com/photo-1771354959667-96360bf59eab?auto=format&fit=crop&w=1600&q=80",
    alt: "A real entryway with a glass-paned front door, coat hooks holding a jacket, a round mirror, and a slim console table",
    credit: null,
  },
  "professionally styled gallery wall of framed prints": {
    src: "https://images.unsplash.com/photo-1697620734013-b7890bbeb02b?auto=format&fit=crop&w=1600&q=80",
    alt: "A densely styled gallery wall of framed prints in mixed colours and sizes, arranged over built-in wood shelving",
    credit: null,
  },
};

const GENERIC_FALLBACK: Photo = {
  src: "https://images.unsplash.com/photo-1585128792020-803d29415281?auto=format&fit=crop&w=1600&q=80",
  alt: "A calm, well-composed interior",
  credit: null,
};

function fallbackFor(query: string): Photo {
  return FALLBACKS[query] ?? GENERIC_FALLBACK;
}

function withSizing(raw: string, width: number, quality = 80): string {
  const sep = raw.includes("?") ? "&" : "?";
  return `${raw}${sep}auto=format&fit=crop&w=${width}&q=${quality}`;
}

/** Stable index from a seed string, so a given post keeps the same photo
 *  across renders within a build while different posts vary. */
function seededIndex(seed: string, length: number): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (Math.imul(h, 31) + seed.charCodeAt(i)) | 0;
  return Math.abs(h) % length;
}

interface UnsplashResult {
  alt_description: string | null;
  description: string | null;
  urls: { raw: string };
  links: { download_location: string };
  user: { name: string; links: { html: string } };
}

/**
 * Resolve one interior photo for `query`. `seed` (defaults to the query)
 * picks which of the top results is used — pass a post slug to keep photos
 * distinct and stable per post. `width` is the source width requested from
 * Unsplash; Next's optimizer resizes down from there per breakpoint.
 */
export async function getInteriorPhoto(
  query: string,
  { seed = query, width = 1600 }: { seed?: string; width?: number } = {},
): Promise<Photo> {
  if (!ACCESS_KEY) return fallbackFor(query);

  try {
    const url =
      `${API}/search/photos?query=${encodeURIComponent(query)}` +
      `&orientation=landscape&content_filter=high&per_page=10`;

    const res = await fetch(url, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}`, "Accept-Version": "v1" },
      next: { revalidate: REVALIDATE, tags: ["unsplash"] },
    });
    if (!res.ok) return fallbackFor(query);

    const data: { results?: UnsplashResult[] } = await res.json();
    const results = data.results ?? [];
    if (results.length === 0) return fallbackFor(query);

    const photo = results[seededIndex(seed, results.length)];

    // Unsplash guideline: trigger a download event when a photo is used.
    // Fire-and-forget; its failure must not affect the page.
    fetch(`${photo.links.download_location}`, {
      headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      next: { revalidate: REVALIDATE },
    }).catch(() => {});

    return {
      src: withSizing(photo.urls.raw, width),
      alt: photo.alt_description || photo.description || query,
      credit: {
        name: photo.user.name,
        profile: `${photo.user.links.html}${UTM}`,
        unsplash: `https://unsplash.com/${UTM}`,
      },
    };
  } catch {
    return fallbackFor(query);
  }
}
