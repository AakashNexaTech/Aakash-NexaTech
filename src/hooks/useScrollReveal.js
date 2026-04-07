import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollReveal = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Scroll to top automatically when navigating to a new page
        window.scrollTo(0, 0);

        // We use an IntersectionObserver to detect when elements enter the viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1, // Trigger when 10% of the element is visible
            rootMargin: "0px 0px -50px 0px" // Slight offset so it animates right after entering
        });

        // Delay observing slightly to ensure React Router has fully rendered the DOM components for the new page
        const timer = setTimeout(() => {
            const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
            elements.forEach(el => observer.observe(el));
        }, 100);

        // Cleanup observer on unmount or route change
        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [pathname]);
};

export default useScrollReveal;
