import React from 'react';

import BannerHeader from '../components/banner-header';
import Navbar from '../components/navbar';
import Welcome from '../components/welcome';
import ShortBio from '../components/short-bio';
import FeaturedProjects from '../components/featured-projects';
import FeaturedPosts from '../components/featured-posts';
import BannerFooter from '../components/banner-footer';
import Footer from '../components/footer';

const IndexPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <Welcome />
    <ShortBio />
    <FeaturedProjects />
    <FeaturedPosts />
    <BannerFooter />
    <Footer />
  </div>

export default IndexPage;