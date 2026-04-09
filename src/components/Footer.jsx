import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-400 py-16 animate-footer-fade">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-black text-xl group-hover:rotate-12 transition-transform">A</div>
                            <span className="text-white text-2xl font-extrabold tracking-tight">
                                Aakash<span className="text-primary">NexaTech</span>
                            </span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6 italic">
                            Engineering digital growth with expert solutions for scalable mobile apps, web platforms, and startup MVPs.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { name: 'FB', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> },
                                { name: 'TW', icon: <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path> },
                                { name: 'IG', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></> },
                                { name: 'LN', icon: <><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path></> },
                            ].map((social, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all duration-300">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{social.icon}</svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4">
                            <li><Link to="/services/mobile-app-development" className="hover:text-primary transition-colors">Mobile App Development</Link></li>
                            <li><Link to="/services/web-development" className="hover:text-primary transition-colors">Web Platform Development</Link></li>
                            <li><Link to="/services/startup-mvp" className="hover:text-primary transition-colors">Startup MVP Development</Link></li>
                            <li><Link to="/services/ui-ux-design" className="hover:text-primary transition-colors">UI/UX Modern Design</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/case-studies" className="hover:text-primary transition-colors">Portfolio</Link></li>
                            <li><Link to="/process" className="hover:text-primary transition-colors">Our Process</Link></li>
                            <li><Link to="/contact-us" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Resources</h4>
                        <ul className="space-y-4">
                            <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                            <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
                            <li><Link to="/faqs" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm">© 2026 Aakash NexaTech. All rights reserved.</p>
                    <div className="flex gap-6 text-sm">
                        <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
