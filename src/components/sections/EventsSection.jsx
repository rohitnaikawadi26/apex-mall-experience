import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './EventsSection.css';

const EventsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmationShown, setConfirmationShown] = useState(false);

  return (
    <section className="events-section section-padding" id="events">
      <div className="events-bg" style={{ backgroundImage: "url('/assets/Dubai%20Fashion%20Launge.png')" }}></div>
      <div className="events-overlay"></div>
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="events-grid">
          <motion.div 
            className="events-content"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h5 className="section-subtitle">Global Platform</h5>
            <h2 className="section-title">The Stage Is Yours</h2>
            <p className="events-desc">
              From exclusive high-end fashion shows to global brand launches. Our versatile, state-of-the-art activation zones offer unparalleled exposure, captivating an elite international audience.
            </p>
            <button 
              className="btn-primary" 
              onClick={() => setModalOpen(true)}
            >
              Host Your Event
            </button>
          </motion.div>

          <motion.div 
             className="events-image-wrap"
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: false, amount: 0.5 }}
             transition={{ duration: 0.8 }}
          >
            <div className="events-image placeholder-anim">
              <video 
                src="/assets/World_Of_Fashion_Launch_at_Mall.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
              />
            </div>
            <div className="experience-metric glass">
               <div className="metric-val gold-gradient-text">300+</div>
               <div className="metric-label">Global Brands Launched</div>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="modal-content glass"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
            >
              <button 
                 className="modal-close"
                 onClick={() => { setModalOpen(false); setConfirmationShown(false); }}
                 aria-label="Close Inquiry Modal"
              >
                <X size={24} />
              </button>
              {confirmationShown ? (
                <>
                  <h3 className="modal-title">Inquiry Submitted</h3>
                  <p className="modal-subtitle">Your event query has been booked. Our team will contact you shortly to discuss details.</p>
                  <button type="button" className="btn-primary w-full" onClick={() => { setModalOpen(false); setConfirmationShown(false); }}>Close</button>
                </>
              ) : (
                <>
                  <h3 className="modal-title">Event Inquiry</h3>
                  <p className="modal-subtitle">Connect with our events team.</p>
                  <form className="modal-form" onSubmit={(e) => { e.preventDefault(); setConfirmationShown(true); }}>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <select required>
                      <option value="">Event Type</option>
                      <option value="brand">Brand Activation</option>
                      <option value="concert">Concert / Performance</option>
                      <option value="exhibition">Exhibition</option>
                    </select>
                    <button type="submit" className="btn-primary w-full" style={{ marginTop: '16px' }}>Submit Inquiry</button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventsSection;
