export const categories = [
  "All",
  "Weddings",
  "Proposals",
  "Birthdays",
  "Kiddies",
] as const;

export type PortfolioCategory = Exclude<
  (typeof categories)[number],
  "All"
>;

export type PortfolioSize =
  | "small"
  | "medium"
  | "large"
  | "wide"
  | "tall";

export interface PortfolioItem {
  id: number;
  title: string;
  category: PortfolioCategory;
  image: string;
  alt: string;
  description: string;
  size: PortfolioSize;
}

export const portfolioItems: PortfolioItem[] = [
  // =========================
  // WEDDINGS
  // =========================

  {
    id: 1,
    title: "Luxury Wedding Reception",
    category: "Weddings",
    image: "/images/weddings/wedding-01.jpg",
    alt: "Luxury wedding reception designed by IGOS Events featuring elegant floral décor and premium event styling.",
    description:
      "A timeless celebration styled with elegance and attention to every detail.",
    size: "large",
  },

  {
    id: 2,
    title: "Elegant Wedding Décor",
    category: "Weddings",
    image: "/images/weddings/wedding-02.jpg",
    alt: "Luxury wedding decoration by IGOS Events showcasing sophisticated event styling.",
    description:
      "Beautiful spaces designed for unforgettable wedding celebrations.",
    size: "medium",
  },

  {
    id: 3,
    title: "Signature Wedding Styling",
    category: "Weddings",
    image: "/images/weddings/wedding-03.jpg",
    alt: "Premium wedding styling created by IGOS Events with elegant floral arrangements.",
    description:
      "Thoughtfully curated décor that transforms every celebration.",
    size: "tall",
  },

  {
    id: 4,
    title: "Wedding Atmosphere",
    category: "Weddings",
    image: "/images/weddings/wedding-04.jpg",
    alt: "Beautifully decorated wedding venue by IGOS Events.",
    description:
      "Luxury styling crafted to leave lasting impressions.",
    size: "medium",
  },

  {
    id: 5,
    title: "Grand Reception",
    category: "Weddings",
    image: "/images/weddings/wedding-05.jpg",
    alt: "Elegant reception hall designed by IGOS Events.",
    description:
      "Creating extraordinary celebrations with refined elegance.",
    size: "wide",
  },

  {
    id: 6,
    title: "Romantic Wedding",
    category: "Weddings",
    image: "/images/weddings/wedding-06.jpg",
    alt: "Romantic luxury wedding designed by IGOS Events.",
    description:
      "Every celebration tells a beautiful story.",
    size: "medium",
  },

  {
    id: 7,
    title: "Luxury Celebration",
    category: "Weddings",
    image: "/images/weddings/wedding-07.jpg",
    alt: "Elegant wedding styling with premium décor by IGOS Events.",
    description:
      "Creating unforgettable experiences through thoughtful design.",
    size: "medium",
  },

  {
    id: 8,
    title: "Wedding Details",
    category: "Weddings",
    image: "/images/weddings/wedding-08.jpg",
    alt: "Luxury wedding details captured during an IGOS Events celebration.",
    description:
      "Attention to every detail makes every event exceptional.",
    size: "medium",
  },

  {
    id: 9,
    title: "Timeless Celebration",
    category: "Weddings",
    image: "/images/weddings/wedding-09.jpg",
    alt: "Luxury wedding reception by IGOS Events with elegant event décor.",
    description:
      "Designed with elegance from beginning to end.",
    size: "large",
  },

  // =========================
  // PROPOSALS
  // =========================

  {
    id: 10,
    title: "Romantic Proposal",
    category: "Proposals",
    image: "/images/proposals/proposal-01.jpg",
    alt: "Luxury proposal setup by IGOS Events with candles and elegant floral décor.",
    description:
      "Creating unforgettable proposal moments filled with romance.",
    size: "medium",
  },

  {
    id: 11,
    title: "Will You Marry Me?",
    category: "Proposals",
    image: "/images/proposals/proposal-02.jpg",
    alt: "Elegant marriage proposal designed by IGOS Events.",
    description:
      "Beautiful proposal experiences crafted with love.",
    size: "wide",
  },

  // =========================
  // BIRTHDAYS
  // =========================

  {
    id: 12,
    title: "Luxury Birthday Celebration",
    category: "Birthdays",
    image: "/images/birthdays/birthday-01.jpg",
    alt: "Elegant birthday celebration designed by IGOS Events.",
    description:
      "Luxury birthday décor created for unforgettable memories.",
    size: "medium",
  },

  {
    id: 13,
    title: "Birthday Elegance",
    category: "Birthdays",
    image: "/images/birthdays/birthday-02.jpg",
    alt: "Beautiful birthday event styled by IGOS Events.",
    description:
      "Celebrating life's milestones with timeless elegance.",
    size: "tall",
  },

  // =========================
  // KIDDIES
  // =========================

  {
    id: 14,
    title: "Kiddies Celebration",
    category: "Kiddies",
    image: "/images/kiddies/kiddies-01.jpg",
    alt: "Colourful kiddies party designed by IGOS Events.",
    description:
      "Fun-filled celebrations created for little stars.",
    size: "medium",
  },

  {
    id: 15,
    title: "A Day Full Of Smiles",
    category: "Kiddies",
    image: "/images/kiddies/kiddies-02.jpg",
    alt: "Luxury themed kiddies birthday party by IGOS Events.",
    description:
      "Creating magical celebrations children will always remember.",
    size: "wide",
  },
];