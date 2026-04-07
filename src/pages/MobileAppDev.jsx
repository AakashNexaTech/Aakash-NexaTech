import React from 'react';
import { Link } from 'react-router-dom';

const MobileAppDev = () => {
    return (
        <main className="section-padding bg-pattern page-hero page-hero-left">
            <div className="container page-narrow">
                <div className="section-header reveal">
                    <div className="badge badge-light">Services</div>
                    <h1 className="section-title text-left page-title">iOS & Android <span className="text-gradient">App Development</span></h1>
                    <p className="page-lead">Native and cross-platform mobile applications tailored for optimal performance and user experience.</p>
                </div>

                <div className="reveal delay-100 page-card">
                    <h2>Why Choose Custom Mobile Apps?</h2>
                    <p style={{ marginBottom: '2rem' }}>In today's fast-paced digital ecosystem, a custom mobile app provides a direct line to your audience, ensuring heightened engagement and delivering unique value. We build extremely fast applications tailored to your specific market needs using React Native, Flutter, Swift, and Kotlin.</p>

                    <h2>Our Process</h2>
                    <ul>
                        <li><strong>Strategy & Consultation:</strong> We analyze your ideas to outline the most efficient path.</li>
                        <li><strong>UI/UX Design:</strong> Engaging interfaces built for seamless device usage.</li>
                        <li><strong>Development & QA:</strong> Agile engineering with rigorous automated testing.</li>
                        <li><strong>Launch & Support:</strong> Deployment to Google Play and Apple App Stores with 24/7 support.</li>
                    </ul>

                    <div className="page-actions">
                        <Link to="/contact" className="btn btn-primary">Start Your Project →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MobileAppDev;
