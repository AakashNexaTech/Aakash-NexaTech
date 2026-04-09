import React from 'react';
import { Link } from 'react-router-dom';

const StartupMVP = () => {
    return (
        <main className="page-hero bg-grid">
            <div className="container">
                <div className="max-w-4xl">
                    <div className="reveal">
                        <div className="badge badge-light">Services</div>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Startup MVP <span className="text-gradient">Development</span>
                        </h1>
                        <p className="page-lead">Rapid prototyping and minimum viable products to validate your idea with real users quickly.</p>
                    </div>

                    <div className="mt-16 reveal delay-100 p-8 md:p-12 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                        <h2 className="text-3xl font-bold mb-6">From Zero to One</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">Startups live or die based on their time-to-market and iterative feedback loops. We specialize in rapid 8-12 week sprints that transform back-of-napkin ideas into fully functioning MVPs. This leaner approach saves money while prioritizing core mechanics that delight early adopters and impress potential investors.</p>

                        <h2 className="text-3xl font-bold mb-6">Our Blueprint for Success</h2>
                        <ul className="space-y-6 mb-12">
                            {[
                                { title: "Core Feature Focus", desc: "Eliminating bloat and focusing exclusively on your product's unique selling proposition." },
                                { title: "Analytics Integrated", desc: "Built-in data points to measure and track user engagement natively." },
                                { title: "Investor Ready", desc: "Codebases built upon modern standards offering no technical debt when you secure Series A funding." },
                                { title: "Pivot-Friendly", desc: "Agile component structures that make pivoting and adapting simple instead of cumbersome." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 p-5 bg-slate-50/50 rounded-2xl border border-slate-100/50">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                    <div>
                                        <strong className="text-slate-900 block mb-1">{item.title}</strong>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex pt-4">
                            <Link to="/contact-us" className="btn btn-primary px-10 py-4">Launch Your MVP →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StartupMVP;
