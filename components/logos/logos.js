import LogoClearworks from '../../public/images/logos/clearworks.svg';
import LogoGuava from '../../public/images/logos/guava.svg';
import LogoPetPlate from '../../public/images/logos/petplate.svg';
import LogoStorenvy from '../../public/images/logos/storenvy.svg';
import LogoTrue from '../../public/images/logos/true.svg';
import LogoTropical from '../../public/images/logos/tropical.svg';
import LogoVtex from '../../public/images/logos/vtex.svg';

export default function Logos({ type }) {
  switch (type) {
    case 'clearworks':
      return <LogoClearworks className="logo clearworks" aria-label="Clearworks" />;
    case 'guava':
      return <LogoGuava className="logo guava" aria-label="Guava" />;
    case 'petplate':
      return <LogoPetPlate className="logo petplate" aria-label="Petplate" />;
    case 'storenvy':
      return <LogoStorenvy className="logo storenvy" aria-label="Storenvy" />;
    case 'true':
      return <LogoTrue className="logo true" aria-label="True" />;
    case 'tropical':
      return <LogoTropical className="logo tropical" aria-label="Tropical Ruby" />;
    case 'vtex':
      return <LogoVtex className="logo vtex" aria-label="Vtex" />;
  }

  return null;
}
