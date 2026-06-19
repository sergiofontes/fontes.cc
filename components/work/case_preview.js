import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import Logo from "../logos/";
import Button from "../button";
import ButtonIcon from "../button_icon";
import Play from "../play";
import Handnote from "../../public/images/handnote_2.svg";

const DIRS = {
  previews: "/images/work/previews",
  catalog: "/images/work/catalog",
};

// A flat mockup PNG positioned (in %) inside the gallery frame. `scales` lists the
// densities it ships at, so the srcSet stays honest; the layered shadow is composed
// in CSS via the `shadow` modifier (`-small`/`-medium`, or the default large).
function Mockup({ name, dir = "previews", scales = [1, 2, 3], left, top, width, shadow, alt }) {
  const base = `${DIRS[dir]}/${name}`;
  const srcSet = scales
    .map((s) => `${base}${s > 1 ? `@${s}x` : ""}.png ${s}x`)
    .join(", ");

  return (
    <img
      className={cn("work_mockup", { "-small": shadow === "small", "-medium": shadow === "medium" })}
      src={`${base}.png`}
      srcSet={srcSet}
      style={left == null ? undefined : { left: `${left}%`, top: `${top}%`, width: `${width}%` }}
      alt={alt}
      aria-hidden={alt ? undefined : "true"}
      loading="lazy"
    />
  );
}

// One gallery frame: the mockups float on a `work_stage` that covers the frame at
// the prototype’s 534×444 ratio, so the composition stays undistorted while the
// carousel window clips it per breakpoint (matching the Figma overflow). A `video`
// slide wraps the frame in the shared `.video` link + `Play` badge, reusing the
// same target and behavior as Solution’s promotional video.
function Frame({ bg, shadow, fill, video, alt, mockups }) {
  const frame = (
    <figure className={cn("work_frame", { "-video": video, "-fill": fill })} style={bg ? { background: bg } : undefined}>
      <span className="work_stage">
        {mockups.map((mockup, index) => (
          <Mockup
            key={mockup.name}
            {...mockup}
            shadow={shadow}
            alt={index === 0 ? alt : ""}
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
  alt: PropTypes.string,
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
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
            <Handnote className="work_note" role="img" aria-label="check the case" />
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
        className="work_gallery content_media"
        role="group"
        aria-label={`${name} gallery`}
      >
        <ul className="work_track carousel" ref={trackRef} tabIndex={0} onScroll={sync}>
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
                  <span className="work_image" aria-hidden="true" />
                </li>
              ))}
        </ul>
      </div>

      <span className="content_rule" />
    </article>
  );
}
