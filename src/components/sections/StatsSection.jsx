import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Users, Maximize, ShoppingBag, Utensils } from 'lucide-react';
import './StatsSection.css';

const StatItem = ({ number, label, desc, suffix = "", icon: Icon, delay = 0 }) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const numericValue = typeof number === 'string' ? parseFloat(number.replace(/,/g, '')) : number;

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 2.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (value) => setDisplayNumber(Math.floor(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue, delay]);

  const formattedNumber = typeof number === 'string' && number.includes(',')
    ? displayNumber.toLocaleString()
    : displayNumber;

  return (
    <motion.div
      ref={ref}
      className="metric-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
    >
      <div className="metric-icon-box">
        <Icon size={22} strokeWidth={1.5} />
      </div>
      <div className="metric-data">
        <div className="metric-value">
          <span className="num">{formattedNumber}</span>
          <span className="suf">{suffix}</span>
        </div>
        <div className="metric-label">{label}</div>
        <p className="metric-desc">{desc}</p>
      </div>
      <div className="metric-accent-line"></div>
    </motion.div>
  );
};


const StatsSection = () => {
  return (
    <section className="stats-section" id="explore">
      <div className="stats-hero-bg">
        <div className="stats-hero-overlay"></div>
        <img
          src="/assets/grand_mall_atrium.png"
          alt="Grand Mall Atrium"
          className="atrium-img"
        />
      </div>

      <div className="container stats-inner-content">
        <header className="stats-header-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="stats-badge-premium">DESTINATION METRICS</span>
            <h2 className="stats-main-h">
              Unrivaled Scale.<br />
              <span className="accent-text">Global Dominance.</span>
            </h2>
            <p className="stats-sub-h-refined">
              Where legacy meets luxury. APEX stands as the definitive global heartbeat <br />
              of fashion, lifestyle innovation, and cultural excellence.
            </p>
            <div className="stats-header-line"></div>
          </motion.div>
        </header>

        <div className="stats-premium-grid">
          <StatItem 
            icon={Users} 
            number="120" 
            suffix="M+" 
            label="Annual Footfall" 
            desc="Unmatched global traffic consistent across 365 days."
            delay={0.1} 
          />
          <StatItem 
            icon={Maximize} 
            number="12" 
            suffix="M" 
            label="GLA Sq Ft" 
            desc="The largest retail and lifestyle footprint in the region."
            delay={0.2} 
          />
          <StatItem 
            icon={ShoppingBag} 
            number="1200" 
            suffix="+" 
            label="Elite Brands" 
            desc="A curated universe of high-end international fashion."
            delay={0.3} 
          />
          <StatItem 
            icon={Utensils} 
            number="200" 
            suffix="+" 
            label="Dining Concepts" 
            desc="Signature culinary excellence from Michelin-star icons."
            delay={0.4} 
          />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
