import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './CTASection.css';

const CTASection = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <section className="cta-section" id="partner">
      <div className="cta-bg-image"></div>
      <div className="cta-overlay"></div>
      
      <div className="container cta-container">
        <div className="cta-flex-wrapper">
          
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="cta-badge">STRATEGIC PARTNERSHIP</div>
            <h2 className="cta-title">
              Craft Your Brand’s <br/>
              <span className="text-gradient">Legacy</span> at the Zenith of Retail.
            </h2>
            <p className="cta-desc">
              Join an elite ecosystem where global icons converge. Secure your place in the world's most prestigious retail destination and reach over 100 million annual visitors.
            </p>
            
            <div className="cta-features">
              <div className="cta-feature-item">
                <span className="feature-dot"></span>
                <span>Unrivaled Global Visibility</span>
              </div>
              <div className="cta-feature-item">
                <span className="feature-dot"></span>
                <span>Curated Luxury Environment</span>
              </div>
              <div className="cta-feature-item">
                <span className="feature-dot"></span>
                <span>Seamless Operational Excellence</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="cta-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="cta-form-container glass-premium">
              <div className="form-header">
                <h4 className="cta-form-title">Partner Inquiry</h4>
                <p className="form-subtitle">Begin your journey with our leasing team</p>
              </div>
              
              <form className="cta-form" onSubmit={(e) => { e.preventDefault(); e.target.reset(); setConsultationOpen(true); }}>
                 <div className="form-grid">
                    <div className="input-group">
                      <input type="text" placeholder="Full Name" required />
                    </div>
                    <div className="input-group">
                      <input type="email" placeholder="Business Email" required />
                    </div>
                    <div className="input-group">
                      <input type="text" placeholder="Company Name" required />
                    </div>
                    <div className="input-group">
                      <select required>
                        <option value="">Interest Level...</option>
                        <option value="flagship">Flagship Boutique</option>
                        <option value="showroom">Premium Showroom</option>
                        <option value="popup">Curated Pop-up</option>
                        <option value="corporate">Corporate HQ</option>
                      </select>
                    </div>
                 </div>
                 <textarea placeholder="Describe your brand's vision..." rows="4"></textarea>
                 <button type="submit" className="btn-primary-premium">
                   <span>Secure Your Consultation</span>
                 </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="cta-bg-glow"></div>

      <AnimatePresence>
        {consultationOpen && (
          <motion.div 
            className="consultation-modal-overlay" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="consultation-modal glass-premium"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button 
                className="modal-close" 
                type="button" 
                onClick={() => setConsultationOpen(false)} 
              >
                <X size={20} />
              </button>
              <div className="success-icon-wrap">
                <div className="success-icon">✓</div>
              </div>
              <h3>Consultation Requested</h3>
              <p>Your vision has been received. Our executive team will reach out within 24 hours to discuss your brand's future at our destination.</p>
              <button type="button" className="btn-primary-premium" onClick={() => setConsultationOpen(false)}>
                <span>Understood</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTASection;
