import type { Metadata } from "next";
import Link from "next/link";
import { posts, CATEGORIES } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Every DecorNest post on interior design, organization, product edits, color, small spaces, and seasonal decor.",
  alternates: {
    canonical: "/blog",
  },
};

export default async function BlogIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const filtered = category
    ? posts.filter((p) => p.category === category)
    : posts;

  return (
    <div className="mx-auto max-w-content px-5 py-16 sm:px-8">
      <SectionHeading eyebrow="The full archive" title="Blog" />
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink">
        {filtered.length} {filtered.length === 1 ? "post" : "posts"}
        {category ? (
          <>
            {" "}
            in <span className="text-terracotta">{category}</span>
          </>
        ) : (
          " across every topic DecorNest covers."
        )}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors ${
            !category
              ? "border-terracotta bg-terracotta text-cream"
              : "border-charcoal/15 text-ink hover:border-terracotta hover:text-terracotta"
          }`}
        >
          All
        </Link>
        {CATEGORIES.map((c) => (
          <Link
            key={c}
            href={`/blog?category=${encodeURIComponent(c)}`}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors ${
              category === c
                ? "border-terracotta bg-terracotta text-cream"
                : "border-charcoal/15 text-ink hover:border-terracotta hover:text-terracotta"
            }`}
          >
            {c}
          </Link>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="masonry mt-12">
          {filtered.map((post, i) => (
            <PostCard key={post.slug} post={post} tall={i % 3 === 1} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-sm text-ink">
          Nothing filed under that category yet — check back soon.
        </p>
      )}
    </div>
  );
}
