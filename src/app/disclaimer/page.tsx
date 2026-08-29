import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Affiliate & Earnings Disclosure",
  description:
    "How DecorNest earns money through affiliate programs, and why commissions never decide what gets recommended.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <SectionHeading eyebrow="Legal" title="Affiliate & Earnings Disclosure" />
      <p className="mt-4 text-sm text-ink">Last updated: August 29, 2026</p>

      <div className="prose-decor mt-10">
        <p>
          DecorNest is reader-supported. Some of the links in our articles are
          affiliate links, which means that if you click one and buy something,
          we may earn a commission &mdash; at no extra cost to you. The price
          you pay is exactly the same whether you use our link or go to the
          retailer directly.
        </p>

        <h2>Programs we participate in</h2>
        <p>
          DecorNest is a participant in affiliate advertising programs designed
          to provide a way for sites to earn fees by linking to retailers. This
          currently includes:
        </p>
        <ul>
          <li>
            <strong>Amazon Associates</strong> &mdash; DecorNest is a
            participant in the Amazon Services LLC Associates Program, an
            affiliate advertising program designed to provide a means for sites
            to earn advertising fees by advertising and linking to Amazon.com.
            As an Amazon Associate we earn from qualifying purchases.
          </li>
          <li>
            <strong>LTK (LiketoKnow.it)</strong> &mdash; some product
            recommendations are shared through LTK, which pays a commission on
            qualifying purchases made through those links.
          </li>
          <li>
            <strong>Other brand and retailer programs</strong> &mdash; from time
            to time we may join additional affiliate programs for retailers
            whose products we already recommend. This page will be updated when
            that happens.
          </li>
        </ul>

        <h2>How recommendations are actually chosen</h2>
        <p>
          Commission never decides what gets recommended. Products are included
          because they held up in real use, solve the problem the article is
          about, and are something we would tell a friend to buy. If the best
          answer to a question is a product we earn nothing on &mdash; or no
          product at all &mdash; that is what the article says.
        </p>
        <ul>
          <li>We do not accept payment to place a product in a post or to rank it higher.</li>
          <li>We link to the retailer that makes the most sense for the reader, not the one with the highest commission.</li>
          <li>When a product no longer holds up, we update or remove the recommendation, regardless of whether it earns.</li>
        </ul>

        <h2>Sponsored content</h2>
        <p>
          On the rare occasion a post is sponsored or includes a gifted product,
          it is labeled clearly at the top of that post. Sponsorship buys a
          brand an honest look, never a guaranteed verdict.
        </p>

        <h2>Your support</h2>
        <p>
          Using our links when a recommendation is useful to you is the main way
          DecorNest stays free to read, with no paywall. Thank you &mdash; it
          genuinely makes this work possible.
        </p>

        <h2>Questions</h2>
        <p>
          Anything unclear about how DecorNest earns money can be sent through
          the{" "}
          <a
            href="/contact"
            className="text-terracotta underline decoration-terracotta/40 underline-offset-4"
          >
            contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
