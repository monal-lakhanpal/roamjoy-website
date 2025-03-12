
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/hooks/useAuth';
import { initAnimations } from '@/utils/animations';

const experiences = [
  {
    id: 1,
    title: 'Sunset Beach Trek in Goa',
    location: 'Palolem Beach, Goa',
    image: '/images/experiences/beach-trek.jpg',
    duration: '3 hours',
    price: '₹999 per person',
    description: 'Walk along the pristine beaches of South Goa while witnessing a breathtaking sunset over the Arabian Sea.'
  },
  {
    id: 2,
    title: 'Mountain Biking Adventure',
    location: 'Old Manali, Himachal Pradesh',
    image: '/images/experiences/mountain-biking.jpg',
    duration: '4 hours',
    price: '₹1,499 per person',
    description: 'Experience the thrill of mountain biking through scenic trails with breathtaking views of the Himalayas.'
  },
  {
    id: 3,
    title: 'White Water Rafting',
    location: 'Rishikesh, Uttarakhand',
    image: '/images/experiences/rafting.jpg',
    duration: '2 hours',
    price: '₹1,199 per person',
    description: 'Navigate through the rapids of the holy Ganges River with experienced guides in this adrenaline-pumping activity.'
  },
  {
    id: 4,
    title: 'Heritage Walking Tour',
    location: 'Jaipur, Rajasthan',
    image: '/images/experiences/heritage-tour.jpg',
    duration: '5 hours',
    price: '₹899 per person',
    description: 'Explore the historical monuments, vibrant markets, and hidden gems of the Pink City with a knowledgeable local guide.'
  },
  {
    id: 5,
    title: 'Sunrise Boat Ride',
    location: 'Varanasi, Uttar Pradesh',
    image: '/images/experiences/boat-ride.jpg',
    duration: '2 hours',
    price: '₹599 per person',
    description: 'Witness the spiritual awakening of the ancient city with a serene boat ride along the ghats during sunrise.'
  },
  {
    id: 6,
    title: 'Desert Camel Safari',
    location: 'Jaisalmer, Rajasthan',
    image: '/images/experiences/camel-safari.jpg',
    duration: '6 hours',
    price: '₹1,299 per person',
    description: 'Ride through the golden sands of the Thar Desert and enjoy a traditional dinner under the stars.'
  }
];

const Experiences = () => {
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
        <section className="pt-28 pb-12 bg-gradient-to-b from-zostel-orange/10 to-white dark:from-zostel-navy/30 dark:to-zostel-charcoal">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-zostel-navy dark:text-white mb-4">
                Unforgettable Experiences
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover authentic local activities and adventures curated just for you by Zostel.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Experiences Grid */}
        <section className="py-12 bg-white dark:bg-zostel-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="zostel-card bg-white dark:bg-zostel-navy/20 overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={experience.image || "/placeholder.svg"} 
                      alt={experience.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute top-4 right-4 bg-zostel-teal text-white text-sm font-medium py-1 px-3 rounded-full">
                      {experience.duration}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-zostel-navy dark:text-zostel-teal mb-2">{experience.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {experience.location}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{experience.description}</p>
                    
                    <div className="flex justify-between items-center mt-4">
                      <span className="text-zostel-navy dark:text-zostel-teal font-bold">{experience.price}</span>
                      <button className="zostel-btn-primary text-sm">Book Now</button>
                    </div>
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

export default Experiences;
