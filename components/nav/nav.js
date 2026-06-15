import cn from 'classnames';
import { Link, animateScroll as scroll } from 'react-scroll';
import { useState } from 'react';

import Symbol from '../../public/images/symbol.svg';
import IconArrow from '../../public/images/arrow.svg';

export default function Nav({ onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenCloseClick = () => {
    setIsOpen((value) => {
      if (!value) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = null;
      }

      return !value;
    });
  };

  const handleCloseClick = () => {
    setIsOpen((value) => {
      if (value) {
        document.body.style.overflow = null;
      } else {
        return value;
      }
    });
  };

  return (
    <>
      <nav className={cn('nav', { open: isOpen })}>
        <button className="button" open={isOpen} onClick={handleOpenCloseClick}>
          <span>Toggle menu</span>
          <i></i>
          <i></i>
        </button>
        <div className="grid">
          <span className="divisor"></span>
          <ol className="links">
            <li className="link">
              <Link
                to="experience"
                href="#experience"
                smooth={`easeInOutCirc`}
                offset={-100}
                spy={true}
                duration={300}
                onClick={handleCloseClick}
              >
                Experience
              </Link>
            </li>
            <li className="link">
              <Link
                to="traits"
                href="#traits"
                smooth={`easeInOutCirc`}
                offset={-100}
                spy={true}
                duration={300}
                onClick={handleCloseClick}
              >
                Traits
              </Link>
            </li>
            <li className="link">
              <Link
                to="contact"
                href="#contact"
                smooth={`easeInOutCirc`}
                offset={-100}
                spy={true}
                duration={300}
                onClick={handleCloseClick}
              >
                Contact
              </Link>
            </li>
            <li className="link">
              <Link
                activeClass="active"
                to="work"
                href="#work"
                smooth={`easeInOutCirc`}
                offset={-100}
                spy={true}
                duration={300}
                onClick={handleCloseClick}
              >
                Work
              </Link>
              <span className="arrow">
                <IconArrow />
              </span>
            </li>
          </ol>

          <small aria-hidden="hidden">Sérgio Fontes, 2022.</small>
        </div>
      </nav>

      <div className="symbol">
        <Link
          to="hi"
          href="#hi"
          smooth={`easeInOutCirc`}
          offset={0}
          duration={300}
          onClick={handleCloseClick}
        >
          <Symbol aria-label="Go to homepage" />
        </Link>
      </div>
    </>
  );
}
