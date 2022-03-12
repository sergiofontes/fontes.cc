import cn from 'classnames';

import style from './testimonial.module.scss';

export default function Traits() {
  return (
    <section id="traits" className={cn(style.traits, 'grid container')}>
      <h2>Traits</h2>
      <div className={cn(style.column, 'column')}>
        <h3>Multidisciplinary</h3>
        <p>
          I love researching. I love prototyping. I love visual design. And I love
          HTML/CSS. This mixture put me in a particular situation of being a product's
          designer from day one. And, guess what, I love them all.
        </p>
      </div>
      <span className={cn(style.divisor, 'divisor')}></span>
      <div className={cn(style.column, 'column')}>
        <h3>Craftsman</h3>
        <p>
          I have a keen eye to details and can sometimes be obsessive about pursuing
          the best possible solution. But it's not only about pixels: it also matters
          to me the overall use experience and its subjectivities.
        </p>
      </div>
      <span className={cn(style.divisor, 'divisor')}></span>
      <div className={cn(style.column, 'column')}>
        <h3>Energetic</h3>
        <p>
          I'm an optimistic and energetic person. I always try to bring in my
          enthusiasm and motivation to teammates, and can elevate the people's spirit
          when needed. I can fearlessly go down the rabbit hole to overcome any
          challenge.
        </p>
      </div>
      <span className={cn(style.divisor, style.last, 'last divisor')}></span>
    </section>
  );
}
