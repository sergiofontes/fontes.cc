import Image from "next/image";

const IMG = "/images/work/catalog";

export default function Why() {
  return (
    <section id="why-how" className="why grid content">
      <h2 className="content_heading">Why &amp; how</h2>

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

      <aside className="note why_note content_aside -about">
        Stone is a Brazilian fintech focused on small and medium-sized businesses.
      </aside>

      <div className="why_gallery content_body motion">
        <div className="why_board">
          <Image
            className="why_image"
            src={`${IMG}/discovery.png`}
            width={2772}
            height={1328}
            sizes="(min-width: 1201px) 800px, (min-width: 768px) 75vw, 92vw"
            alt="Discovery board mapping the research behind the project."
          />
        </div>
        <div className="why_cards">
          <Image
            className="why_card motion_item -vender"
            src={`${IMG}/capa_vender_original@2x.png`}
            width={1000}
            height={563}
            sizes="(min-width: 1201px) 267px, (min-width: 768px) 204px, 141px"
            alt="A discovery deck cover titled “Vender Mais” (Sell more), showing a customer paying by phone at a Stone card machine."
          />
          <Image
            className="why_card motion_item -atrair"
            src={`${IMG}/capa_atrair_original@2x.png`}
            width={1000}
            height={563}
            sizes="(min-width: 1201px) 267px, (min-width: 768px) 204px, 141px"
            alt="A discovery deck cover titled “Atrair” (Attract), showing a Stone agent presenting a phone to a shop owner."
          />
        </div>
      </div>

      <aside className="note why_note content_aside -stats">
        Across two discovery phases, we reviewed 43 studies, surveyed 2,282
        customers, conducted 12 in-depth interviews, and analyzed 39 competitors to
        inform product decisions.
      </aside>

      <span className="why_divisor content_rule -edge"></span>
    </section>
  );
}
