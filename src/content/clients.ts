export type Client = {
  name: string;
  blurb: string;
  category: "Hospitality" | "Home Textiles" | "Lifestyle" | "Retail";
};

export const CLIENTS: Client[] = [
  {
    name: "Rateria Fabrics",
    category: "Hospitality",
    blurb:
      "Bespoke bedding, bath linen and soft furnishings for the world's finest hotels and luxury brands.",
  },
  {
    name: "Arctic Blue",
    category: "Home Textiles",
    blurb:
      "Premium home-textile label with a reputation for cool, clean silhouettes and enduring hand-feel.",
  },
  {
    name: "Aravind",
    category: "Retail",
    blurb:
      "Regional retail group stocking core home essentials across multiple Indian metros.",
  },
  {
    name: "House2Home",
    category: "Home Textiles",
    blurb:
      "Curated home-goods destination focused on everyday textiles with quiet, considered design.",
  },
  {
    name: "Erbaliving",
    category: "Lifestyle",
    blurb:
      "Lifestyle brand pairing natural fibres and honest manufacturing for the modern home.",
  },
];
