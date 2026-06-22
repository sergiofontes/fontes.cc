import { SpeedInsights } from '@vercel/speed-insights/next';
import { Schibsted_Grotesk, DM_Sans, Abril_Fatface } from 'next/font/google';

import 'normalize.css/normalize.css';
import '../styles/typography.scss';
import '../styles/global.scss';
import '../styles/colors.scss';
import '../styles/grid.scss';
import '../styles/content.scss';

import './index.scss';

import '../components/anchor/anchor.scss';
import '../components/button/button.scss';
import '../components/button_icon/button_icon.scss';
import '../components/button_menu/button_menu.scss';
import '../components/button_dot/button_dot.scss';
import '../components/hero/hero.scss';
import '../components/carousel/carousel.scss';
import '../components/play/play.scss';
import '../components/nav/nav.scss';
import '../components/header/header.scss';
import '../components/dust/dust.scss';
import '../components/cover/cover.scss';
import '../components/what/what.scss';
import '../components/why/why.scss';
import '../components/solution/solution.scss';
import '../components/quote/quote.scss';
import '../components/about/experience.scss';
import '../components/about/testimonial.scss';
import '../components/about/contact.scss';
import '../components/work/work.scss';
import '../components/motion/motion.scss';
import '../components/logos/logos.scss';
import '../components/footer/footer.scss';

// Self-hosted via next/font: no render-blocking Google request, automatic
// `font-display: swap`, and size-adjusted fallback metrics (less CLS). Each family
// is exposed on the CSS custom property the SCSS already consumes. Schibsted Grotesk
// and DM Sans load as variable fonts (every weight 300–900 the design uses); Abril
// Fatface ships a single 400 weight.
const fontBody = Schibsted_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  fallback: ['sans-serif'],
});
const fontTitle = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-title',
  fallback: ['sans-serif'],
});
const fontHero = Abril_Fatface({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-hero',
  fallback: ['serif'],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`fonts ${fontBody.variable} ${fontTitle.variable} ${fontHero.variable}`}>
      <Component {...pageProps} />
      <SpeedInsights />
    </div>
  );
}
