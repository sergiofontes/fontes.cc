import cn from 'classnames';

import style from './work.module.scss';

export default function Work({ children }) {
  return (
    <section id="work" className={cn(style.work, 'grid container')}>
      <h2>
        <span>(Some) </span>Work
      </h2>
      
      {children}
    </section>
  );
}
