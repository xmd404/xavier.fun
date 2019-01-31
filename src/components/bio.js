import React from 'react';
import { Link } from 'gatsby';
import Signature from '../components/signature';

const FullBio = () =>
  <div className='container-fluid' style={{ padding: '0 0 35px' }}>
    <div className='container'>
      <hr/>
      <div className='row'>
        <br/>
        <div className='ten columns offset-by-one column'>
          <h1 style={{ textAlign: 'center' }}><span id='options'>Hello</span></h1>
          <br/>
          <h6 style={{ textAlign: 'left' }}>
            I'm Xavier, a Software Engineer & UX Developer currently based in Atlanta. I’m obsessed with all things JavaScript, <Link to='design'>design</Link>, <Link to='blog'>writing</Link>, and <a href='http://coopvision.us' target='_blank' rel='noopener noreferrer'>building great product</a>. Have ideas and want to build something cool? <Link to='contact'>Get in touch</Link>.
          </h6>
          <br/>
          <h6>
            <span role="img" aria-label="zapEmoji">⚡️</span>&nbsp;
              <i>
                Do Everything, See Everything. Spread Love & Share Knowledge. Move Fast. Fail Faster. Always Build Great Product.
              </i>
          </h6>
          <br/>
          <Signature />
        </div>
      </div>
    </div>
  </div>
  
export default FullBio;