import cn from "classnames";
import PropTypes from "prop-types";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

import ButtonMenu from "../button_menu";
import Symbol from "../../public/images/symbol.svg";
import IconArrow from "../../public/images/icon_arrow.svg";
import IconChevron from "../../public/images/icon_chevron.svg";

// Home navigation: in-page section anchors driven by react-scroll. The last
// link is spied so its arrow flips when the section is in view.
const HOME_LINKS = [
  { label: "Experience", to: "experience" },
  { label: "Work", to: "work" },
  { label: "Contact", to: "contact" },
  { label: "Traits", to: "traits", spy: true },
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
  const [atSpied, setAtSpied] = useState(false);

  // The last link is "spied": its arrow flips once you reach its section.
  // react-scroll's positional spy can't activate a short final section (it never
  // scrolls high enough to enter the active zone), so track the section directly —
  // active once its top crosses the viewport midpoint, or the page hits the end.
  const spied = links.find((item) => item.spy);
  useEffect(() => {
    const target = spied?.to && document.getElementById(spied.to);
    if (!target) return undefined;

    let frame = 0;
    const update = () => {
      frame = 0;
      const { top, bottom } = target.getBoundingClientRect();
      const atBottom =
        Math.ceil(window.scrollY + window.innerHeight) >=
        document.documentElement.scrollHeight - 1;
      setAtSpied(bottom > 0 && (top <= window.innerHeight / 2 || atBottom));
    };
    const onScroll = () => {
      frame ||= requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [spied?.to]);

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
        className={item.spy && atSpied ? "-active" : undefined}
        duration={300}
        onClick={handleCloseClick}
      >
        {children}
      </Link>
    );

  return (
    <>
      <nav className={cn("nav", { "-open": isOpen })}>
        <ButtonMenu
          classes="nav_button"
          open={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={handleOpenCloseClick}
        />
        <div className="grid">
          <span className="nav_divisor"></span>
          <ol className="nav_links">
            {links.map((item, index) => (
              <li
                className={cn("nav_link", { "-back": item.href })}
                key={item.label}
              >
                {renderTarget(
                  item,
                  item.href ? (
                    <>
                      <span className="nav_back" aria-hidden="true">
                        <IconChevron />
                      </span>
                      {item.label}
                    </>
                  ) : (
                    item.label
                  ),
                )}
                {index === links.length - 1 && (
                  <span className="nav_arrow">
                    <IconArrow />
                  </span>
                )}
              </li>
            ))}
          </ol>

          <small aria-hidden="true">Sérgio Fontes, 2026.</small>
        </div>
      </nav>

      <div className="nav_symbol">
        {renderTarget(
          symbol,
          <Symbol role="img" aria-label="Go to homepage" />,
        )}
      </div>
    </>
  );
}
