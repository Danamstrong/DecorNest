import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SceneIllustration from "@/components/illustrations/SceneIllustration";
import Newsletter from "@/components/Newsletter";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "The story behind DecorNest, what the journal covers, and why it's built around fewer, better decisions rather than more decor.",
  alternates: {
    canonical: "/about",
  },
};

const EDITORIAL = [
  {
    title: "Experience",
    body: "Seven years of writing about home decor and organizing, four rented apartments redone from scratch, and a running habit of testing every product in my own rooms before it earns a mention.",
  },
  {
    title: "Process",
    body: "Each post starts with a real problem in a real space. I research widely, try the fix myself, wait a few weeks to see whether it actually holds, and only then write it up — with sketches or photos from the space in question.",
  },
  {
    title: "Transparency",
    body: "Affiliate links are labeled and never decide what gets recommended. Sponsored or gifted items are disclosed at the top of the post. When I get something wrong, the post gets corrected, not quietly deleted.",
  },
];

const SELECTION_GUIDELINES = [
  "Tested before recommending — nothing gets written about until it has been used in a real room long enough to see how it wears.",
  "Multiple price points included — where it makes sense, a post covers a budget option, a mid-range pick, and one splurge, so the advice works for any budget.",
  "No pay-to-play placement — brands cannot buy a spot in a post or a higher ranking; sponsorship only ever buys an honest look.",
  "Reviewed periodically — recommendations are revisited as products change, go out of stock, or stop holding up, and updated or removed accordingly.",
];

const VALUES = [
  {
    title: "Fewer, better objects",
    body: "Every recommendation here has to earn its place. If a product doesn't hold up after real daily use, it doesn't get written about.",
  },
  {
    title: "Rooms over renovations",
    body: "Most of what changes how a home feels doesn't require construction — it requires better arranging, editing, and light.",
  },
  {
    title: "Honest budgets",
    body: "Posts are written for rented apartments and starter homes as often as they're written for full renovations.",
  },
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-charcoal/10">
        <div className="mx-auto grid max-w-content items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-[28px] bg-sage/20" />
            <SceneIllustration
              variant="plant"
              className="relative aspect-square w-full rounded-[28px] shadow-card"
            />
          </div>
          <div>
            <p className="eyebrow mb-4">About DecorNest</p>
            <h1 className="font-display text-4xl font-medium leading-tight text-charcoal sm:text-5xl">
              Hi, I&rsquo;m Amara — I write about the rooms people actually
              live in.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-ink">
              I started DecorNest after redoing four rented apartments in a
              row and getting tired of decor advice that assumed I owned the
              walls, had a full renovation budget, or wanted a home that
              photographed well but felt sterile to actually sit in. This
              journal is the opposite of that: practical interior design and
              organizing advice for people living in the home they actually
              have right now.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink">
              I&rsquo;m not an interior designer by training — I&rsquo;m
              someone who reads a lot, tests things in my own space first,
              and writes down what actually worked once the styling photos
              were put away and real life moved back in.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-charcoal/10 bg-surface">
        <div className="mx-auto grid max-w-content grid-cols-3 gap-4 px-5 py-12 text-center sm:px-8">
          {[
            { figure: "7", label: "Years writing about home" },
            { figure: "4", label: "Apartments redone" },
            { figure: `${posts.length}`, label: "Posts published" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl font-medium text-terracotta sm:text-5xl">
                {stat.figure}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-ink sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="How this journal works" title="Editorial background" />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {EDITORIAL.map((item) => (
            <div key={item.title} className="border-t border-charcoal/15 pt-5">
              <h3 className="font-display text-xl font-medium text-charcoal">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-surface">
        <div className="mx-auto max-w-content px-5 py-20 sm:px-8">
          <SectionHeading
            eyebrow="How products get picked"
            title="Product selection guidelines"
          />
          <ol className="mt-10 space-y-6">
            {SELECTION_GUIDELINES.map((text, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-terracotta/15 font-display text-lg font-medium text-terracotta-dark">
                  {i + 1}
                </span>
                <p className="pt-1 text-sm leading-relaxed text-ink">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="What guides this journal" title="How I decide what to write" />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl bg-surface p-6">
              <h3 className="font-display text-xl font-medium text-charcoal">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-charcoal/10 bg-charcoal">
        <div className="mx-auto grid max-w-content gap-10 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow mb-4 !text-terracotta-light">Behind the scenes</p>
            <h2 className="font-display text-3xl font-medium text-cream sm:text-4xl">
              What a normal week looks like
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-cream/75">
              <li>
                <span className="text-terracotta-light">Monday —</span>{" "}
                testing a product or rearranging a corner of my own apartment
                before writing about it.
              </li>
              <li>
                <span className="text-terracotta-light">Wednesday —</span>{" "}
                new post published, always with real photos or sketches from
                the actual space discussed.
              </li>
              <li>
                <span className="text-terracotta-light">Friday —</span>{" "}
                answering reader questions that come in through the contact
                page — several posts started as a reader email.
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <SceneIllustration variant="shelf" className="aspect-square rounded-2xl" />
            <SceneIllustration variant="lamp" className="aspect-square rounded-2xl" />
            <SceneIllustration variant="linen" className="aspect-square rounded-2xl" />
            <SceneIllustration variant="window" className="aspect-square rounded-2xl" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-20 text-center sm:px-8">
        <SectionHeading align="center" eyebrow="Let's talk rooms" title="Have a space you're stuck on?" />
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink">
          I read every message that comes through the contact page, and a
          good number of DecorNest posts started as an answer to one.
        </p>
        <div className="mt-7 flex justify-center gap-4">
          <Link
            href="/contact"
            className="rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-cream transition-colors duration-200 ease-soft hover:bg-terracotta-dark"
          >
            Get in touch
          </Link>
        </div>
        <div className="mx-auto mt-10 max-w-sm">
          <Newsletter />
        </div>
      </section>
    </div>
  );
}
