import Link from "next/link";
import type { Post } from "@/lib/types";
import SceneIllustration from "./illustrations/SceneIllustration";

export default function PostCard({ post, tall = false }: { post: Post; tall?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl bg-surface shadow-soft transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-card"
    >
      <div className={`overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
        <SceneIllustration
          variant={post.scene}
          className="h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-center gap-3">
          <span className="eyebrow">{post.category}</span>
          <span className="h-1 w-1 rounded-full bg-charcoal/30" />
          <span className="text-xs text-ink">{post.readingTime}</span>
        </div>
        <h3 className="font-display text-xl font-medium leading-snug text-charcoal group-hover:text-terracotta">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
