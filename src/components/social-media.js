import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const linkStyle = {
  padding: '0 0.5em',
  color: '#000',
};

const SocialMedia = () =>
  <div className='twelve columns'>
    <a href='https://twitter.com/xmd404' target='_blank' style={linkStyle}>
      <FontAwesomeIcon icon={['fab', 'twitter']} />
    </a>
    <a href='https://github.com/xmd404' target='_blank' style={linkStyle}>
      <FontAwesomeIcon icon={['fab', 'github']} />
    </a>
    <a href='https://linkedin.com/in/xduncan' target='_blank' style={linkStyle}>
      <FontAwesomeIcon icon={['fab', 'linkedin']} />
    </a>
  </div>

export default SocialMedia;