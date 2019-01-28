import React from 'react'
import '../styles/main.css';

import Navbar from '../components/Navbar';
import BannerHeader from '../components/banner-header';
import Welcome from '../components/welcome';

const IndexPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <Welcome />
  </div>

export default IndexPage
