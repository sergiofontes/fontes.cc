import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';

import Anchor from '../../components/anchor';
import Logo from '../logos/';

import style from './work.module.scss';

export default function WorkPetPlate() {
  return (
    <section id="petplate" className={cn(style.case, 'grid')}>
      <h3 className={cn(style.logo, style.petplate)} aria-label="PetPlate">
        <Logo type="petplate" />
      </h3>
      <small className={style.date}>2020–2021</small>

      <div className={style.image}>
        <Swiper
          effect={'cards'}
          cardsEffect={{
            slideShadows: false,
          }}
          grabCursor={true}
          modules={[EffectCards]}
          className={style.gallery}
        >
          <SwiperSlide className={style.swiper}>
            <Image
              src="/images/work/petplate_10-7.jpg"
              className={style.display}
              layout="fill"
              alt="PetPlate's treats screen"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper}>
            <Image
              src="/images/work/petplate_10-7.jpg"
              className={style.display}
              layout="fill"
              alt="PetPlate's treats screen"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper}>
            <Image
              src="/images/work/petplate_10-7.jpg"
              className={style.display}
              layout="fill"
              alt="PetPlate's treats screen"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <p>
        PetPlate is an online delivery service that sells healthy food for dogs through
        personalized meal plans. Guava team and I helped rebrand their website and
        designed a new subscription flow, user profile, and order management. We also
        delivered a new one-off ordering flow for their functional foods. I articulated
        requirements with stakeholders, conducted usability tests with users, and
        produced new PDPs &amp; a fast checkout system. Now, customers can fulfill an
        order with only three steps and less than a minute.
      </p>

      <section className={style.datasheet}>
        <aside className={style.details}>
          <h4>Activities:</h4>
          <ul>
            <li>Design System Development</li>
            <li>Usability Testing</li>
            <li>Prototyping</li>
            <li>
              <abbr title="Hypertext Markup Language">HTML</abbr>/
              <abbr title="Cascading Style Sheets">CSS</abbr>
            </li>
          </ul>
        </aside>
        <aside className={style.details}>
          <h4>Designers:</h4>
          <ul>
            <li>Sérgio Fontes</li>
            <li>Renata Motta</li>
            <li>Nathália Moura</li>
            <li>Filipe Soares</li>
            <li>Fanny Chien</li>
          </ul>
        </aside>
        <aside className={style.details}>
          <h4>Link:</h4>
          <Anchor href="https://petplate.com" target="_blank" type="external">
            PetPlate
          </Anchor>
        </aside>
      </section>

      <span className={cn(style.divisors, style.last, 'last divisors')}></span>
    </section>
  );
}
