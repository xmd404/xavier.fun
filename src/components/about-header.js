import React from 'react';
import { Link } from 'gatsby';

const AboutHeader = () =>
  <div className='container-fluid' style={{ padding: '3.5em 0 1.5em' }}>
    <div className='container'>
      <div className='row center'>
        <div className='twelve columns'>
          <h2 className='slide'>Xavier, aka <a href='http://thewebsitekid.firebaseapp.com' target='_blank' style={{ color: '#000' }}>theWebsiteKid<i className='fa fa-code fa-fw'></i></a></h2>
          <h5 className='slide'>
            <Link to='work' style={{ padding: '0.750em 0.750em' }}>
              <u style={{ color: '#E70650' }}>
                <span style={{ color: '#000' }}>
                  Creator
                </span>
              </u>
            </Link>
            <a href='http://github.com/xduncan' target='_blank' style={{ padding: '0.750em 0.750em' }}>
              <u style={{ color: '#9434B9' }}>
                <span style={{ color: '#000' }}>
                  Developer
                </span>
              </u>
            </a>
            <Link to='blog' style={{ padding: '0.750em 0.750em' }}>
              <u style={{ color: '#4298C1' }}>
                <span style={{ color: '#000' }}>
                  Writer
                </span>
              </u>
            </Link>
          </h5>
        </div>
      </div>
    </div>
  </div>

export default AboutHeader;