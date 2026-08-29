import { Fragment } from "react";
import AdSlot from "@/components/AdSlot";

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
