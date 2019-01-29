import React from 'react';

import BannerHeader from '../components/banner-header';
import Navbar from '../components/navbar';
import BlogPageHeader from '../components/blog-header';
import BannerFooter from '../components/banner-footer';
import Footer from '../components/footer';

const BlogPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <BlogPageHeader />
    <BannerFooter />
    <Footer />
  </div>

export default BlogPage;