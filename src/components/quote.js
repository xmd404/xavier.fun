import React from 'react';
import { Link } from 'gatsby';

const Quote = () =>
  <div className='center'>
    <br/>
    <Link to='/' style={{ color: '#000' }}>
      <h6>
        <span role="img" aria-label="zapEmoji">⚡️</span>&nbsp;
          <i>
            Do Everything, See Everything. Spread Love & Share Knowledge. Move Fast. Fail Faster. Always Build Great Product.
          </i>
      </h6>
    </Link>
    <br/>
  </div>

export default Quote;