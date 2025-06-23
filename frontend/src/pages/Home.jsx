import React from 'react';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
import StatsSection from '../components/StatsSection';
import HappyCustomers from '../components/HappyCustomers';

const Home = () => {
  return (
<>

<Hero />
<ServicesSection />
<StatsSection />
<HappyCustomers />
    
   
    <Footer />
    </>
  );
};

export default Home;
