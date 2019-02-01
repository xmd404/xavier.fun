import React from 'react';
import { Link } from 'gatsby';
import Signature from '../components/signature';

const Bio = () =>
  <div className='container-fluid' style={{ padding: '0 0 35px' }}>
    <div className='container'>
      <hr/>
      <div className='row'>
        <br/>
        <div className='eight columns offset-by-two columns'>
          <h1 style={{ textAlign: 'center' }}><span id='options'>hello</span></h1>
          <br/>
          <h6 style={{ textAlign: 'left' }}>
            I'm Xavier, a Software Engineer & UX Developer currently based in Atlanta. I’m obsessed with all things JavaScript, <Link to='design'>design</Link>, <Link to='blog'>writing</Link>, and <Link to='development'>building things</Link>. Have ideas and want to create something cool? <Link to='contact'>Get in touch</Link>.
          </h6>
          <Signature />
        </div>
      </div>
    </div>
  </div>
  
export default Bio;