import React, { useEffect, useState } from 'react';
import './Preloader.css';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Artificial 2-second delay to show the nice animation and simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`preloader ${!loading ? 'preloader-hidden' : ''}`}>
            <div className="loader-content">
                <div className="logo-spinner">
                    <div className="logo-icon-loader">A</div>
                </div>
                <div className="loading-text">
                    <span className="logo-text-dark">Aakash</span>
                    <span className="logo-text-blue">NexaTech</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill"></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
