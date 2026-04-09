import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const servicesList = [
        {
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
            ),
            iconColor: "text-blue-600 bg-blue-100",
            title: "Android & iOS App Development",
            description: "Native and cross-platform mobile applications tailored for optimal performance and user experience.",
            link: "/services/mobile-app-development"
        },
        {
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
            ),
            iconColor: "text-indigo-600 bg-indigo-100",
            title: "Web Development",
            description: "Responsive, scalable, and secure web platforms engineered to handle complex business logic.",
            link: "/services/web-development"
        },
        {
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12l2 2 4-4"></path>
                    <path d="M15 6l4 4-4 4"></path>
                    <path d="M3 18h18"></path>
                </svg>
            ),
            iconColor: "text-emerald-600 bg-emerald-100",
            title: "Startup MVP Development",
            description: "Rapid prototyping and minimum viable products to validate your idea with real users quickly.",
            link: "/services/startup-mvp"
        },
        {
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                </svg>
            ),
            iconColor: "text-violet-600 bg-violet-100",
            title: "UI/UX Modern Design",
            description: "User-centered design that focuses on engagement, retention, and beautiful aesthetics.",
            link: "/services/ui-ux-design"
        }
    ];

    return (
        <section className="py-20 bg-slate-50/50" id="services">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        What We <span className="text-gradient">Build</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                        We leverage standard technologies to create exceptional digital experiences across all platforms.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesList.map((service, index) => (
                        <Link
                            to={service.link}
                            key={index}
                            className={`group p-8 bg-white rounded-2xl border border-slate-100 shadow-sm shadow-slate-200/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 reveal-scale delay-${(index + 1) * 100}`}
                        >
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed mb-6">{service.description}</p>
                            <div className="flex items-center text-primary font-semibold text-sm">
                                Explore Service
                                <svg className="ml-2 group-hover:translate-x-1 transition-transform" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
