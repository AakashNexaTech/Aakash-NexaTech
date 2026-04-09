import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';

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

    const navLinks = [
        { name: 'Services', to: '/services' },
        { name: 'Why Us', to: '/why-us' },
        { name: 'Process', to: '/process' },
        { name: 'Contact', to: '/contact-us' },
    ];

    return (
        <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                <RouterLink to="/" className="text-2xl font-extrabold tracking-tight">
                    <span className="text-slate-900">Aakash</span>
                    <span className="text-primary">NexaTech</span>
                </RouterLink>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <RouterLink
                                    to={link.to}
                                    className={`font-medium transition-colors hover:text-primary ${location.pathname === link.to ? 'text-primary' : 'text-slate-600'}`}
                                >
                                    {link.name}
                                </RouterLink>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <RouterLink to="/contact-us" className="btn btn-primary hidden sm:inline-flex">
                        Get Started
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </RouterLink>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
