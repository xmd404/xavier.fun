import React from 'react';
import { Link } from 'gatsby';
import Signature from '../components/signature';

const divStyle = {
  padding: '0 0 35px',
};

const polyStyle = {
  textAlign: 'center',
};

const Bio = () =>
  <div className='container-fluid' style={divStyle}>
    <div className='container'>
      <hr/>
      <div className='row'>
        <div className='eight columns offset-by-two columns'>
          <h6>
            Engineer, founder, & angel investor based in ATX.
            <br/><br/>
            I’m obsessed with all things venture, photography, <a href='https://medium.com/@xmd404' target='_blank'>writing</a>, and collaborating on projects that shape the world.
            <br/><br/>
            Currently building: <a href="https://mobiletechrx.com" target='_blank'>MTRX</a>, <a href="https://peace.vc" target='_blank'>Peace Ventures</a>, & <a href="https://twitter.com/search?q=%23votewithdollars&src=typed_query" target='_blank'>#VoteWithDollars</a>.
            <br/><br/>
            Shoot me an <a href="mailto:xmd404@pm.me">email</a> or <a href="https://twitter.com/xmd404" target="_blank">DM</a>, let's break things 💥
            <br/>
            {/* <a href='https://calendly.com/xavierduncan' target='_blank' rel="noopener noreferrer">
              <button className='btn-blue'>
                📲 &nbsp;Schedule a call
              </button>
            </a>
            <Link to='contact'>
              <button className='btn-green'>
                ⚡️ &nbsp;Email
              </button>
            </Link> */}
          </h6>
          <Signature />
        </div>
      </div>
    </div>
  </div>
  
export default Bio;
