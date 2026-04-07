import React from 'react';
import './Process.css';

const Process = () => {
    const steps = [
        {
            icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>,
            title: "Idea Validation",
            desc: "Analyzing market fit and technical feasibility."
        },
        {
            icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>,
            title: "Wireframing",
            desc: "Designing intuitive user flows and mockups."
        },
        {
            icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>,
            title: "Development",
            desc: "Agile engineering with robust technologies."
        },
        {
            icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13.5 22c-.6-1.5-1.5-2.8-2.6-4M9.5 22c.6-1.5 1.5-2.8 2.6-4M16 20c-1.2-2.3-2.6-4.9-3.2-6.5M8 20c1.2-2.3 2.6-4.9 3.2-6.5C12.4 11.2 16 12 16 5c0 0-4-.8-6 5.5-2-6.3-6-5.5-6-5.5 0 7 3.6 6.2 4.8 8.5C9.4 15.1 8 17.7 6.8 20M12 11.5v-2"></path></svg>,
            title: "Launch",
            desc: "Smooth deployment and app store optimization."
        },
        {
            icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>,
            title: "Growth",
            desc: "Continuous improvements and scaling."
        }
    ];

    return (
        <section className="process section-padding" id="process">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">Turn Your Idea Into a <span className="text-gradient">Scalable Product</span></h2>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div className={`process-step reveal delay-${(index + 1) * 100}`} key={index}>
                            <div className="step-icon-main">{step.icon}</div>
                            <h3>{step.title}</h3>
                            <p>{step.desc}</p>
                            {index < steps.length - 1 && <div className="step-connector"></div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
