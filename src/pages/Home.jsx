import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
// import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Process />
      {/* <Portfolio /> */}
      <Contact />
    </main>
  );
};

export default Home;
