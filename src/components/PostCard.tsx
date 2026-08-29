import Link from "next/link";
import type { Post } from "@/lib/types";
import { getPostImage } from "@/lib/posts";
import SceneImage from "./SceneImage";

export default async function PostCard({
  post,
  tall = false,
}: {
  post: Post;
  tall?: boolean;
}) {
  const photo = await getPostImage(post, 900);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-2xl bg-surface shadow-soft transition-all duration-300 ease-soft hover:-translate-y-1 hover:shadow-card"
    >
      <div
        className={`relative overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
      >
        <SceneImage
          src={photo.src}
          alt={photo.alt}
          credit={photo.credit}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-500 ease-soft group-hover:scale-105"
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
