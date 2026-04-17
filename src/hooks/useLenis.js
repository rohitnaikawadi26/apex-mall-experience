import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
  useEffect(() => {
    // 1. Force Reset on Page Load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    
    if (window.location.hash) {
      window.history.replaceState(null, null, window.location.pathname);
    }

    // 2. Initialize Lenis
    let lenis;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
      });

      const raf = (time) => {
        lenis.raf(time);
        requestAnimationFrame(raf);
      };
      requestAnimationFrame(raf);

      // 3. Global Anchor Interceptor
      const handleAnchorClick = (e) => {
        const target = e.target.closest('a');
        if (target && target.hash && target.origin === window.location.origin) {
          const element = document.querySelector(target.hash);
          if (element) {
            e.preventDefault();
            lenis.scrollTo(element, { offset: 0, duration: 1.5 });
            window.dispatchEvent(new Event('closeMenu'));
          }
        }
      };
      
      document.addEventListener('click', handleAnchorClick);

      return () => {
        lenis.destroy();
        document.removeEventListener('click', handleAnchorClick);
      };
    } catch (error) {
      console.error("Lenis neglected to initialize:", error);
    }
  }, []);
};
