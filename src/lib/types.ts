import type { SceneVariant } from "@/components/illustrations/SceneIllustration";

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
  scene: SceneVariant;
  readingTime: string;
  date: string;
  featured?: boolean;
  content: string[];
}
