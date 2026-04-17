import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './StatsSection.css';

const StatItem = ({ number, label, suffix = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  
  return (
    <motion.div 
      className="stat-item"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="stat-number">
        <span className="gold-gradient-text">{number}{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </motion.div>
  );
};

const StatsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section className="stats-section" ref={sectionRef} id="explore">
      <motion.div className="stats-bg-container" style={{ y: bgY }}>
        <video 
           autoPlay 
           loop 
           muted 
           playsInline
           className="stats-video"
           poster="/assets/attractions_aquarium_1776320542062.png"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-of-people-crossing-a-street-in-the-city-11520-large.mp4" type="video/mp4" />
        </video>
        <div className="stats-overlay"></div>
      </motion.div>

      <div className="container stats-content">
        <motion.div 
           className="stats-header"
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: false, amount: 0.5 }}
           transition={{ duration: 1 }}
        >
          <h2>A World Within<br/>A City</h2>
        </motion.div>
        
        <div className="stats-grid">
          <StatItem number="120" suffix="M+" label="Annual Visitors" delay={0.1} />
          <StatItem number="12" suffix="M" label="Sq Ft Total Area" delay={0.2} />
          <StatItem number="1,200" suffix="+" label="Premium Brands" delay={0.3} />
          <StatItem number="200" suffix="+" label="Dining Experiences" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
