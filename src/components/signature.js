import React from 'react';
import signature from '../images/signature.png';

const Signature = () =>
  <div>
    <h6>
      Cheers,
      <br/>
      <img 
        src={ signature }
        alt="Xavier Duncan's signature"
        width='110px'
      />
      <br/>
      Xavier Duncan
    </h6>
  </div>

export default Signature;