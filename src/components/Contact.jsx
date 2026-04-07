import React, { useState } from 'react';
import './Contact.css';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        projectDetails: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await addDoc(collection(db, "contacts"), {
                ...formData,
                timestamp: new Date()
            });
            setStatus('success');
            setFormData({ name: '', email: '', company: '', projectDetails: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error("Error adding document: ", error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    return (
        <section className="contact section-padding" id="contact">
            <div className="container contact-container">
                <div className="contact-info reveal-left">
                    <div className="badge badge-light">Get in touch</div>
                    <h2 className="section-title text-left">
                        Let's Build Something <span className="text-gradient">Amazing</span>
                    </h2>
                    <p className="contact-description">
                        Ready to transform your idea into a digital reality? Reach out to us, and let's start a conversation about how we can help your business grow.
                    </p>

                    <div className="contact-details">
                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <h4>Phone</h4>
                                <p>+91 94997 62136</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <h4>Email</h4>
                                <p>aakashnexatech@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <h4>Location</h4>
                                <p>Ahmedabad, Gujarat - IN</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper reveal-right">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" placeholder="Tony Stark" required value={formData.name} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="tony@stark.com" required value={formData.email} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Company</label>
                            <input type="text" name="company" placeholder="Stark Industries" value={formData.company} onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label>Project Details</label>
                            <textarea name="projectDetails" placeholder="Tell us about your project, timeline, and budget..." rows="4" required value={formData.projectDetails} onChange={handleChange}></textarea>
                        </div>

                        <button type="submit" className={`btn btn-primary submit-btn ${status === 'success' ? 'success' : ''}`} disabled={status === 'submitting'}>
                            {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent Successfully!' : status === 'error' ? 'Failed to send. Try again.' : (
                                <>
                                    Let's Build Your Digital Product
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
