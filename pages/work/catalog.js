import Head from "next/head";

import Layout from "../../components/layout";
import Nav from "../../components/nav";
import Cover from "../../components/cover";
import What from "../../components/what";

// In-page section anchors for this case (the sections themselves land in later
// passes); “Back to home” returns to the index.
const CASE_LINKS = [
  { label: "Back to home", href: "/" },
  { label: "What", to: "what" },
  { label: "Why & how", to: "why-how" },
  { label: "Solution", to: "solution", spy: true },
];

const CASE_SYMBOL = { href: "/" };

export default function OnlineCatalog() {
  return (
    <Layout>
      <Head>
        <title>Online Catalog · Stone — Sérgio Fontes</title>
        <meta
          name="description"
          content="Helping small businesses showcase their products online and generate more sales opportunities."
          key="desc"
        />
      </Head>

      <div className="index">
        <Nav links={CASE_LINKS} symbol={CASE_SYMBOL} />

        <Cover
          logo="stone"
          label="Case"
          category="Work"
          title={["Online", "Catalog"]}
          summary="Helping small businesses showcase their products online and generate more sales opportunities."
          image={{
            src: "/images/work/catalog/cover.png",
            src2x: "/images/work/catalog/cover@2x.png",
            width: 678,
            height: 611,
          }}
        />

        <main className="main">
          <What />
        </main>
      </div>
    </Layout>
  );
}
