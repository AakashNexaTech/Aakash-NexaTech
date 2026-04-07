import React from 'react';
import { Link } from 'react-router-dom';

const WebAppDev = () => {
    return (
        <main className="section-padding bg-pattern page-hero page-hero-left">
            <div className="container page-narrow">
                <div className="section-header reveal">
                    <div className="badge badge-light">Services</div>
                    <h1 className="section-title text-left page-title">Web Platform <span className="text-gradient">Development</span></h1>
                    <p className="page-lead">Responsive, scalable, and secure web platforms engineered to handle complex business logic.</p>
                </div>

                <div className="reveal delay-100 page-card">
                    <h2>Powering the Web</h2>
                    <p style={{ marginBottom: '2rem' }}>We deliver highly performant web applications using modern Javascript frameworks like React, Next.js, Angular, and Vue. Whether you need an e-commerce platform, a real-time dashboard, or an internal enterprise tool, we meticulously architect custom solutions suited for high concurrency and zero-downtime scalability.</p>

                    <h2>What you get</h2>
                    <ul>
                        <li><strong>PWA Capabilities:</strong> Progressive Web Apps that look and feel like native applications.</li>
                        <li><strong>SEO Optimized:</strong> Server Side Rendering (SSR) ensures your brand is easily discoverable organically.</li>
                        <li><strong>Serverless Infrastructure:</strong> Seamless cloud deployment via AWS or Google Cloud.</li>
                        <li><strong>Fully Responsive:</strong> Perfect experiences across mobile, tablet, and ultra-wide displays.</li>
                    </ul>

                    <div className="page-actions">
                        <Link to="/contact" className="btn btn-primary">Start Your Project -&gt;</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default WebAppDev;
