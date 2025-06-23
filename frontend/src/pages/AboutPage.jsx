import React from 'react';
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import HappyCustomers from '../components/HappyCustomers';
import StatsSection from '../components/StatsSection';


const AboutPage = () => {
  return (
    <div>
      <AboutUs />
      <HappyCustomers />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
