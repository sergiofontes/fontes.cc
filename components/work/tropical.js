import cn from 'classnames';
import Image from 'next/image';

import Anchor from '../../components/anchor';
import Logo from '../logos/';

import style from './work.module.scss';

export default function WorkPetPlate() {
  return (
    <section id="tropicalruby" className={cn(style.case, 'grid')}>
      <h3 className={cn(style.logo, style.tropical)} aria-label="TropicalRuby">
        <Logo type="tropical" />
      </h3>
      <small className={style.date}>2015</small>
      <div className={style.image}>
        <Image
          src="/images/work/tropical_10-7.jpg"
          className={style.display}
          layout="fill"
          alt="Tropical Ruby's home screen"
        />
      </div>
      <p>
        TropicalRuby was an original international tech conference hosted in a
        Brazilian tropical paradise. It blended outdoor activities with keynotes and
        workshops. I designed and developed all communication & visual materials: a
        branding system, a website with schedule &amp; venue info, emails templates,
        and print assets like shirts, backdrop panels, and badges.
      </p>
      <Anchor href="https://tropicalrb.com" target="_blank" type="external">
        TropicalRuby
      </Anchor>
    </section>
  );
}
