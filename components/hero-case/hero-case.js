import PropTypes from "prop-types";

import Dust from "../dust";

HeroCase.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    src2x: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  children: PropTypes.node,
};

export default function HeroCase({ image, children }) {
  return (
    <header id="cover" className="hero hero-case grid">
      <Dust
        classes="hero-case_art"
        src={image.src2x || image.src}
        width={image.width}
        height={image.height}
        sizes="(min-width: 1201px) 600px, (min-width: 768px) 50vw, 90vw"
        alt={image.alt || ""}
      />

      {children}

      <span className="hero-case_border" />
    </header>
  );
}
