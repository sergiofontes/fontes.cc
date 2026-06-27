import { Children } from "react";
import PropTypes from "prop-types";
import Image, { getImageProps } from "next/image";

import ButtonDot from "../button_dot";
import useSetupCarousel from "./use-setup-carousel";

const IMG = "/images/work/catalog"; // flat originals
const IMG_SHADOW = "/images/work/shadow/catalog"; // embedded-shadow copy

// Presentational helpers for the Solution section. Content (copy and `alt`) is authored as
// markup at the call site in `solution.js`; these only frame and size the assets.
// See AGENTS.md › Content lives in the markup.

// Flat assets; framing (mask + radius) and the drop shadow are composed in CSS. `base` selects
// the flat or embedded-shadow copy (see AGENTS.md › Images).
export function Media({ name, base = IMG, scales = [1, 2, 3], alt = "", ...rest }) {
  const max = Math.max(...scales);
  const src = `${base}/${name}${max > 1 ? `@${max}x` : ""}.png`;

  return (
    <Image className="solution_media motion_item" src={src} alt={alt} {...rest} />
  );
}

// One shared store/product card. `width`/`height` are the embedded-shadow PNG’s native size
// (declared at the call site, avoids CLS); `transform` regrows + recenters the baked silhouette.
export function Share({ name, width, height, transform, alt }) {
  return (
    <figure className="solution_frame -share">
      <Media
        name={`sharing_${name}`}
        base={IMG_SHADOW}
        width={width}
        height={height}
        sizes="(min-width: 1201px) 196px, (min-width: 768px) 156px, 116px"
        style={{ transform }}
        alt={alt}
      />
    </figure>
  );
}

// One customization phone — a fixed-size device the cell crops (placement lives in solution.scss).
// Only its mockup, intrinsic dimensions, and alt differ.
export function Phone({ name, width, height, alt }) {
  return (
    <figure className="solution_frame -phone">
      <Media
        name={name}
        base={IMG_SHADOW}
        width={width}
        height={height}
        sizes="234px"
        alt={alt}
      />
    </figure>
  );
}

// One backoffice screen; it slides within the inert panel. Only its number and alt differ.
export function SetupSlide({ n, alt }) {
  return (
    <li className="solution_slide">
      <Media
        name={`mockup_config_${n}`}
        scales={[1, 2]}
        width={1280}
        height={874}
        // Phones cap at the 1200px variant (~2.4× at the ~510px render). A 130vw render
        // at dpr 3 needs 1521px, which rounds up to the 1920px device size (~10 MB
        // decoded) — and four such slides overran iOS Safari's per-tab memory budget,
        // reloading the page. Tablet/desktop keep full density (ample memory there).
        sizes="(min-width: 1201px) 860px, (min-width: 768px) 110vw, 400px"
        alt={alt}
      />
    </li>
  );
}

// Presentational shell for the setup carousel: the inert lime panel and the dot pager.
// The screens are authored as `SetupSlide` children at the call site; behavior lives in
// `useSetupCarousel`. The dots track the child count, paging via CSS scroll-snap.
export function SetupCarousel({ note, children }) {
  const { trackRef, active, sync, goTo } = useSetupCarousel();
  const count = Children.count(children);

  return (
    <>
      {/* The lime panel stays inert; only the screens scroll within it. */}
      <figure className="solution_frame -setup motion">
        <ul
          className="solution_track carousel"
          ref={trackRef}
          tabIndex={0}
          onScroll={sync}
          aria-label="Online Catalog setup screens"
        >
          {children}
        </ul>
      </figure>

      <aside className="solution_aside content_aside -center">
        <p className="note solution_note">{note}</p>

        <div className="solution_dots" role="group" aria-label="Setup screens">
          {Array.from({ length: count }, (_, index) => (
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
export function ResponsiveDevices() {
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

Media.propTypes = {
  name: PropTypes.string.isRequired,
  base: PropTypes.string,
  scales: PropTypes.arrayOf(PropTypes.number),
  alt: PropTypes.string,
};

Share.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  transform: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

Phone.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};

SetupSlide.propTypes = {
  n: PropTypes.number.isRequired,
  alt: PropTypes.string.isRequired,
};

SetupCarousel.propTypes = {
  note: PropTypes.string.isRequired,
  // The setup screens, authored as `SetupSlide` markup at the call site.
  children: PropTypes.node,
};
