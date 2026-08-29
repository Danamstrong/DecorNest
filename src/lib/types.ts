export type Category =
  | "Interior Design"
  | "Organization"
  | "Product Edit"
  | "Color & Texture"
  | "Small Spaces"
  | "Seasonal";

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  /** Unsplash search query used to pull this post's photo at build time. */
  imageQuery: string;
  /** Curated alt text describing the intended subject; used in place of
   *  Unsplash's own (often terse) description. */
  imageAlt: string;
  readingTime: string;
  date: string;
  featured?: boolean;
  content: string[];
}
