import React from 'react';
import { Link } from 'gatsby';

import Headshot from '../images/xavier_duncan_headshot.png';
import SocialMedia from '../components/social-media';

const Header = () =>
  <div className='container-fluid' style={{ padding: '3.5em 0 1.5em' }}>
    <div className='container'>
      <div className="row center">
        <Link to='/' style={{ color: '#000' }}>
          <img 
            src={ Headshot }
            alt='Headshot of Xavier Duncan'
            width='100%'
            style={{ padding:'0 0 15px', maxWidth:'500px' }}
          />
          <h6><b>xavier duncan</b> &nbsp; | &nbsp; web developer</h6>
        </Link>
        <SocialMedia />
      </div>
    </div>
  </div>

export default Header;