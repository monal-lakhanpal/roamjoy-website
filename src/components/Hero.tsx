
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LocationSearch from './LocationSearch';
import DateRangePicker from './DateRangePicker';
import { useNavigate } from 'react-router-dom';

interface HeroImage {
  url: string;
  location: string;
  caption: string;
}

const heroImages: HeroImage[] = [
  {
    url: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Manali, India',
    caption: 'Experience mountain magic'
  },
  {
    url: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    location: 'Goa, India',
    caption: 'Beach vibes and sunset stories'
  },
  {
    url: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    location: 'Jaipur, India',
    caption: 'Discover royal heritage'
  }
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [imagesLoaded, setImagesLoaded] = useState([false, false, false]);
  const navigate = useNavigate();

  useEffect(() => {
    // Preload all images
    heroImages.forEach((image, index) => {
      const img = new Image();
      img.src = image.url;
      img.onload = () => {
        setImagesLoaded(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      };
    });

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Extract location name from searchQuery (which might be "Location, State")
    const locationName = searchQuery.split(',')[0].trim().toLowerCase();
    
    // Store search parameters in sessionStorage for use on destination page
    sessionStorage.setItem('searchLocation', locationName);
    if (selectedDate) {
      sessionStorage.setItem('searchDate', selectedDate.toISOString());
    }
    
    // Navigate to the appropriate destination page
    navigate(`/destinations`);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div 
            key={index}
            className={`
              absolute inset-0 transition-opacity duration-1000 ease-in-out
              ${index === currentImage ? 'opacity-100' : 'opacity-0'}
            `}
          >
            <img 
              src={image.url} 
              alt={image.location} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-center px-4 text-white">
        <motion.div 
          className="text-center max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            className="inline-block bg-zostel-teal px-4 py-1 rounded-full text-sm font-medium mb-4"
            variants={itemVariants}
          >
            {heroImages[currentImage].location}
          </motion.span>
          
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            {heroImages[currentImage].caption}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl mb-8 text-white/90"
            variants={itemVariants}
          >
            Discover unique stays, authentic experiences, and create memories that last a lifetime.
          </motion.p>

          {/* Search Form */}
          <motion.div 
            className="bg-white/10 backdrop-blur-md rounded-lg p-4 md:p-6 border border-white/20"
            variants={itemVariants}
          >
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
              <LocationSearch 
                value={searchQuery}
                onChange={setSearchQuery}
                className="flex-grow"
              />
              
              <div className="flex gap-2">
                <DateRangePicker 
                  selectedDate={selectedDate}
                  onDateChange={setSelectedDate}
                />
                
                <Button type="submit" className="zostel-btn-primary">
                  <Search className="mr-2 h-4 w-4" />
                  <span>Search</span>
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300 
                ${index === currentImage ? 'bg-zostel-teal w-8' : 'bg-white/50 hover:bg-white/80'}
              `}
              aria-label={`View slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
