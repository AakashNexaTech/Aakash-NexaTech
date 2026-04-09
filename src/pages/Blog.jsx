import React from 'react';

const Blog = () => {
    return (
        <main className="section-padding bg-grid page-hero page-hero-center">
            <div className="container">
                <div className="reveal">
                    <div className="badge badge-light">Insights & News</div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our <span className="text-gradient">Blog</span></h1>
                    <p className="page-lead center">
                        Discover the latest trends, tips, and insights from the worlds of software engineering and digital growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 page-grid">
                    {[1, 2, 3, 4, 5, 6].map((idx) => (
                        <div className={`p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal delay-${Math.min(idx * 100, 500)}`} key={idx} style={{ cursor: 'pointer' }}>
                            <div className="h-48 bg-slate-100 rounded-2xl mb-6 overflow-hidden">
                                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                                    <svg className="text-primary/20" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-3 block">Article</span>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">How to Scale Your Mobile App in 2026</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-6">Learn the top strategies for maintaining a stable infrastructure as your user base grows.</p>
                            <div className="flex items-center text-primary font-bold text-sm">
                                Read more
                                <svg className="ml-2 group-hover:translate-x-1" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default Blog;
