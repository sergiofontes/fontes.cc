import cn from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Symbol from '../public/images/symbol.svg';
import IconArrow from '../public/images/arrow.svg';

import style from './nav.module.scss';

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

  return (
    <>
      <nav className={cn({ [style.nav]: true, [style.open]: isOpen })}>
        <button className={style.button} open={isOpen} onClick={handleOpenCloseClick}>
          <span>Toggle menu</span>
        </button>
        <div className={cn(style.grid, 'grid')}>
          <span className={style.divisor}></span>
          <ol>
            <li>
              <Link href="#experience">
                <a onClick={handleOpenCloseClick}>Experience</a>
              </Link>
            </li>
            <li>
              <Link href="#traits">
                <a onClick={handleOpenCloseClick}>Traits</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a onClick={handleOpenCloseClick}>Contact</a>
              </Link>
            </li>
            <li>
              <Link href="#work">
                <a onClick={handleOpenCloseClick}>Work</a>
              </Link>
            </li>
          </ol>

          <IconArrow className={style.arrow} />
          <small>Sérgio Fontes, 2022.</small>
        </div>
      </nav>

      <Link href="#">
        <a className={style.symbol} aria-label="Go to homepage">
          <Symbol />
        </a>
      </Link>
    </>
  );
}
