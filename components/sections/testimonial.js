import cn from 'classnames';

import Logo from '../logos/';

import style from './testimonial.module.scss';

export default function Experience() {
  return (
    <figure id="testimonial" className={cn(style.testimonial, 'grid container')}>
      <blockquote>
        <p className="lead">
          I have been working with Sérgio for the past two years, and it’s been a great
          opportunity to see his leadership and product design expertise in action.
          He’s responsible for guiding the design team without compromising any natural
          talent from his peers, not to mention his vast experience in the design
          spectrum, always looking forward to improving the company’s design process
          and strategy. His natural skills go from CSS mastery (inspiring every
          designer to be a better coder), architectural thinking, user’s best friend,
          and meme hunter.
        </p>
      </blockquote>
      <figcaption>
        Filipe Soares
        <br />
        <small>Staff Product Designer @ VTEX</small>
        <div className={style.logo}>
          <Logo type="vtex" />
        </div>
      </figcaption>
    </figure>
  );
}
