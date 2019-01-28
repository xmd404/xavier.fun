import React from 'react';
import { Link } from 'gatsby';

import welcomeImage from '../images/modernjs.png';

const Welcome = () =>
  <div className="container-fluid" style={{ padding: '34px 0 20px' }}>
    <div className="container">
      <div className="row center slide">
        <div className="six columns offset-by-three columns">
          <img 
            src={ welcomeImage }
            alt="The Modern Web"
            width="85%"
            height="auto"
            style={{ padding:'0 0 10px', maxWidth:'312px' }} />
        </div>
      </div>
      <div className="row center">
        <div className="twelve columns">
          <h2>Websites for the modern web.</h2>
        </div>
        <div className="ten columns offset-by-one column">
          <h5>User Friendly. Light weight. Responsive. Crafted with <span role='img' aria-label='zap emoji'>⚡️</span> for the modern web. Let's build something amazing.</h5>
          <Link to="contact" className="btn btn-green" style={{ margin: '1%' }}><span role='img' aria-label='flame emoji'>🔥</span> &nbsp; Get Started </Link>
        </div>
      </div>
    </div>
  </div>

export default Welcome;