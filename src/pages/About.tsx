import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { MapPin, BookOpen, Award, Users, Heart } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* About Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-zostel-teal/10 to-white dark:from-zostel-navy/30 dark:to-zostel-charcoal">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-zostel-navy dark:text-white mb-4">
              About <span className="text-zostel-teal">Holidayz</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover our story, mission, and the team that makes your travel dreams come true.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white dark:bg-zostel-charcoal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-zostel-navy dark:text-white">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Founded in 2013, Holidayz began with a simple belief – that travel should be accessible, meaningful, and social. What started as a small hostel in Jaipur has grown into a network of award-winning properties across India's most beautiful destinations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our journey has been fueled by passionate travelers, heartwarming stories, and unforgettable experiences. We've welcomed backpackers, digital nomads, families, and adventure seekers from over 100 countries, creating a vibrant community that celebrates the spirit of travel.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Today, Holidayz continues to redefine budget travel in India by blending comfort, authenticity, and sustainability, without compromising on the experiences that make each journey special.
              </p>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Holidayz Hostel" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-zostel-teal p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-white font-bold">10+ Years</p>
                <p className="text-white text-sm">of amazing adventures</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-zostel-navy/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zostel-navy dark:text-white">Our Values</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
              The principles that guide us in creating exceptional experiences for travelers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white dark:bg-zostel-charcoal p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-zostel-teal mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zostel-navy dark:text-white">Authenticity</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We believe in genuine experiences that connect travelers with local cultures, traditions, and communities.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-zostel-charcoal p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-zostel-teal mb-4">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zostel-navy dark:text-white">Accessibility</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We make meaningful travel experiences accessible to everyone, regardless of budget or travel style.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-zostel-charcoal p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="text-zostel-teal mb-4">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zostel-navy dark:text-white">Quality</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We never compromise on the quality of our accommodations, service, and the experiences we offer.
              </p>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-zostel-charcoal p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="text-zostel-teal mb-4">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-zostel-navy dark:text-white">Sustainability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We are committed to responsible tourism that benefits local communities and protects the environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Meet Our Team */}
      <section className="py-16 bg-white dark:bg-zostel-charcoal">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-zostel-navy dark:text-white">Meet Our Team</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
              The passionate individuals behind Holidayz who work tirelessly to make your travels memorable.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="public/lovable-uploads/9d5d9392-2b5d-4cb3-81dc-81c3df908b64.png" 
                  alt="Dharmveer Singh" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-zostel-navy dark:text-white">Dharmveer Singh</h3>
                <p className="text-zostel-teal">Founder & CEO</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="public/lovable-uploads/40e4e3d8-4de2-465a-8152-f12e84608102.png" 
                  alt="Priya Sharma" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-zostel-navy dark:text-white">Priya Sharma</h3>
                <p className="text-zostel-teal">Operations Director</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="public/lovable-uploads/0d47e80d-77d8-46b4-ba75-19ccc0fee49e.png" 
                  alt="Arjun Mehta" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-zostel-navy dark:text-white">Arjun Mehta</h3>
                <p className="text-zostel-teal">Head of Partnerships</p>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src="public/lovable-uploads/d4790ea0-d076-43d9-9c1c-757b2b00f2d0.png" 
                  alt="Meera Patel" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-zostel-navy dark:text-white">Meera Patel</h3>
                <p className="text-zostel-teal">Marketing Head</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
