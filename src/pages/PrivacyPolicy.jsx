import React from 'react';

const PrivacyPolicy = () => {
    return (
        <main className="section-padding bg-grid min-h-[80vh] pt-40 pb-20">
            <div className="container max-w-4xl">
                <div className="reveal mb-12">
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Privacy <span className="text-gradient">Policy</span></h1>
                    <p className="text-slate-500 font-medium">Last Updated: March 2026</p>
                </div>

                <div className="reveal delay-100 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
                        <p className="text-slate-600 leading-relaxed">Welcome to Aakash NexaTech. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect About You</h2>
                        <p className="text-slate-600 leading-relaxed">Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you. We do not collect any Special Categories of Personal Data about you.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Personal Data</h2>
                        <p className="text-slate-600 leading-relaxed">We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</p>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Data Security</h2>
                        <p className="text-slate-600 leading-relaxed">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Contact Us</h2>
                        <p className="text-slate-600 leading-relaxed">For any privacy-related inquiries or to request data removal, please email us directly at <a href="mailto:aakashnexatech@gmail.com" className="text-primary font-bold hover:underline">aakashnexatech@gmail.com</a>.</p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
