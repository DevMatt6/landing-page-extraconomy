import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Disable browser's automatic scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Force immediate scroll to top
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' as any // Use 'instant' to override smooth scroll CSS
        });
    }, [pathname]);

    return null;
}
