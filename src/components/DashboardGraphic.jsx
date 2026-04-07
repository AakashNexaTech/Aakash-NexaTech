import React from 'react';
import './DashboardGraphic.css';

const DashboardGraphic = () => {
    return (
        <div className="dashboard-graphic">
            <div className="window-header">
                <div className="dots">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="window-tabs">
                    <div className="tab active">Dashboard</div>
                    <div className="tab">Analytics</div>
                    <div className="tab">Reports</div>
                </div>
            </div>

            <div className="dashboard-content">
                <div className="kpi-cards">
                    <div className="kpi-card">
                        <div className="kpi-icon blue">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                        </div>
                        <h4>Revenue</h4>
                        <div className="kpi-value">
                            <span>$48.2K</span>
                            <span className="kpi-change positive">+24%</span>
                        </div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-icon purple">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <h4>Active Users</h4>
                        <div className="kpi-value">
                            <span>12.4K</span>
                            <span className="kpi-change positive">+18%</span>
                        </div>
                    </div>
                    <div className="kpi-card">
                        <div className="kpi-icon orange">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        </div>
                        <h4>Conversions</h4>
                        <div className="kpi-value">
                            <span>842</span>
                            <span className="kpi-change positive">+32%</span>
                        </div>
                    </div>
                </div>

                <div className="dashboard-chart-area">
                    <div className="growth-rate-badge">
                        <div className="growth-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </div>
                        <div>
                            <p>Growth Rate</p>
                            <h3>+127%</h3>
                        </div>
                    </div>

                    <div className="bar-chart">
                        <div className="bar" style={{ height: '30%', backgroundColor: 'rgba(37, 99, 235, 0.2)' }}></div>
                        <div className="bar" style={{ height: '50%', backgroundColor: 'rgba(37, 99, 235, 0.3)' }}></div>
                        <div className="bar" style={{ height: '70%', backgroundColor: 'rgba(37, 99, 235, 0.4)' }}></div>
                        <div className="bar" style={{ height: '40%', backgroundColor: 'rgba(37, 99, 235, 0.3)' }}></div>
                        <div className="bar" style={{ height: '80%', backgroundColor: 'rgba(37, 99, 235, 0.5)' }}></div>
                        <div className="bar" style={{ height: '60%', backgroundColor: 'rgba(37, 99, 235, 0.4)' }}></div>
                        <div className="bar" style={{ height: '90%', backgroundColor: 'rgba(37, 99, 235, 0.6)' }}></div>
                        <div className="bar" style={{ height: '50%', backgroundColor: 'rgba(37, 99, 235, 0.4)' }}></div>
                        <div className="bar" style={{ height: '100%', backgroundColor: 'rgba(37, 99, 235, 0.8)' }}></div>
                        <div className="bar" style={{ height: '110%', backgroundColor: 'var(--primary)' }}></div>
                    </div>
                </div>
            </div>
            <div className="abstract-arrow">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M5 19L19 5M19 5v14M19 5H5" /></svg>
            </div>
        </div>
    );
};

export default DashboardGraphic;
