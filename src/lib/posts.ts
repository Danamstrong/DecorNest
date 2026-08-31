import type { Post } from "./types";
import { getInteriorPhoto, type Photo } from "./unsplash";

export const posts: Post[] = [
  {
    slug: "neutral-bedroom-decor-ideas",
    title: "Neutral Bedroom Ideas That Will Transform Your Space",
    excerpt:
      "Neutral bedroom decor ideas that use warm tones and layered textures to make a small bedroom feel calmer and bigger.",
    category: "Interior Design",
    focusKeyword: "bedroom decor ideas",
    image: "https://i.imgur.com/daHg8xR.jpg",
    imageQuery: "neutral bedroom with taupe walls and layered linen bedding",
    imageAlt:
      "A neutral bedroom with warm taupe walls, a boucle headboard, layered oatmeal linen bedding, and a rattan nightstand",
    readingTime: "9 min read",
    date: "2026-08-31",
    content: [
      "Your bedroom doesn't need beige walls and a matching furniture set to feel neutral. The best bedroom decor ideas right now lean on texture, not just color: linen, boucle, rattan, brushed oak. Skip the flat, sterile look. Build a room that feels warm even without one bold hue.",
      "A true neutral palette is not just white and gray. Think warm taupe, soft clay, oatmeal, and greige with black accents for contrast. These pairings photograph well and they hold up in real light, not just staged photos.",
      "## Why Neutral Doesn't Mean Boring",
      "Neutral bedroom decor ideas get a bad reputation because most people copy the wrong reference photo. A stark white room with a gray duvet and glass nightstands looks cold in person, even if it looks fine on a screen. Real warmth comes from mixing at least three textures in the same tonal family.",
      "Think of a taupe wall next to a rattan headboard next to a chunky wool throw. None of those fight each other, but none of them are flat either. That contrast in texture, not color, is what makes a neutral room feel finished instead of unfinished.",
      "> Tip: Test your paint choice on the actual wall, not just a small swatch card. Colors shift depending on how much natural light your room gets during the day.",
      "A room built entirely from one shade of beige has nowhere for your eye to land. Add at least one deep tone, even if it's just a black lamp base or a dark walnut frame. The whole space reads as designed instead of default.",
      "## Neutral Bedroom Ideas Worth Trying This Month",
      "### 1. Swap Flat White Walls for Warm Taupe",
      "Skip plain white and reach for a warm taupe like Balboa Mist or Repose Gray instead. These shades still read as neutral, but they have enough pigment to avoid looking sterile under yellow bulbs. A gallon covers about 400 square feet with two coats, so most bedrooms only need one can.",
      "If commitment scares you, paint just the wall behind the headboard. That single accent wall shifts the whole room without the cost of repainting all four.",
      "Quick paint pairings that hold up in real bedrooms:",
      "- Balboa Mist walls with a walnut bed frame and oatmeal linens\n- Repose Gray walls with rattan accents and a black metal mirror\n- Alabaster walls with a boucle headboard and warm brass lighting",
      "### 2. Choose Warm Wood Tones Over Cool Gray Wood",
      "![Solid oak six-drawer dresser styled against a warm taupe wall in a neutral bedroom](https://i.imgur.com/DzkSU7R.jpg)",
      "Cool gray-washed wood was everywhere five years ago, but it fights with warm neutrals instead of supporting them. Trade a gray dresser for one in honey oak, walnut, or reclaimed pine with visible grain.",
      "Warm wood grounds a neutral room the same way a rug does. It gives the eye a natural texture to rest on between all that soft fabric and paint.",
      "[Check Price on Amazon: Solid Oak 6-Drawer Dresser](https://amzn.to/4cDAZWL)",
      "### 3. Add a Boucle or Linen Headboard",
      "![Boucle upholstered headboard in oatmeal on a queen bed with layered neutral bedding](https://i.imgur.com/93gAA6E.jpg)",
      "A fabric headboard does more for warmth than almost any other single piece in the room. Boucle in oatmeal or a stonewashed linen in warm white both soften the edges of an otherwise simple layout.",
      "Look for a queen-size headboard between 54 and 60 inches wide so it doesn't overwhelm a standard queen frame. Anything narrower looks like an afterthought propped against the wall.",
      "[Check Price on Amazon: Boucle Upholstered Queen Headboard](https://amzn.to/4x0C425)",
      "### 4. Layer Bedding in Three Tonal Neutrals",
      "![Bed layered with warm white sheets, a taupe quilted coverlet, and a cream knit throw folded at the foot](https://i.imgur.com/jndvK1Y.jpg)",
      "One flat neutral duvet reads as plain, not calm. Layer a warm white base sheet, a taupe quilted coverlet, and a cream knit throw folded at the foot of the bed.",
      "Mix at least two materials, like a matte cotton duvet with a nubby linen throw pillow. That contrast in finish keeps three shades of the same color family from blending into one dull blob. Wash new linen once before styling it. That first wash softens the fabric and removes the stiff, straight off the shelf look.",
      "[Check Price on Amazon: Cream Waffle Knit Bedding Set](https://amzn.to/3UhHd8m)",
      "### 5. Bring In Rattan or Cane for Texture",
      "![Natural rattan two-drawer nightstand with a warm-toned ceramic lamp beside a taupe wall](https://i.imgur.com/5sQeJGG.jpg)",
      "Rattan headboards, cane nightstands, and woven pendant shades all add warmth without adding color. A cane nightstand next to a taupe wall creates contrast through shadow and shape instead of hue.",
      "Keep rattan pieces under $200 each if you are testing the look for the first time. Cheaper woven furniture holds up fine indoors, away from direct sun and humidity.",
      "[Check Price on Amazon: 2-Drawer Natural Rattan Nightstand](https://amzn.to/4zSPQGO)",
      "### 6. Use a Chunky Knit Throw and a Low-Pile Rug",
      "![Chunky ivory knit throw draped over a bed corner above a low-pile ivory area rug](https://i.imgur.com/aq4nzNp.jpg)",
      "A thin, flat rug photographs fine but feels cheap underfoot. Choose a low-pile wool or wool-blend rug at least 8 by 10 feet so it extends past the sides of the bed frame.",
      "Pair it with a chunky knit throw in ivory or oatmeal draped across one corner of the bed. That single styling move photographs well and actually gets used on cold mornings.",
      "[Check Price on Amazon: 8x10 Ivory Wool Blend Area Rug](https://amzn.to/3So495f)",
      "### 7. Add Black or Bronze Metal for Contrast",
      "![Matte black round mirror mounted above a dresser in an all-neutral bedroom](https://i.imgur.com/QfFt3t9.jpg)",
      "An all-neutral room without a single dark accent tends to fade into the background. One black metal mirror frame, a bronze table lamp, or matte black door hardware gives the eye somewhere to land.",
      "Keep the dark accent to one or two spots max. Three or more and the room starts to look like it's trying too hard.",
      "[Check Price on Amazon: 30-Inch Matte Black Round Mirror](https://amzn.to/4x2KWUF)",
      "### 8. Swap Framed Prints for Woven or Textile Wall Art",
      "![Large neutral macrame wall hanging in warm white above an upholstered headboard](https://i.imgur.com/A6ZsvUB.jpg)",
      "Framed prints work, but a woven wall hanging or a textile tapestry adds dimension that flat glass can't. Hang it slightly larger than you think, about two thirds the width of the headboard.",
      "A macrame or jute piece in warm white ties back into the linen and rattan without adding a new color to track. A pair of smaller woven pieces stacked vertically works just as well if your wall is narrow.",
      "[Check Price on Amazon: Large Neutral Macrame Wall Hanging](https://amzn.to/4yaii52)",
      "### 9. Layer Lighting Instead of Relying on One Overhead Fixture",
      "![Warm white ceramic table lamp rated 2700K on a nightstand casting soft light](https://i.imgur.com/MpdchvK.jpg)",
      "A single ceiling light flattens every neutral tone in the room. Add a warm-toned table lamp on each nightstand, plus one floor lamp in a reading corner if space allows.",
      "Stick to bulbs rated around 2700K. Anything cooler makes warm neutrals look gray and washes out the texture you just spent money adding.",
      "[Check Price on Amazon: Ceramic Warm White Table Lamp](https://amzn.to/4gZTd7c)",
      "### 10. Add a Textured Bench or Ottoman at the Foot of the Bed",
      "![Boucle upholstered bench at the foot of a neutral bed with layered bedding](https://i.imgur.com/7CLvb6Q.jpg)",
      "An empty stretch of floor at the foot of the bed makes a neutral room look unfinished, not minimal. A boucle or woven bench fills that gap and gives you a spot to sit while putting on shoes.",
      "Measure your bed width first. A bench between 40 and 48 inches wide fits most queen frames without crowding the walkway.",
      "[Check Price on Amazon: 44-Inch Boucle Bedroom Bench](https://amzn.to/4wX1U6U)",
      "## Mistakes That Flatten a Neutral Bedroom",
      "The most common mistake is matching everything too closely. A beige wall, beige bedding, and a beige rug in the exact same shade reads as one flat surface, not a styled room.",
      "Cool undertones are another trap. Gray-based neutrals paired with warm wood furniture clash more than people expect, especially under warm bulbs at night.",
      "Another mistake is skipping pattern altogether. A subtle stripe on a throw pillow or a soft plaid blanket keeps an all-neutral room from feeling like a hotel suite. You don't need bold pattern, just one quiet break from solid fabric.",
      "Fix both by mixing at least three shades within the same warm family. Check your paint swatch under your actual bedroom lighting before buying a full gallon.",
      "## Final Thought",
      "You don't need a full renovation to make these bedroom decor ideas work. Swap one wall color, add one textured throw, and change your bulbs before you touch anything else.",
      "Small, specific changes like these add up faster than people expect, and they cost less than a single piece of matching furniture.",
      "Start with one room first before touching the rest of the house. A single well-styled neutral bedroom teaches you which pairings work in your own light. That lesson carries into every other room you tackle next.",
    ],
  },
  {
    slug: "warm-minimalism-small-living-rooms",
    title: "Warm Minimalism: How to Decorate a Small Living Room Without It Feeling Empty",
    excerpt:
      "Minimal doesn't have to mean bare. Here's how to keep a small living room open, warm, and unmistakably lived-in.",
    category: "Interior Design",
    imageQuery: "warm minimalist small living room with an armchair",
    imageAlt:
      "A warm minimalist living room with a linen armchair, mid-century wooden sideboard, and herringbone floor lit by afternoon sun",
    readingTime: "6 min read",
    date: "2026-06-02",
    featured: true,
    content: [
      "Minimalism gets blamed for a lot of cold, showroom-like living rooms — all white walls and one lonely chair. That's not minimalism, that's just an empty room. The version worth chasing is warmer: fewer objects, but each one chosen for how it feels in the hand and how the light hits it in the afternoon.",
      "## Start with what you touch the most",
      "Before buying anything new, walk your current room and note the three things you touch daily: the remote tray, the throw blanket, the reading lamp. Warm minimalism means upgrading these first, since they're doing the most emotional work in the room, long before a new rug or coffee table would.",
      "A small living room can hold exactly one statement piece. Let it be a chair with real presence — rounded arms, a nubby boucle or linen cover, legs turned rather than straight. Everything else in the room should be quieter than that chair, including the sofa.",
      "## Use texture instead of more furniture",
      "When you can't add square footage, add texture layers instead. A room with linen curtains, a wool rug, a rattan side table, and a ceramic lamp base will feel fuller than a room with four extra objects in matching finishes, because texture reads as depth even in a small footprint.",
      "- Swap one hard surface (glass, laminate) for a natural material each season\n- Keep no more than two metal finishes in the room — brass and blackened steel, not four\n- Let one surface stay empty on purpose; a bare side table is a visual rest, not a missed opportunity",
      "> A room finishes itself in the last five percent — the folded blanket, the single stem in a glass, the book left open on the arm of the chair.",
      "## Lighting does more than furniture",
      "In a small room, three low, warm light sources will always beat one bright overhead fixture. Try a floor lamp behind the chair, a small table lamp with a linen shade, and a single pillar candle on the coffee table. Turn the overhead off entirely after 6pm and see how much larger the room feels once the corners go soft.",
      "The goal isn't to own less for its own sake. It's to be able to name why every object in the room is there — and to have room left over for the light to move through it.",
    ],
  },
  {
    slug: "kitchen-counter-organization-that-lasts",
    title: "The Kitchen Counter System That Actually Stays Organized",
    excerpt:
      "Most counter organizing fails within two weeks. This system is built around how you actually cook, not how a magazine photo looks.",
    category: "Organization",
    imageQuery: "bright organised kitchen counter",
    imageAlt:
      "A bright, uncluttered kitchen with a white island, wood cabinetry, and just a few ceramic pieces left out on the counter",
    readingTime: "7 min read",
    date: "2026-05-18",
    featured: true,
    content: [
      "Every kitchen organizing method assumes you'll put things back exactly where they belong every single time. Real kitchens don't work that way — you're cooking with wet hands, a timer is going off, and the oil jar just doesn't make it back to its designated spot. The system below is built for that reality instead of fighting it.",
      "## Zone by motion, not by category",
      "Instead of grouping items by type (all oils together, all spices together), group them by the motion you make while cooking. Everything you reach for while standing at the stove goes in one container within arm's reach: oil, salt, your most-used spoon, tongs. Everything for prep goes near the cutting board. This cuts the distance your hands travel by half, which is the real reason things end up scattered — not laziness, just physics.",
      "- One crock at the stove: oil, salt cellar, main spoon, tongs\n- One tray at the prep zone: cutting board, knife block, oil for finishing\n- One shallow bowl at the sink: sponge, brush, hand soap — nothing else",
      "## Give the counter a hard boundary",
      "Pick a maximum number of permanent objects your counter is allowed to hold — five is a good starting number for a standard kitchen — and write it on a sticky note inside a cabinet door. Every new gadget has to earn a spot by replacing something already on the list. This single rule does more than any bin or tray.",
      "## The 90-second reset",
      "At the end of cooking, not the end of the day, do a 90-second reset: wipe the stove zone, return the prep tray to its spot, and empty the sink bowl. Waiting until after dinner means the mess compounds with dinner mess too, and that's when counters spiral. Ninety seconds right after cooking keeps the two messes from ever merging.",
      "> Organization systems don't fail because people are messy. They fail because the system requires more decisions than a tired person is willing to make.",
      "## What to actually buy",
      "Skip matching canister sets until the system has been tested for a month. Buy one good crock, one tray, and one bowl in materials that can go in the dishwasher. If after four weeks the zones still hold, that's when it's worth investing in the ceramic or marble versions for how the kitchen looks — function first, then finish.",
    ],
  },
  {
    slug: "terracotta-and-sage-color-palette-guide",
    title: "Why Terracotta and Sage Keep Showing Up in Every Well-Designed Home",
    excerpt:
      "This color pairing isn't a trend cycle — it's a pairing that mimics clay and olive leaves, which is why it never quite goes out of style.",
    category: "Color & Texture",
    imageQuery: "terracotta and sage green interior decor",
    imageAlt:
      "Round terracotta clay vases on a shelf with a green palm frond falling across them",
    readingTime: "5 min read",
    date: "2026-04-29",
    content: [
      "Terracotta and sage keep resurfacing in home decor not because of a trend cycle, but because the pairing mimics something we see constantly in nature: fired clay against olive leaves, or sun-baked earth against dry sage brush. Colors borrowed directly from a landscape tend to feel calm in a room, because the eye already knows how to read them together.",
      "## Where terracotta wants to live",
      "Terracotta works hardest in mid-sized doses — a set of cushions, a ceramic lamp base, a run of floor tile — rather than as a full wall color, which can tip warm rooms into feeling hot rather than cozy. If you do want it on the walls, keep the trim and ceiling in a soft white so the warmth has somewhere to breathe.",
      "## Where sage wants to live",
      "Sage is the quieter half of the pair and does well as a larger surface: cabinetry, an accent wall, or upholstery on a piece that isn't the room's focal point. Because sage reads as slightly grey rather than pure green, it doesn't compete with terracotta's warmth — it just sits back and lets it lead.",
      "- 60% neutral (cream, warm white, oatmeal linen)\n- 30% terracotta (textiles, ceramics, one wood tone)\n- 10% sage (a single chair, planters, book spines)",
      "## The mistake most people make",
      "The most common misstep is using both colors at equal weight, which flattens the contrast that makes the pairing feel intentional. One color should always lead. In a room dominated by terracotta, sage should show up only in small, considered doses — a stack of pillar candles, a single planter, the binding of a few books on an otherwise neutral shelf.",
      "> Good color pairing isn't about equal representation. It's about picking a lead and letting the second color agree with it quietly.",
      "Try building a single shelf or console vignette in this palette before committing a whole room to it. If it still feels calm after two weeks of walking past it, it's ready to scale up.",
    ],
  },
  {
    slug: "studio-apartment-storage-ideas",
    title: "12 Storage Ideas for Studio Apartments That Don't Look Like Storage",
    excerpt:
      "In a studio, every storage solution is also a design decision. These ideas hide function in plain sight.",
    category: "Small Spaces",
    imageQuery: "small studio apartment with built-in shelving",
    imageAlt:
      "Floor-to-ceiling built-in bookshelves framing a doorway in a compact room, storage built in as architecture",
    readingTime: "8 min read",
    date: "2026-04-10",
    featured: true,
    content: [
      "In a one-room apartment, there's no back closet to hide the ugly plastic bins in. Every storage decision is visible all the time, which means it has to work as decor first and storage second, or the room will always look like it's fighting itself.",
      "## Furniture that does two jobs",
      "- A bench with a lift-up seat at the foot of the bed for out-of-season linens\n- An ottoman with internal storage doubling as a coffee table\n- A console behind the sofa that also divides the sleeping area from the living area\n- A bed frame with drawers built into the base instead of a bare frame on legs",
      "## Vertical space is free real estate",
      "Most studios are under-used above shoulder height. A single run of open shelving from countertop to ceiling in the kitchen, or a tall, narrow bookcase in an awkward corner, adds real storage without taking floor space that a studio can't spare.",
      "## Let baskets be the visible layer",
      "Woven baskets and lidded boxes in one consistent material — all rattan, or all a matching linen — read as intentional decor even when what's inside them is completely unglamorous. The trick is consistency: three different basket styles look cluttered, but three of the same basket in different sizes look curated.",
      "> If a storage solution needs to be hidden to look good, it's the wrong solution for a studio. Choose pieces that are fine being seen.",
      "## Use the walls behind doors",
      "The back of a closet door, a pantry door, or even the bathroom door can hold a slim over-the-door rack for scarves, cleaning supplies, or shoes — space that's otherwise completely wasted in a small footprint.",
      "## Group by use, not by owner",
      "In a shared studio, resist the urge to give each person their own drawer of everything. Instead, group items by function across the whole space — all chargers in one tray, all outerwear on one rack — so storage scales with the room's limited zones instead of doubling every category.",
    ],
  },
  {
    slug: "cozy-fall-decor-without-clutter",
    title: "Cozy Fall Decor That Doesn't Turn Into Clutter by November",
    excerpt:
      "Seasonal decorating can add warmth without adding a storage problem. Here's how to decorate for fall with restraint.",
    category: "Seasonal",
    imageQuery: "cozy autumn living room with candles and throw blankets",
    imageAlt:
      "A cozy autumn corner with a lit candle, a chunky knit throw, and a terracotta patterned cushion on a linen sofa",
    readingTime: "5 min read",
    date: "2026-09-05",
    content: [
      "Fall decor has a way of multiplying — one pumpkin becomes a whole mantel of pumpkins, gourds, and plaid throws, and by November it all just feels like clutter with a seasonal excuse. The rooms that stay cozy without tipping into chaos usually follow one rule: seasonal pieces should only change the room's texture and scent, not its entire layout.",
      "## Swap textiles, not furniture",
      "The fastest, lowest-clutter way to bring in fall is textile swaps: a heavier throw in rust or clay, a set of ribbed ceramic mugs left out on the counter, linen napkins in a deeper tone. None of it requires storage space in January because most of it is already dual-season.",
      "## One material per season",
      "Instead of mixing pumpkins, dried wheat, pinecones, and candles all at once, choose one material to lead the season. For fall, that might be dried flowers or natural wood — bring in three or four pieces in that single material and let them do all the seasonal work rather than layering four different materials on top of each other.",
      "- A bundle of dried pampas grass or wheat in a floor vase\n- Two or three small pumpkins in muted, natural tones rather than bright orange\n- A single stoneware pitcher swapped in for the everyday glass one\n- Beeswax or amber-toned candles instead of scattered string lights",
      "> The easiest way to keep a seasonal look from becoming clutter is to ask what you'll do with each piece in December. If the answer is 'store it,' buy fewer of it.",
      "## Let scent carry weight that objects usually do",
      "A simmer pot of orange peel and cinnamon on the stove, or one well-placed candle, can make a room feel like fall faster than a mantel full of decor — and it disappears completely once the season changes, with nothing left to box up.",
    ],
  },
  {
    slug: "best-throw-pillows-2026",
    title: "The Throw Pillows We Keep Recommending in 2026",
    excerpt:
      "A short, honest edit of the throw pillow covers actually worth their price this year — no filler picks.",
    category: "Product Edit",
    imageQuery: "linen throw pillows on a neutral sofa",
    imageAlt:
      "A neutral linen sofa styled with a mix of striped, textured, and tufted throw pillows beside a rustic wood table",
    readingTime: "4 min read",
    date: "2026-03-22",
    content: [
      "Throw pillow lists usually pad out to twenty items so there's something for everyone. This one doesn't. These are the covers that have earned a repeat mention in reader questions and actually hold their shape after a season of use.",
      "## For a linen, lived-in look",
      "A stonewashed linen cover with a simple flanged edge is the one piece that makes a sofa look considered instantly. Look for a weight of at least 200 grams per square meter — anything lighter will wrinkle in a way that looks tired rather than relaxed within a week.",
      "## For texture without pattern",
      "A boucle or waffle-weave cover in a neutral tone adds visual interest without introducing a print you'll tire of. These pair especially well against a smooth leather or velvet sofa, where the contrast in texture does more work than a contrast in color would.",
      "- Look for a hidden zipper, not an exposed one — it holds shape better over time\n- Down-alternative inserts sized one inch larger than the cover keep pillows looking full, not deflated\n- Buy covers and inserts separately so covers can be washed without losing loft",
      "## The one splurge worth making",
      "If there's one place to spend more, it's a hand-blocked or hand-embroidered cover for a single accent pillow in the room. One well-made piece reads as intentional in a way that five budget pillows in a matching set never quite manage.",
      "> A good throw pillow edit isn't about matching your sofa. It's about picking two or three textures that would look right sitting next to each other on a shelf, with no sofa involved at all.",
    ],
  },
  {
    slug: "entryway-that-works-when-you-walk-in",
    title: "Designing an Entryway That Actually Works When You Walk In Tired",
    excerpt:
      "The best entryways aren't the prettiest ones — they're the ones that still function at 9pm with your arms full of groceries.",
    category: "Interior Design",
    imageQuery: "entryway with a console table, mirror, and coat hooks",
    imageAlt:
      "A real entryway with a glass-paned front door, coat hooks holding a jacket, a round mirror, a slim console table, and shoes on a mat",
    readingTime: "6 min read",
    date: "2026-02-14",
    content: [
      "Entryway inspiration photos are almost always styled for a moment when no one is actually arriving home. The real test of an entryway is whether it still works at 9pm, arms full of grocery bags, phone ringing, and shoes that need to come off immediately.",
      "## Design for the worst version of arriving home",
      "Every entryway should assume you're arriving tired, not photographing the space. That means a flat surface at hand height for keys and mail before you've even set anything else down, and a spot to sit — even a narrow bench — so shoes come off without a hop-and-balance routine against the wall.",
      "- A shallow tray or bowl for keys, right where your hand naturally lands\n- Hooks at two heights if more than one person uses the entry\n- A closed basket for shoes so the floor stays clear, not an open rack that becomes a pile",
      "## Let the entry be slightly imperfect on purpose",
      "An entryway that's too styled becomes a space nobody wants to disturb, which means the mail piles up on the kitchen counter instead. Build in a tray or drawer specifically meant to catch daily chaos — receipts, a stray charger, sunglasses — so the surface itself stays visually calm while still doing its job.",
      "> The entryway's job isn't to impress anyone standing in the doorway. It's to make the transition from outside to inside take four seconds instead of four minutes.",
      "## Light it for coming home in the dark",
      "A warm sconce or lamp on a timer, set to switch on before dusk, makes the entry feel considered the moment you walk in — and it's a small change that makes the whole house feel more welcoming from the second the door opens.",
    ],
  },
  {
    slug: "gallery-wall-without-hiring-anyone",
    title: "How to Hang a Gallery Wall That Looks Professionally Done",
    excerpt:
      "No laser level, no design consultation — just paper templates, a tape measure, and a formula that actually works.",
    category: "Interior Design",
    imageQuery: "professionally styled gallery wall of framed prints",
    imageAlt:
      "A densely styled gallery wall of framed prints in mixed colors and sizes, arranged over built-in wood shelving",
    readingTime: "7 min read",
    date: "2026-01-20",
    content: [
      "Gallery walls fail for one predictable reason: people start hammering nails before deciding on the actual layout. The fix is almost embarrassingly simple — do all the arranging on paper and on the floor first, and only pick up a hammer once the layout is already correct.",
      "## Trace, cut, tape",
      "Trace each frame onto kraft paper or newspaper and cut it out. Tape the paper templates directly to the wall using painter's tape, moving them around freely until the arrangement feels balanced. Because nothing is committed yet, you can live with the layout for a day or two before hanging a single frame.",
      "## The two-inch rule",
      "Keep two to three inches between every frame, measured consistently across the whole arrangement. Inconsistent spacing is the single biggest tell of an amateur gallery wall — even a slightly imperfect but consistent gap will look more intentional than a technically 'correct' but uneven one.",
      "- Anchor the layout around one larger, central piece rather than distributing size evenly\n- Keep frame finishes limited to two — for example, all black or black-and-brass, never four different metals\n- Hang the visual center of the whole arrangement at eye level, roughly 57 to 60 inches from the floor",
      "> A gallery wall doesn't need perfect symmetry. It needs a consistent rhythm — same gaps, same one or two finishes, one clear anchor piece.",
      "## Hang from the paper, not from memory",
      "Once the paper layout is right, mark the nail position through the paper itself before removing it, so the hole goes exactly where the template said it should. This is the step that turns a good plan into a good result — skipping it is where most gallery walls go slightly crooked.",
      "Step back after every third frame, not just at the end. Small corrections are easy while the wall is half done; they're much harder once every frame is already up and the pattern of nail holes is set.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug);
}

/**
 * Resolve a post's photo. When the post carries an explicit `image` URL that
 * source is used as-is (no attribution — it isn't an Unsplash pick).
 * Otherwise the photo is pulled from Unsplash at build time, seeded by the
 * slug so each post gets a distinct, stable image, with a curated fallback
 * when the API is unavailable. The post's own `imageAlt` always wins.
 */
export async function getPostImage(
  post: Pick<Post, "slug" | "imageQuery" | "imageAlt" | "image">,
  width = 1600,
): Promise<Photo> {
  if (post.image) {
    return { src: post.image, alt: post.imageAlt, credit: null };
  }
  const photo = await getInteriorPhoto(post.imageQuery, { seed: post.slug, width });
  return { ...photo, alt: post.imageAlt };
}

export function getAllSlugs() {
  return posts.map((p) => p.slug);
}

export function getFeaturedPosts() {
  return posts.filter((p) => p.featured);
}

export function getPostsByCategory(category?: string) {
  if (!category) return posts;
  return posts.filter((p) => p.category === category);
}

export const CATEGORIES = [
  "Interior Design",
  "Organization",
  "Product Edit",
  "Color & Texture",
  "Small Spaces",
  "Seasonal",
] as const;
