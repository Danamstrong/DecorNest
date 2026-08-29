import AdSlot from "./AdSlot";

function renderBlock(block: string, key: number) {
  if (block.startsWith("## ")) return <h2 key={key}>{block.slice(3)}</h2>;
  if (block.startsWith("### ")) return <h3 key={key}>{block.slice(4)}</h3>;
  if (block.startsWith("> ")) return <blockquote key={key}>{block.slice(2)}</blockquote>;
  if (block.includes("\n- ")) {
    const items = block.split("\n").filter((l) => l.startsWith("- ")).map((l) => l.slice(2));
    return (
      <ul key={key}>
        {items.map((item, j) => <li key={j}>{item}</li>)}
      </ul>
    );
  }
  return <p key={key}>{block}</p>;
}

export default function PostBody({ blocks }: { blocks: string[] }) {
  const adIndex = blocks.length > 3 ? Math.floor(blocks.length / 2) : -1;

  return (
    <div className="prose-decor">
      {blocks.map((block, i) => (
        <div key={i} className="article-content-block">
          {renderBlock(block, i)}
          {i === adIndex && <AdSlot id={`in-article-ad-${i}`} />}
        </div>
      ))}
    </div>
  );
}
