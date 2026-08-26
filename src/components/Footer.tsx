import Link from "next/link";
import Logo from "./Logo";
import Newsletter from "./Newsletter";

const CATEGORIES = [
  "Interior Design",
  "Organization",
  "Product Edit",
  "Color & Texture",
  "Small Spaces",
  "Seasonal",
];

export default function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-surface">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink">
              A slow, unfussy journal about arranging rooms, choosing objects,
              and living with less clutter and more intention.
            </p>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-ink hover:text-terracotta">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-ink hover:text-terracotta">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-ink hover:text-terracotta">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink hover:text-terracotta">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Topics</h3>
            <ul className="space-y-3 text-sm">
              {CATEGORIES.slice(0, 4).map((c) => (
                <li key={c}>
                  <Link
                    href={`/blog?category=${encodeURIComponent(c)}`}
                    className="text-ink hover:text-terracotta"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow mb-4">Stay in the loop</h3>
            <Newsletter compact />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-charcoal/10 pt-6 text-xs text-ink sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} DecorNest. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-terracotta">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-terracotta">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
