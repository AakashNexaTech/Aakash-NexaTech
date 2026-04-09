import React from 'react';

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
        <section className="py-20 bg-slate-50/30" id="process">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Turn Your Idea Into a <span className="text-gradient">Scalable Product</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-5 gap-8 relative">
                    {/* Connection line for desktop */}
                    <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-slate-200 -z-10"></div>

                    {steps.map((step, index) => (
                        <div className={`flex flex-col items-center text-center reveal delay-${(index + 1) * 100}`} key={index}>
                            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-6 text-primary group hover:scale-110 transition-transform">
                                <div className="p-4 bg-primary/5 rounded-xl">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
