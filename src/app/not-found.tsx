import Link from "next/link";
import SceneIllustration from "@/components/illustrations/SceneIllustration";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-content flex-col items-center px-5 py-24 text-center sm:px-8">
      <SceneIllustration variant="closet" className="aspect-square w-48 rounded-2xl" />
      <p className="eyebrow mt-8">404</p>
      <h1 className="mt-3 font-display text-4xl font-medium text-charcoal">
        This corner of the house is empty.
      </h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink">
        The page you&rsquo;re looking for has moved, been renamed, or never
        existed. Let&rsquo;s get you back to the rest of the house.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-terracotta px-7 py-3 text-sm font-medium text-cream transition-colors duration-200 ease-soft hover:bg-terracotta-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
