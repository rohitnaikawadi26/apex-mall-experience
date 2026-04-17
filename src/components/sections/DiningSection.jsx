import React from 'react';
import { motion } from 'framer-motion';
import './DiningSection.css';

const diningImages = [
  "/assets/Dinning%20image1.png",
  "/assets/Dinning%20image2.png",
  "/assets/Dinning%20image3.png"
];

const DiningSection = () => {
  return (
    <section className="dining-section section-padding" id="dining">
      <div className="container">
        <div className="dining-header-grid">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="section-subtitle">Gastronomy</h5>
            <h2 className="section-title">A Symphony<br/>Of Flavors</h2>
          </motion.div>
          <motion.div 
            className="dining-desc"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <p>From Michelin-starred dining to vibrant, contemporary social spaces. Over 200 culinary destinations curated to spark the senses and elevate connection.</p>
          </motion.div>
        </div>

        <div className="dining-gallery">
           {diningImages.map((src, idx) => {
             const labels = ["Signature Fine Dining", "Contemporary Social Spaces", "Al Fresco Experience"];
             return (
               <motion.div 
                 key={idx}
                 className={`dining-card card-${idx}`}
                 initial={{ opacity: 0, y: 100 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: false, amount: 0.3 }}
                 transition={{ duration: 0.8, delay: idx * 0.2 }}
                 whileHover={{ scale: 1.03 }}
               >
                 <img src={src} alt={labels[idx] || "Dining Destination"} loading="lazy" />
                 <div className="dining-card-overlay">
                    <span>{labels[idx]}</span>
                 </div>
               </motion.div>
             );
           })}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
