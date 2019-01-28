import React from 'react';
import '../styles/main.css';

import Navbar from '../components/Navbar';
import BannerHeader from '../components/banner-header';
import Welcome from '../components/welcome';
import ShortBio from '../components/short-bio';

const IndexPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <Welcome />
    <ShortBio />
  </div>

export default IndexPage
