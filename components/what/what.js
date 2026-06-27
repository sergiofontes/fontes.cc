import Image from "next/image";

// Renders the embedded-shadow copy (see AGENTS.md › Images). Each PNG bakes its shadow into a
// larger canvas, so `transform` (declared per phone at the call site) regrows + recenters the
// silhouette to sit exactly where the CSS `filter` shadow used to.
const IMG = "/images/work/shadow/catalog";

// Each phone shows a different part of the catalog, so each gets its own alt.
function Phone({ name, modifier, width, height, sizes, transform, alt }) {
  return (
    <Image
      className={`what_phone motion_item ${modifier}`}
      src={`${IMG}/${name}@3x.png`}
      width={width}
      height={height}
      sizes={sizes}
      style={{ transform }}
      alt={alt}
    />
  );
}

export default function What() {
  return (
    <section id="what" className="what grid content">
      <div className="what_media content_media">
        <div className="what_mockups motion">
          <Phone
            name="mockup_about"
            modifier="-left"
            width={289}
            height={588}
            sizes="(min-width: 1201px) 245px, (min-width: 768px) 215px, 165px"
            transform="translate(0.07%, 7.74%) scale(1.17004)"
            alt="The store’s profile in the catalog — its logo, tagline, address, and opening hours."
          />
          <Phone
            name="mockup_pdp"
            modifier="-center"
            width={343}
            height={695}
            sizes="(min-width: 1201px) 290px, (min-width: 768px) 255px, 190px"
            transform="translate(0.06%, 8.10%) scale(1.1789)"
            alt="A product page in the catalog, with the item’s photo, price, description, and an add-to-cart button."
          />
          <Phone
            name="mockup_plp_custom"
            modifier="-right"
            width={289}
            height={588}
            sizes="(min-width: 1201px) 245px, (min-width: 768px) 215px, 165px"
            transform="translate(0.07%, 7.74%) scale(1.17004)"
            alt="The catalog’s product list, with a search field, category filters, and items grouped by type."
          />
        </div>
      </div>

      <h2 className="content_heading">What</h2>

      <div className="what_body content_body">
        <p>
          The Online Catalog is a lightweight commerce tool that enables small
          businesses to create a professional digital showcase for their
          products without the complexity of a full e-commerce store. Merchants
          can organize products into categories and share a single catalog link
          across channels they already use, such as WhatsApp, social media
          profiles, and QR codes.
        </p>
        <p>
          Integrated into the Stone ecosystem, the product also works through
          Stone’s POS devices, allowing merchants to manage their catalog using
          tools already embedded in their daily operations. By making products
          easier to discover, browse, and share, Online Catalog helps merchants
          strengthen their digital presence and generate more sales
          opportunities without changing how they already sell.
        </p>

        <div className="what_kpis">
          <h3 className="label what_kpis-label">First 30 days</h3>
          <ul className="what_kpis-list">
            <li className="what_kpis-item">
              <span className="what_kpis-value">10,000+</span>
              <span className="what_kpis-caption">active merchants</span>
            </li>
            <li className="what_kpis-item">
              <span className="what_kpis-value">26,000+</span>
              <span className="what_kpis-caption">new leads to merchants</span>
            </li>
          </ul>
        </div>
      </div>

      <aside className="what_colophon content_aside">
        <dl className="what_colophon-list">
          <div className="what_colophon-group">
            <dt className="label what_colophon-label">What I did</dt>
            <dd className="what_colophon-value note">
              Product Discovery, Product Design, Usability Testing
            </dd>
          </div>
          <div className="what_colophon-group">
            <dt className="label what_colophon-label">Designers</dt>
            <dd className="what_colophon-value note">
              Sérgio Fontes, Vinícius Alcântara, Fausto Junior
            </dd>
          </div>
        </dl>
      </aside>

      <span className="what_divisor content_rule -edge"></span>
    </section>
  );
}
