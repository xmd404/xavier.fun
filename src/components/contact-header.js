import React from 'react';

const ContactHeader = () =>
  <div className='container-fluid' style={{ padding: '3.5em 0 1.5em' }}>
    <div className='container'>
      <div className='row center'>
        <div className='twelve columns'>
          <h2 className='slide'>Let's Talk</h2>
          <h5 className='slide'>Get in touch using the form below, or via:</h5>
          <a href='mailto:xduncan@tuta.io' className='btn slide'><i className='fa fa-at'></i> &nbsp;Email</a>
          <a href='tel:+1404-618-5227' className='btn slide'><i className='fa fa-phone'></i> &nbsp;Phone</a>
        </div>
      </div>
    </div>
  </div>

export default ContactHeader;