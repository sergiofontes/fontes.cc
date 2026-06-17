const IMG = "/images/work/catalog";

export default function Why() {
  return (
    <section id="why-how" className="why grid content">
      <h2>Why &amp; how</h2>

      <div className="why_text content_body">
        <p>
          Stone identified an opportunity to support small businesses beyond
          payments. As lead designer, I helped drive discovery initiatives that
          combined quantitative research, customer interviews, competitive
          analysis, and cross-functional collaboration to understand what
          influences merchant growth.
        </p>
        <p>
          The research showed that customer acquisition was the biggest challenge
          for small businesses. Many merchants already sold through channels like
          WhatsApp and Instagram, but these tools took time and money to manage and
          were often fragmented and inefficient. With that in mind, the team began
          exploring solutions focused on visibility and demand generation rather
          than transactions alone.
        </p>
      </div>

      <p className="why_note content_aside -about">
        Stone is a Brazilian fintech focused on small and medium-sized businesses.
      </p>

      {/* The discovery board screenshot with two tilted “cover” decks composed on
          top. Both decks are flat covers tilted and shadowed entirely in CSS. */}
      <div className="why_gallery content_body">
        <div className="why_board">
          <img
            className="why_image"
            src={`${IMG}/discovery.png`}
            width={2772}
            height={1328}
            alt="Discovery board mapping the research behind the project."
            loading="lazy"
          />
        </div>
        <div className="why_cards" aria-hidden="true">
          <img
            className="why_card -vender"
            src={`${IMG}/capa_vender_original@2x.png`}
            width={1000}
            height={563}
            alt=""
            loading="lazy"
          />
          <img
            className="why_card -atrair"
            src={`${IMG}/capa_atrair_original@2x.png`}
            width={1000}
            height={563}
            alt=""
            loading="lazy"
          />
        </div>
      </div>

      <p className="why_note content_aside -stats">
        Across two discovery phases, we reviewed 43 studies, surveyed 2,282
        customers, conducted 12 in-depth interviews, and analyzed 39 competitors to
        inform product decisions.
      </p>

      <span className="why_divisor content_rule"></span>
    </section>
  );
}
