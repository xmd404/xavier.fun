import React from 'react';

import headshot from '../images/xavier_duncan_headshot.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fab, far);

const AboutHeader = () =>
  <div className='container-fluid' style={{ padding: '3.5em 0 1.5em' }}>
    <div className='container'>
      <div className="row center">
        <img 
          src={ headshot }
          alt='Headshot of Xavier Duncan'
          width='100%'
          style={{ padding:'0 0 15px', maxWidth:'500px' }}
        />
        <h6><b>xavier duncan</b> &nbsp; | &nbsp; web developer</h6>
        <div className="twelve columns slide">
          <a href="https://twitter.com/theWebsiteKid" target="_blank">
            <FontAwesomeIcon className='fa-footer' icon={['fab', 'twitter']} />
          </a>
          <a href="https://instagram.com/cooperative.vision" target="_blank">
            <FontAwesomeIcon className='fa-footer' icon={['fab', 'instagram']} />
          </a>
          <a href="https://www.linkedin.com/in/xduncan" target="_blank">
            <FontAwesomeIcon className='fa-footer' icon={['fab', 'linkedin']} />
          </a>
          <a href="https://medium.com/@theWebsiteKid" target="_blank">
            <FontAwesomeIcon className='fa-footer' icon={['fab', 'medium']} />
          </a>
          <a href="https://github.com/xduncan" target="_blank">
            <FontAwesomeIcon className='fa-footer' icon={['fab', 'github']} />
          </a>
        </div>
      </div>
    </div>
  </div>

export default AboutHeader;