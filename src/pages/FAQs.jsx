import React from 'react';

const FAQs = () => {
    const faqs = [
        { question: "How much does it cost to build a scaling mobile app?", answer: "Project costs vary widely based on requirements. A typical MVP might start around $15,000, while a larger, complex enterprise app could scale beyond $100,000. Contact us for a precise quote." },
        { question: "How long is your standard development timeline?", answer: "Our standard MVP takes 8-12 weeks from wireframing to launch. Complex products can take 4-8 months depending on feature scope and third-party integrations." },
        { question: "Do you own the code once a project is complete?", answer: "No, you do! Once specific milestones or final payments are met, our contracts dictate 100% immediate code ownership transfer to you." },
        { question: "What tech stack do you specialize in?", answer: "We build modern and robust stacks. On the frontend, we excel in React, Next.js, and scaling UI. For mobile, React Native & Flutter. Our backend of choice varies depending on project needs, typically Node.js, Python, Firebase, or AWS suites." },
        { question: "Will you provide post-launch support?", answer: "Absolutely. We offer competitive SLAs and ongoing maintenance retainers so your product stays healthy and updated through operating system updates and evolving user needs." }
    ];

    return (
        <main className="section-padding bg-grid page-hero page-hero-center">
            <div className="container">
                <div className="reveal">
                    <div className="badge badge-light">Questions Answered</div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Frequently Asked <span className="text-gradient">Questions</span></h1>
                </div>

                <div className="max-w-4xl mx-auto mt-20 space-y-6 text-left">
                    {faqs.map((faq, idx) => (
                        <div className={`p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all reveal delay-${idx * 100}`} key={idx}>
                            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-start gap-4">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-primary font-bold text-sm shrink-0">Q</span>
                                {faq.question}
                            </h3>
                            <div className="pl-12">
                                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default FAQs;
