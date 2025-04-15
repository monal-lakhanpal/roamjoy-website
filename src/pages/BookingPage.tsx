
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Info, Star, MinusCircle, PlusCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { toast } from "sonner";
import { useAuth } from '@/hooks/useAuth';

// Get room types based on hotel id
const getRoomTypes = (hotelId: number) => {
  switch (hotelId) {
    case 1: // Goa
      return [
        { id: 'dorm', name: 'Shared Dormitory', price: 549, description: 'Bunk bed in a shared room with up to 6 guests' },
        { id: 'private', name: 'Private Room', price: 1499, description: 'Private room with ensuite bathroom' },
        { id: 'deluxe', name: 'Deluxe Room', price: 2499, description: 'Spacious room with sea view and premium amenities' }
      ];
    case 2: // Manali
      return [
        { id: 'dorm', name: 'Mountain Dorm', price: 599, description: 'Bunk bed in a shared room with up to 8 guests' },
        { id: 'private', name: 'Private Cabin', price: 1799, description: 'Cozy private cabin with mountain view' },
        { id: 'deluxe', name: 'Luxury Suite', price: 2999, description: 'Premium suite with fireplace and panoramic views' }
      ];
    default:
      return [
        { id: 'dorm', name: 'Standard Dormitory', price: 499, description: 'Bunk bed in a shared room' },
        { id: 'private', name: 'Private Room', price: 1499, description: 'Private room for up to 2 guests' },
        { id: 'deluxe', name: 'Deluxe Room', price: 2499, description: 'Premium room with additional amenities' }
      ];
  }
};

const getHotelDetails = (hotelId: number) => {
  const hotels = {
    1: {
      name: "Holidayz Goa",
      location: "Palolem Beach, Goa",
      rating: 4.8,
      description: "Experience the perfect blend of comfort and adventure at our beachside property in Goa. Just steps away from the pristine Palolem Beach, our property offers a relaxed atmosphere with modern amenities and vibrant social spaces.",
      amenities: ["Free Wi-Fi", "Beach Access", "24/7 Reception", "Café & Bar", "Tours & Activities", "Laundry Service"],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80",
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    2: {
      name: "Holidayz Manali",
      location: "Old Manali, Himachal Pradesh",
      rating: 4.7,
      description: "Nestled amidst apple orchards and pine forests, our Manali property offers a perfect mountain getaway. With stunning views of the Himalayas, cozy accommodations, and a vibrant community atmosphere, it's ideal for travelers seeking both adventure and tranquility.",
      amenities: ["Free Wi-Fi", "Mountain Views", "Café", "Common Kitchen", "Bonfire Area", "Tour Desk"],
      images: [
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1544035615-b449bfc3b35c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1531273007729-a7bf85798282?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      ]
    },
    3: {
      name: "Holidayz Rishikesh",
      location: "Laxman Jhula, Rishikesh",
      rating: 4.6,
      description: "Located near the sacred Ganges River, our Rishikesh property offers a perfect blend of spiritual and adventure experiences. Ideal for yoga enthusiasts and river rafting lovers alike.",
      amenities: ["Free Wi-Fi", "Yoga Deck", "River View", "Café", "Adventure Booking", "Library"],
      images: [
        "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1545023924-3878a5a6548c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        "https://images.unsplash.com/photo-1470010037647-4901406be323?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    4: {
      name: "Holidayz Jaipur",
      location: "Old City, Jaipur",
      rating: 4.5,
      description: "Experience the royal heritage of Rajasthan at our haveli-style property in the Pink City. Located near major attractions, it offers an authentic cultural experience with modern comforts.",
      amenities: ["Free Wi-Fi", "Rooftop Café", "Heritage Building", "City Tours", "Breakfast", "Airport Transfers"],
      images: [
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1590775943992-11ba4963363a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1600265722377-a953ad24bd25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
      ]
    },
    5: {
      name: "Holidayz Varanasi",
      location: "Assi Ghat, Varanasi",
      rating: 4.4,
      description: "Our riverside property in Varanasi offers a spiritual retreat with stunning views of the Ganges. Experience the mystical ambiance of India's oldest city with comfortable accommodations.",
      amenities: ["Free Wi-Fi", "Ganga View", "Yoga Classes", "Rooftop Restaurant", "Ghat Walks", "Boat Rides"],
      images: [
        "https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1621996659546-2f4e964d891c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1627894006066-b9384f8a13a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    6: {
      name: "Holidayz Udaipur",
      location: "Lake Pichola, Udaipur",
      rating: 4.9,
      description: "Perched on the banks of Lake Pichola, our Udaipur property offers stunning views of the City Palace and Lake Palace. Enjoy the romance of the Venice of the East with comfortable stays.",
      amenities: ["Free Wi-Fi", "Lake View", "Rooftop Restaurant", "Heritage Walks", "Boat Tours", "Cultural Shows"],
      images: [
        "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
        "https://images.unsplash.com/photo-1610025182378-eae4fd2b3be7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1659107787940-3e718d5c9001?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    },
    7: {
      name: "Holidayz Mumbai",
      location: "Bandra, Mumbai",
      rating: 4.3,
      description: "Our Mumbai property offers a comfortable urban retreat in the heart of the city's hip Bandra neighborhood. Perfect for exploring the city of dreams.",
      amenities: ["Free Wi-Fi", "City Tours", "Airport Shuttle", "Breakfast", "Café", "Business Center"],
      images: [
        "https://images.unsplash.com/photo-1595658658481-d53d3f999875?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        "https://images.unsplash.com/photo-1665915315348-be10e9e64950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1580581307584-77fc69c83184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
      ]
    },
    8: {
      name: "Holidayz Kerala",
      location: "Kochi, Kerala",
      rating: 4.7,
      description: "Nestled in the heart of God's Own Country, our Kerala property offers a tranquil escape with backwater views and lush greenery all around.",
      amenities: ["Free Wi-Fi", "Backwater Tours", "Ayurvedic Spa", "Traditional Cuisine", "Cultural Shows", "Houseboats"],
      images: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
        "https://images.unsplash.com/photo-1589308726544-6a59986e02cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1590766740286-0660f4fe876e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      ]
    }
  };

  return hotels[hotelId as keyof typeof hotels] || hotels[1];
};

const BookingPage = () => {
  const { hotelId } = useParams<{ hotelId: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedRoomType, setSelectedRoomType] = useState<string | null>(null);
  const [guests, setGuests] = useState(1); // Changed default to 1 as requested
  const [roomTypes, setRoomTypes] = useState<any[]>([]);
  const [hotel, setHotel] = useState<any>(null);
  const [bookingDate, setBookingDate] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Calculation values
  const selectedRoom = roomTypes.find(room => room.id === selectedRoomType);
  const basePrice = selectedRoom ? selectedRoom.price : 0;
  const subtotal = basePrice * guests;
  const taxRate = 0.18; // 18% GST
  const tax = Math.round(subtotal * taxRate);
  const discount = user ? Math.round(subtotal * 0.1) : 0; // 10% discount for logged in users
  const total = subtotal + tax - discount;
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!hotelId) {
      navigate('/destinations');
      return;
    }
    
    const searchDate = sessionStorage.getItem('searchDate');
    if (searchDate) {
      setBookingDate(searchDate);
    } else {
      // Set default date to tomorrow if not selected
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setBookingDate(tomorrow.toISOString().split('T')[0]);
    }
    
    // Get hotel details and room types
    const hotelDetails = getHotelDetails(Number(hotelId));
    setHotel(hotelDetails);
    const availableRoomTypes = getRoomTypes(Number(hotelId));
    setRoomTypes(availableRoomTypes);
    
    return () => {
      // Cleanup if needed
    };
  }, [hotelId, navigate]);
  
  const handleRoomTypeSelect = (roomTypeId: string) => {
    setSelectedRoomType(roomTypeId);
  };
  
  const handleGuestsChange = (change: number) => {
    const newGuests = guests + change;
    if (newGuests >= 1 && newGuests <= 10) {
      setGuests(newGuests);
    }
  };
  
  const handleBookNow = () => {
    if (!user) {
      toast.error("Please login to continue with booking");
      return;
    }
    
    if (!selectedRoomType) {
      toast.error("Please select a room type");
      return;
    }
    
    // Create booking object
    const booking = {
      id: `booking_${Math.random().toString(36).substring(2, 15)}`,
      hotelId: hotelId,
      hotelName: hotel.name,
      roomType: selectedRoom.name,
      date: bookingDate,
      guests,
      subtotal,
      tax,
      discount,
      total,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    
    // Store booking temporarily
    sessionStorage.setItem('currentBooking', JSON.stringify(booking));
    
    // Navigate to payment page
    navigate(`/payment/${booking.id}`);
  };
  
  const nextImage = () => {
    if (hotel) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotel.images.length);
    }
  };
  
  const prevImage = () => {
    if (hotel) {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === 0 ? hotel.images.length - 1 : prevIndex - 1
      );
    }
  };
  
  if (!hotel) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading hotel details...</p>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-12">
        <div className="container mx-auto px-4">
          {/* Hotel Details Section */}
          <section className="mb-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-zostel-navy dark:text-white">{hotel.name}</h1>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">{hotel.location}</p>
                </div>
                
                <div className="flex items-center mt-2 md:mt-0 bg-white/90 dark:bg-zostel-navy/80 px-4 py-2 rounded-full shadow-sm">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" fill="currentColor" />
                  <span className="font-medium">{hotel.rating}</span>
                  <span className="text-gray-600 dark:text-gray-300 ml-1">/ 5</span>
                </div>
              </div>
              
              {/* Image Carousel */}
              <div className="relative rounded-xl overflow-hidden h-64 md:h-96 mb-6">
                <img 
                  src={hotel.images[currentImageIndex]} 
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-black/70 rounded-full p-2"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/70 dark:bg-black/70 rounded-full p-2"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
                
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {hotel.images.map((_, index) => (
                    <span 
                      key={index} 
                      className={`w-2 h-2 rounded-full ${currentImageIndex === index ? 'bg-white' : 'bg-white/50'}`}
                    />
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {hotel.description}
              </p>
              
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {hotel.amenities.map((amenity: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="bg-gray-100 dark:bg-zostel-navy/30 rounded-lg px-4 py-2 text-center text-sm"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Room Selection Section */}
            <motion.section 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-4">Select Room Type</h2>
              
              <div className="space-y-4">
                {roomTypes.map((roomType) => (
                  <div 
                    key={roomType.id}
                    className={`border p-4 rounded-lg cursor-pointer transition-all ${
                      selectedRoomType === roomType.id 
                        ? 'border-zostel-teal dark:border-zostel-teal bg-zostel-teal/5' 
                        : 'border-gray-200 dark:border-gray-700 hover:border-zostel-teal/50'
                    }`}
                    onClick={() => handleRoomTypeSelect(roomType.id)}
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{roomType.name}</h3>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{roomType.description}</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-zostel-navy dark:text-zostel-teal">₹{roomType.price}</div>
                        <div className="text-gray-600 dark:text-gray-400 text-xs">per night</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Number of Guests</h2>
                <div className="flex items-center space-x-6">
                  <button 
                    onClick={() => handleGuestsChange(-1)}
                    disabled={guests <= 1}
                    className={`${guests <= 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <MinusCircle className="w-6 h-6" />
                  </button>
                  <span className="text-2xl font-medium">{guests}</span>
                  <button 
                    onClick={() => handleGuestsChange(1)}
                    disabled={guests >= 10}
                    className={`${guests >= 10 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <PlusCircle className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.section>
            
            {/* Booking Summary Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="bg-white dark:bg-zostel-navy/20 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm sticky top-24">
                <h2 className="text-2xl font-bold mb-4">Booking Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <div className="text-gray-600 dark:text-gray-300">Check-in Date</div>
                    <div>{new Date(bookingDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-600 dark:text-gray-300">Room Type</div>
                    <div>{selectedRoom ? selectedRoom.name : '—'}</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-gray-600 dark:text-gray-300">Guests</div>
                    <div>{guests}</div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <div className="text-gray-600 dark:text-gray-300">Room Charge</div>
                    <div>₹{basePrice} × {guests} = ₹{subtotal}</div>
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="text-gray-600 dark:text-gray-300">GST (18%)</div>
                    <div>₹{tax}</div>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between mb-2 text-green-600 dark:text-green-400">
                      <div>Member Discount (10%)</div>
                      <div>-₹{discount}</div>
                    </div>
                  )}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <div>Total</div>
                      <div>₹{total}</div>
                    </div>
                  </div>
                </div>
                
                {!user && (
                  <div className="flex items-start gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md mb-4">
                    <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-blue-700 dark:text-blue-300">
                      Log in to get a 10% member discount and track your bookings.
                    </p>
                  </div>
                )}
                
                <Button 
                  onClick={handleBookNow}
                  className="zostel-btn-primary w-full"
                  disabled={!selectedRoomType}
                >
                  {user ? 'Book Now' : 'Login to Book'}
                </Button>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
