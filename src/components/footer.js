import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);

const Footer = () =>
  <footer>
    <div className="row center">
      <div className="twelve columns">
        <h6>
          <b>xavier duncan</b> &nbsp; | &nbsp; web developer
        </h6>
        <h6>
          <a href="http://mnmlist.com/uncopyright-and-a-minimalist-mindset/" target="_blank" style={{ color: '#555' }}><u>uncopyright</u></a> &nbsp;•&nbsp; <FontAwesomeIcon icon={['far', 'hand-peace']} /> &nbsp;•&nbsp; thanks for visiting.
        </h6>
      </div>
    </div>
  </footer>

export default Footer;