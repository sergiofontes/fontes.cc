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
    mockups: [{ name: "preview_stone_mockup_sharing", left: 3.7, top: -41, width: 92.5 }],
  },
  {
    video: {
      href: "https://www.youtube.com/watch?v=J0cINzc2ziE",
      label: "Watch the Online Catalog promotional video",
    },
    mockups: [{ name: "video_promo", dir: "catalog", scales: [1, 2] }],
  },
];

const cases = [
  {
    logo: "stone",
    name: "Stone",
    subtitle: "Online Catalog",
    year: "2021",
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
    slides: 3,
  },
  {
    logo: "petplate",
    name: "PetPlate",
    subtitle: "Ecommerce Redesign",
    year: "2021",
    activities: "Product Design, Design System, Front-end Development",
    designers:
      "Sérgio Fontes, Renata Motta, Nathália Moura, Filipe Soares, Fanny Chien",
    slides: 4,
  },
  {
    logo: "guava",
    name: "Guava",
    subtitle: "Branding & Website",
    year: "2021",
    activities: "Product Design, Copywriting, Branding, Front-end Development",
    designers: "Sérgio Fontes, Renata Motta, Juliana Carvalho, Filipe Soares",
    slides: 4,
  },
  {
    logo: "tropical",
    name: "Tropical Ruby",
    subtitle: "Branding & Website",
    year: "2015",
    activities: "Product Design, Copywriting, Branding, Front-end Development",
    designers: "Sérgio Fontes",
    slides: 4,
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
