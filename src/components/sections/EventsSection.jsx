import React from 'react';
import { motion } from 'framer-motion';
import './EventsSection.css';

const EventsSection = ({ isActive }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Playback blocked", e));
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <section className="events-section" id="events">
      
      {/* Sleek Dark Base Background */}
      <div className="events-dark-layer"></div>
      
      {/* Massive subtle watermark spanning the gap */}
      <div className="events-watermark">GLOBAL</div>

      <div className="events-split-layout">
        
        {/* LEFT SIDE: Typography */}
        <div className="events-typography-col">
          <motion.div 
            className="events-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div className="events-kicker-wrapper">
              <div className="events-kicker-line"></div>
              <span className="events-kicker">Global Platform</span>
            </div>
            
            <h2 className="events-title">
              The Stage <br/>
              <span className="events-title-italic">Is Yours.</span>
            </h2>
            
            <p className="events-desc">
              From exclusive haute couture fashion shows to international flagship brand launches. Our versatile, state-of-the-art activation zones offer unparalleled exposure, captivating an elite international audience.
            </p>

            <div className="events-feature-list">
              <span className="feature-chip">Runway Shows</span>
              <span className="feature-chip">Pop-up Boutiques</span>
              <span className="feature-chip">Global Expo</span>
            </div>
            
          </motion.div>
        </div>

        {/* RIGHT SIDE: Massive Display Floor-to-Ceiling Screen */}
        <motion.div 
          className="events-runway-screen"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.1, ease: "easeOut" }}
        >
          <div className="runway-video-container">
            <video 
              ref={videoRef}
              src="/assets/World_Of_Fashion_Launch_at_Mall.mp4" 
              loop 
              muted 
              playsInline 
              preload="none"
              poster="/assets/Dubai%20Fashion%20Launge.png"
              className="runway-video"
            />
          </div>

          {/* Floating Metric overlapping the video border for architectural depth */}
          <motion.div 
             className="metric-floating-card"
             initial={{ opacity: 0, x: 40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          >
             <div className="metric-val">300+</div>
             <div className="metric-label">Global Brands Launched</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default EventsSection;
