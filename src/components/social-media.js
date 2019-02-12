import React from 'react';

const inlineText = {
  display: 'inline',
  padding: '0 0.25em',
  color: '#D5D5D5',
};

const SocialMedia = () =>
  <div className='twelve columns'style={inlineText}>
    <a href='https://twitter.com/xmd404' target='_blank'>
      twitter
    </a>
    <a href='https://github.com/xmd404' target='_blank'>
      github
    </a>
    <a href='https://linkedin.com/in/xduncan' target='_blank'>
      linkedin
    </a>
  </div>

export default SocialMedia;