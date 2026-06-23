export default function Quote() {
  return (
    <section id="quote" className="quote">
      <figure className="quote_figure grid">
        <blockquote className="quote_text">
          <p className="lead">
            “With Online Catalog, we ended up gaining more customers and
            increasing our average order value.”
          </p>
        </blockquote>

        <figcaption className="quote_cite">
          <cite className="label quote_name">Miguel Andrade</cite>
          <span className="label">Stone customer</span>
        </figcaption>

        <span className="quote_divisor content_rule -edge"></span>
      </figure>
    </section>
  );
}
