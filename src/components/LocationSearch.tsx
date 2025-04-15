
import { useState, useEffect, useRef } from "react";
import { MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Location {
  id: string;
  name: string;
  state: string;
}

interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

const LocationSearch = ({ value, onChange, className }: LocationSearchProps) => {
  const [query, setQuery] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Fetch locations from CDN
    fetch('https://cdn.jsdelivr.net/gh/nshntarora/Indian-Cities-JSON@master/cities.json')
      .then(response => response.json())
      .then(data => {
        // Transform data into our Location format
        const formattedLocations = data.map((city: any, index: number) => ({
          id: index.toString(),
          name: city.name,
          state: city.state
        }));
        setLocations(formattedLocations);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
        // Fallback to local data if CDN fails
        setLocations([
          { id: "1", name: "Manali", state: "Himachal Pradesh" },
          { id: "2", name: "Goa", state: "Goa" },
          { id: "3", name: "Jaipur", state: "Rajasthan" },
          { id: "4", name: "Rishikesh", state: "Uttarakhand" },
          { id: "5", name: "Udaipur", state: "Rajasthan" },
          { id: "6", name: "Varanasi", state: "Uttar Pradesh" },
          { id: "7", name: "Mumbai", state: "Maharashtra" },
          { id: "8", name: "Kochi", state: "Kerala" },
          { id: "9", name: "Shimla", state: "Himachal Pradesh" },
          { id: "10", name: "Darjeeling", state: "West Bengal" },
          { id: "11", name: "Bangalore", state: "Karnataka" },
          { id: "12", name: "Delhi", state: "Delhi" }
        ]);
      });
  }, []);

  useEffect(() => {
    // Filter locations based on query
    if (query.trim() === "") {
      setFilteredLocations([]);
    } else {
      const filtered = locations.filter(
        location => 
          location.name.toLowerCase().includes(query.toLowerCase()) ||
          location.state.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredLocations(filtered.slice(0, 10)); // Limit to 10 results for performance
    }
  }, [query, locations]);

  useEffect(() => {
    // Handle clicks outside the component to close suggestions
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onChange(value);
    setShowSuggestions(true);
  };

  const handleSelectLocation = (location: Location) => {
    setQuery(`${location.name}, ${location.state}`);
    onChange(`${location.name}, ${location.state}`);
    setShowSuggestions(false);
  };

  return (
    <div ref={wrapperRef} className={`relative ${className}`}>
      <div className="relative">
        <MapPin className="absolute left-3 top-3 h-5 w-5 text-white/70" />
        <Input
          type="text"
          placeholder="Where are you going?"
          className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/70"
          value={query}
          onChange={handleInputChange}
          onFocus={() => setShowSuggestions(true)}
        />
      </div>
      
      {showSuggestions && filteredLocations.length > 0 && (
        <div className="absolute z-10 mt-1 w-full bg-white dark:bg-zostel-charcoal rounded-md shadow-lg max-h-60 overflow-auto">
          <ul className="py-1">
            {filteredLocations.map((location) => (
              <li
                key={location.id}
                className="px-4 py-2 hover:bg-zostel-teal/10 cursor-pointer flex items-center"
                onClick={() => handleSelectLocation(location)}
              >
                <MapPin className="h-4 w-4 mr-2 text-zostel-teal" />
                <span>{location.name}, <span className="text-gray-500">{location.state}</span></span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
