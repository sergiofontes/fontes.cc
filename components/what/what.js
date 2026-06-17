const IMG = "/images/work/catalog";

// The three product mockups are composed with CSS (positioning + drop shadows);
// the assets are plain transparent phone renders. Only the centre screen carries
// a meaningful alt — the flanking screens are decorative duplicates of the app.
function Phone({ name, modifier, width, height, alt }) {
  return (
    <img
      className={`what_phone ${modifier}`}
      src={`${IMG}/${name}.png`}
      srcSet={`${IMG}/${name}.png 1x, ${IMG}/${name}@2x.png 2x, ${IMG}/${name}@3x.png 3x`}
      width={width}
      height={height}
      alt={alt}
      aria-hidden={alt ? undefined : "true"}
      loading="lazy"
    />
  );
}

export default function What() {
  return (
    <section id="what" className="what grid content">
      <div className="what_media content_media">
        <div className="what_mockups">
          <Phone
            name="mockup_about"
            modifier="-left"
            width={247}
            height={510}
            alt=""
          />
          <Phone
            name="mockup_pdp"
            modifier="-center"
            width={291}
            height={600}
            alt="The Online Catalog showing a product page in a merchant’s store"
          />
          <Phone
            name="mockup_plp_custom"
            modifier="-right"
            width={247}
            height={510}
            alt=""
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

      <span className="what_divisor content_rule"></span>
    </section>
  );
}
