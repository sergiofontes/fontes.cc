import { useCallback, useRef, useState } from "react";
import Image, { getImageProps } from "next/image";

import ButtonDot from "../button_dot";
import Play from "../play";

const IMG = "/images/work/catalog";

const VIDEO_URL = "https://www.youtube.com/watch?v=J0cINzc2ziE";

// Flat assets; framing (mask + radius) and the drop shadow are composed in CSS.
function Media({ name, scales = [1, 2, 3], alt = "", ...rest }) {
  const max = Math.max(...scales);
  const src = `${IMG}/${name}${max > 1 ? `@${max}x` : ""}.png`;

  return <Image className="solution_media motion_item" src={src} alt={alt} {...rest} />;
}

// One shared store/product card; keeps its native height (Slack/IG post/IG story) to avoid CLS.
function Share({ name, height, alt }) {
  return (
    <figure className="solution_frame -share">
      <Media
        name={`sharing_${name}`}
        width={197}
        height={height}
        sizes="(min-width: 1201px) 196px, (min-width: 768px) 156px, 116px"
        alt={alt}
      />
    </figure>
  );
}

// One backoffice screen of the setup carousel; only its number and alt differ.
function SetupSlide({ n, alt }) {
  return (
    <li className="solution_slide">
      <figure className="solution_frame -setup">
        <Media
          name={`mockup_config_${n}`}
          scales={[1, 2]}
          width={1280}
          height={874}
          sizes="(min-width: 1201px) 860px, (min-width: 768px) 110vw, 130vw"
          alt={alt}
        />
      </figure>
    </li>
  );
}

// Setup carousel: four backoffice screens, paged with `ButtonDot` (CSS scroll-snap).
function ConfigCarousel() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 1;
    const slide = track.querySelector(".solution_slide");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return (slide ? slide.offsetWidth : track.clientWidth) + gap;
  }, []);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setActive(Math.round(track.scrollLeft / step()));
  }, [step]);

  const goTo = (index) => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    track.scrollTo({
      left: step() * index,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <>
      <ul
        className="solution_track carousel motion"
        ref={trackRef}
        tabIndex={0}
        onScroll={sync}
        aria-label="Online Catalog setup screens"
      >
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
      </ul>

      <aside className="solution_aside content_aside -center">
        <p className="note solution_note">
          The setup experience strikes a balance between customization and
          simplicity, making it easy for merchants to get started.
        </p>

        <div className="solution_dots" role="group" aria-label="Setup screens">
          {[0, 1, 2, 3].map((index) => (
            <ButtonDot
              key={index}
              classes="solution_dot"
              active={active === index}
              onClick={() => goTo(index)}
              aria-label={`Show setup screen ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
            />
          ))}
        </div>
      </aside>
    </>
  );
}

// Art-directed: portrait device stack on mobile/tablet, landscape on desktop.
// `next/image` can't swap by media query, so `getImageProps` + `<picture>` do it.
function ResponsiveDevices() {
  const alt =
    "The Online Catalog adapting across desktop, tablet, and mobile devices.";

  // Raise quality above the default 75 so the device-screenshot text stays crisp.
  const { props: desktop } = getImageProps({
    src: `${IMG}/responsive_desktop@3x.png`,
    alt,
    width: 1245,
    height: 750,
    quality: 90,
    sizes: "90vw",
  });
  const { props: mobile } = getImageProps({
    src: `${IMG}/responsive@3x.png`,
    alt,
    width: 537,
    height: 973,
    quality: 90,
    sizes: "92vw",
  });

  return (
    <picture>
      <source
        media="(min-width: 1201px)"
        srcSet={desktop.srcSet}
        sizes={desktop.sizes}
      />
      <img className="solution_media motion_item" {...mobile} />
    </picture>
  );
}

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
          className="solution_video video content_body motion"
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

        <div className="solution_pair content_body -templates motion">
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
        <ConfigCarousel />
      </div>

      {/* Block 5 — store customization on mobile */}
      <div className="solution_custom grid content">
        <div className="solution_pair -phones motion">
          <figure className="solution_frame -phone">
            <Media
              name="mockup_plp"
              width={247}
              height={510}
              sizes="(min-width: 1201px) 220px, (min-width: 768px) 26vw, 37vw"
              alt="The default catalog on a phone, showing the product list."
            />
          </figure>
          <figure className="solution_frame -phone">
            <Media
              name="mockup_plp_custom"
              width={247}
              height={510}
              sizes="(min-width: 1201px) 220px, (min-width: 768px) 26vw, 37vw"
              alt="A catalog customized with the merchant’s brand colors and banner."
            />
          </figure>
        </div>

        <aside className="note solution_note content_aside -center -custom">
          Merchants can customize their catalog with their store name and logo,
          and optionally add brand colors and a supporting image.
        </aside>
      </div>

      {/* Block 6 — responsive across devices */}
      <div className="solution_devices grid content">
        <figure className="solution_frame -devices motion">
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
