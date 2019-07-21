import React from 'react';
import signature from '../images/signature.png';

const Signature = () =>
  <div style={{'padding: 0'}}>
    <h6>
      Cheers,
      <br/>
      <img 
        src={ signature }
        alt="Xavier Marcus Duncan's signature"
        width='110px'
      />
      <br/>
      Xavier Duncan
      <p><i>💥 breaking things.</i></p>
    </h6>
  </div>

export default Signature;
