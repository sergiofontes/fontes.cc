import CasePreview from "./case_preview";

// Each Stone gallery slide is a 534×444 frame holding flat, transparent mockup
// PNGs positioned as percentages of that frame — matching the Figma “previews”.
// Shadows are composed in CSS (`shadow` picks the drop-shadow token); the frame’s
// `bg` shows through the gaps between mockups.
const STONE_GALLERY = [
  {
    bg: "#f7dfcf",
    shadow: "large",
    mockups: [
      {
        name: "preview_stone_mockup_2",
        left: 2.7,
        top: 25.8,
        width: 32,
        alt: "Boni Burger’s online catalog home on a phone — a hero banner of burgers, the BB logo, a tagline with a “Visite nosso catálogo” button, and the shop’s address and opening hours.",
      },
      {
        name: "preview_stone_mockup_3",
        left: 65.2,
        top: 25.8,
        width: 32,
        alt: "The catalog’s product list on a phone — a search field, the Burgers/Especiais/Acompanhamentos category tabs, and burger cards such as “Boni Clássico” (R$ 32,00) and “Boni Bacon” (R$ 36,00), each with a photo and short description.",
      },
      {
        name: "preview_stone_mockup_1",
        left: 31.1,
        top: 10.8,
        width: 37.6,
        alt: "A product page on a phone — a large photo of the “Boni Clássico” burger, its R$ 32,00 price, the full ingredient list, and an add-to-cart button.",
      },
    ],
  },
  {
    bg: "#f2e1e1",
    shadow: "small",
    mockups: [
      {
        name: "preview_stone_mockup_sharing",
        left: 3.7,
        top: -41,
        width: 92.5,
        alt: "The catalog’s content shared across channels — Boni Burger’s “Boni Clássico” appearing in Instagram posts and stories, X posts, direct-message replies, and rich link previews of the store.",
      },
    ],
  },
  {
    video: {
      href: "https://www.youtube.com/watch?v=J0cINzc2ziE",
      label: "Watch the Online Catalog promotional video",
    },
    mockups: [
      {
        name: "video_promo",
        dir: "catalog",
        scales: [1, 2],
        alt: "A still from the promotional video — a WhatsApp-style chat where a customer messages Boni Burger asking to see the menu.",
      },
    ],
  },
];

// VTEX — three frames: phones cascading over a tinted frame, a web catalog (a product
// detail above the card grid, both bleeding past the edges), then the checkout phones.
// Medium shadow throughout, matching the Figma effect style.
const VTEX_GALLERY = [
  {
    bg: "#f3f6e1",
    shadow: "medium",
    mockups: [
      {
        name: "preview_vtex_mockup_2",
        left: 2.81,
        top: -5.37,
        width: 30.05,
        alt: "The FreshStore grocery app on a phone — the “Vegetables & Fruits” category with 192 items, filter chips, a sort control, and a “Go vegan for the month!” promotional banner.",
      },
      {
        name: "preview_vtex_mockup_3",
        left: 34.98,
        top: 12.7,
        width: 30.05,
        alt: "The “Fruits” product list on a phone — cards for items like Organic Monalisa Potato and Black Seedless Grape, each showing its price, a unit selector, and an add button.",
      },
      {
        name: "preview_vtex_mockup_5",
        left: 67.14,
        top: 29.93,
        width: 30.05,
        alt: "The cart summary on a phone — 27 items, substitution preferences, a free-shipping note, the running subtotal and savings, and a “Proceed to Checkout” button.",
      },
    ],
  },
  {
    bg: "#f5f5f5",
    shadow: "medium",
    mockups: [
      {
        name: "preview_vtex_specs",
        shadow: "none", // annotated diagram (labels + leader lines), not a floating mockup
        left: 17.04,
        top: 5.41,
        width: 67.6,
        alt: "An annotated breakdown of the web product card — labels pointing out the favourite, recurring-item and organic flags, the add-to-cart button, the price and promo tag, and the unit selector.",
      },
      {
        name: "preview_vtex_cards",
        shadow: "small", // reads as smaller cards within the frame
        left: -7.12,
        top: 58.78,
        width: 118.46,
        alt: "A row of web product cards in different states — default cards with an add button beside cards switched to a quantity stepper after being added, including “take 3, pay 2” promo tags.",
      },
    ],
  },
  {
    bg: "#fceef2",
    shadow: "medium",
    mockups: [
      {
        name: "preview_vtex_mockup_8",
        left: 2.81,
        top: 12.61,
        width: 30.05,
        alt: "The delivery setup on a phone — a “Where do you want to receive your order?” dialog asking for a ZIP code over the dimmed store.",
      },
      {
        name: "preview_vtex_mockup_9",
        left: 34.92,
        top: 12.61,
        width: 30.05,
        alt: "The same dialog with a ZIP code being typed — a “Use current location” option and matching ZIP suggestions appear above the keyboard.",
      },
      {
        name: "preview_vtex_mockup_10",
        left: 67.03,
        top: 12.61,
        width: 30.05,
        alt: "The next step on a phone — “How do you want to receive your order?” offering “Delivery to Your Address” or “Pickup at Store,” each with its conditions.",
      },
    ],
  },
];

// PetPlate — a web product page behind the phone app, two wide web pages, then the
// checkout cards cascading up-right.
const PETPLATE_GALLERY = [
  {
    bg: "#deedff",
    shadow: "medium",
    mockups: [
      {
        name: "preview_petplate_mockup_1",
        left: -17.12,
        top: 5.41,
        width: 112.32,
        alt: "A PetPlate product page on the web — the “Chicken Apple Sausage Bites 4-Pack,” with its star rating, $30 price, quantity stepper, a “Buy 4-Pack” button, and a meal-plan add-on option.",
      },
      {
        name: "preview_petplate_mockup_2",
        left: 2.81,
        top: 18.42,
        width: 31.84,
        alt: "The same product on a phone — the “Chicken Apple Sausage Bites 4-Pack” page with its photo carousel, rating, and price.",
      },
    ],
  },
  {
    bg: "#fff4cc",
    shadow: "medium",
    mockups: [
      {
        name: "preview_petplate_mockup_4",
        left: -13.05,
        top: 5.41,
        width: 108.33,
        alt: "A dog’s meal-plan dashboard on the PetPlate website — Momo the Samoyed’s profile and feeding needs, the current Meal Plan and next-box total, and the meals and treats included.",
      },
    ],
  },
  {
    bg: "#deedff",
    shadow: "medium",
    mockups: [
      {
        name: "preview_petplate_mockup_3",
        left: 4.74,
        top: 5.41,
        width: 108.33,
        alt: "The plan-switching dialog on the PetPlate website — comparing the recommended “Full Plan” against the “Topper Plan,” each with its calories, cadence, and price.",
      },
    ],
  },
  {
    bg: "#fff4cc",
    shadow: "medium",
    mockups: [
      {
        name: "preview_petplate_mockup_5",
        shadow: "small", // reads as a smaller card within the frame
        left: -6.18,
        top: 32.66,
        width: 28.5,
        alt: "The express checkout on a card — a “Welcome!” step asking the customer to pick a payment option, offering Apple Pay or credit card.",
      },
      {
        name: "preview_petplate_mockup_6",
        shadow: "small", // reads as a smaller card within the frame
        left: 20.04,
        top: 21.62,
        width: 28.5,
        alt: "The checkout’s shipping-address step — a form for contact and address details above the payment-info section.",
      },
      {
        name: "preview_petplate_mockup_7",
        left: 46.25,
        top: 10.59,
        width: 28.5,
        alt: "The “Review Your Order” step — the shipping address, payment info, and an order summary totaling $30, with a “Finish Order” button.",
      },
      {
        name: "preview_petplate_mockup_8",
        left: 72.47,
        top: -0.23,
        width: 28.5,
        alt: "The “Thank You — Order Confirmed” step — the order number, delivery date, and shipping address, with “Refer a Friend” and “Go to My Account” actions.",
      },
    ],
  },
];

// Guava — browser windows scrolling across the carousel: each frame repeats the
// previous window bleeding in from the left for continuity.
const GUAVA_GALLERY = [
  {
    bg: "#ffcccc",
    shadow: "medium",
    mockups: [
      {
        name: "preview_guava_1_mockup_1",
        left: -21.72,
        top: 5.41,
        width: 93.63,
        alt: "The Guava software studio website — an “About us” hero with the red headline “A small & bold software studio.” beside a circular photo of the team at work.",
      },
      {
        name: "preview_guava_1_mockup_2",
        left: 57.68,
        top: 19.82,
        width: 93.63,
        alt: "Guava’s work page — “A productivity power-up,” a case study about helping Elétron Energy automate their operations, with a 3D illustration of stacked panels.",
      },
    ],
  },
  {
    bg: "#f2f7c3",
    shadow: "medium",
    mockups: [
      // Repeats the previous frame’s work page bleeding in for continuity → decorative.
      {
        name: "preview_guava_1_mockup_2",
        left: -48.13,
        top: 19.82,
        width: 93.63,
        alt: "",
      },
      {
        name: "preview_guava_2_mockup_3",
        left: 23.03,
        top: -6.08,
        width: 93.63,
        alt: "Guava’s about page — the brand name “guava” formed from large three-dimensional letters on a green wall, under the line “A small & bold software studio.”",
      },
    ],
  },
  {
    bg: "#424242",
    shadow: "medium",
    mockups: [
      // Repeats the previous frame’s about page bleeding in for continuity → decorative.
      {
        name: "preview_guava_2_mockup_3",
        left: -82.58,
        top: -6.08,
        width: 93.63,
        alt: "",
      },
      {
        name: "preview_guava_3_mockup_4",
        left: 3.18,
        top: 16.22,
        width: 93.63,
        alt: "Guava’s process page — the headline “An immersive & adaptive process.” over a flowing line illustration on a coral background.",
      },
    ],
  },
];

// Tropical Ruby — one browser window per frame, filling the tinted frame and bleeding
// off the bottom.
const TROPICAL_GALLERY = [
  {
    bg: "#fff5cc",
    shadow: "medium",
    mockups: [
      {
        name: "preview_tropical_mockup_1",
        left: 3.18,
        top: 4.28,
        width: 93.63,
        alt: "The Tropical Ruby 2015 conference website — the home page with the diamond logo, featured speakers, the March 5–8 dates and Porto de Galinhas location, a newsletter sign-up, and rows of sponsors.",
      },
    ],
  },
  {
    bg: "#cce6ea",
    shadow: "medium",
    mockups: [
      {
        name: "preview_tropical_mockup_2",
        left: 3.18,
        top: 4.28,
        width: 93.63,
        alt: "The conference schedule page — a four-day timeline and details for activities like a buggy ride and a raft-boat sail, plus talks and transfer information.",
      },
    ],
  },
  {
    bg: "#c0e6e0",
    shadow: "medium",
    mockups: [
      {
        name: "preview_tropical_mockup_3",
        left: 3.18,
        top: 4.28,
        width: 93.63,
        alt: "Another section of the conference site — a Steve Klabnik testimonial calling it “Ruby on one of the most beautiful beaches in the world,” a “Remarks” block on transportation, lodging, food and weather, and an “About” summary.",
      },
    ],
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
