import PropTypes from "prop-types";
import cn from "classnames";

import PlayIcon from "../../public/images/icon_play.svg";

// The centered play badge over a video thumbnail. Decorative — the surrounding
// `.video` link carries the accessible name — so it forwards any extra `classes`
// and stays `aria-hidden`.
export default function Play({ classes }) {
  return (
    <span className={cn("play", classes)} aria-hidden="true">
      <PlayIcon />
    </span>
  );
}

Play.propTypes = {
  classes: PropTypes.string,
};
