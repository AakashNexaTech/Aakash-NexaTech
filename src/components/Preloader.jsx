import React, { useEffect, useState } from 'react';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-all duration-700 ease-in-out ${!loading ? 'opacity-0 pointer-events-none invisible' : 'opacity-100'}`}>
            <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white font-black text-4xl shadow-xl shadow-primary/20 animate-bounce mb-6">A</div>
                <div className="flex items-center gap-1 text-2xl font-extrabold tracking-tight mb-8">
                    <span className="text-slate-900">Aakash</span>
                    <span className="text-primary">NexaTech</span>
                </div>
                <div className="w-48 h-1.5 bg-slate-100 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary-gradient animate-[loading_2s_ease-in-out_infinite]"></div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0); }
                    100% { transform: translateX(100%); }
                }
            `}} />
        </div>
    );
};

export default Preloader;
