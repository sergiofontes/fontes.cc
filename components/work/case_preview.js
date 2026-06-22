import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import Image from "next/image";

import Logo from "../logos/";
import Button from "../button";
import ButtonIcon from "../button_icon";
import Play from "../play";
import Handnote from "../../public/images/handnote_2.svg";
import MOCKUP_SIZES from "./mockup-sizes";

const DIRS = {
  previews: "/images/work/previews",
  catalog: "/images/work/catalog",
};

// A flat mockup positioned (in %) inside the gallery frame. `next/image` serves the
// sharpest source (the highest `scale` shipped) as AVIF/WebP and lazy-loads by
// default; the layered shadow is composed in CSS via the `shadow` modifier
// (`-small`/`-medium`/`-flat`, or the default large). Each mockup carries its own
// `alt`; continuity repeats pass an empty `alt` to stay decorative.
function Mockup({
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

  // The mockup renders at a `width` share of its basis. Height-pinned stage frames
  // give a fixed basis per breakpoint (stage width 433/469/534); full-frame (`fill`)
  // and video frames scale with the slide, so they get a slide-relative `sizes`.
  const sizes =
    width == null
      ? "(min-width: 1201px) 700px, (min-width: 768px) 62vw, 78vw"
      : fill
        ? `(min-width: 1201px) ${Math.round((width / 100) * 700)}px, (min-width: 768px) ${((width / 100) * 62).toFixed(1)}vw, ${((width / 100) * 78).toFixed(1)}vw`
        : `(min-width: 1201px) ${Math.round((width / 100) * 534)}px, (min-width: 768px) ${Math.round((width / 100) * 469)}px, ${Math.round((width / 100) * 433)}px`;

  return (
    <Image
      className={cn("work_mockup reveal_item", {
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

// One gallery frame: the mockups float on a `work_stage` that covers the frame at
// the prototype’s 534×444 ratio, so the composition stays undistorted while the
// carousel window clips it per breakpoint (matching the Figma overflow). A `video`
// slide wraps the frame in the shared `.video` link + `Play` badge, reusing the
// same target and behavior as Solution’s promotional video.
function Frame({ bg, shadow, fill, video, mockups }) {
  const frame = (
    <figure
      className={cn("work_frame", { "-video": video, "-fill": fill })}
      style={bg ? { background: bg } : undefined}
    >
      <span className="work_stage">
        {mockups.map((mockup) => (
          <Mockup
            key={mockup.name}
            {...mockup}
            shadow={mockup.shadow ?? shadow}
            fill={fill}
          />
        ))}
      </span>
    </figure>
  );

  if (!video) return frame;

  return (
    <a
      className="video"
      href={video.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={video.label}
    >
      {frame}
      <Play />
    </a>
  );
}

Frame.propTypes = {
  bg: PropTypes.string,
  shadow: PropTypes.oneOf(["small", "medium", "large"]),
  fill: PropTypes.bool,
  video: PropTypes.shape({ href: PropTypes.string, label: PropTypes.string }),
  mockups: PropTypes.array.isRequired,
};

CasePreview.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  activities: PropTypes.string.isRequired,
  designers: PropTypes.string.isRequired,
  slides: PropTypes.number,
  gallery: PropTypes.array,
  fill: PropTypes.bool,
  featured: PropTypes.bool,
  summary: PropTypes.string,
};

export default function CasePreview({
  logo,
  name,
  subtitle,
  year,
  activities,
  designers,
  slides,
  gallery,
  fill = false,
  featured = false,
  summary = "",
}) {
  const trackRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const max = track.scrollWidth - track.clientWidth;
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scrollByStep = (direction) => {
    const track = trackRef.current;
    if (!track) return;

    const slide = track.querySelector(".work_slide");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = (slide ? slide.offsetWidth : track.clientWidth) + gap;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    track.scrollBy({
      left: step * direction,
      behavior: reduce ? "auto" : "smooth",
    });
  };

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

      {featured && summary && (
        <div className="work_cta">
          <p className="work_summary">{summary}</p>
          <Button size="medium" href="/work/catalog" classes="work_button">
            Read the case
          </Button>
        </div>
      )}

      <div
        className="work_gallery content_media reveal"
        role="group"
        aria-label={`${name} gallery`}
      >
        <ul
          className="work_track carousel"
          ref={trackRef}
          tabIndex={0}
          onScroll={sync}
        >
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
          {gallery
            ? gallery.map((slide, index) => (
                <li className="work_slide" key={index}>
                  <Frame {...slide} fill={fill} />
                </li>
              ))
            : Array.from({ length: slides }).map((_, index) => (
                <li className="work_slide" key={index}>
                  <span className="work_image" />
                </li>
              ))}
        </ul>
      </div>

      <span className="content_rule" />
    </article>
  );
}
