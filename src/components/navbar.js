import React from 'react';
import { Link } from 'gatsby';

const Navbar = () =>
  <div className='container-fluid'>
    <div className='center' style={{ padding: '30px 0 0' }}>
      <div className='row staticNav'>
        <div className='six columns slide' style={{ display: 'inline-block' }}>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <h5>
              <b>xavier duncan</b> &nbsp; | &nbsp; web developer
            </h5>
          </Link>
        </div>
        <div className='six columns slide'>
          <nav>
            <Link to='blog'>blog</Link>
            {` `}
            <Link to='work'>work</Link>
            {` `}
            <Link to='contact'>contact</Link>
          </nav>
        </div>
      </div>
    </div>
  </div>

export default Navbar;
