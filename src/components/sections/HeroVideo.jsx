import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './HeroVideo.css';

const HeroVideo = ({ onNext }) => {
  return (
    <div className="hero-container" id="home">
      <motion.div 
        className="hero-background"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <div className="hero-overlay" style={{ background: 'rgba(5, 5, 5, 0.4)' }}></div>
        <video 
           autoPlay 
           loop 
           muted 
           playsInline
           preload="auto"
           className="hero-video-element"
           poster="/assets/hero_mall_cinematic_1776320337172.png"
        >
          <source src="/assets/Hero%20Section.mp4" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div className="hero-content container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="hero-text-wrapper" style={{ marginTop: '0', textAlign: 'center' }}>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ fontSize: 'clamp(4rem, 8vw, 7rem)', letterSpacing: '-0.04em', lineHeight: '1.05', fontWeight: 500, margin: 0, padding: 0 }}
          >
            Experience<br/>The World.
          </motion.h1>

          <motion.div
            className="hero-subtitle-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <div className="hero-glass-tag">
              <span className="tag-stat">120M+ <small>VISITORS</small></span>
              <span className="tag-sep">•</span>
              <span className="tag-stat">1,200+ <small>BRANDS</small></span>
              <span className="tag-sep">•</span>
              <span className="tag-stat">ONE <small>DESTINATION</small></span>
            </div>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}
          >
            <button className="hero-btn-primary" onClick={onNext} style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              ENTER THE EXPERIENCE
              <ChevronDown size={20} />
              <span className="btn-glow"></span>
            </button>
            <motion.span 
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ 
                fontSize: '0.75rem', 
                letterSpacing: '0.4em', 
                color: 'rgba(255,255,255,0.7)', 
                textTransform: 'uppercase', 
                fontWeight: 600,
                textShadow: '0 0 10px rgba(var(--accent-gold-rgb), 0.3)'
              }}
            >
              Click to Discover
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVideo;
