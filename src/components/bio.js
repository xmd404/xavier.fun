import React from 'react';
import { Link } from 'gatsby';
import Signature from '../components/signature';

const divStyle = {
  padding: '0 0 35px',
};

const leftAlign = {
  textAlig: 'left',
}

const Bio = () =>
  <div className='container-fluid' style={divStyle}>
    <div className='container'>
      <hr/>
      <div className='row'>
        <br/>
        <div className='eight columns offset-by-two columns center'>
          <h1><span id='options'>hello</span></h1>
          <br/>
          <h6 style={leftAlign}>
            I'm Xavier, a Software Engineer & UX Developer currently based in Atlanta. I’m obsessed with all things JavaScript, design, <a href='https://medium.com/@xmd404' target='_blank'>writing</a>, <a href='https://is.gd/211AS4' target='_blank'>#FOSS</a>, and <a href='https://github.com/xmd404' target='_blank'>building great software</a>. Interested in having me join your project?
          </h6>
            <a href='https://calendly.com/xavierduncan' target='_blank'>
              <button className='btn-blue'>
                📲 &nbsp;Schedule a call
              </button>
            </a>
            <Link to='contact'>
              <button className='btn-green'>
                ⚡️ &nbsp;Email
              </button>
            </Link>
          <Signature />
        </div>
      </div>
    </div>
  </div>
  
export default Bio;