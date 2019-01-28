import React from 'react';

import Signature from '../components/signature';

const FullBio = () =>
  <div className='container-fluid' style={{padding:'2% 0 35px'}}>
    <div className='container'>
      <hr/>
      <div className='row'>
        <br/>
        <div className='ten columns offset-by-one column'>
          <h4><b>Seeds.</b></h4>
          <h6>I built my 1st website back in 2008, during an <i>Intro to Web Design</i> className I took in highschool. Later that year I started a Blogger site for a t-shirt company called BrokenTime Machines. Over the next few years I slowly taught myself the ins and outs of web design + development, initially using Blogger as a CMS and hacking full featured, multipage websites on top of it. Since Blogger was free, I didn't pay a penny on web hosting until I setup a VPS with Dreamhost in 2015.</h6>
          <br/>
          <h4><b>Growth.</b></h4>
          <h6>I graduated highschool in the 2010 and went to college for Business Administration, planning to eventually pursue an MBA. After a month I was bored and ready to move one, but stayed for a year and a half while I skipped className and spent most of my spare time trying to lauch and grow ideas: graphic design, marketing + promotion, real estate.</h6>
          <h6>I eventually dropped out in February 2012, and went to work on two ideas I had started in school: an online store, and a design + development company. I bought a screenprint machine and a used iMac, then setup shop in my mom's garage. </h6>
          <br/>
          <h4><b>Change.</b></h4>
          <h6>The online store did well. I would stay up for 2 - 3 days straight making stickers, posters, and buttons, while still holding down a 9 to 5. Alongside my own creations, I sold mostly international items: t-shirts from Canada and South Korea, poster sized skate magazines from NYC, obscure art magazines from Paris. It was fun, and I learned a lot about building and growing a brand, but burnout was emminate and I wasn't fulfilled.</h6>
          <h6>Between 2008 - 2012, I had built dozens of websites. I built them for myself, my businesses, my friends' businesses. But it was never something I considered as a serious career choice until 2013, when I started taking responsive web design courses on Treehouse.</h6>
          <hr/>
          <h6><b><span role="img" aria-label="zapEmoji">⚡️</span> Do Everything, See Everything. Spread Love & Share Knowledge. Move Fast. Fail Faster. Always Build Great Product.</b></h6>
          <hr/>
          <Signature />
        </div>
      </div>
    </div>
  </div>

export default FullBio;