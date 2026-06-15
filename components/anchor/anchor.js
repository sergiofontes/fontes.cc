import cn from "classnames";
import PropTypes from "prop-types";

import IconArrow from "../../public/images/icon_arrow.svg";
import IconGithub from "../../public/images/logos/github.svg";
import IconLinkedin from "../../public/images/logos/linkedin.svg";

Anchor.propTypes = {
  type: PropTypes.oneOf(["default", "external", "github", "linkedin"]),
  inline: PropTypes.bool,
  offline: PropTypes.bool,
  classes: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Anchor.defaultProps = {
  type: "default",
  inline: false,
  offline: false,
  classes: "",
  href: "",
  children: "",
  onClick: undefined,
};

export default function Anchor({
  type,
  inline,
  offline,
  classes,
  href,
  children,
  ...props
}) {
  return (
    <a
      className={cn(
        "anchor",
        {
          external: type === "external",
          social: type === "github" || type === "linkedin",
          github: type === "github",
          linkedin: type === "linkedin",
          inline: inline,
          offline: offline,
        },
        classes,
      )}
      href={href}
      {...props}
    >
      {type === "github" && <IconGithub />}
      {type === "linkedin" && <IconLinkedin />}
      {children}
      <span>Offline</span>
      {type === "external" && <IconArrow />}
    </a>
  );
}
