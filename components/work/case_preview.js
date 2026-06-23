import { Children, cloneElement } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Image from "next/image";

import Logo from "../logos/";
import ButtonIcon from "../button_icon";
import Play from "../play";
import Handnote from "../../public/images/handnote_2.svg";
import MOCKUP_SIZES from "./mockup-sizes";
import useCarousel from "./use-carousel";

const DIRS = {
  previews: "/images/work/previews",
  catalog: "/images/work/catalog",
};

// A flat mockup positioned (in %) within a Slide's 534×444 frame; the layered shadow
// comes from the `shadow` modifier. Each carries its own `alt`; continuity repeats pass
// `alt=""`. Slide injects the frame's default `shadow`/`fill` when not set here.
export function Mockup({
  name,
  dir = "previews",
  scales = [1, 2, 3],
  left,
  top,
  width,
  shadow,
  fill,
  alt = "",
}) {
  const base = `${DIRS[dir]}/${name}`;
  const max = Math.max(...scales);
  const src = `${base}${max > 1 ? `@${max}x` : ""}.png`;
  const [w, h] = MOCKUP_SIZES[name] || [4, 3];

  // `sizes` ≈ each mockup’s render width per breakpoint: min(<%>vw, <%>·534px) mobile,
  // the 534px cap on tablet, ~700px (fill) / 534px desktop.
  const sizes =
    width == null
      ? "(min-width: 1201px) 700px, (min-width: 768px) 534px, min(100vw, 534px)"
      : fill
        ? `(min-width: 1201px) ${Math.round((width / 100) * 700)}px, (min-width: 768px) ${Math.round((width / 100) * 534)}px, min(${width}vw, ${Math.round((width / 100) * 534)}px)`
        : `(min-width: 768px) ${Math.round((width / 100) * 534)}px, min(${width}vw, ${Math.round((width / 100) * 534)}px)`;

  return (
    <Image
      className={cn("work_mockup motion_item", {
        "-small": shadow === "small",
        "-medium": shadow === "medium",
        "-flat": shadow === "none",
      })}
      src={src}
      width={w}
      height={h}
      sizes={sizes}
      style={
        left == null
          ? undefined
          : { left: `${left}%`, top: `${top}%`, width: `${width}%` }
      }
      alt={alt}
    />
  );
}

// Forwards the frame's default shadow (a Mockup can still override its own) and `fill`
// down to each Mockup, so the call site only states what differs per image.
const withFrameDefaults = (children, shadow, fill) =>
  Children.map(children, (child) =>
    child
      ? cloneElement(child, { shadow: child.props.shadow ?? shadow, fill })
      : child,
  );

// One gallery frame: mockups float on a `work_stage` clipped by the carousel window
// (the prototype's 534×444 ratio).
export function Slide({ bg, shadow, fill, children }) {
  return (
    <li className="work_slide">
      <figure
        className={cn("work_frame", { "-fill": fill })}
        style={bg ? { background: bg } : undefined}
      >
        <span className="work_stage">
          {withFrameDefaults(children, shadow, fill)}
        </span>
      </figure>
    </li>
  );
}

// A Slide whose frame is a link to a video, wrapped in the shared `.video` + `Play` badge.
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

// The leading carousel slide: the credits for the case.
export function Colophon({ activities, designers }) {
  return (
    <li className="work_colophon">
      <aside>
        <dl>
          <dt className="label">What I did</dt>
          <dd className="note">{activities}</dd>
          <dt className="label">Designers</dt>
          <dd className="note">{designers}</dd>
        </dl>
      </aside>
    </li>
  );
}

Mockup.propTypes = {
  name: PropTypes.string.isRequired,
  dir: PropTypes.oneOf(["previews", "catalog"]),
  scales: PropTypes.arrayOf(PropTypes.number),
  left: PropTypes.number,
  top: PropTypes.number,
  width: PropTypes.number,
  shadow: PropTypes.oneOf(["small", "medium", "large", "none"]),
  fill: PropTypes.bool,
  alt: PropTypes.string,
};

Slide.propTypes = {
  bg: PropTypes.string,
  shadow: PropTypes.oneOf(["small", "medium", "large", "none"]),
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
  // The featured summary + “Read the case” button, authored at the call site.
  cta: PropTypes.node,
  // The colophon followed by the gallery Slides.
  children: PropTypes.node,
};

// Presentational shell: the case header + the scroll-snap carousel chrome. Content (the
// colophon, slides, and CTA) is authored as markup at the call site; behavior lives in
// `useCarousel`. See AGENTS.md › Content lives in the markup.
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
