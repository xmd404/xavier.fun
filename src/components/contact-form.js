import React from 'react';

const ContactForm = () =>
  <div className='container-fluid' style={{ padding: '0 0 15px' }}>
    <div className='container'>
      <hr/>
      <div className='row'>
        <br/>
        <div className='eight columns offset-by-two columns'>
          <form  name="contact" method='post' autocomplete='on' data-netlify='true' data-netlify-honeypot="bot-field">
            <div className='row'>
              <div className='six columns'>
                <label for='name'>
                  Your Name
                  <input className='full-width' type='text' name='name' id='name' placeholder='Alex Smith' required />
                </label>
              </div>
              <div className='six columns'>
                <label for='email'>
                  Your Email
                  <input className='full-width' type='email' name='email' id='email' placeholder='your@email.com' required />
                </label>
              </div>
            </div>
            <label for='message'>
              Message
              <textarea className='full-width' type='text' name='message'  placeholder='😄 Hi Xavier...' height='8' required></textarea>
              <input type='hidden' name='_next' value='http://xavierduncan.com/blog/thanks.html' />
              <input type='hidden' name='_subject' value='New Message' />
            </label>
            <input type="hidden" name="form-name" value="contact" />
            <div data-netlify-recaptcha="true"></div>
            <button className='btn-green' type='submit'><i className='fa fa-send fa-fw'></i> &nbsp;Send</button>
          </form>
        </div>
      </div>
    </div>
  </div>

export default ContactForm;