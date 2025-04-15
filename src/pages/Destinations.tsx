
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { initAnimations } from '@/utils/animations';
import { toast } from "sonner";

const destinations = [
  {
    id: 1,
    name: 'Goa',
    location: 'Palolem Beach',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    description: 'Experience the perfect blend of beach vibes and cultural richness in Goa.',
    price: 'Starts at ₹549/night'
  },
  {
    id: 2,
    name: 'Manali',
    location: 'Old Manali',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Discover the serene beauty of the mountains and adventure sports in Manali.',
    price: 'Starts at ₹599/night'
  },
  {
    id: 3,
    name: 'Rishikesh',
    location: 'Laxman Jhula',
    image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Find spiritual connection and adventure in the yoga capital of the world.',
    price: 'Starts at ₹499/night'
  },
  {
    id: 4,
    name: 'Jaipur',
    location: 'Old City',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Explore the rich heritage and vibrant culture of the Pink City.',
    price: 'Starts at ₹649/night'
  },
  {
    id: 5,
    name: 'Varanasi',
    location: 'Assi Ghat',
    image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    description: 'Experience the spiritual heart of India on the banks of the Ganges.',
    price: 'Starts at ₹449/night'
  },
  {
    id: 6,
    name: 'Udaipur',
    location: 'Lake Pichola',
    image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80', 
    description: 'Discover the romantic city of lakes and palaces in Rajasthan.',
    price: 'Starts at ₹699/night'
  },
  {
    id: 7,
    name: 'Coorg',
    location: 'Madikeri',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    description: 'Retreat to the coffee plantations and misty hills of Karnataka.',
    price: 'Starts at ₹749/night'
  },
  {
    id: 8,
    name: 'Spiti Valley',
    location: 'Kaza',
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Adventure through the cold desert mountain valley of Himachal Pradesh.',
    price: 'Starts at ₹799/night'
  }
];

const Destinations = () => {
  const navigate = useNavigate();
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const [notFoundMessage, setNotFoundMessage] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    initAnimations();
    
    // Check if there's a search from the home page
    const searchLocation = sessionStorage.getItem('searchLocation');
    if (searchLocation) {
      // Filter destinations based on the search query
      const filtered = destinations.filter(dest => 
        dest.name.toLowerCase().includes(searchLocation.toLowerCase()) || 
        dest.location.toLowerCase().includes(searchLocation.toLowerCase())
      );
      
      if (filtered.length > 0) {
        setFilteredDestinations(filtered);
        setNotFoundMessage(null);
        toast.success(`Found ${filtered.length} destinations matching "${searchLocation}"`);
      } else {
        setFilteredDestinations(destinations);
        setNotFoundMessage(`We are not here yet but you can explore other destinations`);
        toast.info(`No destinations found for "${searchLocation}". Showing all options.`);
      }
      
      // Clear search parameters after using them
      sessionStorage.removeItem('searchLocation');
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  const handleViewDetails = (id: number) => {
    navigate(`/hotel/${id}`);
  };

  return (
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
              Discover unique stays at stunning locations across India. Book your next adventure with Holidayz.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Destinations Grid */}
      <section className="py-12 bg-white dark:bg-zostel-charcoal">
        <div className="container mx-auto px-4">
          {notFoundMessage && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10 p-4 bg-zostel-teal/10 rounded-lg"
            >
              <p className="text-lg text-zostel-navy dark:text-white">{notFoundMessage}</p>
            </motion.div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDestinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="zostel-card group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-t-xl h-48">
                  <img 
                    src={destination.image} 
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
                    <button 
                      className="zostel-btn-outline text-sm py-1 px-3"
                      onClick={() => handleViewDetails(destination.id)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destinations;
