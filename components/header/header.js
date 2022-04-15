import cn from 'classnames';
import Typewriter from 'typewriter-effect';

import style from './header.module.scss';

export default function Header() {
  return (
    <header id="hi" className={style.header}>
      <section className={cn(style.title, 'grid content')}>
        <h1 aria-label="Product, U.X., Digital Designer">
          <b>
            <Typewriter
              options={{
                strings: ['Product', 'U.X.', 'Digital', 'Interaction'],
                autoStart: true,
                loop: true,
                pauseFor: 1750,
              }}
            />
          </b>
          Designer
        </h1>
      </section>
      <section id="intro" className={cn(style.intro, 'grid content')}>
        <h2>Intro</h2>
        <div className={cn(style.column, 'column')}>
          <p className={cn(style.lead, 'lead')}>
            Hi, I’m<i></i> Sérgio Fontes.
          </p>
        </div>
        <div className={cn(style.columns, 'columns')}>
          <p>I’m a Brazilian digital designer with 12+ years of experience. </p>
          <p>I help companies design, build, and validate digital products.</p>
        </div>
        <span className={cn(style.divisors, style.last, 'last divisors')}></span>
      </section>
    </header>
  );
}
