import React from 'react';

const Blog = () => {
    return (
        <main className="section-padding bg-pattern page-hero page-hero-center">
            <div className="container">
                <div className="section-header reveal">
                    <div className="badge badge-light">Insights & News</div>
                    <h1 className="section-title">Our <span className="text-gradient">Blog</span></h1>
                    <p className="page-lead center">
                        Discover the latest trands, tips, and insights from the worlds of software engineering and digital growth.
                    </p>
                </div>

                <div className="services-grid page-grid">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                        <div className={`service-card reveal delay-${Math.min(idx * 100, 500)}`} key={idx} style={{ cursor: 'pointer' }}>
                            <div style={{ height: '160px', background: 'var(--border-color)', borderRadius: '8px', marginBottom: '1.5rem', overflow: 'hidden' }}>
                                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(59,130,246,0.2))' }}></div>
                            </div>
                            <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '600', marginBottom: '0.5rem', display: 'block' }}>Article</span>
                            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>How to Scale Your Mobile App in 2026</h3>
                            <p style={{ fontSize: '0.9rem' }}>Learn the top strategies for maintaining a stable infrastructure as your user base grows.</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Blog;
