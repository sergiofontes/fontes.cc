import cn from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { useState } from "react";

import ButtonMenu from "../button_menu";
import Symbol from "../../public/images/symbol.svg";
import IconArrow from "../../public/images/icon_arrow.svg";

// Home navigation: in-page section anchors driven by react-scroll. The last
// link is spied so its arrow flips when the section is in view.
const HOME_LINKS = [
  { label: "Experience", to: "experience" },
  { label: "Traits", to: "traits" },
  { label: "Contact", to: "contact" },
  { label: "Work", to: "work", spy: true },
];

const HOME_SYMBOL = { to: "hi", offset: 0 };

Nav.propTypes = {
  // Each link is either a page link (`href`) or an in-page scroll target (`to`).
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
      href: PropTypes.string,
      spy: PropTypes.bool,
    }),
  ),
  symbol: PropTypes.shape({
    to: PropTypes.string,
    href: PropTypes.string,
    offset: PropTypes.number,
  }),
};

export default function Nav({ links = HOME_LINKS, symbol = HOME_SYMBOL }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCloseClick = () => {
    setIsOpen((value) => {
      document.body.style.overflow = value ? null : "hidden";
      return !value;
    });
  };

  const handleCloseClick = () => {
    if (!isOpen) return;
    document.body.style.overflow = null;
    setIsOpen(false);
  };

  // A page link is a normal anchor; a scroll target is a smooth react-scroll Link.
  const renderTarget = (item, children) =>
    item.href ? (
      <a href={item.href} onClick={handleCloseClick}>
        {children}
      </a>
    ) : (
      <Link
        to={item.to}
        href={`#${item.to}`}
        smooth={`easeInOutCirc`}
        offset={item.offset ?? -100}
        spy={item.spy || undefined}
        activeClass={item.spy ? "active" : undefined}
        duration={300}
        onClick={handleCloseClick}
      >
        {children}
      </Link>
    );

  return (
    <>
      <nav className={cn("nav", { open: isOpen })}>
        <ButtonMenu
          classes="nav_button"
          open={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={handleOpenCloseClick}
        />
        <div className="grid">
          <span className="divisor"></span>
          <ol className="links">
            {links.map((item, index) => (
              <li className="link" key={item.label}>
                {renderTarget(item, item.label)}
                {index === links.length - 1 && (
                  <span className="arrow">
                    <IconArrow />
                  </span>
                )}
              </li>
            ))}
          </ol>

          <small aria-hidden="hidden">Sérgio Fontes, 2022.</small>
        </div>
      </nav>

      <div className="symbol">
        {renderTarget(symbol, <Symbol aria-label="Go to homepage" />)}
      </div>
    </>
  );
}
