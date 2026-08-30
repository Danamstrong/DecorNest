import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

// Default social card for every route that doesn't set its own og:image /
// twitter:image (Next applies this file convention site-wide).
export const alt = `${SITE_NAME} — a home decor & interior journal`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#FDFBF7",
          padding: 80,
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            letterSpacing: "0.28em",
            color: "#B15F3D",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          DECORNEST
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.15,
            color: "#2C2C2C",
          }}
        >
          Rooms that feel unhurried, not unfinished.
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#4A4642",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          Interior design · organization · product edits
        </div>
      </div>
    ),
    { ...size },
  );
}
