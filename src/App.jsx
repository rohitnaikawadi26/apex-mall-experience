import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown } from 'lucide-react';
import HeroVideo from './components/sections/HeroVideo';
import StatsSection from './components/sections/StatsSection';
import RetailSection from './components/sections/RetailSection';
import LuxurySection from './components/sections/LuxurySection';
import DiningSection from './components/sections/DiningSection';
import AttractionsSection from './components/sections/AttractionsSection';
import EventsSection from './components/sections/EventsSection';
import CTASection from './components/sections/CTASection';

const slides = [
  { id: 'hero', component: HeroVideo, label: 'Hero' },
  { id: 'stats', component: StatsSection, label: 'Statistics' },
  { id: 'retail', component: RetailSection, label: 'Retail' },
  { id: 'luxury', component: LuxurySection, label: 'Luxury' },
  { id: 'dining', component: DiningSection, label: 'Dining' },
  { id: 'attractions', component: AttractionsSection, label: 'Attractions' },
  { id: 'events', component: EventsSection, label: 'Events' },
  { id: 'cta', component: CTASection, label: 'Contact' }
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const isTransitioning = useRef(false);
  const lastWheelTime = useRef(0);

  const changeSlide = useCallback((newIndex) => {
    if (isTransitioning.current || newIndex === currentSlide) return;
    if (newIndex >= 0 && newIndex < slides.length) {
      isTransitioning.current = true;
      setDirection(newIndex > currentSlide ? 1 : -1);
      setCurrentSlide(newIndex);
      setTimeout(() => {
        isTransitioning.current = false;
      }, 1000); // match transition duration
    }
  }, [currentSlide]);

  const handleNext = useCallback(() => changeSlide(currentSlide + 1), [currentSlide, changeSlide]);
  const handlePrev = useCallback(() => changeSlide(currentSlide - 1), [currentSlide, changeSlide]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't intercept if user is typing in form inside contact section
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        handleNext();
      } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelTime.current < 1200) return;

      // Allow minor threshold to prevent sensitive trackpad skips
      if (e.deltaY > 20) {
        lastWheelTime.current = now;
        handleNext();
      } else if (e.deltaY < -20) {
        lastWheelTime.current = now;
        handlePrev();
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [handleNext, handlePrev]);

  const slideVariants = {
    enter: (direction) => ({
      y: direction > 0 ? '4%' : '-4%',
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      y: direction < 0 ? '4%' : '-4%',
      opacity: 0,
      scale: 1.02
    })
  };

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="presentation-app" style={{ height: '100vh', width: '100vw', overflow: 'hidden', position: 'relative', backgroundColor: 'var(--bg-primary)' }}>

      <div className="presentation-container" style={{ position: 'relative', height: '100%', width: '100%' }}>
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'hidden' }}
          >
            <div className="presentation-slide-wrapper" style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
              <CurrentComponent 
                onNext={handleNext} 
                isActive={true} /* Only the current component in AnimatePresence is active */
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Digital Deck Branding Tag */}
      <div className="deck-branding-tag" style={{ position: 'absolute', left: '40px', top: '40px', zIndex: 100, display: 'flex', alignItems: 'center', gap: '15px' }}>
        <div style={{ height: '2px', width: '30px', background: 'var(--accent-gold)' }}></div>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.3em', color: '#fff', opacity: 0.8 }}>DIGITAL SALES DECK 2026</span>
      </div>

      {/* Slide Number Indicator */}
      <div className="slide-number-indicator" style={{ position: 'absolute', left: '40px', bottom: '40px', zIndex: 100 }}>
        <span style={{ fontSize: '2.5rem', fontWeight: 200, color: 'var(--accent-gold)', fontFamily: 'var(--font-heading)' }}>{String(currentSlide + 1).padStart(2, '0')}</span>
        <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.3)', margin: '0 10px' }}>/</span>
        <span style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.3)' }}>{String(slides.length).padStart(2, '0')}</span>
      </div>

       {/* Circular Sidebar Navigation Strip */}
       <AnimatePresence>
         {currentSlide > 0 && (
           <motion.div 
             className="deck-circular-nav" 
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             exit={{ opacity: 0, x: 20 }}
             style={{ 
               position: 'absolute', 
               right: '30px', 
               top: '42%', 
               transform: 'translateY(-50%)', 
               display: 'flex', 
               flexDirection: 'column', 
               alignItems: 'center', 
               gap: '20px', 
               zIndex: 100 
             }}
           >
             {/* Circular Up Button (Highlighted) */}
             <motion.button
               onClick={handlePrev}
               animate={currentSlide > 0 ? { boxShadow: ['0 0 0px var(--accent-gold)', '0 0 10px var(--accent-gold)', '0 0 0px var(--accent-gold)'] } : {}}
               transition={{ duration: 2, repeat: Infinity }}
               whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-gold)', color: '#000' }}
               style={{ 
                 width: '56px',
                 height: '56px',
                 background: 'rgba(var(--accent-gold-rgb), 0.1)', 
                 border: '1px solid var(--accent-gold)', 
                 color: 'var(--accent-gold)',
                 borderRadius: '50%',
                 cursor: 'pointer',
                 display: 'flex', alignItems: 'center', justifyContent: 'center',
                 backdropFilter: 'blur(10px)',
                 transition: 'all 0.4s ease'
               }}
             >
               <ChevronUp size={24} />
             </motion.button>

             {/* Minimalist Dots */}
             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', padding: '10px 0' }}>
               {slides.map((slide, index) => (
                 <div 
                   key={slide.id}
                   onClick={() => changeSlide(index)}
                   style={{
                     width: '6px',
                     height: currentSlide === index ? '18px' : '6px',
                     background: currentSlide === index ? 'var(--accent-gold)' : 'rgba(255,255,255,0.2)',
                     borderRadius: '10px',
                     cursor: 'pointer',
                     transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                     boxShadow: currentSlide === index ? '0 0 10px rgba(255,184,0,0.4)' : 'none'
                   }}
                   title={slide.label}
                 />
               ))}
             </div>

             {/* Circular Down Button (High-Highlight) */}
             <motion.button
               onClick={handleNext}
               disabled={currentSlide === slides.length - 1}
               animate={currentSlide < slides.length - 1 ? { boxShadow: ['0 0 0px var(--accent-gold)', '0 0 15px var(--accent-gold)', '0 0 0px var(--accent-gold)'] } : {}}
               transition={{ duration: 2, repeat: Infinity }}
               whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-gold)', color: '#000' }}
               style={{ 
                 width: '56px',
                 height: '56px',
                 background: currentSlide === slides.length - 1 ? 'rgba(255,255,255,0.02)' : 'rgba(var(--accent-gold-rgb), 0.1)', 
                 border: `1px solid ${currentSlide === slides.length - 1 ? 'rgba(255,255,255,0.1)' : 'var(--accent-gold)'}`, 
                 color: currentSlide === slides.length - 1 ? 'rgba(255,255,255,0.1)' : 'var(--accent-gold)',
                 borderRadius: '50%',
                 cursor: currentSlide === slides.length - 1 ? 'default' : 'pointer',
                 display: 'flex', alignItems: 'center', justifyContent: 'center',
                 backdropFilter: 'blur(10px)',
                 transition: 'all 0.4s ease'
               }}
             >
               <ChevronDown size={28} />
             </motion.button>
           </motion.div>
         )}
       </AnimatePresence>

    </div>
  );
}

export default App;
