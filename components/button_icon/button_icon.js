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
  href: PropTypes.string,
  disabled: PropTypes.bool,
  "aria-label": PropTypes.string.isRequired,
  classes: PropTypes.string,
};

ButtonIcon.defaultProps = {
  icon: "arrow",
  href: "",
  disabled: false,
  classes: "",
};

export default function ButtonIcon({ icon, href, disabled, classes, ...props }) {
  const Icon = ICONS[icon] || IconArrow;

  // With an href it renders as a link (like `Button`); otherwise a plain button.
  if (href) {
    return (
      <a
        className={cn("button_icon", { "-disabled": disabled }, classes)}
        href={disabled ? undefined : href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        {...props}
      >
        <Icon />
      </a>
    );
  }

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
