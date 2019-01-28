import React from 'react';

import BannerHeader from '../components/banner-header';
import Navbar from '../components/navbar';
import FullBio from '../components/full-bio';
import BannerFooter from '../components/banner-footer';
import Footer from '../components/footer';

const AboutPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <FullBio />
    <BannerFooter />
    <Footer />
  </div>

export default AboutPage;