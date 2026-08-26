export type SceneVariant =
  | "armchair"
  | "shelf"
  | "vase"
  | "linen"
  | "lamp"
  | "plant"
  | "table"
  | "closet"
  | "window"
  | "gallery";

const BG: Record<SceneVariant, string> = {
  armchair: "#F5EFE4",
  shelf: "#EFE6D8",
  vase: "#F6E4DA",
  linen: "#E6EAE0",
  lamp: "#F5EFE4",
  plant: "#EFE6D8",
  table: "#F6E4DA",
  closet: "#E6EAE0",
  window: "#F5EFE4",
  gallery: "#EFE6D8",
};

/**
 * DecorNest's signature visual system: single-line, hand-drafted room
 * vignettes in place of stock photography. Every scene shares the same
 * stroke weight, corner language, and two-tone accent so the whole site
 * reads as one continuous illustration rather than sourced imagery.
 */
export default function SceneIllustration({
  variant,
  className,
}: {
  variant: SceneVariant;
  className?: string;
}) {
  const bg = BG[variant];
  return (
    <svg
      viewBox="0 0 400 300"
      className={className}
      role="img"
      aria-label={`Line illustration: ${variant.replace(/-/g, " ")}`}
    >
      <rect width="400" height="300" fill={bg} />
      <g
        fill="none"
        stroke="#2C2C2C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {SCENES[variant]}
      </g>
    </svg>
  );
}

const SCENES: Record<SceneVariant, React.ReactNode> = {
  armchair: (
    <>
      <path d="M110 210 v-55 a35 35 0 0 1 70 0 v55" />
      <path d="M95 210 h100 v20 a8 8 0 0 1 -8 8 h-84 a8 8 0 0 1 -8 -8 z" />
      <path d="M95 210 v-30 a12 12 0 0 1 12 -12" />
      <path d="M195 210 v-30 a12 12 0 0 0 -12 -12" />
      <line x1="108" y1="238" x2="108" y2="252" />
      <line x1="192" y1="238" x2="192" y2="252" />
      <circle cx="290" cy="150" r="26" fill="#D47A55" stroke="none" opacity="0.85" />
      <path d="M264 150 a26 26 0 0 1 52 0" />
      <line x1="80" y1="255" x2="320" y2="255" opacity="0.4" />
    </>
  ),
  shelf: (
    <>
      <line x1="60" y1="90" x2="340" y2="90" />
      <line x1="60" y1="160" x2="340" y2="160" />
      <line x1="60" y1="230" x2="340" y2="230" />
      <rect x="80" y="50" width="34" height="40" />
      <path d="M150 90 v-38 a14 14 0 0 1 28 0 v38" />
      <circle cx="230" cy="70" r="18" fill="#8B9A7C" stroke="none" opacity="0.8" />
      <path d="M280 90 l0 -44 20 0 0 44" />
      <rect x="90" y="120" width="60" height="38" rx="2" />
      <path d="M190 158 v-30 h50 v30" />
      <line x1="90" y1="190" x2="150" y2="190" />
      <path d="M230 200 q20 -30 40 0" />
      <line x1="60" y1="260" x2="340" y2="260" opacity="0.4" />
    </>
  ),
  vase: (
    <>
      <path d="M180 260 v-90 q0 -20 20 -20 t20 20 v90 z" />
      <ellipse cx="200" cy="260" rx="34" ry="8" opacity="0.4" />
      <path d="M170 150 q-10 -40 5 -60" />
      <path d="M230 150 q10 -30 -5 -55" />
      <path d="M200 150 q-4 -50 6 -70" />
      <circle cx="210" cy="78" r="4" fill="#D47A55" stroke="none" />
      <circle cx="176" cy="92" r="3" fill="#D47A55" stroke="none" />
      <line x1="120" y1="262" x2="280" y2="262" opacity="0.4" />
    </>
  ),
  linen: (
    <>
      <path d="M90 120 h220 v20 q-15 25 0 45 t0 45 q-15 20 0 35 h-220 q15 -15 0 -35 t0 -45 q15 -20 0 -45 z" />
      <path d="M130 128 v130" opacity="0.35" />
      <path d="M170 126 v134" opacity="0.35" />
      <path d="M230 126 v134" opacity="0.35" />
      <path d="M270 128 v130" opacity="0.35" />
      <circle cx="200" cy="90" r="10" fill="#8B9A7C" stroke="none" />
    </>
  ),
  lamp: (
    <>
      <path d="M150 90 l100 0 -20 60 -60 0 z" />
      <line x1="200" y1="150" x2="200" y2="230" />
      <ellipse cx="200" cy="238" rx="40" ry="9" />
      <line x1="130" y1="255" x2="270" y2="255" opacity="0.4" />
      <path d="M170 60 q30 -25 60 0" opacity="0.5" />
      <circle cx="290" cy="190" r="22" fill="#D47A55" stroke="none" opacity="0.8" />
    </>
  ),
  plant: (
    <>
      <path d="M170 260 l10 -70 h40 l10 70 z" />
      <line x1="160" y1="260" x2="240" y2="260" opacity="0.4" />
      <path d="M200 190 q-10 -50 -45 -60" />
      <path d="M200 190 q10 -60 50 -75" />
      <path d="M200 190 q-4 -70 6 -95" />
      <path d="M200 190 q22 -40 55 -35" />
      <circle cx="300" cy="130" r="4" fill="#8B9A7C" stroke="none" />
    </>
  ),
  table: (
    <>
      <ellipse cx="200" cy="150" rx="110" ry="24" />
      <line x1="110" y1="160" x2="95" y2="230" />
      <line x1="290" y1="160" x2="305" y2="230" />
      <line x1="150" y1="168" x2="140" y2="235" />
      <line x1="250" y1="168" x2="260" y2="235" />
      <circle cx="170" cy="140" r="16" fill="#D47A55" stroke="none" opacity="0.85" />
      <rect x="220" y="128" width="28" height="20" rx="3" />
      <line x1="80" y1="245" x2="320" y2="245" opacity="0.4" />
    </>
  ),
  closet: (
    <>
      <rect x="90" y="60" width="220" height="180" rx="4" />
      <line x1="200" y1="60" x2="200" y2="240" opacity="0.5" />
      <line x1="110" y1="100" x2="190" y2="100" />
      <line x1="110" y1="130" x2="190" y2="130" />
      <line x1="110" y1="160" x2="190" y2="160" />
      <rect x="215" y="90" width="70" height="46" rx="2" />
      <path d="M215 160 q35 -14 70 0" opacity="0.6" />
      <circle cx="196" cy="150" r="3" fill="#8B9A7C" stroke="none" />
    </>
  ),
  window: (
    <>
      <rect x="110" y="50" width="180" height="170" rx="2" />
      <line x1="200" y1="50" x2="200" y2="220" />
      <line x1="110" y1="135" x2="290" y2="135" />
      <path d="M90 50 h220" opacity="0.5" />
      <path d="M120 235 q80 -25 160 0" opacity="0.5" />
      <circle cx="150" cy="100" r="10" fill="#D47A55" stroke="none" opacity="0.8" />
    </>
  ),
  gallery: (
    <>
      <rect x="70" y="70" width="70" height="90" rx="2" />
      <rect x="160" y="50" width="90" height="70" rx="2" />
      <rect x="270" y="80" width="60" height="80" rx="2" />
      <circle cx="105" cy="115" r="16" fill="#8B9A7C" stroke="none" opacity="0.7" />
      <path d="M170 100 l25 -30 25 30 z" />
      <line x1="280" y1="140" x2="320" y2="100" />
      <line x1="60" y1="190" x2="340" y2="190" opacity="0.4" />
    </>
  ),
};
