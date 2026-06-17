import CasePreview from "./case_preview";

const cases = [
  {
    logo: "stone",
    name: "Stone",
    year: "2021",
    activities: "Product Discovery, Product Design, Usability Testing",
    designers: "Sérgio Fontes, Rafaela Lopes, Vinícius Alcântara, Fausto Junior",
    slides: 4,
    featured: true,
    summary:
      "Helping small businesses showcase their products online and generate more sales opportunities.",
  },
  {
    logo: "vtex",
    name: "VTEX",
    year: "2021",
    activities: "Interface Design",
    designers: "Sérgio Fontes, Nathália Moura",
    slides: 3,
  },
  {
    logo: "petplate",
    name: "PetPlate",
    year: "2021",
    activities: "Product Design, Design System, Front-end Development",
    designers:
      "Sérgio Fontes, Renata Motta, Nathália Moura, Filipe Soares, Fanny Chien",
    slides: 4,
  },
  {
    logo: "guava",
    name: "Guava",
    year: "2021",
    activities: "Product Design, Copywriting, Branding, Front-end Development",
    designers: "Sérgio Fontes, Renata Motta, Juliana Carvalho, Filipe Soares",
    slides: 4,
  },
  {
    logo: "tropical",
    name: "Tropical Ruby",
    year: "2021",
    activities: "Product Design, Copywriting, Branding, Front-end Development",
    designers: "Sérgio Fontes, Renata Motta, Juliana Carvalho, Filipe Soares",
    slides: 4,
  },
];

export default function Work() {
  return (
    <section id="work" className="work grid">
      <h2 className="work_title">Work</h2>

      <div className="work_cases content_media">
        {cases.map((item) => (
          <CasePreview key={item.logo} {...item} />
        ))}
      </div>
    </section>
  );
}
