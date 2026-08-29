import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, posts } from "@/lib/posts";
import SceneIllustration from "@/components/illustrations/SceneIllustration";
import PostBody from "@/components/PostBody";
import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import AffiliateDisclosure from "@/components/AffiliateDisclosure";
import PinterestShareBlock from "@/components/PinterestShareBlock";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article>
      <div className="border-b border-charcoal/10 bg-surface/60">
        <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8">
          <Link
            href="/blog"
            className="text-xs font-medium uppercase tracking-widest2 text-terracotta hover:text-terracotta-dark"
          >
            ← Back to the archive
          </Link>
          <p className="eyebrow mt-6">{post.category}</p>
          <h1 className="mt-3 font-display text-3xl font-medium leading-tight text-charcoal sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-5 flex items-center gap-3 text-xs text-ink">
            <span>By Amara Chukwu</span>
            <span className="h-1 w-1 rounded-full bg-charcoal/30" />
            <time dateTime={post.date}>{formattedDate}</time>
            <span className="h-1 w-1 rounded-full bg-charcoal/30" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 pt-10 sm:px-8">
        <SceneIllustration
          variant={post.scene}
          className="aspect-[16/9] w-full rounded-2xl shadow-card"
        />
      </div>

      <div className="mx-auto max-w-3xl px-5 py-12 sm:px-8">
        <AffiliateDisclosure />
        <PostBody blocks={post.content} />

        <PinterestShareBlock
          slug={post.slug}
          title={post.title}
          category={post.category}
          scene={post.scene}
          description={post.excerpt}
        />

        <div className="mt-14 rounded-2xl bg-surface p-6 sm:p-8">
          <p className="font-display text-lg font-medium text-charcoal">
            Enjoyed this one?
          </p>
          <p className="mt-1 text-sm text-ink">
            Get the next post — and nothing else — in your inbox.
          </p>
          <div className="mt-4">
            <Newsletter compact />
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="border-t border-charcoal/10 bg-surface/40 py-16">
          <div className="mx-auto max-w-content px-5 sm:px-8">
            <p className="eyebrow mb-6">More on {post.category}</p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <PostCard key={p.slug} post={p} />
              ))}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}
