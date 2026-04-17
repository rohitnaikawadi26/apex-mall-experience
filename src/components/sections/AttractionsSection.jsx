import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './AttractionsSection.css';

const attractionsData = [
  {
    id: 'aquarium',
    title: 'Underwater Zoo & Aquarium',
    category: 'MARINE EXPLORATION',
    description: 'Immerse yourself in one of the largest suspended aquariums in the world. Walk through the 48-metre tunnel enveloped by thousands of aquatic animals.',
    mediaType: 'video',
    src: '/assets/Dubai_Aquarium.mp4',
    stats: ['10M+ Liters', '33,000+ Animals']
  }
];

const AttractionBlock = ({ data, index }) => {
  const isVideo = data.mediaType === 'video';

  return (
    <motion.div 
      className="attraction-block"
      initial={{ opacity: 0, y: 100, filter: 'blur(15px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.div 
        className="attraction-media-container"
        whileHover="hover"
        initial="rest"
      >
        {/* Media Layer */}
        <motion.div 
          className="attraction-media"
          variants={{
            rest: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {isVideo ? (
            <video autoPlay loop muted playsInline className="attraction-video">
              <source src={data.src} type="video/mp4" />
            </video>
          ) : (
             <div 
               className="attraction-image"
               style={{ backgroundImage: `url(${data.src})` }}
             ></div>
          )}
        </motion.div>

        {/* Overlay Layer */}
        <div className="attraction-overlay"></div>

        {/* Content Layer */}
        <div className="attraction-content">
          <motion.div 
             className="attraction-text-wrapper"
             variants={{
                rest: { y: 0 },
                hover: { y: -10 }
             }}
             transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span className="attraction-category">{data.category}</span>
            <h3 className="attraction-title">{data.title}</h3>
            <p className="attraction-desc">{data.description}</p>
            
            <div className="attraction-stats">
              {data.stats.map((stat, i) => (
                <div key={i} className="attraction-stat-item">
                  <span className="stat-dot"></span>
                  {stat}
                </div>
              ))}
            </div>
            

          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AttractionsSection = () => {
  return (
    <section className="attractions-section" id="attractions">
      <div className="container">
        <motion.div 
          className="attractions-header"
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="section-title">Beyond Retail.<br/>A Destination <span className="gold-gradient-text">Experience.</span></h2>
          <p className="section-subtext">World-class attractions driving millions of visitors every year</p>
        </motion.div>

        <div className="attractions-list">
          {attractionsData.map((attraction, idx) => (
            <AttractionBlock key={attraction.id} data={attraction} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttractionsSection;
