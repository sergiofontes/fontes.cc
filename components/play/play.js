import PropTypes from "prop-types";
import cn from "classnames";

import PlayIcon from "../../public/images/icon_play.svg";

// Decorative play badge; the surrounding `.video` link carries the accessible name.
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
