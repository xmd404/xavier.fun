import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(far);

const Footer = () =>
  <footer>
    <div className="row center">
      <div className="twelve columns">
        <p>
          <a href="http://mnmlist.com/uncopyright-and-a-minimalist-mindset/" target="_blank" rel="noopener noreferrer" style={{ color: '#555' }}><u>uncopyright</u></a> &nbsp;•&nbsp; <FontAwesomeIcon icon={['far', 'hand-peace']} /> &nbsp;•&nbsp; thanks for visiting.
        </p>
      </div>
    </div>
  </footer>

export default Footer;