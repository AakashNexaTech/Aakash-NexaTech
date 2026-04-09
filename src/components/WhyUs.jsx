import React from 'react';

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
        <section className="py-20 bg-white" id="why-us">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-center">
                <div className="reveal-left">
                    <div className="badge badge-light">Why Choose Us</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Building Products That <span className="text-gradient">Scale</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        We combine cutting-edge technology with battle-tested methodologies to deliver digital products that not only meet your current needs but are ready for future growth.
                    </p>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Our team of experienced developers and designers work closely with you to understand your unique challenges and create solutions that drive real business value.
                    </p>

                    <div className="flex gap-8">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 min-w-[160px]">
                            <h3 className="text-3xl font-extrabold text-primary mb-1">100%</h3>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Code Ownership</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 min-w-[160px]">
                            <h3 className="text-3xl font-extrabold text-emerald-500 mb-1">100%</h3>
                            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Happy Clients</p>
                        </div>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {reasons.map((item, index) => (
                        <div className={`p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow reveal-right delay-${(index + 1) * 100} ${index === 0 ? 'sm:col-span-2' : ''}`} key={index}>
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-4">
                                {item.icon}
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
