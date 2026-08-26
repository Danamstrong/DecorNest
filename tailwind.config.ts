import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FDFBF7",
        surface: "#F5EFE4",
        surface2: "#EFE6D8",
        charcoal: "#2C2C2C",
        ink: "#4A4642",
        terracotta: {
          DEFAULT: "#D47A55",
          dark: "#B15F3D",
          light: "#E8B59B",
          tint: "#F6E4DA",
        },
        sage: {
          DEFAULT: "#8B9A7C",
          dark: "#6C7A5F",
          tint: "#E6EAE0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(44,44,44,0.04), 0 8px 24px -12px rgba(44,44,44,0.12)",
        card: "0 1px 3px rgba(44,44,44,0.06), 0 12px 28px -14px rgba(44,44,44,0.16)",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
