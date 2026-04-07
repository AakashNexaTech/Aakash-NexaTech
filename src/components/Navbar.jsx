import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
                        <li><RouterLink to="/#services">Services</RouterLink></li>
                        <li><RouterLink to="/#why-us">Why Us</RouterLink></li>
                        <li><RouterLink to="/#process">Process</RouterLink></li>
                        <li><RouterLink to="/#contact">Contact</RouterLink></li>
                    </ul>
                </nav>

                <div className="cta-action">
                    <RouterLink to="/#contact" className="btn btn-primary">
                        Get Started
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </RouterLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
