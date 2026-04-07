import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container nav-content">
                <RouterLink to="/" className="logo">
                    {/* <img src={logo} alt="Aakash NexaTech Logo" className="logo-img" /> */}
                    <span className="logo-text-dark">Aakash</span>
                    <span className="logo-text-blue">NexaTech</span>
                </RouterLink>

                <nav className="desktop-menu">
                    <ul>
                        {isHome ? (
                            <>
                                <li><ScrollLink to="services" smooth={true} duration={500} offset={-80} style={{ cursor: 'pointer' }}>Services</ScrollLink></li>
                                <li><ScrollLink to="why-us" smooth={true} duration={500} offset={-80} style={{ cursor: 'pointer' }}>Why Us</ScrollLink></li>
                                <li><ScrollLink to="process" smooth={true} duration={500} offset={-80} style={{ cursor: 'pointer' }}>Process</ScrollLink></li>
                                <li><ScrollLink to="contact" smooth={true} duration={500} offset={-80} style={{ cursor: 'pointer' }}>Contact</ScrollLink></li>
                            </>
                        ) : (
                            <>
                                <li><RouterLink to="/#services" onClick={() => navigate('/#services')}>Services</RouterLink></li>
                                <li><RouterLink to="/#why-us" onClick={() => navigate('/#why-us')}>Why Us</RouterLink></li>
                                <li><RouterLink to="/#process" onClick={() => navigate('/#process')}>Process</RouterLink></li>
                                <li><RouterLink to="/#contact" onClick={() => navigate('/#contact')}>Contact</RouterLink></li>
                            </>
                        )}
                    </ul>
                </nav>

                <div className="cta-action">
                    {isHome ? (
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="btn btn-primary" style={{ cursor: 'pointer' }}>
                            Get Started
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </ScrollLink>
                    ) : (
                        <RouterLink to="/#contact" className="btn btn-primary" onClick={() => navigate('/#contact')}>
                            Get Started
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </RouterLink>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
