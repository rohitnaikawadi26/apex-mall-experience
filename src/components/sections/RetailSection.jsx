import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './RetailSection.css';

const brands = [
  { name: "CARTIER", category: "Jewellery & Watches", style: "serif", est: "1847", featured: true },
  { name: "ROLEX", category: "Luxury Timepieces", style: "serif", est: "1905", featured: true },
  { name: "HERMÈS", category: "Haute Couture", style: "serif", est: "1837", featured: true },
  { name: "PRADA", category: "Fashion & Accessories", style: "sans", est: "1913" },
  { name: "LOUIS VUITTON", category: "Maison de Luxe", style: "sans", est: "1854", featured: true },
  { name: "DIOR", category: "Couture & Beauty", style: "serif", est: "1946" },
  { name: "GUCCI", category: "Fashion House", style: "serif", est: "1921" },
  { name: "CHANEL", category: "Timeless Luxury", style: "sans", est: "1910", featured: true },
  { name: "BALENCIAGA", category: "Avant-Garde Fashion", style: "sans", est: "1919" },
  { name: "BOTTEGA VENETA", category: "Italian Craftsmanship", style: "serif", est: "1966" },
  { name: "SAINT LAURENT", category: "Parisian Luxury", style: "sans", est: "1961" },
  { name: "BVLGARI", category: "Roman Jeweller", style: "serif", est: "1884" },
  { name: "TIFFANY & CO.", category: "Fine Jewellery", style: "serif", est: "1837" },
  { name: "VERSACE", category: "Italian Glamour", style: "sans", est: "1978" },
  { name: "FENDI", category: "Roman Fashion", style: "serif", est: "1925" },
  { name: "BURBERRY", category: "British Heritage", style: "sans", est: "1856" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const BrandCard = ({ brand, variants }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    cardRef.current.style.setProperty('--rotate-x', `${rotateX}deg`);
    cardRef.current.style.setProperty('--rotate-y', `${rotateY}deg`);
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty('--rotate-x', `0deg`);
    cardRef.current.style.setProperty('--rotate-y', `0deg`);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`brand-card ${brand.style === 'serif' ? 'brand-serif' : 'brand-sans'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: 'perspective(1000px) rotateX(var(--rotate-x, 0deg)) rotateY(var(--rotate-y, 0deg))'
      }}
    >
      <div className="brand-card-inner">
        <div className="brand-card-spotlight"></div>
        <div className="brand-card-glow"></div>
        <div className="brand-card-shimmer"></div>
        <div className="brand-card-border"></div>

        {brand.featured && (
          <div className="brand-badge">
            <span>MAISON</span>
          </div>
        )}
        
        <div className="brand-card-content">
          <div className="brand-logo-container">
            <span className="brand-name">{brand.name}</span>
            <div className="brand-underline"></div>
          </div>
          <div className="brand-info">
            <span className="brand-category">{brand.category}</span>
            <span className="brand-status">SINCE {brand.est}</span>
          </div>
        </div>

        <div className="brand-action">
          <span>DISCOVER</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const RetailSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const videoScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 0.4]);

  const displayedBrands = isExpanded ? brands : brands.slice(0, 6);

  return (
    <section className="retail-section" ref={containerRef} id="retail">
      <div className="retail-video-bg">
        <motion.div className="retail-video-wrapper" style={{ scale: videoScale, opacity: videoOpacity }}>
          <video autoPlay loop muted playsInline className="retail-bg-video">
            <source src="/assets/Dubai%20Mall.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="retail-video-overlay"></div>
      </div>

      <div className="retail-content">
        <motion.div
          className="retail-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="retail-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            RETAIL ECOSYSTEM
          </motion.span>

          <h2 className="retail-title">
            The Luxury<br />
            <span className="gold-gradient-text">Directory</span>
          </h2>

          <motion.p
            className="retail-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Curated global maisons and industry pioneers unified in a single elite destination.
          </motion.p>
        </motion.div>

        <motion.div 
          className={`brand-grid ${isExpanded ? 'grid-full' : 'grid-featured'}`}
          layout
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatePresence mode="popLayout">
            {displayedBrands.map((brand) => (
              <BrandCard key={brand.name} brand={brand} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          className="retail-cta-wrapper"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <button 
            className={`btn-outline retail-cta-btn ${isExpanded ? 'active' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Minimize Directory' : 'View Full Directory'}
            <motion.svg 
              animate={{ rotate: isExpanded ? 180 : 0 }}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </motion.svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RetailSection;
