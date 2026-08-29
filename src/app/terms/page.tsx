import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms and conditions governing use of the DecorNest website.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <SectionHeading eyebrow="Legal" title="Terms of Service" />
      <p className="mt-4 text-sm text-ink">Last updated: August 26, 2026</p>

      <div className="prose-decor mt-10">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your use of
          DecorNest (&ldquo;the site,&rdquo; &ldquo;we,&rdquo; or
          &ldquo;us&rdquo;). By visiting or using this site, you agree to
          these Terms. This is a template — replace the placeholders below
          with your business details and have it reviewed by a legal
          professional before publishing to a live site.
        </p>

        <h2>Use of the site</h2>
        <p>
          DecorNest is provided for personal, non-commercial use. You agree
          to use the site only for lawful purposes and in a way that doesn&rsquo;t
          infringe on the rights of, or restrict or inhibit the use and
          enjoyment of, the site by any third party.
        </p>
        <ul>
          <li>You must not attempt to gain unauthorized access to any part of the site</li>
          <li>You must not use automated systems to scrape or republish content in bulk</li>
          <li>You must not use the site to distribute spam, malware, or unlawful content</li>
        </ul>

        <h2>Intellectual property</h2>
        <p>
          Unless otherwise stated, all text, graphics, illustrations, logos,
          and design elements on DecorNest are the property of DecorNest or
          its licensors and are protected by copyright and other
          intellectual property laws.
        </p>
        <ul>
          <li>
            You may share links to DecorNest posts and quote brief excerpts
            with proper attribution and a link back to the original post.
          </li>
          <li>
            You may not reproduce, republish, or redistribute substantial
            portions of any post, image, or illustration without prior
            written permission.
          </li>
          <li>
            Product names, brand names, and trademarks mentioned on the site
            belong to their respective owners.
          </li>
        </ul>

        <h2>Content accuracy</h2>
        <p>
          We aim to keep information on DecorNest accurate and up to date,
          but home decor advice, product availability, and pricing can
          change without notice. Content is provided &ldquo;as is&rdquo;
          without warranties of any kind, and we don&rsquo;t guarantee that
          any product, technique, or recommendation will suit your specific
          space, budget, or circumstances.
        </p>

        <h2>Affiliate links and third-party sites</h2>
        <p>
          DecorNest contains affiliate links and links to third-party
          websites. See our{" "}
          <a href="/disclaimer" className="text-terracotta underline decoration-terracotta/40 underline-offset-4">
            Affiliate Disclaimer
          </a>{" "}
          for details. We are not responsible for the content, accuracy, or
          practices of any third-party site linked from DecorNest.
        </p>

        <h2>Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, DecorNest and its author
          are not liable for any direct, indirect, incidental, or
          consequential damages arising from your use of the site,
          including but not limited to purchases made based on content
          published here, or reliance on any advice, recommendation, or
          instruction found on the site.
        </p>

        <h2>Changes to these terms</h2>
        <p>
          These Terms may be updated periodically. Continued use of the site
          after changes are posted constitutes acceptance of the revised
          Terms. The &ldquo;last updated&rdquo; date at the top of this page
          reflects the most recent revision.
        </p>

        <h2>Governing law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which
          DecorNest&rsquo;s owner operates, without regard to conflict-of-law
          principles. Replace this section with your specific jurisdiction
          before publishing.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these Terms can be sent through the{" "}
          <a href="/contact" className="text-terracotta underline decoration-terracotta/40 underline-offset-4">
            contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
