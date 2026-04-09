import React from 'react';
import { Link } from 'react-router-dom';

const UiUxDesign = () => {
    return (
        <main className="page-hero bg-grid">
            <div className="container">
                <div className="max-w-4xl">
                    <div className="reveal">
                        <div className="badge badge-light">Services</div>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            UI/UX Modern <span className="text-gradient">Design</span>
                        </h1>
                        <p className="page-lead">User-centered design that focuses on engagement, retention, and beautiful aesthetics.</p>
                    </div>

                    <div className="mt-16 reveal delay-100 p-8 md:p-12 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                        <h2 className="text-3xl font-bold mb-6">Design With Purpose</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">Poor design inevitably leads to poor conversion rates. We treat UI/UX not just as an aesthetic endeavor, but as an empirical science. Our designs merge stunning visuals with comprehensive psychological methodologies, ensuring every typography choice, whitespace gap, and color palette drives users towards core actions.</p>

                        <h2 className="text-3xl font-bold mb-6">Our Deliverables</h2>
                        <div className="grid sm:grid-cols-2 gap-4 mb-12">
                            {[
                                { title: "High-Fidelity Prototypes", desc: "Interactive Figma flows." },
                                { title: "Design Systems", desc: "Dedicated style guides." },
                                { title: "Accessibility Audits", desc: "WCAG compliant designs." },
                                { title: "Micro-Animations", desc: "Subtle hover/motion queues." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-2xl group hover:border-primary/30 transition-colors">
                                    <h4 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex pt-4">
                            <Link to="/contact-us" className="btn btn-primary px-10 py-4">Start Your Project →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default UiUxDesign;
