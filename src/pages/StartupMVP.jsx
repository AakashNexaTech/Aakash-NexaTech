import React from 'react';
import { Link } from 'react-router-dom';

const StartupMVP = () => {
    return (
        <main className="section-padding bg-pattern page-hero page-hero-left">
            <div className="container page-narrow">
                <div className="section-header reveal">
                    <div className="badge badge-light">Services</div>
                    <h1 className="section-title text-left page-title">Startup MVP <span className="text-gradient">Development</span></h1>
                    <p className="page-lead">Rapid prototyping and minimum viable products to validate your idea with real users quickly.</p>
                </div>

                <div className="reveal delay-100 page-card">
                    <h2>From Zero to One</h2>
                    <p style={{ marginBottom: '2rem' }}>Startups live or die based on their time-to-market and iterative feedback loops. We specialize in rapid 8-12 week sprints that transform back-of-napkin ideas into fully functioning MVPs. This leaner approach saves money while prioritizing core mechanics that delight early adopters and impress potential investors.</p>

                    <h2>Our Blueprint for Success</h2>
                    <ul>
                        <li><strong>Core Feature Focus:</strong> Eliminating bloat and focusing exclusively on your product's unique selling proposition.</li>
                        <li><strong>Analytics Integrated:</strong> Built-in data points to measure and track user engagement natively.</li>
                        <li><strong>Investor Ready:</strong> Codebases built upon modern standards offering no technical debt when you secure Series A funding.</li>
                        <li><strong>Pivot-Friendly:</strong> Agile component structures that make pivoting and adapting simple instead of cumbersome.</li>
                    </ul>

                    <div className="page-actions">
                        <Link to="/contact" className="btn btn-primary">Start Your Project -&gt;</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StartupMVP;
