import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import Logo from "../logos/";
import Button from "../button";
import ButtonIcon from "../button_icon";

CasePreview.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  activities: PropTypes.string.isRequired,
  designers: PropTypes.string.isRequired,
  slides: PropTypes.number.isRequired,
  featured: PropTypes.bool,
  summary: PropTypes.string,
};

CasePreview.defaultProps = {
  featured: false,
  summary: "",
};

export default function CasePreview({
  logo,
  name,
  year,
  activities,
  designers,
  slides,
  featured,
  summary,
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
          {featured && (
            <>
              <span className="work_label label">
                Online
                <br />
                Catalog
              </span>
              <ButtonIcon
                icon="plus"
                href="/work/catalog"
                classes="work_plus"
                aria-label={`${name} Online Catalog`}
              />
            </>
          )}
        </span>

        <span className="work_controls">
          <span className="work_year label">{year}</span>
          <span className="work_arrows">
            <ButtonIcon
              classes="work_arrow -left"
              disabled={atEnd}
              onClick={() => scrollByStep(1)}
              aria-label={`Next ${name} image`}
            />
            <ButtonIcon
              classes="work_arrow"
              disabled={atStart}
              onClick={() => scrollByStep(-1)}
              aria-label={`Previous ${name} image`}
            />
          </span>
        </span>
      </div>

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
          {Array.from({ length: slides }).map((_, index) => (
            <li className="work_slide" key={index}>
              <span className="work_image" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>

      {featured && summary && (
        <div className="work_cta">
          <p className="work_summary">{summary}</p>
          <Button size="medium" href="/work/catalog" classes="work_button">
            Read the case
          </Button>
        </div>
      )}

      <span className="content_rule" />
    </article>
  );
}
