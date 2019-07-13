import React from 'react';
import { Link } from 'gatsby';

import headshot from '../images/xavier_duncan_headshot.png';
import SocialMedia from '../components/social-media';

const divStyle = {
  padding: '4.0em 0 1.5em',
};

const linkStyle = {
  color: '#000',
};

const headshotStyle = {
  padding: '0 0 15px',
  maxWidth: '215px',
  borderRadius:'50%',
  width: '100%',
};

const Header = () =>
  <div className='container-fluid' style={divStyle}>
    <div className='container'>
      <div className="row center">
        <Link to='/' style={linkStyle}>
          <img 
            src={headshot}
            alt='Headshot of Xavier Duncan'
            style={headshotStyle}
          />
          <h6><b>Xavier Marcus Duncan</b> &nbsp; | &nbsp; Software Engineer</h6>
        </Link>
        <SocialMedia />
      </div>
    </div>
  </div>

export default Header;