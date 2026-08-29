import Link from "next/link";
import { getFeaturedPosts, posts, CATEGORIES } from "@/lib/posts";
import { getInteriorPhoto } from "@/lib/unsplash";
import PostCard from "@/components/PostCard";
import SectionHeading from "@/components/SectionHeading";
import Newsletter from "@/components/Newsletter";
import SceneImage from "@/components/SceneImage";

export default async function HomePage() {
  const featured = getFeaturedPosts();
  const rest = posts.filter((p) => !p.featured).slice(0, 6);

  const [heroPhoto, nookPhoto, tablePhoto, potsPhoto, shelfPhoto, galleryPhoto] =
    await Promise.all([
      getInteriorPhoto("calm minimalist living room with sofa and floor lamp", {
        seed: "home-hero",
      }),
      getInteriorPhoto("cozy reading nook armchair by a window", {
        seed: "home-nook",
        width: 800,
      }),
      getInteriorPhoto("wood dining table under pendant lights", {
        seed: "home-table",
        width: 1200,
      }),
      getInteriorPhoto("terracotta clay pots earthy tones", {
        seed: "home-pots",
        width: 800,
      }),
      getInteriorPhoto("styled bookshelf with books and objects", {
        seed: "home-shelf",
        width: 800,
      }),
      getInteriorPhoto("framed art gallery wall", {
        seed: "home-gallery",
        width: 1200,
      }),
    ]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-charcoal/10">
        <div className="mx-auto grid max-w-content items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div>
            <p className="eyebrow mb-5">A home decor &amp; interior journal</p>
            <h1 className="font-display text-[2.6rem] font-medium leading-[1.08] text-charcoal sm:text-6xl">
              Rooms that feel
              <br />
              <span className="italic text-terracotta">unhurried,</span> not
              unfinished.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-ink">
              DecorNest is a slow-paced journal about arranging rooms,
              choosing fewer and better objects, and the small organizing
              habits that keep a home feeling calm long after moving day.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/blog"
                className="rounded-full bg-terracotta px-7 py-3 text-sm font-medium tracking-wide text-cream transition-colors duration-200 ease-soft hover:bg-terracotta-dark"
              >
                Read the journal
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium tracking-wide text-charcoal underline decoration-terracotta decoration-2 underline-offset-4 hover:text-terracotta"
              >
                Meet the person behind it
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[28px] bg-terracotta/15 sm:-right-6 sm:-top-6" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-card">
              <SceneImage
                src={heroPhoto.src}
                alt={heroPhoto.alt}
                credit={heroPhoto.credit}
                showCredit
                priority
                sizes="(min-width: 1024px) 460px, (min-width: 640px) 60vw, 90vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-40 rounded-2xl bg-cream p-3 shadow-card sm:block">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                <SceneImage
                  src={nookPhoto.src}
                  alt={nookPhoto.alt}
                  credit={nookPhoto.credit}
                  sizes="160px"
                />
              </div>
              <p className="mt-2 px-1 text-[0.65rem] leading-snug text-ink">
                New this week: reading corners under 40 sq ft
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Category strip */}
      <section className="border-b border-charcoal/10 bg-surface/60">
        <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-6 sm:px-8">
          {CATEGORIES.map((c) => (
            <Link
              key={c}
              href={`/blog?category=${encodeURIComponent(c)}`}
              className="text-xs font-medium uppercase tracking-widest2 text-ink transition-colors hover:text-terracotta"
            >
              {c}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured posts */}
      <section className="mx-auto max-w-content px-5 py-20 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Start here" title="Reader favorites" />
          <Link
            href="/blog"
            className="text-sm font-medium tracking-wide text-terracotta hover:text-terracotta-dark"
          >
            View all posts →
          </Link>
        </div>

        <div className="masonry mt-10">
          {featured.map((post, i) => (
            <PostCard key={post.slug} post={post} tall={i % 2 === 1} />
          ))}
        </div>
      </section>

      {/* Editorial strip */}
      <section className="bg-charcoal py-20">
        <div className="mx-auto grid max-w-content gap-10 px-5 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4 !text-terracotta-light">
              Currently reading the room
            </p>
            <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
              Good design is mostly editing.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/70">
              Every post on DecorNest starts from the same question: what can
              this room lose before it loses its warmth? That&rsquo;s usually a
              more useful place to start than what it should gain.
            </p>
            <Link
              href="/blog"
              className="mt-7 inline-block rounded-full border border-cream/25 px-6 py-2.5 text-sm text-cream transition-colors duration-200 ease-soft hover:border-terracotta hover:text-terracotta-light"
            >
              Browse the archive
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-xl">
              <SceneImage
                src={tablePhoto.src}
                alt={tablePhoto.alt}
                credit={tablePhoto.credit}
                sizes="(min-width: 768px) 380px, 60vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <SceneImage
                src={potsPhoto.src}
                alt={potsPhoto.alt}
                credit={potsPhoto.credit}
                sizes="(min-width: 768px) 190px, 30vw"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl">
              <SceneImage
                src={shelfPhoto.src}
                alt={shelfPhoto.alt}
                credit={shelfPhoto.credit}
                sizes="(min-width: 768px) 190px, 30vw"
              />
            </div>
            <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-xl">
              <SceneImage
                src={galleryPhoto.src}
                alt={galleryPhoto.alt}
                credit={galleryPhoto.credit}
                sizes="(min-width: 768px) 380px, 60vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="mx-auto max-w-content px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="Fresh off the desk" title="Latest posts" />
        <div className="masonry mt-10">
          {rest.map((post, i) => (
            <PostCard key={post.slug} post={post} tall={i % 3 === 0} />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="border-t border-charcoal/10 bg-terracotta-tint">
        <div className="mx-auto max-w-content px-5 py-16 text-center sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="No spam, ever"
            title="A weekly note about slower rooms"
          />
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink">
            One email a week with the newest post, a couple of favorite
            products, and nothing sponsored you didn&rsquo;t ask for.
          </p>
          <div className="mt-7 flex justify-center">
            <Newsletter />
          </div>
        </div>
      </section>
    </>
  );
}
