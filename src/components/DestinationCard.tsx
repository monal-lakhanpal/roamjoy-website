
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface DestinationCardProps {
  id: string;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  index: number;
}

const DestinationCard = ({ id, name, location, image, price, rating, index }: DestinationCardProps) => {
  return (
    <motion.div 
      className="zostel-card group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl">
        {/* Image */}
        <div className="aspect-[3/4] overflow-hidden rounded-xl">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90 transition-opacity duration-300" />
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
          <div className="mb-2 flex items-center">
            <MapPin className="w-4 h-4 mr-1 text-zostel-teal" />
            <span className="text-sm font-medium">{location}</span>
          </div>
          
          <h3 className="font-bold text-xl mb-2 group-hover:text-zostel-teal transition-colors">
            {name}
          </h3>
          
          <div className="flex justify-between items-center">
            <div>
              <span className="text-zostel-teal font-bold">₹{price}</span>
              <span className="text-white/70 text-sm ml-1">/ night</span>
            </div>
            
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-2 py-1">
              <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DestinationCard;
