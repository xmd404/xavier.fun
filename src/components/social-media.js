import React from 'react';

const linkStyle = {
  padding: '0 0.5em',
  color: '#000',
};

const SocialMedia = () =>
  <div className='twelve columns'>
    <a href='https://twitter.com/xmd404' target='_blank' style={linkStyle}>
      twitter
    </a>
    <a href='https://github.com/xmd404' target='_blank' style={linkStyle}>
      github
    </a>
    <a href='https://linkedin.com/in/xduncan' target='_blank' style={linkStyle}>
      linkedin
    </a>
  </div>

export default SocialMedia;