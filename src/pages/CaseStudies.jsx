import React from 'react';

const CaseStudies = () => {
    return (
        <main className="section-padding page-hero page-hero-center">
            <div className="container">
                <div className="section-header reveal">
                    <div className="badge badge-light">Success Stories</div>
                    <h1 className="section-title">Our <span className="text-gradient">Case Studies</span></h1>
                    <p className="page-lead center">
                        See how we've helped ambitious startups and enterprises transform their ideas into successful digital products.
                    </p>
                </div>

                <div className="case-studies-grid">
                    {[1, 2, 3].map((idx) => (
                        <div className={`why-card case-study-card reveal-left delay-${idx * 100}`} key={idx}>
                            <div className="case-study-media"></div>
                            <div className="case-study-body">
                                <span className="badge badge-light">FinTech</span>
                                <h2 className="case-study-title">Revolutionizing Global Payments</h2>
                                <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>We partnered with a visionary startup to build a scalable and secure cross-border payment platform from the ground up, scaling to 1M+ active users in under 12 months.</p>
                                <button className="btn btn-outline">Read Full Study</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default CaseStudies;
