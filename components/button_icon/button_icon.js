import cn from "classnames";
import PropTypes from "prop-types";
import IconArrow from "../../public/images/icon_arrow.svg";

ButtonIcon.propTypes = {
  disabled: PropTypes.bool,
  "aria-label": PropTypes.string.isRequired,
  classes: PropTypes.string,
};

ButtonIcon.defaultProps = {
  disabled: false,
  classes: "",
};

export default function ButtonIcon({ disabled, classes, ...props }) {
  return (
    <button
      className={cn("button_icon", classes)}
      disabled={disabled}
      type="button"
      {...props}
    >
      <IconArrow />
    </button>
  );
}
