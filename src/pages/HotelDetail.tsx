
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/hooks/useAuth';
import { useHotelDetail } from '@/hooks/useHotelDetail';
import { Button } from '@/components/ui/button';

// Import our components
import ImageGallery from '@/components/hotel/ImageGallery';
import HotelHeader from '@/components/hotel/HotelHeader';
import AmenitiesList from '@/components/hotel/AmenitiesList';
import RoomsList from '@/components/hotel/RoomsList';

const HotelDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { hotel, handleBookNow } = useHotelDetail(id);

  // Function to navigate to booking page with room ID
  const navigateToBooking = (roomId: string) => {
    navigate(`/booking/${id}?roomId=${roomId}`);
  };

  if (!hotel) {
    return (
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow flex items-center justify-center">
            <p>Loading...</p>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-20">
          {/* Image Gallery with Hotel Header */}
          <div className="relative">
            <ImageGallery images={hotel.images} alt={hotel.name} />
            <HotelHeader 
              name={hotel.name} 
              location={hotel.location} 
              rating={hotel.rating} 
              reviews={hotel.reviews} 
            />
          </div>
          
          <div className="container mx-auto px-4 py-8">
            <div className="space-y-8">
              {/* Description */}
              <section>
                <h2 className="text-2xl font-semibold mb-4 text-zostel-navy dark:text-white">About this hostel</h2>
                <p className="text-gray-600 dark:text-gray-300">{hotel.description}</p>
              </section>
              
              {/* Amenities */}
              <AmenitiesList amenities={hotel.amenities} />
              
              {/* CTA Button for mobile - Fixed to bottom */}
              <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-zostel-navy shadow-lg z-10">
                <Button 
                  onClick={() => navigateToBooking(hotel.rooms[0].id)}
                  className="zostel-btn-primary w-full"
                >
                  Book Now
                </Button>
              </div>
              
              {/* Rooms */}
              <RoomsList rooms={hotel.rooms} onBookNow={navigateToBooking} />
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default HotelDetail;
