import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, Calendar, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { toast } from "sonner";

const hotels = [
  {
    id: 1,
    name: "Holidayz Goa",
    location: "Palolem Beach, Goa",
    description: "Located just 5 minutes from the beautiful Palolem Beach, Holidayz Goa offers a perfect blend of comfort and adventure. Enjoy the scenic beauty of Goa while experiencing our signature hospitality.",
    images: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      "https://images.unsplash.com/photo-1515404929826-76fff9fef6fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    rating: 4.7,
    reviews: 215,
    amenities: ["Free WiFi", "24/7 Reception", "Common Kitchen", "Cafe", "Outdoor Activities", "Hot Showers"],
    rooms: [
      {
        id: 'goa-dorm-6',
        name: "6 Bed Mixed Dorm",
        price: 549,
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        description: "Comfortable 6-bed mixed dorm with personal lockers, reading lights, and charging points."
      },
      {
        id: 'goa-dorm-4',
        name: "4 Bed Female Dorm",
        price: 649,
        image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        description: "Female-only 4-bed dorm with enhanced privacy, personal lockers, and en-suite bathroom."
      },
      {
        id: 'goa-private',
        name: "Private Room",
        price: 1249,
        image: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Cozy private room for two with king-sized bed, private bathroom, and sea view."
      }
    ]
  },
  {
    id: 2,
    name: "Holidayz Manali",
    location: "Old Manali, Himachal Pradesh",
    description: "Nestled in the heart of Old Manali, Holidayz Manali offers stunning mountain views and easy access to local attractions. Our hostel is designed for travelers seeking adventure and connections.",
    images: [
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1540304453527-62f979142a17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    ],
    rating: 4.8,
    reviews: 186,
    amenities: ["Free WiFi", "Mountain Views", "Common Lounge", "Cafe", "Trekking Tours", "Hot Water"],
    rooms: [
      {
        id: 'manali-dorm-6',
        name: "6 Bed Mixed Dorm",
        price: 599,
        image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Comfortable 6-bed mixed dorm with mountain views, personal lockers, and warm bedding."
      },
      {
        id: 'manali-dorm-8',
        name: "8 Bed Mixed Dorm",
        price: 499,
        image: "https://images.unsplash.com/photo-1629794226066-349748040fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Budget-friendly 8-bed mixed dorm with personal lockers and reading lights."
      },
      {
        id: 'manali-private',
        name: "Deluxe Private Room",
        price: 1599,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
        description: "Spacious private room with wooden interiors, king-sized bed, and stunning mountain views."
      }
    ]
  },
];

const BookingPage = () => {
  const { hotelId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [hotel, setHotel] = useState<any | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<any | null>(null);
  const [guests, setGuests] = useState(2);
  const [bookingDate, setBookingDate] = useState<string>('');
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('roomId');

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!user) {
      toast.error("Please login to make a booking");
      navigate('/');
      return;
    }

    const numHotelId = parseInt(hotelId || '0');
    const foundHotel = hotels.find(h => h.id === numHotelId);
    
    if (!foundHotel) {
      toast.error("Hotel not found");
      navigate('/destinations');
      return;
    }
    
    setHotel(foundHotel);
    
    if (roomId) {
      const foundRoom = foundHotel.rooms.find((r: any) => r.id === roomId);
      if (foundRoom) {
        setSelectedRoom(foundRoom);
      } else {
        setSelectedRoom(foundHotel.rooms[0]);
      }
    } else {
      setSelectedRoom(foundHotel.rooms[0]);
    }
    
    const searchDate = sessionStorage.getItem('searchDate');
    if (searchDate) {
      const formattedDate = new Date(searchDate).toISOString().split('T')[0];
      setBookingDate(formattedDate);
    } else {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setBookingDate(tomorrow.toISOString().split('T')[0]);
    }
  }, [hotelId, roomId, navigate, user]);

  const incrementGuests = () => {
    if (guests < 10) {
      setGuests(prev => prev + 1);
    }
  };

  const decrementGuests = () => {
    if (guests > 1) {
      setGuests(prev => prev - 1);
    }
  };
  
  const handleRoomSelect = (room: any) => {
    setSelectedRoom(room);
  };
  
  const handleApplyCoupon = () => {
    if (couponCode.toLowerCase() === 'holidays10') {
      setDiscount(10);
      toast.success("Coupon applied: 10% discount");
    } else if (couponCode.toLowerCase() === 'welcome20') {
      setDiscount(20);
      toast.success("Coupon applied: 20% discount");
    } else {
      setDiscount(0);
      toast.error("Invalid coupon code");
    }
  };
  
  const calculateSubtotal = () => {
    if (!selectedRoom) return 0;
    return selectedRoom.price * guests;
  };
  
  const calculateTax = () => {
    return Math.round(calculateSubtotal() * 0.12); // 12% tax
  };
  
  const calculateDiscountAmount = () => {
    return Math.round(calculateSubtotal() * discount / 100);
  };
  
  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax() - calculateDiscountAmount();
  };
  
  const handleProceedToPayment = () => {
    if (!bookingDate) {
      toast.error("Please select a booking date");
      return;
    }

    const booking = {
      id: `book-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
      hotelId: hotel.id,
      hotelName: hotel.name,
      roomId: selectedRoom.id,
      roomType: selectedRoom.name,
      date: bookingDate,
      guests,
      price: selectedRoom.price,
      subtotal: calculateSubtotal(),
      tax: calculateTax(),
      discount: calculateDiscountAmount(),
      total: calculateTotal(),
      createdAt: new Date().toISOString()
    };
    
    sessionStorage.setItem('currentBooking', JSON.stringify(booking));
    
    navigate(`/payment/${booking.id}`);
  };

  if (!hotel || !selectedRoom) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <p>Loading...</p>
        </div>
        <Footer />
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short',
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-sm breadcrumbs mb-6">
            <ul className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <li><a href="/" className="hover:text-zostel-teal">Home</a></li>
              <li><span className="mx-2">›</span></li>
              <li><a href="/destinations" className="hover:text-zostel-teal">Destinations</a></li>
              <li><span className="mx-2">›</span></li>
              <li><a href={`/hotel/${hotel.id}`} className="hover:text-zostel-teal">{hotel.name}</a></li>
              <li><span className="mx-2">›</span></li>
              <li className="text-gray-900 dark:text-white">Booking</li>
            </ul>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-zostel-navy dark:text-white mb-8">
            Complete Your Booking
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <div className="flex items-start">
                  <img 
                    src={hotel.images[0]} 
                    alt={hotel.name}
                    className="w-20 h-20 object-cover rounded-md mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-zostel-navy dark:text-white">{hotel.name}</h2>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{hotel.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-semibold text-zostel-navy dark:text-white mb-4">Select Your Room</h2>
                
                <div className="space-y-4">
                  {hotel.rooms.map((room: any) => (
                    <div 
                      key={room.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                        selectedRoom.id === room.id 
                          ? 'border-zostel-teal bg-zostel-teal/5' 
                          : 'border-gray-200 hover:border-zostel-teal/50'
                      }`}
                      onClick={() => handleRoomSelect(room)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                            selectedRoom.id === room.id 
                              ? 'border-zostel-teal bg-zostel-teal' 
                              : 'border-gray-400'
                          }`}>
                            {selectedRoom.id === room.id && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                          <div>
                            <h3 className="font-medium">{room.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{room.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-zostel-navy dark:text-zostel-teal">₹{room.price}</span>
                          <p className="text-xs text-gray-500 dark:text-gray-400">/night</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-semibold text-zostel-navy dark:text-white mb-4">Booking Details</h2>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Check-in Date</label>
                    <div className="flex items-center border border-gray-300 dark:border-gray-700 rounded-md p-2">
                      <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                      <input 
                        type="date" 
                        value={bookingDate} 
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="bg-transparent w-full focus:outline-none text-gray-700 dark:text-gray-300"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Number of Guests</label>
                    <div className="flex items-center">
                      <Button 
                        onClick={decrementGuests}
                        disabled={guests <= 1}
                        variant="outline"
                        className="h-10 w-10 flex items-center justify-center"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      
                      <div className="flex-1 text-center font-medium text-gray-800 dark:text-gray-200 mx-4">
                        {guests} {guests === 1 ? 'Guest' : 'Guests'}
                      </div>
                      
                      <Button 
                        onClick={incrementGuests}
                        disabled={guests >= 10}
                        variant="outline"
                        className="h-10 w-10 flex items-center justify-center"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white dark:bg-zostel-charcoal rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-zostel-navy dark:text-white mb-4">Booking Summary</h3>
                
                {bookingDate && (
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-1 text-zostel-teal" />
                      <span>Check-in: {formatDate(bookingDate)}</span>
                    </div>
                    <div className="pl-5">1 night stay</div>
                  </div>
                )}
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>{selectedRoom.name} × {guests}</span>
                    <span>₹{calculateSubtotal()}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax (12%)</span>
                    <span>₹{calculateTax()}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount ({discount}%)</span>
                      <span>-₹{calculateDiscountAmount()}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-base">
                      <span>Total</span>
                      <span>₹{calculateTotal()}</span>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-right mt-1">
                      (including all taxes)
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Have a discount coupon?
                  </label>
                  <div className="flex gap-2">
                    <Input
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                    />
                    <Button 
                      onClick={handleApplyCoupon}
                      variant="outline"
                    >
                      Apply
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Try codes: HOLIDAYS10, WELCOME20
                  </p>
                </div>
                
                <Button 
                  onClick={handleProceedToPayment}
                  className="w-full zostel-btn-primary mt-6"
                >
                  Proceed to Payment
                </Button>
                
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  By proceeding, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
