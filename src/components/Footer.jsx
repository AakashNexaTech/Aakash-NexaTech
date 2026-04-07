import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
                            <div className="logo-icon">A</div>
                            <span className="logo-text-dark" style={{ color: 'white' }}>Aakash</span>
                            <span className="logo-text-blue">NexaTech</span>
                        </Link>
                        <p className="footer-desc">
                            Engineering digital growth with expert solutions for scalable mobile apps, web platforms, and startup MVPs.
                        </p>
                        <div className="social-links">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg></a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
                            <li><Link to="/services/web-development">Web Platform Development</Link></li>
                            <li><Link to="/services/startup-mvp">Startup MVP Development</Link></li>
                            <li><Link to="/services/ui-ux-design">UI/UX Modern Design</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/case-studies">Portfolio</Link></li>
                            <li><Link to="/#process">Our Process</Link></li>
                            <li><Link to="/#contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Resources</h4>
                        <ul>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/case-studies">Case Studies</Link></li>
                            <li><Link to="/faqs">FAQs</Link></li>
                            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Aakash NexaTech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
