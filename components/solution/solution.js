import {
  Media,
  Share,
  Phone,
  SetupSlide,
  SetupCarousel,
  ResponsiveDevices,
} from "./gallery";
import Play from "../play";

const VIDEO_URL = "https://www.youtube.com/watch?v=J0cINzc2ziE";

export default function Solution() {
  return (
    <section id="solution" className="solution">
      {/* Block 1 — lede + promotional video */}
      <div className="solution_intro grid content">
        <h2 className="content_heading">Solution</h2>

        <div className="solution_lede content_body">
          <p>
            One opportunity stood out: helping merchants build a simple,
            centralized online presence for their products. Enter Online
            Catalog, a tool designed to organize what they sell and make it easy
            to share across digital and physical channels.
          </p>
          <p>
            Still in active development, Online Catalog has shown potential as a
            scalable channel for acquisition and revenue, helping Brazilian
            entrepreneurs who operate with limited resources but plenty of
            ambition.
          </p>
        </div>

        <a
          className="solution_video video content_body"
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch the Online Catalog promotional video"
        >
          <figure className="solution_frame -video">
            <Media
              name="video_promo"
              scales={[1, 2]}
              width={533}
              height={310}
              sizes="(min-width: 1201px) 560px, (min-width: 768px) 55vw, 92vw"
              alt="A still from the promotional video — a WhatsApp-style chat where a customer messages Boni Burger asking to see the menu."
            />
          </figure>
          <Play />
        </a>

        <aside className="note solution_note content_aside -center -video">
          Promotional video of the Online Catalog.
        </aside>
      </div>

      {/* Block 2 — sharing across channels (full-bleed montage) */}
      <div className="solution_sharing motion">
        <Share
          name="store_1"
          height={157}
          alt="A Slack message sharing the store’s catalog link, with a link preview of the storefront."
        />
        <Share
          name="store_2"
          height={257}
          alt="An Instagram post promoting the store, with its logo and tagline over a burger photo."
        />
        <Share
          name="store_3"
          height={405}
          alt="An Instagram story promoting the store, with its tagline and a button to visit the store."
        />
        <Share
          name="product_3"
          height={405}
          alt="An Instagram story sharing a product — a burger with its price, description, and a button to order it."
        />
        <Share
          name="product_2"
          height={257}
          alt="An Instagram post sharing a product, with its photo, price, and description."
        />
        <Share
          name="product_1"
          height={173}
          alt="A Slack message sharing a product link, with a link preview showing the item’s photo, price, and description."
        />
      </div>

      {/* Block 3 — printed & social templates */}
      <div className="solution_templates grid content">
        <aside className="note solution_note content_aside -templates">
          A variety of templates for social media and printed materials help
          merchants promote their stores and attract new customers.
        </aside>

        <div className="solution_pair content_body -templates">
          <figure className="solution_frame -template">
            <Media
              name="stationary_2"
              scales={[1]}
              fill
              sizes="(min-width: 1201px) 260px, (min-width: 768px) 30vw, 92vw"
              alt="A printed table tent showing the store’s logo and the catalog’s QR code."
            />
          </figure>
          <figure className="solution_frame -template">
            <Media
              name="stationary_1"
              scales={[1]}
              fill
              sizes="(min-width: 1201px) 260px, (min-width: 768px) 30vw, 92vw"
              alt="A printed flyer and business card with the store’s logo and the catalog’s QR code."
            />
          </figure>
        </div>
      </div>

      {/* Block 4 — setup carousel */}
      <div className="solution_config grid content">
        <SetupCarousel note="The setup experience strikes a balance between customization and simplicity, making it easy for merchants to get started.">
          <SetupSlide
            n={1}
            alt="Online Catalog backoffice: General settings, sharing link, and WhatsApp orders."
          />
          <SetupSlide
            n={2}
            alt="Online Catalog backoffice: Store information, description, and address."
          />
          <SetupSlide
            n={3}
            alt="Online Catalog backoffice: Contact details and social networks."
          />
          <SetupSlide
            n={4}
            alt="Online Catalog backoffice: Appearance — catalog colors, logo, and cover image."
          />
        </SetupCarousel>
      </div>

      {/* Block 5 — store customization on mobile */}
      <div className="solution_custom grid content">
        <div className="solution_pair -phones">
          <Phone
            name="mockup_plp"
            alt="The default catalog on a phone, showing the product list."
          />
          <Phone
            name="mockup_plp_custom"
            alt="A catalog customized with the merchant’s brand colors and banner."
          />
        </div>

        <aside className="note solution_note content_aside -center -custom">
          Merchants can customize their catalog with their store name and logo,
          and optionally add brand colors and a supporting image.
        </aside>
      </div>

      {/* Block 6 — responsive across devices */}
      <div className="solution_devices grid content">
        <figure className="solution_frame -devices">
          <ResponsiveDevices />
        </figure>

        <aside className="note solution_note -devices">
          Universal interface for any type of device.
        </aside>

        <span className="solution_divisor"></span>
      </div>
    </section>
  );
}
