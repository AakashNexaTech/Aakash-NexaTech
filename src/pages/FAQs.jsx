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
        <main className="section-padding page-hero page-hero-center">
            <div className="container">
                <div className="section-header reveal">
                    <div className="badge badge-light">Questions Answered</div>
                    <h1 className="section-title">Frequently Asked <span className="text-gradient">Questions</span></h1>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, idx) => (
                        <div className={`why-card faq-card reveal delay-${idx * 100}`} key={idx}>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>{faq.question}</h3>
                            <p style={{ color: 'var(--text-body)', lineHeight: '1.6' }}>{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default FAQs;
