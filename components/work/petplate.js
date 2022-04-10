import React from 'react';
import cn from 'classnames';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Pagination, Keyboard } from 'swiper';

import Anchor from '../../components/anchor';
import Logo from '../logos/';

import PetPlate1 from '../../public/images/work/petplate_1.png'
import PetPlate2 from '../../public/images/work/petplate_2.png'
import PetPlate3 from '../../public/images/work/petplate_3.png'
import PetPlate4 from '../../public/images/work/petplate_4.png'

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
          className={style.gallery}
          modules={[EffectCards, Pagination, Keyboard]}
          keyboard={{
            enabled: true,
          }}
          cardsEffect={{
            slideShadows: false,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          grabCursor={true}
        >
          <SwiperSlide className={style.swiper}>
            <Image
              src={PetPlate1}
              className={style.display}
              layout="fill"
              placeholder="blur"
              alt="Product display page of the 4-pack treats"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper}>
            <Image
              src={PetPlate2}
              className={style.display}
              layout="fill"
              placeholder="blur"
              alt="Overlay with mere three inputs for signing in, showcasing a seamless checkout process"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper}>
            <Image
              src={PetPlate3}
              className={style.display}
              layout="fill"
              placeholder="blur"
              alt="Overlay with two payment options: Apple Pay or credit card; a user can add/remove treats at this process if they want to"
            />
          </SwiperSlide>
          <SwiperSlide className={style.swiper}>
            <Image
              src={PetPlate4}
              className={style.display}
              layout="fill"
              placeholder="blur"
              alt="Final overlay with order confirmation info"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <p>
        PetPlate is an online delivery service that sells healthy food for dogs through
        personalized meal plans. Guava team and I helped rebrand their website and
        designed a new subscription flow, user profile, and order management. We also
        delivered a new one-off ordering flow for their functional foods. I designed
        and produced new PDPs &amp; a fast checkout system by articulating requirements
        with stakeholders, prototyping ideas, conducting usability tests with users, and
        coding the front-end components. Now, customers can fulfill an order with only three
        steps and in less than a minute.
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
