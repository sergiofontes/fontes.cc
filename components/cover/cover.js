import { Fragment } from "react";
import PropTypes from "prop-types";

import Logo from "../logos/";

Cover.propTypes = {
  logo: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.arrayOf(PropTypes.string).isRequired,
  summary: PropTypes.string.isRequired,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    src2x: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
};

export default function Cover({ logo, label, category, title, summary, image }) {
  return (
    <header id="cover" className="hero cover grid">
      <img
        className="cover_art"
        src={image.src}
        srcSet={image.src2x ? `${image.src} 1x, ${image.src2x} 2x` : undefined}
        width={image.width}
        height={image.height}
        alt=""
        aria-hidden="true"
      />

      <div className="cover_main">
        <span className="cover_titling">
          <Logo type={logo} />
          <h1 className="cover_heading">
            {title.map((line, index) => (
              <Fragment key={line}>
                {index > 0 && <br />}
                {line}
              </Fragment>
            ))}
          </h1>
        </span>
        <p className="cover_summary lead">{summary}</p>
      </div>

      <h2 className="cover_label content_heading">{label}</h2>
      <p className="cover_category lead">{category}</p>
      <span className="cover_border" />
    </header>
  );
}
