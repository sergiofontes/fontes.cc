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
  // Links opening a new tab get the safe `rel` plus a screen-reader hint, unless
  // the caller already passes its own `rel`.
  const newTab = props.target === "_blank";

  return (
    <a
      className={cn(
        "anchor",
        {
          anchor_external: type === "external",
          anchor_social: type === "github" || type === "linkedin",
          anchor_github: type === "github",
          anchor_linkedin: type === "linkedin",
          "-inline": inline,
          "-offline": offline,
        },
        classes,
      )}
      href={href}
      rel={newTab ? "noopener noreferrer" : undefined}
      {...props}
    >
      {type === "github" && <IconGithub />}
      {type === "linkedin" && <IconLinkedin />}
      {children}
      {newTab && <span className="anchor_newtab"> (opens in a new tab)</span>}
      <span>Offline</span>
      {type === "external" && <IconArrow />}
    </a>
  );
}
