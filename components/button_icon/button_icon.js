import cn from "classnames";
import PropTypes from "prop-types";
import IconArrow from "../../public/images/icon_arrow.svg";
import IconPlus from "../../public/images/icon_plus.svg";

const ICONS = {
  arrow: IconArrow,
  plus: IconPlus,
};

ButtonIcon.propTypes = {
  icon: PropTypes.oneOf(["arrow", "plus"]),
  disabled: PropTypes.bool,
  "aria-label": PropTypes.string.isRequired,
  classes: PropTypes.string,
};

ButtonIcon.defaultProps = {
  icon: "arrow",
  disabled: false,
  classes: "",
};

export default function ButtonIcon({ icon, disabled, classes, ...props }) {
  const Icon = ICONS[icon] || IconArrow;

  return (
    <button
      className={cn("button_icon", classes)}
      disabled={disabled}
      type="button"
      {...props}
    >
      <Icon />
    </button>
  );
}
