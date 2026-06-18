import Anchor from '../../components/anchor';

export default function Footer() {
  return (
    <footer className="footer grid content">
      <div>
        <small>Sérgio Fontes, 2026. Copy, design &amp; code by me. </small>
        <small>
          No cookies, no tracking, just the beauty of HTML, CSS &amp; some JS.
        </small>
      </div>
      <div>
        <small>
          Designed with{' '}
          <Anchor href="https://figma.com" target="_blank">
            Figma
          </Anchor>{' '}
          using{' '}
          <Anchor href="https://fonts.google.com/specimen/Schibsted+Grotesk" target="_blank">
            Schibsted Grotesk
          </Anchor>
          ,{' '}
          <Anchor href="https://fonts.google.com/specimen/DM+Sans" target="_blank">
            DM Sans
          </Anchor>
          ,{' '}
          <Anchor
            href="https://fonts.google.com/specimen/Abril+Fatface"
            target="_blank"
          >
            Abril Fatface
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
          . Check the source at{' '}
          <Anchor href="https://github.com/sergiofontes/fontes.cc/" target="_blank">
            GitHub
          </Anchor>
          .
        </small>
      </div>
    </footer>
  );
}
