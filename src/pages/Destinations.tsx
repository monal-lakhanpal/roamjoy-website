
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/hooks/useAuth';
import { initAnimations } from '@/utils/animations';

const destinations = [
  {
    id: 1,
    name: 'Goa',
    location: 'Palolem Beach',
    image: '/images/destinations/goa.jpg',
    description: 'Experience the perfect blend of beach vibes and cultural richness in Goa.',
    price: 'Starts at ₹549/night'
  },
  {
    id: 2,
    name: 'Manali',
    location: 'Old Manali',
    image: '/images/destinations/manali.jpg',
    description: 'Discover the serene beauty of the mountains and adventure sports in Manali.',
    price: 'Starts at ₹599/night'
  },
  {
    id: 3,
    name: 'Rishikesh',
    location: 'Laxman Jhula',
    image: '/images/destinations/rishikesh.jpg',
    description: 'Find spiritual connection and adventure in the yoga capital of the world.',
    price: 'Starts at ₹499/night'
  },
  {
    id: 4,
    name: 'Jaipur',
    location: 'Old City',
    image: '/images/destinations/jaipur.jpg',
    description: 'Explore the rich heritage and vibrant culture of the Pink City.',
    price: 'Starts at ₹649/night'
  },
  {
    id: 5,
    name: 'Varanasi',
    location: 'Assi Ghat',
    image: '/images/destinations/varanasi.jpg',
    description: 'Experience the spiritual heart of India on the banks of the Ganges.',
    price: 'Starts at ₹449/night'
  },
  {
    id: 6,
    name: 'Udaipur',
    location: 'Lake Pichola',
    image: '/images/destinations/udaipur.jpg', 
    description: 'Discover the romantic city of lakes and palaces in Rajasthan.',
    price: 'Starts at ₹699/night'
  },
  {
    id: 7,
    name: 'Coorg',
    location: 'Madikeri',
    image: '/images/destinations/coorg.jpg',
    description: 'Retreat to the coffee plantations and misty hills of Karnataka.',
    price: 'Starts at ₹749/night'
  },
  {
    id: 8,
    name: 'Spiti Valley',
    location: 'Kaza',
    image: '/images/destinations/spiti.jpg',
    description: 'Adventure through the cold desert mountain valley of Himachal Pradesh.',
    price: 'Starts at ₹799/night'
  }
];

const Destinations = () => {
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
        
        {/* Hero Section with Title */}
        <section className="pt-28 pb-12 bg-gradient-to-b from-zostel-teal/10 to-white dark:from-zostel-navy/30 dark:to-zostel-charcoal">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-zostel-navy dark:text-white mb-4">
                Our Destinations
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Discover unique stays at stunning locations across India. Book your next adventure with Zostel.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Destinations Grid */}
        <section className="py-12 bg-white dark:bg-zostel-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="zostel-card group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-t-xl h-48">
                    <img 
                      src={destination.image || "/placeholder.svg"} 
                      alt={destination.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-semibold">{destination.name}</h3>
                      <p className="text-sm font-light">{destination.location}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-zostel-charcoal border dark:border-zostel-navy/30 rounded-b-xl">
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{destination.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-zostel-navy dark:text-zostel-teal font-semibold">{destination.price}</span>
                      <button className="zostel-btn-outline text-sm py-1 px-3">View Details</button>
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

export default Destinations;
