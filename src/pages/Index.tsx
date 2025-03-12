
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedDestinations from '@/components/FeaturedDestinations';
import About from '@/components/About';
import Footer from '@/components/Footer';
import { initAnimations, setupParallax, setupLazyLoading } from '@/utils/animations';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthProvider } from '@/hooks/useAuth';

const Index = () => {
  useEffect(() => {
    // Initialize animations when component mounts
    initAnimations();
    setupParallax();
    setupLazyLoading();
    
    // Re-initialize on resize
    window.addEventListener('resize', initAnimations);
    
    return () => {
      window.removeEventListener('resize', initAnimations);
    };
  }, []);

  return (
    <AuthProvider>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          <main>
            <Hero />
            <FeaturedDestinations />
            <About />
          </main>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </AuthProvider>
  );
};

export default Index;
