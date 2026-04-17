import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './CTASection.css';

const CTASection = () => {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <>
      <section className="cta-section section-padding" id="partner">
      <div className="cta-bg-image" style={{ backgroundImage: "url('/assets/Dubai skyline night minimal.jpg')" }}></div>
      <div className="cta-overlay"></div>
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <h2 className="cta-title">A Monumental<br/>Opportunity awaits.</h2>
          <p className="cta-desc">Join the ecosystem where the world's most influential brands and millions of global visitors converge daily.</p>
          
          <div className="cta-actions">
            <a href="#partner" className="btn-outline">Partner With Us</a>
            <a href="#events" className="btn-outline">Book an Event</a>
          </div>

          <div className="cta-form-container glass">
            <h4 className="cta-form-title">Business Inquiry</h4>
            <form className="cta-form" onSubmit={(e) => { e.preventDefault(); e.target.reset(); setConsultationOpen(true); }}>
               <div className="form-grid">
                  <input type="text" placeholder="Full Name" required />
                  <input type="email" placeholder="Business Email" required />
                  <input type="text" placeholder="Company Name" />
                  <select required>
                    <option value="">Interested in...</option>
                    <option value="retail">Retail Space</option>
                    <option value="office">Corporate Office</option>
                    <option value="partnership">Strategic Partnership</option>
                  </select>
               </div>
               <textarea placeholder="Tell us about your brand..." rows="4"></textarea>
               <button type="submit" className="btn-primary w-full">Request Consultation</button>
            </form>
          </div>
        </motion.div>
      </div>
      <div className="cta-bg-glow"></div>

      {consultationOpen && (
        <div className="consultation-modal-overlay" role="dialog" aria-modal="true">
          <div className="consultation-modal glass">
            <button className="modal-close" type="button" onClick={() => setConsultationOpen(false)} aria-label="Close consultation confirmation">×</button>
            <h3>Consultation Requested</h3>
            <p>Thank you — your request has been received. Our team will contact you shortly to schedule a fixed consultation.</p>
            <button type="button" className="btn-primary" onClick={() => setConsultationOpen(false)}>Great, thanks</button>
          </div>
        </div>
      )}
    </section>

      <footer className="global-footer">
        <div className="container footer-bottom">
          <div className="footer-logo">THE APEX</div>
          <div className="footer-links">
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Press</a>
          </div>
          <div className="footer-copyright">
            © 2026 The Apex Destination. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTASection;
