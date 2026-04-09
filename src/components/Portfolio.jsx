import React, { useState } from 'react';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Mobile App', 'Admin Dashboard', 'Web Platform', 'UI Design'];

    const projects = [
        {
            title: "FinTech Mobile App",
            category: "Mobile App",
            tech: "React Native, Node.js",
            image: "bg-gradient-to-br from-blue-900 to-blue-500"
        },
        {
            title: "E-Commerce Dashboard",
            category: "Admin Dashboard",
            tech: "React, TypeScript",
            image: "bg-gradient-to-br from-emerald-900 to-emerald-500"
        },
        {
            title: "Healthcare Platform",
            category: "Web Platform",
            tech: "Next.js, Python",
            image: "bg-gradient-to-br from-violet-900 to-violet-500"
        },
        {
            title: "Logistics Admin",
            category: "Admin Dashboard",
            tech: "Vue.js, Firebase",
            image: "bg-gradient-to-br from-red-900 to-red-500"
        },
        {
            title: "Real Estate App UI",
            category: "UI Design",
            tech: "Figma, Framer",
            image: "bg-gradient-to-br from-amber-900 to-amber-500"
        },
        {
            title: "Social Network App",
            category: "Mobile App",
            tech: "Flutter, Firebase",
            image: "bg-gradient-to-br from-sky-900 to-sky-500"
        }
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section className="py-20 bg-white" id="portfolio">
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="text-center mb-12 reveal">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our <span className="text-gradient">Latest Work</span></h2>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16 reveal delay-100">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 border ${filter === cat
                                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/25'
                                    : 'bg-white text-slate-600 border-slate-100 hover:border-primary/30 hover:text-primary'
                                }`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, idx) => (
                        <div className={`group bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden reveal delay-${Math.min((idx + 1) * 100, 500)}`} key={idx}>
                            <div className={`h-64 relative overflow-hidden ${project.image}`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                                    <button className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-8">
                                <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{project.category}</span>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-500 text-sm font-medium">{project.tech}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
