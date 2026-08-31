import { Fragment } from "react";
import AdSlot from "@/components/AdSlot";
import SceneImage from "@/components/SceneImage";

// A block that is nothing but a markdown image: ![alt](src)
const IMAGE_RE = /^!\[([^\]]*)\]\(([^)\s]+)\)$/;
// A block that is nothing but a markdown link: [label](href) — rendered as an
// affiliate call-to-action, not inline text. "Check Price on Amazon: <product>"
// labels are split so the product name sits beside a short button.
const LINK_RE = /^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/;

export default function PostBody({ blocks }: { blocks: string[] }) {
  // Drop one reserved ad slot roughly midway through the post, snapping to the
  // start of a heading where possible so it never splits a thought.
  const mid = Math.floor(blocks.length / 2);
  let adIndex = -1;
  if (blocks.length >= 4) {
    adIndex = mid;
    for (let i = mid; i < blocks.length - 1; i++) {
      if (blocks[i].startsWith("## ") || blocks[i].startsWith("### ")) {
        adIndex = i;
        break;
      }
    }
  }

  const renderBlock = (block: string, i: number) => {
    if (block.startsWith("## ")) {
      return <h2 key={i}>{block.slice(3)}</h2>;
    }
    if (block.startsWith("### ")) {
      return <h3 key={i}>{block.slice(4)}</h3>;
    }
    if (block.startsWith("> ")) {
      return <blockquote key={i}>{block.slice(2)}</blockquote>;
    }

    const image = block.match(IMAGE_RE);
    if (image) {
      const [, alt, src] = image;
      return (
        <figure key={i} className="my-8">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-soft">
            <SceneImage
              src={src}
              alt={alt}
              sizes="(min-width: 768px) 768px, 100vw"
            />
          </div>
        </figure>
      );
    }

    const link = block.match(LINK_RE);
    if (link) {
      const [, label, href] = link;
      const colon = label.indexOf(":");
      const product = colon !== -1 ? label.slice(colon + 1).trim() : "";
      const buttonText = product ? label.slice(0, colon).trim() : label;
      return (
        <div
          key={i}
          className="my-6 flex flex-col gap-3 rounded-xl border border-terracotta/25 bg-terracotta-tint/40 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5"
        >
          {product && (
            <span className="text-sm font-medium text-charcoal">{product}</span>
          )}
          <a
            href={href}
            target="_blank"
            rel="nofollow sponsored noopener"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-cream shadow-soft transition-colors hover:bg-terracotta-dark sm:self-auto"
          >
            {buttonText}
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M8 7h9v9" />
            </svg>
          </a>
        </div>
      );
    }

    if (block.includes("\n- ")) {
      const items = block
        .split("\n")
        .filter((l) => l.startsWith("- "))
        .map((l) => l.slice(2));
      return (
        <ul key={i}>
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p key={i}>{block}</p>;
  };

  return (
    <div className="prose-decor">
      {blocks.map((block, i) => (
        <Fragment key={i}>
          {i === adIndex && <AdSlot />}
          {renderBlock(block, i)}
        </Fragment>
      ))}
    </div>
  );
}
