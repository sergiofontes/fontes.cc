import 'normalize.css/normalize.css';
import '../styles/typography.scss';
import '../styles/global.scss';
import '../styles/colors.scss';
import '../styles/grid.scss';
import '../styles/container.scss';

import 'swiper/scss';
import 'swiper/scss/keyboard';
import 'swiper/scss/effect-cards';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
