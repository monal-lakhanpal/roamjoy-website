
import { useState } from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ImageGalleryProps {
  images: string[];
  alt: string;
}

const ImageGallery = ({ images, alt }: ImageGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-[50vh] bg-gray-200 overflow-hidden">
      {/* Main Image Display */}
      <img 
        src={images[currentImageIndex]} 
        alt={alt} 
        className="w-full h-full object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80";
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/50 transition-colors"
        aria-label="Previous image"
      >
        <span className="sr-only">Previous</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/50 transition-colors"
        aria-label="Next image"
      >
        <span className="sr-only">Next</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Image Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`
              w-2 h-2 rounded-full transition-all duration-300 
              ${index === currentImageIndex ? 'bg-zostel-teal w-8' : 'bg-white/50 hover:bg-white/80'}
            `}
            aria-label={`View slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
