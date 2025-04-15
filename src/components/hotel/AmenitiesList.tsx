
import { Wifi, Coffee, Utensils, MapPin, Home, Mountains, Snowflake, Book } from 'lucide-react';

interface AmenitiesListProps {
  amenities: string[];
}

const AmenitiesList = ({ amenities }: AmenitiesListProps) => {
  // Map amenities to matching icons
  const getAmenityIcon = (amenity: string) => {
    if (amenity.includes("WiFi")) return <Wifi className="w-5 h-5 mr-2 text-zostel-teal" />;
    if (amenity.includes("Kitchen")) return <Utensils className="w-5 h-5 mr-2 text-zostel-teal" />;
    if (amenity.includes("Cafe")) return <Coffee className="w-5 h-5 mr-2 text-zostel-teal" />;
    if (amenity.includes("Views")) return <Mountains className="w-5 h-5 mr-2 text-zostel-teal" />;
    if (amenity.includes("Tour")) return <MapPin className="w-5 h-5 mr-2 text-zostel-teal" />;
    if (amenity.includes("Reception")) return <Home className="w-5 h-5 mr-2 text-zostel-teal" />;
    if (amenity.includes("Air")) return <Snowflake className="w-5 h-5 mr-2 text-zostel-teal" />;
    if (amenity.includes("Library")) return <Book className="w-5 h-5 mr-2 text-zostel-teal" />;
    
    // Default icon for other amenities
    return <div className="w-5 h-5 mr-2 flex items-center justify-center rounded-full bg-zostel-teal/20 text-zostel-teal">✓</div>;
  };
  
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4 text-zostel-navy dark:text-white">Amenities</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center">
            {getAmenityIcon(amenity)}
            <span className="text-gray-700 dark:text-gray-300">{amenity}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AmenitiesList;
