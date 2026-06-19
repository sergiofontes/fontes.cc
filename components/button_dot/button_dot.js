import cn from "classnames";
import PropTypes from "prop-types";

ButtonDot.propTypes = {
  active: PropTypes.bool,
  "aria-label": PropTypes.string.isRequired,
  classes: PropTypes.string,
};

ButtonDot.defaultProps = {
  active: false,
  classes: "",
};

export default function ButtonDot({ active, classes, ...props }) {
  return (
    <button
      className={cn("button_dot", { "-active": active }, classes)}
      type="button"
      {...props}
    >
    </button>
  );
}
