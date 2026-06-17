import LogoClearworks from '../../public/images/logos/clearworks.svg';
import LogoGuava from '../../public/images/logos/guava.svg';
import LogoPetPlate from '../../public/images/logos/petplate.svg';
import LogoStone from '../../public/images/logos/stone.svg';
import LogoStorenvy from '../../public/images/logos/storenvy.svg';
import LogoTrue from '../../public/images/logos/true.svg';
import LogoTropical from '../../public/images/logos/tropical.svg';
import LogoVtex from '../../public/images/logos/vtex.svg';

export default function Logos({ type }) {
  switch (type) {
    case 'clearworks':
      return <LogoClearworks className="logo logo_clearworks" role="img" aria-label="Clearworks" />;
    case 'guava':
      return <LogoGuava className="logo logo_guava" role="img" aria-label="Guava" />;
    case 'petplate':
      return <LogoPetPlate className="logo logo_petplate" role="img" aria-label="PetPlate" />;
    case 'stone':
      return <LogoStone className="logo logo_stone" role="img" aria-label="Stone" />;
    case 'storenvy':
      return <LogoStorenvy className="logo logo_storenvy" role="img" aria-label="Storenvy" />;
    case 'true':
      return <LogoTrue className="logo logo_true" role="img" aria-label="True" />;
    case 'tropical':
      return <LogoTropical className="logo logo_tropical" role="img" aria-label="Tropical Ruby" />;
    case 'vtex':
      return <LogoVtex className="logo logo_vtex" role="img" aria-label="VTEX" />;
  }

  return null;
}
