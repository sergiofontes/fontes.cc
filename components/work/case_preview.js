import { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Image from "next/image";

import Logo from "../logos/";
import ButtonIcon from "../button_icon";
import Play from "../play";
import Handnote from "../../public/images/handnote_2.svg";
import useCarousel from "./use-carousel";

// Mockups ship in two copies (see AGENTS.md › Images): the rendered embedded-shadow set under shadow/ and the flat set.
// `flat` mockups with no baked variant (the VTEX spec diagram, the video still) render from FLAT_DIRS.
const DIRS = {
  previews: "/images/work/shadow/previews",
  catalog: "/images/work/shadow/catalog",
};
const FLAT_DIRS = {
  previews: "/images/work/previews",
  catalog: "/images/work/catalog",
};

// A mockup floated (in %) within a Slide's 534×444 frame; `width`/`height` are the PNG's intrinsic size (aspect ratio + CLS).
// Baked-shadow PNGs pre-correct `left`/`top`/`size` to land the artwork where the flat one sat; continuity repeats pass `alt=""`.
export function Mockup({
  name,
  dir = "previews",
  flat = false,
  scales = [1, 2, 3],
  width,
  height,
  left,
  top,
  size,
  fill,
  alt = "",
}) {
  const base = `${(flat ? FLAT_DIRS : DIRS)[dir]}/${name}`;
  const max = Math.max(...scales);
  const src = `${base}${max > 1 ? `@${max}x` : ""}.png`;

  // `sizes` ≈ each mockup’s render width per breakpoint: min(<%>vw, <%>·534px) mobile, 534px tablet, ~700px (fill) / 534px desktop.
  const sizes =
    size == null
      ? "(min-width: 1201px) 700px, (min-width: 768px) 534px, min(100vw, 534px)"
      : fill
        ? `(min-width: 1201px) ${Math.round((size / 100) * 700)}px, (min-width: 768px) ${Math.round((size / 100) * 534)}px, min(${size}vw, ${Math.round((size / 100) * 534)}px)`
        : `(min-width: 768px) ${Math.round((size / 100) * 534)}px, min(${size}vw, ${Math.round((size / 100) * 534)}px)`;

  return (
    <Image
      className="work_mockup motion_item"
      src={src}
      width={width}
      height={height}
      sizes={sizes}
      style={
        left == null
          ? undefined
          : { left: `${left}%`, top: `${top}%`, width: `${size}%` }
      }
      alt={alt}
    />
  );
}

// Forwards the frame's `fill` down to each Mockup, so the call site only states what differs.
const withFrameDefaults = (children, fill) =>
  Children.map(children, (child) =>
    child ? cloneElement(child, { fill }) : child,
  );

export function Slide({ bg, fill, children }) {
  return (
    <li className="work_slide">
      <figure
        className={cn("work_frame", { "-fill": fill })}
        style={bg ? { background: bg } : undefined}
      >
        <span className="work_stage">{withFrameDefaults(children, fill)}</span>
      </figure>
    </li>
  );
}

export function VideoSlide({ href, label, children }) {
  return (
    <li className="work_slide">
      <a
        className="video"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <figure className="work_frame -video">
          <span className="work_stage">{children}</span>
        </figure>
        <Play />
      </a>
    </li>
  );
}

export function Colophon({ activities, designers }) {
  return (
    <li className="work_colophon">
      <aside>
        <dl>
          <dt className="label">What I did</dt>
          <dd className="note">{activities}</dd>
          <dt className="label">{designers.includes(",") ? "Designers" : "Designer"}</dt>
          <dd className="note">{designers}</dd>
        </dl>
      </aside>
    </li>
  );
}

Mockup.propTypes = {
  name: PropTypes.string.isRequired,
  dir: PropTypes.oneOf(["previews", "catalog"]),
  flat: PropTypes.bool,
  scales: PropTypes.arrayOf(PropTypes.number),
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  left: PropTypes.number,
  top: PropTypes.number,
  size: PropTypes.number,
  fill: PropTypes.bool,
  alt: PropTypes.string,
};

Slide.propTypes = {
  bg: PropTypes.string,
  fill: PropTypes.bool,
  children: PropTypes.node,
};

VideoSlide.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Colophon.propTypes = {
  activities: PropTypes.string.isRequired,
  designers: PropTypes.string.isRequired,
};

CasePreview.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  featured: PropTypes.bool,
  cta: PropTypes.node,
  children: PropTypes.node,
};

export default function CasePreview({
  logo,
  name,
  subtitle,
  year,
  featured = false,
  cta,
  children,
}) {
  const { trackRef, atStart, atEnd, sync, scrollByStep } = useCarousel();

  return (
    <article className="work_case grid">
      <div className="work_header">
        <span className="work_lockup">
          <Logo type={logo} />
          <h3 className="work_subtitle">{subtitle}</h3>
          {featured && (
            <Handnote
              className="work_note"
              role="img"
              aria-label="check the case"
            />
          )}
        </span>

        <span className="work_controls">
          <span className="work_year label">{year}</span>
          <span className="work_arrows">
            <ButtonIcon
              classes="work_arrow -left"
              disabled={atStart}
              onClick={() => scrollByStep(-1)}
              aria-label={`Previous ${name} image`}
            />
            <ButtonIcon
              classes="work_arrow"
              disabled={atEnd}
              onClick={() => scrollByStep(1)}
              aria-label={`Next ${name} image`}
            />
          </span>
        </span>
      </div>

      {cta && <div className="work_cta">{cta}</div>}

      <div
        className="work_gallery content_media motion"
        role="group"
        aria-label={`${name} gallery`}
      >
        <ul
          className="work_track carousel"
          ref={trackRef}
          tabIndex={0}
          onScroll={sync}
        >
          {children}
        </ul>
      </div>

      <span className="content_rule" />
    </article>
  );
}
