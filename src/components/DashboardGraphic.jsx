import React from 'react';

const DashboardGraphic = () => {
    return (
        <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden relative group animate-float">
            <div className="bg-slate-50 px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex gap-4">
                    <div className="text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-md">Dashboard</div>
                    <div className="text-xs font-bold text-slate-400">Analytics</div>
                    <div className="text-xs font-bold text-slate-400">Reports</div>
                </div>
            </div>

            <div className="p-8">
                <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                        { title: "Revenue", value: "$48.2K", change: "+24%", color: "blue" },
                        { title: "Active Users", value: "12.4K", change: "+18%", color: "indigo" },
                        { title: "Conversions", value: "842", change: "+32%", color: "emerald" }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100/50">
                            <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">{item.title}</h4>
                            <div className="flex items-end justify-between">
                                <span className="text-lg font-black text-slate-900">{item.value}</span>
                                <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded">{item.change}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-slate-50/30 rounded-2xl p-6 border border-slate-100/50 relative overflow-hidden">
                    <div className="flex justify-between items-start mb-8">
                        <div>
                            <p className="text-xs font-bold text-slate-400 mb-1">Total Growth</p>
                            <h3 className="text-2xl font-black text-slate-900">+127%</h3>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                        </div>
                    </div>

                    <div className="flex items-end justify-between h-32 gap-2">
                        {[30, 50, 70, 40, 80, 60, 90, 50, 100, 110].map((h, i) => (
                            <div
                                key={i}
                                className={`w-full rounded-t-md transition-all duration-1000 delay-${i * 50} ${i === 9 ? 'bg-primary shadow-lg shadow-primary/30' : 'bg-primary/20'}`}
                                style={{ height: `${h}%` }}
                            ></div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Decorative arrow element */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white rotate-45 transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 19L19 5M19 5v14M19 5H5" /></svg>
            </div>
        </div>
    );
};

export default DashboardGraphic;
