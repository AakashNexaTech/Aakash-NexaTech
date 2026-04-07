import React from 'react';
import { Link } from 'react-router-dom';

const UiUxDesign = () => {
    return (
        <main className="section-padding bg-pattern page-hero page-hero-left">
            <div className="container page-narrow">
                <div className="section-header reveal">
                    <div className="badge badge-light">Services</div>
                    <h1 className="section-title text-left page-title">UI/UX Modern <span className="text-gradient">Design</span></h1>
                    <p className="page-lead">User-centered design that focuses on engagement, retention, and beautiful aesthetics.</p>
                </div>

                <div className="reveal delay-100 page-card">
                    <h2>Design With Purpose</h2>
                    <p style={{ marginBottom: '2rem' }}>Poor design inevitably leads to poor conversion rates. We treat UI/UX not just as an aesthetic endeavor, but as an empirical science. Our designs merge stunning visuals with comprehensive psychological methodologies, ensuring every typography choice, whitespace gap, and color palette drives users towards core actions.</p>

                    <h2>Our Deliverables</h2>
                    <ul>
                        <li><strong>High-Fidelity Prototypes:</strong> Interactive Figma flows that look exactly like the final code.</li>
                        <li><strong>Comprehensive Design Systems:</strong> Dedicated style guides allowing rapid, unified scaling.</li>
                        <li><strong>Accessibility (a11y) Audits:</strong> WCAG compliant color contrasts and readable type scales.</li>
                        <li><strong>Micro-Animations:</strong> Infusing your website with personality via subtle hover/motion queues.</li>
                    </ul>

                    <div className="page-actions">
                        <Link to="/contact" className="btn btn-primary">Start Your Project →</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UiUxDesign;
