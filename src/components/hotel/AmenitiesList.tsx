
import { Wifi, Coffee, Utensils } from 'lucide-react';

interface AmenitiesListProps {
  amenities: string[];
}

const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-zostel-navy dark:text-white">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            {amenity.includes("WiFi") ? <Wifi className="w-5 h-5 mr-2 text-zostel-teal" /> : 
             amenity.includes("Kitchen") ? <Utensils className="w-5 h-5 mr-2 text-zostel-teal" /> : 
             amenity.includes("Cafe") ? <Coffee className="w-5 h-5 mr-2 text-zostel-teal" /> : 
             <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-zostel-teal/20 text-zostel-teal">✓</div>}
            <span className="text-gray-700 dark:text-gray-300">{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesList;
