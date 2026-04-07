import React, { useState } from 'react';
import './Portfolio.css';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Mobile App', 'Admin Dashboard', 'Web Platform', 'UI Design'];

    const projects = [
        {
            title: "FinTech Mobile App",
            category: "Mobile App",
            tech: "React Native, Node.js",
            image: "linear-gradient(135deg, #1e3a8a, #3b82f6)"
        },
        {
            title: "E-Commerce Dashboard",
            category: "Admin Dashboard",
            tech: "React, TypeScript",
            image: "linear-gradient(135deg, #064e3b, #10b981)"
        },
        {
            title: "Healthcare Platform",
            category: "Web Platform",
            tech: "Next.js, Python",
            image: "linear-gradient(135deg, #4c1d95, #8b5cf6)"
        },
        {
            title: "Logistics Admin",
            category: "Admin Dashboard",
            tech: "Vue.js, Firebase",
            image: "linear-gradient(135deg, #7f1d1d, #ef4444)"
        },
        {
            title: "Real Estate App UI",
            category: "UI Design",
            tech: "Figma, Framer",
            image: "linear-gradient(135deg, #78350f, #f59e0b)"
        },
        {
            title: "Social Network App",
            category: "Mobile App",
            tech: "Flutter, Firebase",
            image: "linear-gradient(135deg, #082f49, #0ea5e9)"
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="portfolio section-padding" id="portfolio">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Our <span className="text-gradient">Latest Work</span></h2>
                </div>

                <div className="portfolio-filters reveal delay-100">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {filteredProjects.map((project, idx) => (
                        <div className={`portfolio-card reveal delay-${Math.min((idx + 1) * 100, 500)}`} key={idx}>
                            <div className="portfolio-image" style={{ background: project.image }}>
                                <div className="portfolio-overlay">
                                    <button className="btn btn-primary" style={{ borderRadius: '50%', padding: '1rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="portfolio-info">
                                <span className="portfolio-category">{project.category}</span>
                                <h3>{project.title}</h3>
                                <p>{project.tech}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
