
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, MapPin, Download, Share2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { AuthProvider } from '@/hooks/useAuth';
import { useAuth } from '@/hooks/useAuth';
import { toast } from "sonner";

const BookingConfirmation = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [booking, setBooking] = useState<any | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!user) {
      toast.error("Please login to view your booking");
      navigate('/');
      return;
    }
    
    // First check session storage for a just-completed booking
    const currentBooking = sessionStorage.getItem('currentBooking');
    if (currentBooking) {
      const parsedBooking = JSON.parse(currentBooking);
      if (parsedBooking.id === bookingId) {
        setBooking({
          ...parsedBooking,
          status: 'confirmed'
        });
        return;
      }
    }
    
    // Then check local storage for existing bookings
    const userBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
    const foundBooking = userBookings.find((b: any) => b.id === bookingId);
    
    if (foundBooking) {
      setBooking(foundBooking);
    } else {
      toast.error("Booking not found");
      navigate('/profile');
    }
  }, [bookingId, user, navigate]);
  
  const handleShareBooking = () => {
    if (navigator.share) {
      navigator.share({
        title: `Booking at ${booking.hotelName}`,
        text: `I've booked a stay at ${booking.hotelName} on ${new Date(booking.date).toLocaleDateString()}!`,
        url: window.location.href,
      })
      .catch(() => toast.error("Sharing failed. Please try again."));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => toast.success("Booking link copied to clipboard!"))
        .catch(() => toast.error("Failed to copy. Please try again."));
    }
  };
  
  const handleViewAllBookings = () => {
    navigate('/profile');
  };
  
  if (!booking) {
    return (
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow flex items-center justify-center">
            <p>Loading booking details...</p>
          </div>
          <Footer />
        </div>
      </AuthProvider>
    );
  }
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short',
      day: 'numeric', 
      month: 'short', 
      year: 'numeric' 
    });
  };
  
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow pt-28 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-800"
              >
                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                    </div>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-zostel-navy dark:text-white mb-2">
                    Booking Successful!
                  </h1>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your booking has been confirmed. We've sent the details to your email.
                  </p>
                </div>
                
                {/* Booking Details Card */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 mb-8 bg-gray-50 dark:bg-zostel-navy/20">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-xl font-semibold">{booking.hotelName}</h2>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{booking.hotelId === 1 ? 'Palolem Beach, Goa' : 'Old Manali, Himachal Pradesh'}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full text-sm font-medium">
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Booking Reference</h3>
                      <p className="font-medium">{booking.id}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Booking Date</h3>
                      <p className="font-medium">{formatDate(booking.createdAt || new Date().toISOString())}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Check-in Date</h3>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-zostel-teal" />
                        <p className="font-medium">{formatDate(booking.date)}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Room Type</h3>
                      <p className="font-medium">{booking.roomType}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Guests</h3>
                      <p className="font-medium">{booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">Payment Method</h3>
                      <p className="font-medium">{booking.paymentMethod === 'card' ? 'Credit/Debit Card' : 'Cash on Arrival'}</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex justify-between mb-2">
                      <span>Room Charge</span>
                      <span>₹{booking.subtotal}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span>Tax</span>
                      <span>₹{booking.tax}</span>
                    </div>
                    {booking.discount > 0 && (
                      <div className="flex justify-between text-green-600 dark:text-green-400 mb-2">
                        <span>Discount</span>
                        <span>-₹{booking.discount}</span>
                      </div>
                    )}
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>₹{booking.total}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-4">
                  <Button 
                    onClick={handleViewAllBookings}
                    className="zostel-btn-primary"
                  >
                    View All Bookings
                  </Button>
                  
                  <Button 
                    onClick={handleShareBooking}
                    variant="outline"
                  >
                    <Share2 className="w-4 h-4 mr-2" />
                    Share Booking
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default BookingConfirmation;
