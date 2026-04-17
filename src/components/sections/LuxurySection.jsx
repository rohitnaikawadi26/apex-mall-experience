import React from 'react';
import { motion } from 'framer-motion';
import './LuxurySection.css';

const LuxurySection = () => {
  return (
    <section className="luxury-section" id="luxury">

      {/* Background Watermark/Marquee for extra texture */}
      <div className="luxury-watermark">
        LEGACY · LUXURY · PRESTIGE ·
      </div>

      <div className="luxury-editorial-layout">

        {/* Left Typography Column */}
        <div className="luxury-text-col">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="luxury-kicker">Exclusivity</span>

            <h2 className="luxury-headline">
              Where Luxury <br /> Meets Legacy.
            </h2>

            <p className="luxury-body">
              Step into an environment meticulously crafted for the world’s most prestigious names. An architecture of elegance serving the ultimate luxury lifestyle, offering an unparalleled destination for those who seek the exceptional.
            </p>

            <div className="luxury-stats-mini">
              <div className="mini-stat">
                <h3>150+</h3>
                <span>Haute Couture<br />Boutiques</span>
              </div>
              <div className="mini-stat-divider"></div>
              <div className="mini-stat">
                <h3>VIP</h3>
                <span>White-Glove<br />Concierge</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Right Editorial Image Collage Column */}
        <div className="luxury-image-col">

          <motion.div
            className="image-wrapper main-img"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <img
              src="/assets/luxury_shopping_1776320358539.png"
              alt="Luxury Architecture"
            />
            <div className="luxury-img-overlay"></div>
          </motion.div>

          <motion.div
            className="image-wrapper secondary-img"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1534126416832-a88fdf2911c2?auto=format&fit=crop&w=600&q=80"
              alt="High Fashion Detail"
            />
          </motion.div>

          <motion.div
            className="decorative-outline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1 }}
          ></motion.div>

        </div>

      </div>
    </section>
  );
};

export default LuxurySection;
