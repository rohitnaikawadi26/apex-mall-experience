import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './LuxurySection.css';

const LuxurySection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);
  const yText = useTransform(scrollYProgress, [0, 0.5, 1], ["50%", "0%", "-50%"]);

  return (
    <section className="luxury-section" ref={ref} id="luxury">
      <motion.div className="luxury-image-container" style={{ scale }}>
        <img 
           src="/assets/luxury_shopping_1776320358539.png" 
           alt="Luxury High-End Boutique" 
           className="luxury-image" 
           loading="lazy"
        />
        <div className="luxury-overlay"></div>
      </motion.div>

      <div className="luxury-content">
        <motion.div style={{ y: yText }} className="container luxury-text-box">
           <h5 className="section-subtitle">Exclusivity</h5>
           <h2 className="luxury-title">Where Luxury<br/>Meets Legacy.</h2>
           <p className="luxury-paragraph">
             Step into an environment meticulously crafted for the world’s most prestigious names. An architecture of elegance serving the ultimate luxury lifestyle.
           </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LuxurySection;
