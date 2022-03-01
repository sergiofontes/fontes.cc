import cn from 'classnames';
import PropTypes from 'prop-types';

import IconArrow from '../../public/images/arrow.svg';
import IconGithub from '../../public/images/logos/github.svg';
import IconLinkedin from '../../public/images/logos/linkedin.svg';

import style from './anchor.module.scss';

Anchor.propTypes = {
  type: PropTypes.oneOf(['external', 'github', 'linkedin']),
  inline: PropTypes.bool,
  classes: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Anchor.defaultProps = {
  type: 'external',
  inline: false,
  classes: '',
  href: '',
  children: '',
  onClick: undefined,
};

export default function Anchor({ type, inline, classes, href, children, ...props }) {
  return (
    <a
      className={cn(
        style.anchor,
        {
          [style.external]: type === 'external',
          [style.social]: type === 'github' || 'linkedin',
          [style.github]: type === 'github',
          [style.linkedin]: type === 'linkedin',
          [style.inline]: inline,
        },
        classes
      )}
      href={href}
      {...props}
    >
      {type === 'github' && <IconGithub />}
      {type === 'linkedin' && <IconLinkedin />}
      {children}
      {type === 'external' && <IconArrow />}
    </a>
  );
}
