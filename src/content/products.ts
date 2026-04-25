export type ProductVertical = {
  slug: "hospitality-textiles" | "garment-making" | "mats-floor-coverings";
  index: string;
  label: string;
  headline: string;
  kicker: string;
  summary: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  paragraphs: string[];
  image: string;
  imageAlt: string;
};

export const PRODUCTS: ProductVertical[] = [
  {
    slug: "hospitality-textiles",
    index: "01",
    label: "Hospitality & Home Textiles",
    kicker: "For the world's finest hotels",
    headline: "Linens, duvets & towels that survive the thousandth wash.",
    summary:
      "High-durability linens, duvet covers, pillowcases and professional-grade towelling, tailored to the specifications of the premium hotel sector.",
    highlights: [
      "Hospitality linen & duvets",
      "Pillowcases & shams",
      "Bath, hand & face towels",
      "Bathrobes & spa textiles",
    ],
    specs: [
      { label: "Cotton count", value: "200–400 TC" },
      { label: "Towel GSM", value: "450–700 GSM" },
      { label: "Weave", value: "Sateen · Percale · Ring-spun" },
      { label: "Finish", value: "Compact · Mercerised · Enzyme-washed" },
    ],
    paragraphs: [
      "Luxury hospitality asks a textile to do the impossible — feel new after a thousand commercial washes, survive back-of-house handling, and still deliver that first-night hush when the guest folds back the duvet. We source against that brief.",
      "Our hospitality partners operate compact weaving, pre-shrink and fibre-optimised yarn programs calibrated for commercial laundries. You specify the hand-feel, the GSM, the colour-fastness, the seam strength — we deliver it, audited and inspected, folded into your global distribution.",
    ],
    image: "/images/hospitality.jpg",
    imageAlt:
      "Stacked folded hotel bath towels in soft natural light — premium hospitality linen",
  },
  {
    slug: "garment-making",
    index: "02",
    label: "Garment Making",
    kicker: "Knitted, woven, bespoke",
    headline: "From technical pattern to global shelf, managed as one program.",
    summary:
      "Expert sourcing and full production management for knitted and woven apparel — casual wear, activewear, everyday essentials and fully bespoke buyer-specific programs.",
    highlights: [
      "Knitted essentials & activewear",
      "Woven shirts & bottoms",
      "Bespoke private-label programs",
      "Branding, labelling & packaging",
    ],
    specs: [
      { label: "Fabric", value: "100% Cotton · Blends · Performance knits" },
      { label: "Knit gauge", value: "20s–40s single jersey, interlock, rib" },
      { label: "MOQ (per colour)", value: "500–1,500 pcs" },
      { label: "Compliance", value: "Sedex · BSCI · WRAP partners" },
    ],
    paragraphs: [
      "Garment manufacturing in India lives or dies on pattern fidelity and trim discipline. We manage both — interpreting your technical pack into factory-ready specs, running pre-production samples against your branding, and keeping trims, labels and packaging in sync with production cycles.",
      "Whether you're building a 10,000-piece essentials drop or a bespoke capsule for a luxury label, UGS handles the full chain: factory selection, sampling, bulk production, in-line and final QA, and ocean-ready logistics.",
    ],
    image: "/images/garment.jpg",
    imageAlt:
      "Garment manufacturing workshop — fabric on a sewing machine, cut-and-sew in progress",
  },
  {
    slug: "mats-floor-coverings",
    index: "03",
    label: "Mats & Floor Coverings",
    kicker: "Utility and decorative",
    headline: "Floor textiles engineered for daily life and curated for style.",
    summary:
      "Durable bath mats, door mats and kitchen mats alongside decorative floor accents for retail and commercial environments.",
    highlights: [
      "Bath, door & kitchen mats",
      "Anti-slip backed variants",
      "Decorative retail accents",
      "Custom sizes & branding",
    ],
    specs: [
      { label: "Construction", value: "Tufted · Woven · Hand-loom" },
      { label: "Backing", value: "TPR · Latex · PVC anti-slip" },
      { label: "Pile", value: "500–1800 GSM options" },
      { label: "Custom", value: "Sizes, logos, colourways on demand" },
    ],
    paragraphs: [
      "Floor coverings are a deceptively technical category. The right backing, pile density and yarn twist decide whether a mat still looks good at the end of season — we source from partners who understand the difference.",
      "For retail and hospitality buyers, we also source decorative floor accents: woven runners, printed rugs and statement pieces — all backed by the same QA program as our larger textile programs.",
    ],
    image: "/images/mats.jpg",
    imageAlt:
      "Close-up of a handwoven floor mat in warm neutral tones — detail of the weave",
  },
];
