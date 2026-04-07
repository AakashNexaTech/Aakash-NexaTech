import React from 'react';

const PrivacyPolicy = () => {
    return (
        <main className="section-padding bg-pattern" style={{ minHeight: '80vh', paddingTop: '10rem' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="section-header reveal" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                    <h1 className="section-title text-left">Privacy <span className="text-gradient">Policy</span></h1>
                    <p style={{ color: 'var(--text-muted)' }}>Last Updated: March 2026</p>
                </div>

                <div className="reveal delay-100" style={{ background: 'white', padding: '3rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)', lineHeight: '1.8', color: 'var(--text-body)' }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>1. Introduction</h2>
                    <p style={{ marginBottom: '2rem' }}>Welcome to Aakash NexaTech. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>2. Data We Collect About You</h2>
                    <p style={{ marginBottom: '2rem' }}>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you. We do not collect any Special Categories of Personal Data about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health and genetic and biometric data).</p>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>3. How We Use Your Personal Data</h2>
                    <p style={{ marginBottom: '2rem' }}>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances: Where we need to perform the contract we are about to enter into or have entered into with you. Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests. Where we need to comply with a legal or regulatory obligation.</p>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>4. Data Security</h2>
                    <p style={{ marginBottom: '2rem' }}>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</p>

                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>5. Contact Us</h2>
                    <p>For any privacy-related inquiries or to request data removal, please email us directly at aakashnexatech@gmail.com.</p>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
