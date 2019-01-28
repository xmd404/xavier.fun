import React from 'react';

import BannerHeader from '../components/banner-header';
import Navbar from '../components/navbar';
import FullBio from '../components/full-bio';
import BannerFooter from '../components/banner-footer';
import Footer from '../components/footer';
import AboutHeader from '../components/about-header';

const AboutPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <AboutHeader />
    <FullBio />
    <BannerFooter />
    <Footer />
  </div>

export default AboutPage;