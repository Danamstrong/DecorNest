import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern your use of DecorNest, including content usage, intellectual property, and affiliate links.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <SectionHeading eyebrow="Legal" title="Terms of Service" />
      <p className="mt-4 text-sm text-ink">Last updated: August 29, 2026</p>

      <div className="prose-decor mt-10">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
          use of DecorNest (&ldquo;DecorNest,&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;this site&rdquo;). By visiting the site or
          using any of its content, you agree to these Terms. If you do not
          agree, please stop using the site. This is a template — replace the
          placeholders with your own details and have it reviewed before
          publishing to a live site.
        </p>

        <h2>Using the site</h2>
        <p>
          DecorNest is provided for personal, non-commercial reading. You may
          browse the site, share links to articles, and quote short excerpts
          with attribution and a link back to the original post. You agree not
          to:
        </p>
        <ul>
          <li>Republish or redistribute articles in full without written permission</li>
          <li>Use automated tools to scrape, mirror, or bulk-download the site</li>
          <li>Attempt to disrupt, overload, or gain unauthorized access to the site or its infrastructure</li>
          <li>Use the site or its content in any way that is unlawful or infringes the rights of others</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          All content on DecorNest — including articles, illustrations,
          photographs, layout, and the DecorNest name and logo — is owned by
          DecorNest or its licensors and is protected by copyright and other
          intellectual property laws. Nothing in these Terms transfers any
          ownership right to you. Requests to license or reuse content can be
          sent through the{" "}
          <a
            href="/contact"
            className="text-terracotta underline decoration-terracotta/40 underline-offset-4"
          >
            contact page
          </a>
          .
        </p>

        <h2>Content accuracy</h2>
        <p>
          DecorNest publishes opinion, design guidance, and product commentary
          based on our own experience. We work to keep information accurate and
          current, but we make no warranty that any article is complete,
          error-free, or suitable for your specific home, budget, or situation.
          Prices, availability, and product details change frequently and may be
          out of date by the time you read a post. Always confirm details with
          the retailer or manufacturer, and use your own judgement — and, where
          relevant, a qualified professional — before acting on anything you
          read here.
        </p>

        <h2>Affiliate links</h2>
        <p>
          Some posts contain affiliate links. If you click one and make a
          purchase, we may earn a commission at no additional cost to you.
          Commissions never influence which products we recommend or what we say
          about them. Full details are on the{" "}
          <a
            href="/disclaimer"
            className="text-terracotta underline decoration-terracotta/40 underline-offset-4"
          >
            Affiliate &amp; Earnings Disclosure
          </a>{" "}
          page.
        </p>

        <h2>Third-party links</h2>
        <p>
          Articles may link to third-party websites for reference. We do not
          control those sites and are not responsible for their content,
          products, or privacy practices. Visiting a linked site is at your own
          risk and subject to that site&rsquo;s own terms.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, DecorNest and anyone
          associated with it will not be liable for any indirect, incidental,
          or consequential damages arising from your use of the site or your
          reliance on its content, including any purchasing decision, design
          choice, or home project. The site is provided &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo; without warranties of any kind.
        </p>

        <h2>Changes to the site and these Terms</h2>
        <p>
          We may change, suspend, or discontinue any part of the site at any
          time. We may also update these Terms from time to time; the &ldquo;last
          updated&rdquo; date above reflects the most recent revision, and your
          continued use of the site after a change means you accept the revised
          Terms.
        </p>

        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which
          DecorNest is operated, without regard to its conflict-of-law rules.
          Any dispute relating to the site or these Terms will be handled in the
          courts of that jurisdiction. Replace this section with your actual
          governing jurisdiction before publishing.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms can be sent through the{" "}
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
