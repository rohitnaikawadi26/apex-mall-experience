import React from 'react';
import { motion } from 'framer-motion';
import './DiningSection.css';

const diningImages = [
  "/assets/Dinning%20image1.png",
  "/assets/Dinning%20image2.png",
  "/assets/Dinning%20image3.png"
];

const labels = [
  { title: "Signature Fine Dining", desc: "Michelin-starred concepts" },
  { title: "Social Lounges", desc: "Contemporary vibrant spaces" },
  { title: "Al Fresco", desc: "Elevated terrace experiences" }
];

const DiningSection = () => {
  return (
    <section className="dining-section" id="dining">
      
      {/* Decorative vertical line in background */}
      <div className="dining-bg-line"></div>

      <div className="dining-container">
        
        <div className="dining-header-grid">
          <motion.div
            className="dining-title-col"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="dining-kicker">Gastronomy</span>
            <h2 className="dining-title">
              A Symphony <br/> 
              <span className="dining-title-italic">of Flavors.</span>
            </h2>
          </motion.div>

          <motion.div
            className="dining-desc-col"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="dining-desc-wrapper">
              <p className="dining-desc-text">
                From Michelin-starred masterpieces to vibrant, contemporary social lounges. Over 200 culinary destinations curated to spark the senses, redefine international cuisine, and elevate human connection.
              </p>
              <div className="dining-desc-stats">
                <span>FINE DINING</span>
                <span className="dot">•</span>
                <span>CASUAL ELEGANCE</span>
                <span className="dot">•</span>
                <span>GOUṘMET CAFÉS</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="dining-gallery">
          {diningImages.map((src, idx) => (
            <motion.div
              key={idx}
              className={`dining-card dining-card-${idx}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + (idx * 0.15), ease: "easeOut" }}
            >
              <div className="dining-card-inner">
                <img src={src} alt={labels[idx].title} loading="lazy" />
                <div className="dining-card-overlay">
                  <div className="dining-card-text">
                    <span className="dining-card-subtitle">{labels[idx].desc}</span>
                    <h4 className="dining-card-title">{labels[idx].title}</h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DiningSection;
