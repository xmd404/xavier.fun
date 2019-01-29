import React from 'react';

import BannerHeader from '../components/banner-header';
import Navbar from '../components/navbar';
import WorkPageHeader from '../components/work-header';
import BannerFooter from '../components/banner-footer';
import Footer from '../components/footer';

const BlogPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <WorkPageHeader />
    <BannerFooter />
    <Footer />
  </div>

export default BlogPage;