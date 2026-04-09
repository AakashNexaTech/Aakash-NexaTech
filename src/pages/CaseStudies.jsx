import React from 'react';

const CaseStudies = () => {
    return (
        <main className="section-padding bg-grid page-hero page-hero-center">
            <div className="container">
                <div className="reveal">
                    <div className="badge badge-light">Success Stories</div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our <span className="text-gradient">Case Studies</span></h1>
                    <p className="page-lead center">
                        See how we've helped ambitious startups and enterprises transform their ideas into successful digital products.
                    </p>
                </div>

                <div className="space-y-12 mt-20">
                    {[1, 2, 3].map((idx) => (
                        <div className={`flex flex-col lg:flex-row bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden reveal ${idx % 2 === 0 ? 'lg:flex-row-reverse' : ''}`} key={idx}>
                            <div className="lg:w-1/2 h-80 lg:h-auto bg-slate-100 relative group overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-20 transform group-hover:scale-110 transition-transform duration-700">
                                    <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                </div>
                            </div>
                            <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center text-left">
                                <div className="badge badge-light mb-6">FinTech</div>
                                <h2 className="text-3xl font-bold text-slate-900 mb-6">Revolutionizing Global Payments</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    We partnered with a visionary startup to build a scalable and secure cross-border payment platform from the ground up, scaling to 1M+ active users in under 12 months.
                                </p>
                                <div>
                                    <button className="btn btn-outline px-8 py-3">Read Full Study</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default CaseStudies;
