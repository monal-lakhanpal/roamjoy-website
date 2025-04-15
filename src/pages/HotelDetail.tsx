
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { AuthProvider } from '@/hooks/useAuth';
import { useHotelDetail } from '@/hooks/useHotelDetail';

// Import our new components
import ImageGallery from '@/components/hotel/ImageGallery';
import HotelHeader from '@/components/hotel/HotelHeader';
import AmenitiesList from '@/components/hotel/AmenitiesList';
import RoomsList from '@/components/hotel/RoomsList';
import BookingSidebar from '@/components/hotel/BookingSidebar';

const HotelDetail = () => {
  const { id } = useParams();
  const { hotel, selectedDate, handleBookNow } = useHotelDetail(id);

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
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <section>
                  <h2 className="text-2xl font-semibold mb-4 text-zostel-navy dark:text-white">About this hostel</h2>
                  <p className="text-gray-600 dark:text-gray-300">{hotel.description}</p>
                </section>
                
                {/* Amenities */}
                <AmenitiesList amenities={hotel.amenities} />
                
                {/* Rooms */}
                <RoomsList rooms={hotel.rooms} onBookNow={handleBookNow} />
              </div>
              
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <BookingSidebar 
                  onBookNow={handleBookNow} 
                  defaultRoomId={hotel.rooms[0].id} 
                  initialDate={selectedDate}
                />
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default HotelDetail;
