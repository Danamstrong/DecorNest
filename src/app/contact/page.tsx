import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import SceneIllustration from "@/components/illustrations/SceneIllustration";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with DecorNest for room questions, collaborations, or press.",
};

const FAQS = [
  {
    q: "Do you take room submissions?",
    a: "Yes — send two or three photos and the one thing that bothers you about the space, and it may turn into a post.",
  },
  {
    q: "Do you do paid collaborations?",
    a: "Occasionally, and only for products already in regular use in my own home. Every sponsored post is labeled clearly.",
  },
  {
    q: "How fast do you reply?",
    a: "Usually within three to five days. Press and collaboration emails get priority.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-16 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Get in touch" title="Contact" />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink">
            Questions about a room, a product mentioned in a post, or just
            want to say hello — this goes straight to me, not a team inbox.
          </p>

          <div className="mt-10 overflow-hidden rounded-2xl">
            <SceneIllustration variant="window" className="aspect-[4/3] w-full" />
          </div>

          <div className="mt-10 space-y-6">
            {FAQS.map((f) => (
              <div key={f.q} className="border-t border-charcoal/10 pt-5">
                <p className="font-display text-lg font-medium text-charcoal">
                  {f.q}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-surface p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
