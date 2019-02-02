import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const SocialMedia = () =>
  <div className='twelve columns'>
    <a href='https://twitter.com/xmd404' target='_blank'>
      <FontAwesomeIcon className='fa-footer' icon={['fab', 'twitter']} />
    </a>
    <a href='https://medium.com/@xmd404' target='_blank'>
      <FontAwesomeIcon className='fa-footer' icon={['fab', 'medium']} />
    </a>
    <a href='https://instagram.com/xmd404' target='_blank'>
      <FontAwesomeIcon className='fa-footer' icon={['fab', 'instagram']} />
    </a>
    <a href='https://linkedin.com/in/xduncan' target='_blank'>
      <FontAwesomeIcon className='fa-footer' icon={['fab', 'linkedin']} />
    </a>
    <a href='https://github.com/xmd404' target='_blank'>
      <FontAwesomeIcon className='fa-footer' icon={['fab', 'github']} />
    </a>
  </div>

export default SocialMedia;