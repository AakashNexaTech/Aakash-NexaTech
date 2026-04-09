import React from 'react';
import { Link } from 'react-router-dom';

const WebAppDev = () => {
    return (
        <main className="page-hero bg-grid">
            <div className="container">
                <div className="max-w-4xl">
                    <div className="reveal">
                        <div className="badge badge-light">Services</div>
                        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Web Platform <span className="text-gradient">Development</span>
                        </h1>
                        <p className="page-lead">Responsive, scalable, and secure web platforms engineered to handle complex business logic.</p>
                    </div>

                    <div className="mt-16 reveal delay-100 p-8 md:p-12 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
                        <h2 className="text-3xl font-bold mb-6">Powering the Web</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">We deliver highly performant web applications using modern Javascript frameworks like React, Next.js, Angular, and Vue. Whether you need an e-commerce platform, a real-time dashboard, or an internal enterprise tool, we meticulously architect custom solutions suited for high concurrency and zero-downtime scalability.</p>

                        <h2 className="text-3xl font-bold mb-6">What you get</h2>
                        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-12">
                            {[
                                { title: "PWA Capabilities", icon: "📱" },
                                { title: "SEO Optimized", icon: "🔍" },
                                { title: "Serverless Infrastructure", icon: "☁️" },
                                { title: "Fully Responsive", icon: "💻" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <span className="text-2xl">{item.icon}</span>
                                    <strong className="text-slate-900">{item.title}</strong>
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

export default WebAppDev;
