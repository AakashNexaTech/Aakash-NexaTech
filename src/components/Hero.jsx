import React from 'react';
import { Link } from 'react-router-dom';
import DashboardGraphic from './DashboardGraphic';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-grid" id="home">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <div className="animate-fade-in-up">
                    <div className="badge">
                        <span className="text-lg">✨</span> Premium Digital Solutions
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
                        Engineering<br />
                        <span className="text-gradient">Digital</span> Growth
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 max-w-xl mb-10 leading-relaxed">
                        Premium IT services near you in Naranpura, Ahmedabad, Gujarat. We build scalable mobile apps, web platforms & startup MVPs that drive real business results.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/contact-us" className="btn btn-primary text-lg px-8 py-4">
                            Start Your Project
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </Link>
                    </div>
                </div>

                <div className="relative animate-float block">
                    <DashboardGraphic />
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>
        </section>
    );
};

export default Hero;
