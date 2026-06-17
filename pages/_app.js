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
import '../components/nav/nav.scss';
import '../components/header/header.scss';
import '../components/cover/cover.scss';
import '../components/what/what.scss';
import '../components/why/why.scss';
import '../components/solution/solution.scss';
import '../components/quote/quote.scss';
import '../components/about/experience.scss';
import '../components/about/testimonial.scss';
import '../components/about/contact.scss';
import '../components/work/work.scss';
import '../components/logos/logos.scss';
import '../components/footer/footer.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
