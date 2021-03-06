import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Keyboard } from 'swiper';

import Anchor from '../../components/anchor';
import Logo from '../logos/';

import Tropical1 from '../../public/images/work/tropical_1.png';
import Tropical2 from '../../public/images/work/tropical_2.png';
import Tropical3 from '../../public/images/work/tropical_3.png';

import style from './work.module.scss';

export default function WorkPetPlate() {
  return (
    <section id="tropicalruby" className={cn(style.case, 'grid')}>
      <h3 className={cn(style.logo, style.tropical)} aria-label="TropicalRuby">
        <Logo type="tropical" />
      </h3>
      <small className={style.date}>2015</small>

      <div className={style.image}>
        <Swiper
          effect={'cards'}
          className={style.gallery}
          modules={[EffectCards, Pagination, Keyboard]}
          keyboard={{
            enabled: true
          }}
          cardsEffect={{
            slideShadows: false
          }}
          pagination={{
            dynamicBullets: true
          }}
          grabCursor={true}
        >
          <SwiperSlide className={style.swiper}>
            <Image
              src={Tropical1}
              className={style.display}
              layout="fill"
              placeholder="blur"
              alt="Tropical Ruby's home screen"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper}>
            <Image
              src={Tropical2}
              className={style.display}
              layout="fill"
              placeholder="blur"
              alt="Schedule page with outdoor activities highlighted"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper}>
            <Image
              src={Tropical3}
              className={style.display}
              layout="fill"
              placeholder="blur"
              alt="Page with the venue info"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <p>
        TropicalRuby was an original international tech conference hosted in a
        Brazilian tropical paradise. Its schedule mixed outdoor activities with
        keynotes and workshops. I designed and developed all communication & visual
        materials: a branding system, a website with schedule &amp; venue info, emails
        templates, and print assets like shirts, backdrop panels, and badges.
      </p>

      <section className={style.datasheet}>
        <aside className={style.details}>
          <h4>Activities:</h4>
          <ul>
            <li>Conference Branding &amp; Communication</li>
            <li>Website</li>
            <li>Email Templates</li>
            <li>
              <abbr title="Hypertext Markup Language">HTML</abbr>/
              <abbr title="Cascading Style Sheets">CSS</abbr>
            </li>
          </ul>
        </aside>
        <aside className={style.details}>
          <h4>Link:</h4>
          <Anchor
            href="https://tropicalrb.com"
            target="_blank"
            type="external"
            offline
          >
            TropicalRuby
          </Anchor>
        </aside>
      </section>

      <span className={cn(style.divisors, style.last, 'last divisors')}></span>
    </section>
  );
}
