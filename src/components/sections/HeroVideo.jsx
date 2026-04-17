import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './HeroVideo.css';

const HeroVideo = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="hero-container" ref={containerRef} id="home">
      <motion.div 
        className="hero-background"
        style={{ y: backgroundY }}
      >
        <div className="hero-overlay"></div>
        {/* We use an image with cinematic quality as poster/fallback, while testing video background */}
        <video 
           autoPlay 
           loop 
           muted 
           playsInline
           className="hero-video-element"
           poster="/assets/hero_mall_cinematic_1776320337172.png"
        >
          <source src="/assets/Hero%20Section.mp4?v=3" type="video/mp4" />
        </video>
      </motion.div>

      <motion.div 
        className="hero-content container"
        style={{ opacity }}
      >
        <div className="hero-text-wrapper">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="hero-subtitle gold-gradient-text">100M+ Visitors. Global Brands. One Destination.</h2>
          </motion.div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            Where The World<br/>Comes To Experience
          </motion.h1>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#retail" className="btn-primary">Explore Opportunities</a>
            <a href="#partner" className="btn-outline">Partner With Us</a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroVideo;
