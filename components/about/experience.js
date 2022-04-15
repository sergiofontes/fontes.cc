import cn from 'classnames';

import Logo from '../logos/';

import style from './experience.module.scss';

export default function Experience() {
  return (
    <section id="experience" className={cn(style.experience, 'grid content')}>
      <h2>Experience</h2>
      <div className={cn(style.column, 'column')}>
        <p>
          I’m a daydreamer, designer &amp; enthusiast about great products. Currently,
          I’m <em>Staff Product Designer</em> at{' '}
          <a href="https://vtex.com" target="_blank">
            VTEX
          </a>
          , helping shape the present &amp; future of worldwide commerce by building a
          cutting-edge framework for stores and developers.
        </p>
      </div>
      <ul className={style.logo}>
        <li className={style.vtex} aria-label="VTEX">
          <Logo type="vtex" />
        </li>
      </ul>
      <span className={cn(style.divisor, 'divisor')}></span>
      <div className={cn(style.columns, 'columns')}>
        <p>
          Previously, as{' '}
          <a href="https://guava.software" target="_blank">
            Guava
          </a>
          ’s <em>Lead Designer</em>, I’ve helped envision and execute a design
          strategy; fostered the design culture; and hired and grew the designers’
          squad—from an army of one to a diverse and tightly-knit team of six people.
        </p>
        <p>
          During my{' '}
          <a href="https://guava.software" target="_blank">
            Guava
          </a>{' '}
          years, I’ve collaborated with more than 18 clients—small and mid companies
          from the USA and Brazil, in all kinds of industries—revamping their digital
          products’ user experience to transform their business.
        </p>
      </div>
      <ul className={style.logos} aria-label="Companies I've collaborated with">
        <li className={style.guava} aria-label="Guava">
          <Logo type="guava" />
        </li>
        <li className={style.petplate} aria-label="PetPlate">
          <Logo type="petplate" />
        </li>
        <li className={style.clearworks} aria-label="Clearworks">
          <Logo type="clearworks" />
        </li>
        <li className={style.storenvy} aria-label="Storenvy">
          <Logo type="storenvy" />
        </li>
        <li className={style.true} aria-label="True">
          <Logo type="true" />
        </li>
      </ul>
      <span className={cn(style.divisors, style.last, 'last divisors')}></span>
    </section>
  );
}
