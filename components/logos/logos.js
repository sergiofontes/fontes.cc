import cn from 'classnames';

import LogoClearworks from '../../public/images/logos/clearworks.svg';
import LogoGuava from '../../public/images/logos/guava.svg';
import LogoPetPlate from '../../public/images/logos/petplate.svg';
import LogoStorenvy from '../../public/images/logos/storenvy.svg';
import LogoTrue from '../../public/images/logos/true.svg';
import LogoTropical from '../../public/images/logos/tropical.svg';
import LogoVtex from '../../public/images/logos/vtex.svg';

import style from './logos.module.scss';

export default function Logos({ type }) {
  switch (type) {
    case 'clearworks':
      return <LogoClearworks className={cn(style.logo, style.clearworks)} aria-label="Clearworks" />;
    case 'guava':
      return <LogoGuava className={cn(style.logo, style.guava)} aria-label="Guava" />;
    case 'petplate':
      return <LogoPetPlate className={cn(style.logo, style.petplate)} aria-label="Petplate" />;
    case 'storenvy':
      return <LogoStorenvy className={cn(style.logo, style.storenvy)} aria-label="Storenvy" />;
    case 'true':
      return <LogoTrue className={cn(style.logo, style.true)} aria-label="True" />;
    case 'tropical':
      return <LogoTropical className={cn(style.logo, style.tropical)} aria-label="Tropical Ruby" />;
    case 'vtex':
      return <LogoVtex className={cn(style.logo, style.vtex)} aria-label="Vtex" />;
  }

  return null;
}
