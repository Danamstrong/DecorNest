import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer",
  description: "How DecorNest uses affiliate links and earns commissions on qualifying purchases.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <SectionHeading eyebrow="Legal" title="Affiliate & Earnings Disclosure" />
      <p className="mt-4 text-sm text-ink">Last updated: August 26, 2026</p>

      <div className="prose-decor mt-10">
        <p>
          DecorNest is reader-supported. This page explains, in plain terms,
          how that works and what it means for you as a reader. This is a
          template disclosure — replace the placeholders below with your
          actual affiliate programs and have it reviewed before publishing to
          a live site.
        </p>

        <h2>What that means</h2>
        <p>
          Some links on this site are affiliate links. That means if you
          click through and make a qualifying purchase, DecorNest may earn a
          small commission from the retailer or program — at no extra cost
          to you. The price you pay stays exactly the same whether or not
          you use our link.
        </p>

        <h2>Programs we participate in</h2>
        <p>DecorNest is currently a participant in affiliate programs including:</p>
        <ul>
          <li>
            <strong>Amazon Associates</strong> — as an Amazon Associate, we
            earn from qualifying purchases made through Amazon links on this
            site.
          </li>
          <li>
            <strong>LTK (LikeToKnow.it)</strong> — used for product edits and
            shoppable roundups linked from posts and social content.
          </li>
        </ul>
        <p>
          If we add or remove a program, this page will be updated to reflect
          the current list.
        </p>

        <h2>How this affects what gets recommended</h2>
        <p>
          Commission potential never decides what makes it into a post.
          Products are chosen first, and an affiliate link is added only if
          one is available for something already worth recommending. If a
          product isn&rsquo;t good enough to mention without a link, it
          isn&rsquo;t good enough to mention with one either.
        </p>

        <h2>Sponsored content</h2>
        <p>
          On the rare occasion a post or product is part of a paid
          partnership rather than a standard affiliate link, it will be
          clearly labeled as sponsored or as a paid partnership at the top of
          that post. Everything else reflects independent, unpaid
          recommendations.
        </p>

        <h2>Questions</h2>
        <p>
          Questions about a specific link, program, or disclosure can be sent
          through the{" "}
          <a href="/contact" className="text-terracotta underline decoration-terracotta/40 underline-offset-4">
            contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
