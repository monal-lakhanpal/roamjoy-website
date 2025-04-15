
import { MapPin } from 'lucide-react';

interface HotelHeaderProps {
  name: string;
  location: string;
  rating: number;
  reviews: number;
}

const HotelHeader = ({ name, location, rating, reviews }: HotelHeaderProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full p-6 md:p-8">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{name}</h1>
        <div className="flex items-center text-white/90">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{location}</span>
          <div className="ml-4 flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
            <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-semibold">{rating}</span>
            <span className="mx-1">•</span>
            <span>{reviews} reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelHeader;
