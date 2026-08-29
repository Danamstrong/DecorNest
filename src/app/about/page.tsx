import type { Metadata } from "next";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import SceneIllustration from "@/components/illustrations/SceneIllustration";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "The story behind DecorNest, what the journal covers, and why it's built around fewer, better decisions rather than more decor.",
};

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
              I started DecorNest after redoing three rented apartments in a
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

            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-charcoal/10 pt-6">
              <div>
                <dt className="eyebrow !text-[0.62rem]">Writing since</dt>
                <dd className="mt-1 font-display text-2xl font-medium text-charcoal">2021</dd>
              </div>
              <div>
                <dt className="eyebrow !text-[0.62rem]">Apartments redone</dt>
                <dd className="mt-1 font-display text-2xl font-medium text-charcoal">6</dd>
              </div>
              <div>
                <dt className="eyebrow !text-[0.62rem]">Posts published</dt>
                <dd className="mt-1 font-display text-2xl font-medium text-charcoal">180+</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-content px-5 py-16 sm:px-8">
        <SectionHeading eyebrow="Why trust this journal" title="Editorial background" />
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-medium text-charcoal">
              Experience
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              Every recommendation comes out of a real apartment: mine.
              I&rsquo;ve rented and decorated six spaces since 2019, from a
              320-square-foot studio to a two-bedroom with genuinely
              terrible lighting, and posts are written from what actually
              worked in one of them.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-charcoal">
              Process
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              I studied visual merchandising before moving into writing, and
              every product mentioned on DecorNest is either something I&rsquo;ve
              owned and used for at least a month, or something I&rsquo;ve
              researched in depth across manufacturer specs and independent
              reviews before recommending it.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-medium text-charcoal">
              Transparency
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink">
              DecorNest is reader-supported through affiliate links — full
              details are on the{" "}
              <Link href="/disclaimer" className="text-terracotta underline decoration-terracotta/40 underline-offset-4">
                disclosure page
              </Link>
              . Commission never decides what gets recommended; a product
              earns its place first, and a link is added second.
            </p>
          </div>
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

      <section className="mx-auto max-w-content px-5 py-20 sm:px-8">
        <SectionHeading eyebrow="How products get chosen" title="Product selection guidelines" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          <li className="rounded-2xl bg-surface p-6">
            <span className="eyebrow">01</span>
            <p className="mt-2 font-display text-lg font-medium text-charcoal">
              Used first, written about second
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink">
              Wherever possible, a product is bought and lived with for at
              least a few weeks before it appears in a post.
            </p>
          </li>
          <li className="rounded-2xl bg-surface p-6">
            <span className="eyebrow">02</span>
            <p className="mt-2 font-display text-lg font-medium text-charcoal">
              Multiple price points, always
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink">
              Every roundup aims to include at least one budget-friendly
              option, since not every reader is renovating with the same
              budget.
            </p>
          </li>
          <li className="rounded-2xl bg-surface p-6">
            <span className="eyebrow">03</span>
            <p className="mt-2 font-display text-lg font-medium text-charcoal">
              No pay-to-play placement
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink">
              Brands cannot pay for a favorable mention. Paid partnerships,
              when they happen, are labeled clearly and kept separate from
              independent picks.
            </p>
          </li>
          <li className="rounded-2xl bg-surface p-6">
            <span className="eyebrow">04</span>
            <p className="mt-2 font-display text-lg font-medium text-charcoal">
              Reviewed on a schedule
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink">
              Product roundups are revisited periodically so discontinued or
              meaningfully changed items get updated or removed.
            </p>
          </li>
        </ol>
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
