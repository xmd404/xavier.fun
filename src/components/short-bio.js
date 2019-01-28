import React from 'react';
import { Link } from 'gatsby';

const ShortBio = () =>
  <div className='container-fluid'>
    <div className='container center'>
      <div className='row'>
        <hr/>
        <div className='ten columns offset-by-one column'>
          <h2><span id='options'>Hello.</span></h2>
          <h5 style={{ textAlign: 'left' }}>
            I'm Xavier, a Software Engineer & UX Developer currently based in Atlanta. I’m obsessed with all things JavaScript, <Link to='design'>design</Link>, <Link to='blog'>writing</Link>, and <a href='http://coopvision.us' target='_blank' rel='noopener noreferrer'>building great product</a>. Have ideas and want to build something cool? <Link to='contact'>Get in touch</Link>.
          </h5>
        </div>
      </div>
    </div>
  </div>

export default ShortBio;