
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/hooks/useAuth';
import { initAnimations } from '@/utils/animations';

const teamMembers = [
  {
    id: 1,
    name: 'Dharmveer Singh',
    role: 'Founder & CEO',
    image: '/images/team/founder.jpg',
    bio: 'Passionate traveler and entrepreneur who founded Zostel with a vision to revolutionize the backpacking experience in India.'
  },
  {
    id: 2,
    name: 'Akhil Malik',
    role: 'Co-Founder & COO',
    image: '/images/team/coo.jpg',
    bio: 'Adventure enthusiast and business strategist who manages the day-to-day operations and expansion of Zostel across India.'
  },
  {
    id: 3,
    name: 'Paavan Nanda',
    role: 'Co-Founder & CTO',
    image: '/images/team/cto.jpg',
    bio: 'Tech innovator who leads Zostel\'s digital initiatives and ensures seamless guest experiences across all platforms.'
  },
  {
    id: 4,
    name: 'Siddharth Janghu',
    role: 'Head of Experiences',
    image: '/images/team/experiences.jpg',
    bio: 'Former tour guide who curates unique local experiences for Zostel guests across all destinations.'
  }
];

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    initAnimations();
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-b from-zostel-teal/10 to-white dark:from-zostel-navy/30 dark:to-zostel-charcoal">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-zostel-navy dark:text-white mb-4">
                About Zostel
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                India's first and largest chain of backpacker hostels, 
                redefining budget travel with community experiences.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16 bg-white dark:bg-zostel-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-zostel-navy dark:text-zostel-teal mb-6">Our Story</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Founded in 2013 by a group of IIM-A and IIT alumni, Zostel began with a simple idea: 
                  to provide affordable, clean, and social accommodation for young travelers exploring India.
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  What started as a small hostel in Jaipur has now grown into India's largest backpacker hostel chain,
                  with over 40 properties across India and Nepal. Our journey has been fueled by a passion for travel,
                  community building, and creating authentic experiences.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Today, Zostel continues to redefine budget travel by offering not just a place to stay,
                  but a platform to connect, explore, and create lasting memories.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative h-80 md:h-96 overflow-hidden rounded-xl shadow-lg"
              >
                <img 
                  src="/images/about/zostel-story.jpg" 
                  alt="Zostel Story" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-zostel-cream dark:bg-zostel-navy/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-zostel-navy dark:text-zostel-teal mb-4">Our Values</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do at Zostel.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-zostel-charcoal p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-zostel-teal rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zostel-navy dark:text-white mb-3">Community</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We believe in the power of connections. Our hostels are designed to foster interactions between travelers,
                  creating a global community of like-minded explorers.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-zostel-charcoal p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-zostel-teal rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zostel-navy dark:text-white mb-3">Sustainability</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to eco-friendly practices and supporting local communities. From reducing plastic use to
                  sourcing locally, we strive to minimize our environmental footprint.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white dark:bg-zostel-charcoal p-6 rounded-xl shadow-md"
              >
                <div className="w-12 h-12 bg-zostel-teal rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-zostel-navy dark:text-white mb-3">Adventure</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We encourage travelers to step out of their comfort zones and experience authentic adventures.
                  Our curated experiences help guests discover the true essence of each destination.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="py-16 bg-white dark:bg-zostel-charcoal">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-zostel-navy dark:text-zostel-teal mb-4">Meet Our Team</h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                The passionate individuals behind Zostel who make your travel experiences unforgettable.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-zostel-navy/20 rounded-xl shadow-md overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={member.image || "/placeholder.svg"} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-zostel-navy dark:text-zostel-teal">{member.name}</h3>
                    <p className="text-zostel-teal dark:text-zostel-cream font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default AboutPage;
