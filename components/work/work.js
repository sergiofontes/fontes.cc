import CasePreview from "./case_preview";

// Each Stone gallery slide is a 534×444 frame holding flat, transparent mockup
// PNGs positioned as percentages of that frame — matching the Figma “previews”.
// Shadows are composed in CSS (`shadow` picks the drop-shadow token); the frame’s
// `bg` shows through the gaps between mockups.
const STONE_GALLERY = [
  {
    bg: "#f7dfcf",
    shadow: "large",
    alt: "Online Catalog on three phones — a store page, a featured product, and the product list.",
    mockups: [
      { name: "preview_stone_mockup_2", left: 2.7, top: 25.8, width: 32 },
      { name: "preview_stone_mockup_3", left: 65.2, top: 25.8, width: 32 },
      { name: "preview_stone_mockup_1", left: 31.1, top: 10.8, width: 37.6 },
    ],
  },
  {
    bg: "#f2e1e1",
    shadow: "small",
    alt: "Catalog content shared across Instagram posts, stories, Slack, and link previews.",
    mockups: [
      {
        name: "preview_stone_mockup_sharing",
        left: 3.7,
        top: -41,
        width: 92.5,
      },
    ],
  },
  {
    video: {
      href: "https://www.youtube.com/watch?v=J0cINzc2ziE",
      label: "Watch the Online Catalog promotional video",
    },
    mockups: [{ name: "video_promo", dir: "catalog", scales: [1, 2] }],
  },
];

// VTEX — three frames: phones cascading over a tinted frame, a web catalog (a product
// detail above the card grid, both bleeding past the edges), then the checkout phones.
// Medium shadow throughout, matching the Figma effect style.
const VTEX_GALLERY = [
  {
    bg: "#f3f6e1",
    shadow: "medium",
    alt: "The VTEX grocery storefront on three phones — a category page, the product list, and the cart summary.",
    mockups: [
      { name: "preview_vtex_mockup_2", left: 2.81, top: -5.37, width: 30.05 },
      { name: "preview_vtex_mockup_3", left: 34.98, top: 12.7, width: 30.05 },
      { name: "preview_vtex_mockup_5", left: 67.14, top: 29.93, width: 30.05 },
    ],
  },
  {
    bg: "#f5f5f5",
    shadow: "medium",
    alt: "The VTEX grocery catalog on the web — a product’s details above the product grid.",
    mockups: [
      { name: "preview_vtex_specs", left: 17.04, top: 5.41, width: 67.6 },
      { name: "preview_vtex_cards", left: -7.12, top: 58.78, width: 118.46 },
    ],
  },
  {
    bg: "#fceef2",
    shadow: "medium",
    alt: "The VTEX grocery checkout on three phones — choosing where and how to receive the order.",
    mockups: [
      { name: "preview_vtex_mockup_8", left: 2.81, top: 12.61, width: 30.05 },
      { name: "preview_vtex_mockup_9", left: 34.92, top: 12.61, width: 30.05 },
      { name: "preview_vtex_mockup_10", left: 67.03, top: 12.61, width: 30.05 },
    ],
  },
];

// PetPlate — a web product page behind the phone app, two wide web pages, then the
// checkout cards cascading up-right.
const PETPLATE_GALLERY = [
  {
    bg: "#deedff",
    shadow: "medium",
    alt: "A PetPlate product page on the web with the phone app in front — the Chicken Apple Sausage Bites add-on.",
    mockups: [
      { name: "preview_petplate_mockup_1", left: -17.12, top: 5.41, width: 112.32 },
      { name: "preview_petplate_mockup_2", left: 2.81, top: 23.42, width: 31.84 },
    ],
  },
  {
    bg: "#fff4cc",
    shadow: "medium",
    alt: "A dog’s meal-plan dashboard on the PetPlate website.",
    mockups: [{ name: "preview_petplate_mockup_4", left: -13.05, top: 5.41, width: 108.33 }],
  },
  {
    bg: "#deedff",
    shadow: "medium",
    alt: "Switching between the Full Plan and Topper Plan on the PetPlate website.",
    mockups: [{ name: "preview_petplate_mockup_3", left: 4.74, top: 5.41, width: 108.33 }],
  },
  {
    bg: "#fff4cc",
    shadow: "medium",
    alt: "The PetPlate checkout flow — express checkout, order review, and confirmation.",
    mockups: [
      { name: "preview_petplate_mockup_5", left: -6.18, top: 32.66, width: 28.5 },
      { name: "preview_petplate_mockup_6", left: 20.04, top: 21.62, width: 28.5 },
      { name: "preview_petplate_mockup_7", left: 46.25, top: 10.59, width: 28.5 },
      { name: "preview_petplate_mockup_8", left: 72.47, top: -0.23, width: 28.5 },
    ],
  },
];

// Guava — browser windows scrolling across the carousel: each frame repeats the
// previous window bleeding in from the left for continuity.
const GUAVA_GALLERY = [
  {
    bg: "#ffcccc",
    shadow: "medium",
    alt: "The Guava studio website — the home page beside an Elkton Energy case study.",
    mockups: [
      { name: "preview_guava_1_mockup_1", left: -21.72, top: 5.41, width: 93.63 },
      { name: "preview_guava_1_mockup_2", left: 57.68, top: 19.82, width: 93.63 },
    ],
  },
  {
    bg: "#f2f7c3",
    shadow: "medium",
    alt: "The Guava brand on its website — the bold “guava” home page.",
    mockups: [
      { name: "preview_guava_1_mockup_2", left: -48.13, top: 19.82, width: 93.63 },
      { name: "preview_guava_2_mockup_3", left: 23.03, top: -6.08, width: 93.63 },
    ],
  },
  {
    bg: "#424242",
    shadow: "medium",
    alt: "Guava’s process page — “An immersive & adaptive process.”",
    mockups: [
      { name: "preview_guava_2_mockup_3", left: -82.58, top: -6.08, width: 93.63 },
      { name: "preview_guava_3_mockup_4", left: 3.18, top: 16.22, width: 93.63 },
    ],
  },
];

// Tropical Ruby — one browser window per frame, filling the tinted frame and bleeding
// off the bottom.
const TROPICAL_GALLERY = [
  {
    bg: "#fff5cc",
    shadow: "medium",
    alt: "The Tropical Ruby conference website — the home page.",
    mockups: [{ name: "preview_tropical_mockup_1", left: 3.18, top: 4.28, width: 93.63 }],
  },
  {
    bg: "#cce6ea",
    shadow: "medium",
    alt: "The Tropical Ruby conference website — the speakers.",
    mockups: [{ name: "preview_tropical_mockup_2", left: 3.18, top: 4.28, width: 93.63 }],
  },
  {
    bg: "#c0e6e0",
    shadow: "medium",
    alt: "The Tropical Ruby conference website — the schedule.",
    mockups: [{ name: "preview_tropical_mockup_3", left: 3.18, top: 4.28, width: 93.63 }],
  },
];

const cases = [
  {
    logo: "stone",
    name: "Stone",
    subtitle: "Online Catalog",
    year: "2025",
    activities: "Product Discovery, Product Design, Usability Testing",
    designers: "Sérgio Fontes, Vinícius Alcântara, Fausto Junior",
    gallery: STONE_GALLERY,
    featured: true,
    summary:
      "Helping small businesses showcase their products online and generate more sales opportunities.",
  },
  {
    logo: "vtex",
    name: "VTEX",
    subtitle: "Grocery Starter Pack",
    year: "2022",
    activities: "Interface Design",
    designers: "Sérgio Fontes, Nathália Moura",
    gallery: VTEX_GALLERY,
  },
  {
    logo: "petplate",
    name: "PetPlate",
    subtitle: "Ecommerce Redesign",
    year: "2021",
    activities: "Product Design, Design System, Front-end Development",
    designers:
      "Sérgio Fontes, Renata Motta, Nathália Moura, Filipe Soares, Fanny Chien",
    gallery: PETPLATE_GALLERY,
    fill: true,
  },
  {
    logo: "guava",
    name: "Guava",
    subtitle: "Branding & Website",
    year: "2021",
    activities: "Product Design, Copywriting, Branding, Front-end Development",
    designers: "Sérgio Fontes, Renata Motta, Juliana Carvalho, Filipe Soares",
    gallery: GUAVA_GALLERY,
  },
  {
    logo: "tropical",
    name: "Tropical Ruby",
    subtitle: "Branding & Website",
    year: "2015",
    activities: "Product Design, Copywriting, Branding, Front-end Development",
    designers: "Sérgio Fontes",
    gallery: TROPICAL_GALLERY,
    fill: true,
  },
];

export default function Work() {
  return (
    <section id="work" className="work grid">
      <h2 className="work_title content_heading">Work</h2>

      <div className="work_cases content_media">
        {cases.map((item) => (
          <CasePreview key={item.logo} {...item} />
        ))}
      </div>
    </section>
  );
}
