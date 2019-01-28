import React from 'react';

import Navbar from '../components/navbar';
import BannerHeader from '../components/banner-header';
import Welcome from '../components/welcome';
import ShortBio from '../components/short-bio';
import FeaturedProjects from '../components/featured-projects';
import FeaturedPosts from '../components/featured-posts';

const IndexPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <Welcome />
    <ShortBio />
    <FeaturedProjects />
    <FeaturedPosts />
  </div>

export default IndexPage
