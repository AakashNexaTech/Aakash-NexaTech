import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import useScrollReveal from './hooks/useScrollReveal';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Process from './components/Process';
import Contact from './components/Contact';

// Pages
import Home from './pages/Home';
import Blog from './pages/Blog';
import CaseStudies from './pages/CaseStudies';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MobileAppDev from './pages/MobileAppDev';
import WebAppDev from './pages/WebAppDev';
import StartupMVP from './pages/StartupMVP';
import UiUxDesign from './pages/UiUxDesign';

function App() {
  const location = useLocation();
  useScrollReveal();

  // Handle smooth scrolling when navigating with a hash or to specific section paths
  React.useEffect(() => {
    let targetId = '';

    // Check for hash first
    if (location.hash) {
      targetId = location.hash.replace('#', '');
    }
    // Then check for section paths
    else {
      const path = location.pathname;
      if (path === '/services') targetId = 'services';
      else if (path === '/why-us') targetId = 'why-us';
      else if (path === '/process') targetId = 'process';
      else if (path === '/contact-us') targetId = 'contact';
    }

    if (targetId) {
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 80, // Accounts for sticky navbar
          });
        }
      }, 100);
    } else if (location.pathname === '/' && !location.hash) {
      // If home page and no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="app-container">
      <Preloader />
      <Navbar />
      <div className="page-transition" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/why-us" element={<Home />} />
          <Route path="/process" element={<Home />} />
          <Route path="/contact-us" element={<Home />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="/services/mobile-app-development" element={<MobileAppDev />} />
          <Route path="/services/web-development" element={<WebAppDev />} />
          <Route path="/services/startup-mvp" element={<StartupMVP />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
