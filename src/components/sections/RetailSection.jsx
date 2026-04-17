import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './RetailSection.css';

const brands = [
  { name: "CARTIER", category: "Jewellery & Watches", est: "1847", bg: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=600&q=80", desc: "A pioneer in watchmaking craftsmanship and exceptional creations synonymous with absolute luxury." },
  { name: "ROLEX", category: "Luxury Timepieces", est: "1905", bg: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=600&q=80", desc: "The ultimate reference in luxury watchmaking, precision, and timeless prestige worn by visionaries." },
  { name: "HERMÈS", category: "Haute Couture", est: "1837", bg: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=600&q=80", desc: "Artisanal craftsmanship combining traditional leatherwork with contemporary Parisian elegance." },
  { name: "LOUIS VUITTON", category: "Maison de Luxe", est: "1854", bg: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=600&q=80", desc: "The defining name in luxury travel, iconic monogram canvases, and architectural high fashion." },
  { name: "DIOR", category: "Couture & Beauty", est: "1946", bg: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80", desc: "Revolutionary silhouettes and timeless femininity that continue to dictate global haute couture." },
  { name: "CHANEL", category: "Timeless Luxury", est: "1910", bg: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80", desc: "The epitome of classic French chic, revolutionizing women's fashion with effortless, rebellious grace." },
];

const BrandCard = ({ brand, delay }) => {
  return (
    <motion.div
      className="brand-flip-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <div className="brand-flip-inner">
        {/* FRONT */}
        <div className="brand-flip-front">
          <div className="brand-front-bg" style={{ backgroundImage: `url(${brand.bg})` }}></div>
          <div className="brand-front-overlay"></div>
          <div className="brand-front-content">
            <div className={`brand-logo-text logo-${brand.name.split(' ')[0].toLowerCase().replace('è', 'e')}`}>
              {brand.name}
            </div>
            <div className="brand-category">
              <span style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.4)' }}></span>
              {brand.category}
              <span style={{ width: '20px', height: '1px', background: 'rgba(255,255,255,0.4)' }}></span>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div className="brand-flip-back">
          <div className="brand-flip-back-content">
             <div className="brand-est-label">MAISON FONDEÉ EN {brand.est}</div>
             <div className="brand-desc">{brand.desc}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const RetailSection = () => {
  return (
    <section className="retail-section" id="retail">
      <div className="retail-video-bg">
        <motion.div
          className="retail-video-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            poster="/assets/Dubai%20Fashion%20Launge.png"
            className="retail-bg-video"
          >
            <source src="/assets/Dubai%20Mall.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <div className="retail-video-overlay"></div>
      </div>

      <div className="container retail-content">
        <motion.div
          className="retail-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="retail-label"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            GLOBAL RETAIL BRANDS
          </motion.span>

          <h2 className="retail-title">The Premium Directory.</h2>

          <motion.p
            className="retail-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Curated global maisons and industry pioneers unified in a single elite destination.
          </motion.p>
        </motion.div>

        <div className="brand-grid-container">
          <AnimatePresence>
            {brands.map((brand, i) => (
              <BrandCard key={brand.name} brand={brand} delay={0.3 + (i * 0.1)} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default RetailSection;
