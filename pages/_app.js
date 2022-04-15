import 'normalize.css/normalize.css';
import '../styles/typography.scss';
import '../styles/global.scss';
import '../styles/colors.scss';
import '../styles/grid.scss';
import '../styles/content.scss';

import 'swiper/scss';
import 'swiper/scss/keyboard';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-cards';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
