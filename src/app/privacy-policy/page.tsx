import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How DecorNest collects, uses, and protects visitor data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <p className="mt-4 text-sm text-ink">Last updated: August 26, 2026</p>

      <div className="prose-decor mt-10">
        <p>
          DecorNest (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;this
          site&rdquo;) respects your privacy. This policy explains what
          information we collect when you visit DecorNest, how it&rsquo;s
          used, and the choices you have. This is a template policy — replace
          the placeholders below with your business details and have it
          reviewed before publishing to a live site.
        </p>

        <h2>Information we collect</h2>
        <p>
          We collect information in a few different ways depending on how you
          use the site:
        </p>
        <ul>
          <li>
            <strong>Information you provide directly</strong> — your name and
            email address when you use the contact form or subscribe to the
            newsletter.
          </li>
          <li>
            <strong>Automatically collected information</strong> — standard
            technical data such as browser type, device type, pages visited,
            and referring pages, typically gathered through analytics tools.
          </li>
          <li>
            <strong>Cookies</strong> — small files used to remember
            preferences and understand how visitors use the site. You can
            disable cookies in your browser settings at any time.
          </li>
        </ul>

        <h2>How we use your information</h2>
        <ul>
          <li>To send the newsletter to subscribers who opt in</li>
          <li>To respond to messages sent through the contact form</li>
          <li>To understand which posts and pages are useful to readers</li>
          <li>To maintain the security and performance of the site</li>
        </ul>
        <p>
          We do not sell visitor information to third parties. Some posts on
          DecorNest may include affiliate links; if you purchase a product
          through one of these links, we may earn a small commission at no
          extra cost to you. This never affects which products are
          recommended.
        </p>

        <h2>Third-party services</h2>
        <p>
          DecorNest may use third-party services for email delivery,
          analytics, and hosting. These providers process data on our behalf
          and are bound by their own privacy and data-protection terms.
          We recommend linking each provider you actually use here (for
          example, your email platform and analytics tool) before publishing
          this page.
        </p>

        <h2>Your choices</h2>
        <ul>
          <li>Unsubscribe from the newsletter at any time via the link in every email</li>
          <li>Request a copy of the information we hold about you</li>
          <li>Request that we delete your information from our records</li>
          <li>Opt out of non-essential cookies through your browser settings</li>
        </ul>

        <h2>Children&rsquo;s privacy</h2>
        <p>
          DecorNest is not directed at children under 13, and we do not
          knowingly collect personal information from children.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          This policy may be updated from time to time to reflect changes in
          how the site operates. The &ldquo;last updated&rdquo; date at the
          top of this page will always reflect the most recent revision.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy or your information can be sent through
          the{" "}
          <a href="/contact" className="text-terracotta underline decoration-terracotta/40 underline-offset-4">
            contact page
          </a>
          .
        </p>
      </div>
    </div>
  );
}
