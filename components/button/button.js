import cn from "classnames";
import PropTypes from "prop-types";
import IconArrow from "../../public/images/icon_arrow.svg";

Button.propTypes = {
  href: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  disabled: PropTypes.bool,
  classes: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  href: "",
  size: "small",
  disabled: false,
  classes: "",
};

export default function Button({ href, size, disabled, classes, children, ...props }) {
  return (
    <a
      className={cn(
        "button",
        { "-medium": size === "medium", "-disabled": disabled },
        classes,
      )}
      href={disabled ? undefined : href}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      {...props}
    >
      {children}
      <IconArrow />
    </a>
  );
}
