import Layout from "../../components/layout";
import Seo from "../../components/seo";
import seo from "../../data/seo/catalog.json";
import Nav from "../../components/nav";
import HeroCase from "../../components/hero-case";
import What from "../../components/what";
import Why from "../../components/why";
import Solution from "../../components/solution";
import Quote from "../../components/quote";
import Footer from "../../components/footer";
import Motion from "../../components/motion";

const CASE_LINKS = [
  { label: "Back", href: "/" },
  { label: "What", to: "what" },
  { label: "Why & how", to: "why-how" },
  { label: "Solution", to: "solution", spy: true },
];

const CASE_SYMBOL = { href: "/" };

export default function OnlineCatalog() {
  return (
    <Layout>
      <Seo {...seo} />
      <Motion />

      <div className="index">
        <Nav links={CASE_LINKS} symbol={CASE_SYMBOL} />

        <HeroCase
          logo="stone"
          label="Case"
          category="Work"
          title={["Online", "Catalog"]}
          summary="Helping small businesses showcase their products online and generate more sales opportunities."
          image={{
            src: "/images/work/catalog/cover.png",
            src2x: "/images/work/catalog/cover@2x.png",
            alt: "Illustration of a hand holding a phone that shows a burger from the catalog, beside a Stone card machine.",
            width: 678,
            height: 611,
          }}
        />

        <main className="index_main" id="content">
          <What />
          <Why />
          <Solution />
          <Quote />
        </main>

        <Footer />
      </div>
    </Layout>
  );
}
