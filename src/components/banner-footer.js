import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

const BannerFooter = () =>
  <div className='container-fluid thewebsitekid funnel'>
    <div className='container'>
      <div className='row'>
        <div className='ten columns offset-by-one column'>
          <h3><b><FontAwesomeIcon icon={['fas', 'code']}/>, deconstructed.</b></h3>
          <h5>Learn the essentials of modern web development: <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. Bite sized chunks of information, written in plain english. 100% free resource for junior and senior developers alike. This is <u>web development, deconstructed</u>.</h5>
          <br/>
          <form id='subscribe' data-drip-embedded-form='717894134' action='https://www.getdrip.com/forms/717894134/submissions' method='post' autocomplete='on'>
            <div className='row'>
              <div className='six columns'>
                <label for='name'>Your Name</label>
                <input className='full-width' type='text' name='fields[name]' id='name' placeholder='Alex Smith' required />
              </div>
              <div className='six columns'>
                <label for='email'>Your Email</label>
                <input className='full-width' type='email' name='fields[email]' id='email' placeholder='your@email.com' required />
              </div>
              <button className='btn btn-green' type='submit'><span role='img' aria-label='emoji'>😀</span> &nbsp; Sign Up For Free</button>
            </div>
          </form>
          <h5>
            <b><FontAwesomeIcon icon={['fas', 'code']}/> HackLeague.club</b>
            <br/>
            <span style={{ fontSize: '90%' }}><i>web development, deconstructed.</i></span>
          </h5>
        </div>
      </div>
    </div>
  </div>

export default BannerFooter;