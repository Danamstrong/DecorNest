export default function PostBody({ blocks }: { blocks: string[] }) {
  return (
    <div className="prose-decor">
      {blocks.map((block, i) => {
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
      })}
    </div>
  );
}
