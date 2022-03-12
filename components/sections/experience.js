import cn from 'classnames';

import LogoClearworks from '../../public/images/logos/clearworks.svg';
import LogoGuava from '../../public/images/logos/guava.svg';
import LogoPetPlate from '../../public/images/logos/petplate.svg';
import LogoStorenvy from '../../public/images/logos/storenvy.svg';
import LogoTrue from '../../public/images/logos/true.svg';
import LogoVtex from '../../public/images/logos/vtex.svg';

import style from './experience.module.scss';

export default function Experience() {
  return (
    <section id="experience" className={cn(style.experience, 'grid container')}>
      <h2>Experience</h2>
      <div className={cn(style.column, 'column')}>
        <p>
          I'm Sérgio, a daydreamer, designer &amp; enthusiast about great products.
          Currently, I'm <em>Staff Product Designer</em> at{' '}
          <a href="https://vtex.com" target="_blank">
            VTEX
          </a>
          , helping shape the present and future of worldwide commerce by building a
          cutting-edge framework for stores and developers.
        </p>
      </div>
      <ul className={style.logo}>
        <li className={style.vtex} aria-label="VTEX">
          <LogoVtex />
        </li>
      </ul>
      <span className={cn(style.divisor, 'divisor')}></span>
      <div className={cn(style.columns, 'columns')}>
        <p>
          Previously, as{' '}
          <a href="https://guava.software" target="_blank">
            Guava
          </a>
          's <em>Lead Designer</em>, I've helped envision and execute a design
          strategy; fostered the design culture; and grew and trained the designers'
          squad—from an army of one to a diverse and tightly-knit team of six people.
        </p>
        <p>
          During my{' '}
          <a href="https://guava.software" target="_blank">
            Guava
          </a>{' '}
          years, as a <em>Consultant Designer</em>, I've collaborated with more than 18
          clients—small and mid companies from the USA and Brazil—revamping their
          digital products' user experience to transform their business.
        </p>
      </div>
      <ul className={style.logos} aria-label="Companies I've collaborated with">
        <li className={style.guava} aria-label="Guava">
          <LogoGuava />
        </li>
        <li className={style.petplate} aria-label="PetPlate">
          <LogoPetPlate />
        </li>
        <li className={style.clearworks} aria-label="Clearworks">
          <LogoClearworks />
        </li>
        <li className={style.storenvy} aria-label="Storenvy">
          <LogoStorenvy />
        </li>
        <li className={style.true} aria-label="True">
          <LogoTrue />
        </li>
      </ul>
      <span className={cn(style.divisors, style.last, 'last divisors')}></span>
    </section>
  );
}
