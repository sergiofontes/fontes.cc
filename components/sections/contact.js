import cn from 'classnames';

import Anchor from '../../components/anchor';

import style from './contact.module.scss';

export default function Contact() {
  return (
    <section id="contact" className={cn(style.contact, 'grid container')}>
      <h2>Contact</h2>
      <div className={cn(style.column, 'column')}>
        <p>
          <em>Email:</em>
          <a className={cn(style.lead, 'lead')} href="mailto:sergio@fontes.cc">
            sergio@fontes.cc
          </a>
        </p>
      </div>
      <span className={cn(style.divisor, 'divisor')}></span>
      <div className={cn(style.columns, 'columns')}>
        <p>I usually reply emails in no more than one business day. Say hello! </p>
        <p>
          Alternatively, you can find me on{' '}
          <Anchor
            type="linkedin"
            href="https://www.linkedin.com/in/osergiofontes/"
            target="_blank"
          >
            LinkedIn
          </Anchor>{' '}
          and{' '}
          <Anchor type="github" href="https://github.com/sergiofontes" target="_blank">
            GitHub
          </Anchor>
        </p>
      </div>
      <span className={cn(style.divisors, style.last, 'last divisors')}></span>
    </section>
  );
}
