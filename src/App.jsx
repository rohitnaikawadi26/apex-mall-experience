import { motion } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import Navbar from './components/layout/Navbar'
import HeroVideo from './components/sections/HeroVideo'
import StatsSection from './components/sections/StatsSection'
import RetailSection from './components/sections/RetailSection'
import LuxurySection from './components/sections/LuxurySection'
import DiningSection from './components/sections/DiningSection'
import AttractionsSection from './components/sections/AttractionsSection'
import EventsSection from './components/sections/EventsSection'
import CTASection from './components/sections/CTASection'

function App() {
  useLenis();

  return (
    <div className="app-container" id="top">
       <Navbar />
       <main>
          <HeroVideo />
          <StatsSection />
          <RetailSection />
          <LuxurySection />
          <DiningSection />
          <AttractionsSection />
          <EventsSection />
          <CTASection />
       </main>

       {/* Sticky Book Event Button */}
       <motion.a 
         href="#events"
         className="sticky-cta-btn"
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ amount: 0.1 }}
         transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
       >
         <span>Book an Event</span>
         <div className="btn-glow"></div>
       </motion.a>
    </div>
  )
}

export default App
