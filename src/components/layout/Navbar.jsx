import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    const handleCloseMenu = () => setMenuOpen(false);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('closeMenu', handleCloseMenu);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('closeMenu', handleCloseMenu);
    };
  }, []);

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'nav-scrolled glass' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="container nav-container">
          <div className="nav-logo">
            <a href="#top" style={{ color: 'inherit', textDecoration: 'none' }}>THE APEX</a>
          </div>
          
          <div className="nav-links hidden-mobile">
            <a href="#explore">Explore</a>
            <a href="#retail">Brands</a>
            <a href="#luxury">Luxury</a>
            <a href="#dining">Dining</a>
            <a href="#attractions">Attractions</a>
          </div>

          <div className="nav-actions">
            <a href="#events" className="btn-primary nav-cta-btn hidden-mobile">
              Host Your Event
            </a>
            <button 
              className="menu-toggle" 
              onClick={() => setMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div 
              className="menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            
            <motion.div 
              className="side-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="drawer-header">
                 <div className="nav-logo">THE APEX</div>
                 <button onClick={() => setMenuOpen(false)} className="menu-close">
                   <X size={28}/>
                 </button>
              </div>
              
              <div className="drawer-links">
                 {['Explore', 'Brands', 'Luxury', 'Dining', 'Attractions', 'Events'].map((item, i) => (
                    <motion.a 
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * i + 0.2 }}
                    >
                      <span className="link-num">0{i + 1}</span>
                      <span className="link-text">{item}</span>
                      <ArrowRight className="link-arrow" size={20}/>
                    </motion.a>
                 ))}
              </div>
              
              <div className="drawer-footer">
                 <a href="#events" className="btn-primary w-full" onClick={() => setMenuOpen(false)}>
                   HOST YOUR EVENT
                 </a>
                 <div className="drawer-socials">
                    <a href="https://www.linkedin.com/in/rohit26100/" target="_blank" rel="noopener noreferrer" className="social-icon">
                      {/* LinkedIn SVG */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="https://github.com/rohitnaikawadi26" target="_blank" rel="noopener noreferrer" className="social-icon">
                      {/* GitHub SVG */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                    <a href="https://www.instagram.com/_million_dollar_26/" target="_blank" rel="noopener noreferrer" className="social-icon">
                      {/* Instagram SVG */}
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                 </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
