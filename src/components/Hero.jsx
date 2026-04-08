import React from 'react';
import './Hero.css';
import DashboardGraphic from './DashboardGraphic';

const Hero = () => {
    return (
        <section className="hero bg-grid section-padding" id="home">
            <div className="container hero-container">
                <div className="hero-content animate-fade-in-up">
                    <div className="badge">
                        <span className="badge-icon">✨</span> Premium Digital Solutions
                    </div>

                    <h1 className="hero-title">
                        Engineering<br />
                        <span className="text-gradient">Digital</span> Growth
                    </h1>

                    <p className="hero-description">
                        Building scalable mobile apps, web platforms & startup MVPs that drive real business results.
                    </p>

                    <div className="hero-actions">
                        <a href="#contact" className="btn btn-primary btn-large">
                            Start Your Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </a>
                        {/* <a href="" className="btn btn-outline btn-large">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 3l14 9-14 9v-18z" /></svg>
                            View Our Work
                        </a> */}
                    </div>

                    {/* <div className="hero-stats">
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Projects Delivered</p>
                        </div>
                        <div className="separator"></div>
                        <div className="stat-item">
                            <h3>98%</h3>
                            <p>Client Satisfaction</p>
                        </div>
                        <div className="separator"></div>
                        <div className="stat-item">
                            <h3>24/7</h3>
                            <p>Support Available</p>
                        </div>
                    </div> */}
                </div>

                <div className="hero-graphic">
                    <DashboardGraphic />
                </div>
            </div>
        </section>
    );
};

export default Hero;
