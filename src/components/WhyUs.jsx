import React from 'react';
import './WhyUs.css';

const WhyUs = () => {
    const reasons = [
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
            title: "Scalable Architecture",
            desc: "Built to grow with your business"
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
            title: "Clean Code Structure",
            desc: "Maintainable and documented"
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>,
            title: "Startup Friendly Pricing",
            desc: "Flexible payment options"
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
            title: "Fast Delivery",
            desc: "On-time project completion"
        },
        {
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>,
            title: "Dedicated Support",
            desc: "24/7 assistance available"
        }
    ];

    return (
        <section className="why-us section-padding bg-pattern" id="why-us">
            <div className="container why-container">
                <div className="why-content reveal-left">
                    <div className="badge badge-light">Why Choose Us</div>
                    <h2 className="section-title text-left">
                        Building Products That <span className="text-gradient">Scale</span>
                    </h2>
                    <p className="why-description">
                        We combine cutting-edge technology with battle-tested methodologies to deliver digital products that not only meet your current needs but are ready for future growth.
                    </p>
                    <p className="why-description">
                        Our team of experienced developers and designers work closely with you to understand your unique challenges and create solutions that drive real business value.
                    </p>

                    <div className="why-stats">
                        {/* <div className="why-stat-box">
                            <h3>1+</h3>
                            <p>Years Experience</p>
                        </div> */}
                        <div className="why-stat-box">
                            <h3>100%</h3>
                            <p>Code Ownership</p>
                        </div>
                    </div>
                </div>

                <div className="why-cards">
                    {reasons.map((item, index) => (
                        <div className={`why-card reveal-right delay-${(index + 1) * 100}`} key={index}>
                            <div className="why-icon">
                                {item.icon}
                            </div>
                            <div className="why-text">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
