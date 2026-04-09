import React from 'react';
import { Link } from 'react-router-dom';

const MobileAppDev = () => {
    return (
        <main className="page-hero bg-grid">
            <div className="container">
                <div className="max-w-4xl">
                    <div className="reveal">
                        <div className="badge badge-light">Services</div>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            iOS & Android <span className="text-gradient">App Development</span>
                        </h1>
                        <p className="page-lead">Native and cross-platform mobile applications tailored for optimal performance and user experience.</p>
                    </div>

                    <div className="mt-16 reveal delay-100 p-8 md:p-12 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Custom Mobile Apps?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">In today's fast-paced digital ecosystem, a custom mobile app provides a direct line to your audience, ensuring heightened engagement and delivering unique value. We build extremely fast applications tailored to your specific market needs using React Native, Flutter, Swift, and Kotlin.</p>

                        <h2 className="text-3xl font-bold mb-6">Our Process</h2>
                        <ul className="space-y-6 mb-12">
                            {[
                                { title: "Strategy & Consultation", desc: "We analyze your ideas to outline the most efficient path." },
                                { title: "UI/UX Design", desc: "Engaging interfaces built for seamless device usage." },
                                { title: "Development & QA", desc: "Agile engineering with rigorous automated testing." },
                                { title: "Launch & Support", desc: "Deployment to Google Play and Apple App Stores with 24/7 support." }
                            ].map((step, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 font-bold text-sm">{i + 1}</div>
                                    <div>
                                        <strong className="text-slate-900 block mb-1">{step.title}</strong>
                                        <span className="text-slate-600">{step.desc}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex pt-4">
                            <Link to="/contact-us" className="btn btn-primary px-10 py-4">Start Your Project →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MobileAppDev;
