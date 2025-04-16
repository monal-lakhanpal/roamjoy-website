import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DestinationCard from './DestinationCard';

const destinations = [
  {
    id: '2',
    name: 'Holidayz Goa',
    location: 'Anjuna, Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    price: 1299,
    rating: 4.7
  },
  {
    id: '1',
    name: 'Holidayz Manali',
    location: 'Manali, Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 999,
    rating: 4.8
  },
  {
    id: '4',
    name: 'Holidayz Rishikesh',
    location: 'Rishikesh, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 899,
    rating: 4.6
  },
  {
    id: '3',
    name: 'Holidayz Jaipur',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 799,
    rating: 4.5
  },
  {
    id: '6',
    name: 'Holidayz Varanasi',
    location: 'Varanasi, Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1565074943747-9283709c3d88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    price: 849,
    rating: 4.4
  },
  {
    id: '5',
    name: 'Holidayz Udaipur',
    location: 'Udaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    price: 1099,
    rating: 4.9
  },
  {
    id: '8',
    name: 'Holidayz Mumbai',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 1499,
    rating: 4.3
  },
  {
    id: '7',
    name: 'Holidayz Kerala',
    location: 'Kochi, Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    price: 1199,
    rating: 4.7
  }
];

const FeaturedDestinations = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();
  const visibleCount = 4;

  const getVisibleItems = () => {
    return destinations.slice(startIndex, startIndex + visibleCount);
  };

  const nextSlide = () => {
    setStartIndex((prev) => 
      prev + visibleCount >= destinations.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => 
      prev === 0 ? Math.max(0, destinations.length - visibleCount) : prev - 1
    );
  };

  const handleCardClick = (destId: string) => {
    navigate(`/hotel/${destId}`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 } 
    }
  };

  return (
    <section className="section-padding container-padding">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <div>
            <motion.span 
              className="text-zostel-teal font-medium text-sm uppercase tracking-wider mb-2 inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Travel destinations
            </motion.span>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Featured <span className="text-zostel-teal">Destinations</span>
            </motion.h2>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-zostel-teal text-zostel-teal hover:bg-zostel-teal hover:text-white transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-zostel-teal text-zostel-teal hover:bg-zostel-teal hover:text-white transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {getVisibleItems().map((destination, index) => (
            <div key={destination.id} onClick={() => handleCardClick(destination.id)} className="cursor-pointer">
              <DestinationCard 
                {...destination} 
                index={index}
              />
            </div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <Button 
            className="zostel-btn-primary"
            onClick={() => navigate('/destinations')}
          >
            View All Destinations
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
