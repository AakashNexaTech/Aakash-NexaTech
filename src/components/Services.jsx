import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    const servicesList = [
        {
            icon: (
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
            ),
            iconClass: "icon-mobile",
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
            iconClass: "icon-web",
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
            iconClass: "icon-mvp",
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
            iconClass: "icon-uiux",
            title: "UI/UX Modern Design",
            description: "User-centered design that focuses on engagement, retention, and beautiful aesthetics.",
            link: "/services/ui-ux-design"
        }
    ];

    return (
        <section className="services pb-section" id="services">
            <div className="container">
                <div className="section-header reveal">
                    <h2 className="section-title">What We <span className="text-gradient">Build</span></h2>
                </div>

                <div className="services-grid">
                    {servicesList.map((service, index) => (
                        <Link to={service.link} className={`service-card reveal-scale delay-${(index + 1) * 100}`} key={index} style={{ textDecoration: 'none', display: 'block', color: 'inherit' }}>
                            <div className={`service-icon ${service.iconClass}`}>
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
