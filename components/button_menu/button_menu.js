import cn from "classnames";
import PropTypes from "prop-types";

ButtonMenu.propTypes = {
  open: PropTypes.bool,
  disabled: PropTypes.bool,
  "aria-label": PropTypes.string.isRequired,
  classes: PropTypes.string,
};

ButtonMenu.defaultProps = {
  open: false,
  disabled: false,
  classes: "",
};

export default function ButtonMenu({ open, disabled, classes, ...props }) {
  return (
    <button
      className={cn("button_menu", { "-open": open }, classes)}
      disabled={disabled}
      type="button"
      aria-expanded={open}
      {...props}
    >
      <span />
      <span />
    </button>
  );
}
