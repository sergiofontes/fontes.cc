import cn from 'classnames';

import Anchor from '../../components/anchor';

import style from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={cn(style.footer, 'grid container')}>
      <div>
        <small>Sérgio Fontes, 2022. Copy, design &amp; code by me. </small>
        <small>
          No cookies, no tracking, just the beauty of HTML &amp; CSS (shh, there's some
          JS too).
        </small>
      </div>
      <div>
        <small>
          Designed with{' '}
          <Anchor href="https://figma.com" target="_blank">
            Figma
          </Anchor>{' '}
          using{' '}
          <Anchor href="https://fonts.google.com/specimen/DM+Sans" target="_blank">
            DM Sans
          </Anchor>
          ,{' '}
          <Anchor
            href="https://fonts.google.com/specimen/IBM+Plex+Sans"
            target="_blank"
          >
            IBM Plex Sans
          </Anchor>
          , and{' '}
          <Anchor
            href="https://fonts.google.com/specimen/Playfair+Display"
            target="_blank"
          >
            Playfair Display
          </Anchor>
          .{' '}
        </small>
        <small>
          Built with{' '}
          <Anchor href="https://nextjs.org/" target="_blank">
            Next.js
          </Anchor>{' '}
          and hosted at{' '}
          <Anchor href="https://vercel.com/" target="_blank">
            Vercel
          </Anchor>
          .{' '}
        </small>
        <small>
          Check the source at{' '}
          <Anchor href="https://github.com/sergiofontes/fontes.cc/" target="_blank">
            GitHub
          </Anchor>
          .
        </small>
      </div>
    </footer>
  );
}
