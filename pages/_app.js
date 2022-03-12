import 'normalize.css/normalize.css';
import '../styles/typography.scss';
import '../styles/global.scss';
import '../styles/colors.scss';
import '../styles/grid.scss';
import '../styles/container.scss';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
