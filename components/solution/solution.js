import { useCallback, useRef, useState } from "react";

import ButtonDot from "../button_dot";
import PlayIcon from "../../public/images/icon_play.svg";

const IMG = "/images/work/catalog";

// The promotional video lives on YouTube; the play button links out to it.
const VIDEO_URL = "https://www.youtube.com/watch?v=J0cINzc2ziE";

// Every mockup is a plain transparent/flat asset; the framing (mask + radius)
// and the layered drop shadow are composed entirely in CSS. `scales` lists the
// densities each asset ships at (some only have 1x), so the srcSet stays honest.
function Media({ name, scales = [1, 2, 3], alt = "", ...rest }) {
  const srcSet = scales
    .map((s) => `${IMG}/${name}${s > 1 ? `@${s}x` : ""}.png ${s}x`)
    .join(", ");

  return (
    <img
      className="solution_media"
      src={`${IMG}/${name}.png`}
      srcSet={srcSet}
      alt={alt}
      aria-hidden={alt ? undefined : "true"}
      loading="lazy"
      {...rest}
    />
  );
}

// The six “sharing” cards keep their own native heights (chat bubble, post,
// story…), so each carries its real intrinsic size to avoid layout shift.
const SHARING = [
  { name: "store_1", height: 157 },
  { name: "store_2", height: 257 },
  { name: "store_3", height: 405 },
  { name: "product_3", height: 405 },
  { name: "product_2", height: 257 },
  { name: "product_1", height: 173 },
];

// The setup carousel: four backoffice screens sharing one green-panel mask,
// paged with the shared `ButtonDot` pagination (CSS scroll-snap does the work).
const CONFIG_SLIDES = [
  "General settings, sharing link, and WhatsApp orders",
  "Store information and contact details",
  "Appearance and brand customization",
  "Catalog organization and product management",
];

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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: step() * index, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <ul
        className="solution_track carousel"
        ref={trackRef}
        tabIndex={0}
        onScroll={sync}
        aria-label="Online Catalog setup screens"
      >
        {CONFIG_SLIDES.map((label, index) => (
          <li className="solution_slide" key={label}>
            <figure className="solution_frame -setup">
              <Media
                name={`mockup_config_${index + 1}`}
                scales={[1, 2]}
                width={1280}
                height={874}
                alt={`Online Catalog backoffice: ${label}.`}
              />
            </figure>
          </li>
        ))}
      </ul>

      <div className="solution_aside content_aside -center">
        <p className="solution_note">
          The setup experience strikes a balance between customization and
          simplicity, making it easy for merchants to get started.
        </p>

        <div className="solution_dots" role="group" aria-label="Setup screens">
          {CONFIG_SLIDES.map((label, index) => (
            <ButtonDot
              key={label}
              classes="solution_dot"
              active={active === index}
              onClick={() => goTo(index)}
              aria-label={`Show setup screen ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default function Solution() {
  return (
    <section id="solution" className="solution">
      {/* Block 1 — lede + promotional video ─────────────────────────────── */}
      <div className="solution_intro grid content">
        <h2>Solution</h2>

        <div className="solution_lede content_body">
          <p>
            One opportunity stood out: helping merchants build a simple,
            centralized online presence for their products. Enter Online Catalog,
            a tool designed to organize what they sell and make it easy to share
            across digital and physical channels.
          </p>
          <p>
            Still in active development, Online Catalog has shown potential as a
            scalable channel for acquisition and revenue, helping Brazilian
            entrepreneurs who operate with limited resources but plenty of
            ambition.
          </p>
        </div>

        <a
          className="solution_video content_body"
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Watch the Online Catalog promotional video"
        >
          <figure className="solution_frame -video">
            <Media name="video_promo" scales={[1, 2]} width={533} height={310} alt="" />
          </figure>
          <span className="solution_play" aria-hidden="true">
            <PlayIcon />
          </span>
        </a>

        <p className="solution_note content_aside -center -video">
          Promotional video of the Online Catalog.
        </p>
      </div>

      {/* Block 2 — sharing across channels (full-bleed montage) ──────────── */}
      <div
        className="solution_sharing"
        role="img"
        aria-label="The Online Catalog shared across WhatsApp, Instagram stories, and social posts."
      >
        {SHARING.map(({ name, height }) => (
          <figure className="solution_frame -share" key={name}>
            <Media name={`sharing_${name}`} width={197} height={height} alt="" />
          </figure>
        ))}
      </div>

      {/* Block 3 — printed & social templates ───────────────────────────── */}
      <div className="solution_templates grid content">
        <p className="solution_note -templates">
          A variety of templates for social media and printed materials help
          merchants promote their stores and attract new customers.
        </p>

        <div className="solution_pair content_body -templates">
          <figure className="solution_frame -template">
            <Media
              name="stationary_2"
              scales={[1]}
              width={252}
              height={310}
              alt="Printed business cards and table tents for the catalog."
            />
          </figure>
          <figure className="solution_frame -template">
            <Media
              name="stationary_1"
              scales={[1]}
              width={252}
              height={310}
              alt="Social-media templates featuring the merchant’s store."
            />
          </figure>
        </div>
      </div>

      {/* Block 4 — setup carousel ────────────────────────────────────────── */}
      <div className="solution_config grid content">
        <ConfigCarousel />
      </div>

      {/* Block 5 — store customization on mobile ────────────────────────── */}
      <div className="solution_custom grid content">
        <div className="solution_pair -phones">
          <figure className="solution_frame -phone">
            <Media name="mockup_plp" width={247} height={510} alt="The default catalog shown on a phone." />
          </figure>
          <figure className="solution_frame -phone">
            <Media
              name="mockup_plp_custom"
              width={247}
              height={510}
              alt="A catalog customized with the merchant’s brand colors and banner."
            />
          </figure>
        </div>

        <p className="solution_note content_aside -center -custom">
          Merchants can customize their catalog with their store name and logo,
          and optionally add brand colors and a supporting image.
        </p>
      </div>

      {/* Block 6 — responsive across devices ────────────────────────────── */}
      <div className="solution_devices grid content">
        <figure className="solution_frame -devices">
          <picture>
            <source
              media="(min-width: 1201px)"
              srcSet={`${IMG}/responsive_desktop.png 1x, ${IMG}/responsive_desktop@2x.png 2x, ${IMG}/responsive_desktop@3x.png 3x`}
            />
            <Media name="responsive" width={720} height={1306} alt="The Online Catalog adapting across desktop, tablet, and mobile devices." />
          </picture>
        </figure>

        <p className="solution_note -devices">
          Universal interface for any type of device.
        </p>

        <span className="solution_divisor"></span>
      </div>
    </section>
  );
}
