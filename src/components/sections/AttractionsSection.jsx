import React from 'react';
import { motion } from 'framer-motion';
import './AttractionsSection.css';

const AttractionsSection = ({ isActive }) => {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(e => console.log("Playback blocked", e));
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <section className="attractions-section" id="attractions">
      
      {/* Immersive Edge-to-Edge Video Background */}
      <div className="attractions-video-bg">
        <video 
          ref={videoRef}
          loop 
          muted 
          playsInline
          preload="none"
          poster="/assets/attractions_aquarium_1776320542062.png"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src="/assets/Dubai_Aquarium.mp4" type="video/mp4" />
        </video>
        {/* Deep cinematic fade from left to right */}
        <div className="attractions-gradient-overlay"></div>
      </div>

      <div className="attractions-content-container">
        
        <motion.div 
          className="attractions-text-panel"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        >
          <div className="attractions-branding">
            <span className="dot-indicator"></span>
            MARINE EXPLORATION
          </div>

          <span className="attractions-kicker">Beyond Retail</span>
          
          <h2 className="attractions-title">
            A Destination <br />
            <span className="attractions-title-gold">Experience.</span>
          </h2>
          
          <div className="attractions-divider"></div>

          <p className="attractions-desc">
            Immerse yourself in one of the largest suspended aquariums in the world. Walk through the breathtaking 48-metre glass tunnel enveloped by thousands of aquatic animals, creating an unforgettable anchor attraction that drives millions of global visitors annually.
          </p>

          <div className="attractions-stats-grid">
            <div className="a-stat">
              <h3>10M+</h3>
              <span>Liters of Water</span>
            </div>
            <div className="a-stat">
              <h3>33K+</h3>
              <span>Aquatic Animals</span>
            </div>
            <div className="a-stat">
              <h3>48m</h3>
              <span>Viewing Tunnel</span>
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default AttractionsSection;
