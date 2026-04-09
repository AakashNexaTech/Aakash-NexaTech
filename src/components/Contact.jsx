import React, { useState } from 'react';
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
        <section className="py-20 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-5 gap-16">
                <div className="lg:col-span-2 reveal-left">
                    <div className="badge badge-light">Get in touch</div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Let's Build Something <span className="text-gradient">Amazing</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Ready to transform your idea into a digital reality? Reach out to us, and let's start a conversation about how we can help your business grow.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Call Us</h4>
                                <a target='_blank' href="https://api.whatsapp.com/send?phone=919499762136&text=Hello! I'm interested in your services." className="text-slate-600">+91 94997 62136</a>
                                <br />
                                <a target='_blank' href="https://api.whatsapp.com/send?phone=919081069042&text=Hello! I'm interested in your services." className="text-slate-600">+91 90810 69042</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                                <a href="mailto:aakashnexatech@gmail.com" className="text-primary font-medium hover:underline">aakashnexatech@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-primary flex items-center justify-center shrink-0">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 mb-1">Our Location</h4>
                                <p className="text-slate-600">Ahmedabad, Gujarat - India</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-3 reveal-right">
                    <form className="p-8 md:p-10 bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50" onSubmit={handleSubmit}>
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Tony Stark"
                                    className="px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="tony@stark.com"
                                    className="px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 mb-6">
                            <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                            <input
                                type="text"
                                name="company"
                                placeholder="Stark Industries"
                                className="px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all placeholder:text-slate-400"
                                value={formData.company}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex flex-col gap-2 mb-8">
                            <label className="text-sm font-bold text-slate-700 ml-1">Project Details</label>
                            <textarea
                                name="projectDetails"
                                placeholder="Tell us about your project, timeline, and budget..."
                                rows="4"
                                className="px-5 py-4 rounded-xl bg-slate-50 border border-slate-100 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none placeholder:text-slate-400"
                                required
                                value={formData.projectDetails}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className={`w-full btn btn-primary py-5 text-lg group ${status === 'success' ? '!bg-emerald-500 shadow-emerald-200' : ''}`}
                            disabled={status === 'submitting'}
                        >
                            {status === 'submitting' ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : status === 'success' ? (
                                'Message Sent Successfully!'
                            ) : status === 'error' ? (
                                'Failed to send. Try again.'
                            ) : (
                                <>
                                    Let's Build Your Digital Product
                                    <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" /></svg>
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
