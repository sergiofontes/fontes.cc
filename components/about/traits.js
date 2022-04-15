import cn from 'classnames';

import style from './traits.module.scss';

export default function Traits() {
  return (
    <section id="traits" className={cn(style.traits, 'grid content')}>
      <h2>Traits</h2>
      <div className={cn(style.column, 'column')}>
        <h3>Multidisciplinary</h3>
        <p>
          I’m a multifaceted designer who loves having ownership across the
          product experience: from researching &amp; problem framing, passing through
          prototyping &amp; validation, to visual design—even{' '}
          <abbr title="Hypertext Markup Language">HTML</abbr>/
          <abbr title="Cascading Style Sheets">CSS</abbr>.
        </p>
      </div>
      <span className={cn(style.divisor, 'divisor')}></span>
      <div className={cn(style.column, 'column')}>
        <h3>Craftsman</h3>
        <p>
          I have a keen eye to details and can sometimes be obsessive about pursuing
          the best possible solution. But it’s not only about pixels: it also matters
          to me the overall use experience and its subjectivities.
        </p>
      </div>
      <span className={cn(style.divisor, 'divisor')}></span>
      <div className={cn(style.column, 'column')}>
        <h3>Energetic</h3>
        <p>
          I'm an energetic person, and always try to bring in my
          enthusiasm and motivation to teammates. I can fearlessly go down the rabbit hole
          whenever a challenge catches my attention.
        </p>
      </div>
      <span className={cn(style.divisor, style.last, 'last divisor')}></span>
    </section>
  );
}