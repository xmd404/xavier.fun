import React from 'react';

import BannerHeader from '../components/banner-header';
import Navbar from '../components/navbar';
import BannerFooter from '../components/banner-footer';
import Footer from '../components/footer';
import ContactForm from '../components/contact-form';

const ContactPage = () =>
  <div>
    <BannerHeader />
    <Navbar />
    <ContactForm />
    <BannerFooter />
    <Footer />
  </div>

export default ContactPage;