import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCard, Calendar, MapPin, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useAuth } from '@/hooks/useAuth';
import { toast } from "sonner";

const PaymentPage = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cod'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  
  const [booking, setBooking] = useState<any | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (!user) {
      toast.error("Please login to make a payment");
      navigate('/');
      return;
    }
    
    const storedBooking = sessionStorage.getItem('currentBooking');
    if (storedBooking) {
      setBooking(JSON.parse(storedBooking));
    } else {
      toast.error("Booking details not found");
      navigate('/destinations');
    }
  }, [bookingId, user, navigate]);
  
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 16) {
      setCardNumber(value);
    }
  };
  
  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 4) {
      setExpiryDate(value);
    }
  };
  
  const handleCvvChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 3) {
      setCvv(value);
    }
  };
  
  const formatCardNumber = () => {
    const groups = [];
    for (let i = 0; i < cardNumber.length; i += 4) {
      groups.push(cardNumber.slice(i, i + 4));
    }
    return groups.join(' ');
  };
  
  const formatExpiryDate = () => {
    if (expiryDate.length > 2) {
      return `${expiryDate.slice(0, 2)}/${expiryDate.slice(2)}`;
    }
    return expiryDate;
  };
  
  const validateForm = () => {
    if (paymentMethod === 'card') {
      if (cardNumber.length !== 16) {
        toast.error("Please enter a valid 16-digit card number");
        return false;
      }
      
      if (!cardName.trim()) {
        toast.error("Please enter the cardholder's name");
        return false;
      }
      
      if (expiryDate.length !== 4) {
        toast.error("Please enter a valid expiry date (MM/YY)");
        return false;
      }
      
      if (cvv.length !== 3) {
        toast.error("Please enter a valid 3-digit CVV");
        return false;
      }
    }
    
    return true;
  };
  
  const handlePayment = () => {
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    setTimeout(() => {
      if (booking) {
        const completedBooking = {
          ...booking,
          id: bookingId,
          status: 'confirmed',
          paymentMethod,
          bookingDate: new Date().toISOString().split('T')[0]
        };
        
        const userBookings = JSON.parse(localStorage.getItem('userBookings') || '[]');
        userBookings.push(completedBooking);
        localStorage.setItem('userBookings', JSON.stringify(userBookings));
        
        sessionStorage.removeItem('currentBooking');
        
        navigate(`/booking-confirmation/${bookingId}`);
      }
      
      setIsProcessing(false);
    }, 2000);
  };
  
  if (!booking) {
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-sm breadcrumbs mb-6">
            <ul className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
              <li><a href="/" className="hover:text-zostel-teal">Home</a></li>
              <li><span className="mx-2">›</span></li>
              <li><a href={`/hotel/${booking.hotelId}`} className="hover:text-zostel-teal">{booking.hotelName}</a></li>
              <li><span className="mx-2">›</span></li>
              <li><a href={`/booking/${booking.hotelId}`} className="hover:text-zostel-teal">Booking</a></li>
              <li><span className="mx-2">›</span></li>
              <li className="text-gray-900 dark:text-white">Payment</li>
            </ul>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-zostel-navy dark:text-white mb-8">
            Payment
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-zostel-charcoal rounded-lg shadow-sm p-6 border border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-semibold text-zostel-navy dark:text-white mb-4">Select Payment Method</h2>
                
                <RadioGroup value={paymentMethod} onValueChange={(v) => setPaymentMethod(v as 'card' | 'cod')}>
                  <div className="flex items-start space-x-2 mb-4">
                    <RadioGroupItem value="card" id="card" className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor="card" className="font-medium flex items-center">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Credit / Debit Card
                      </Label>
                      
                      {paymentMethod === 'card' && (
                        <motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-4"
                        >
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              value={formatCardNumber()}
                              onChange={handleCardNumberChange}
                              placeholder="1234 5678 9012 3456"
                              maxLength={19}
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cardName">Cardholder Name</Label>
                            <Input
                              id="cardName"
                              value={cardName}
                              onChange={(e) => setCardName(e.target.value)}
                              placeholder="John Doe"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <Label htmlFor="expiryDate">Expiry Date (MM/YY)</Label>
                              <Input
                                id="expiryDate"
                                value={formatExpiryDate()}
                                onChange={handleExpiryDateChange}
                                placeholder="MM/YY"
                                maxLength={5}
                              />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                value={cvv}
                                onChange={handleCvvChange}
                                placeholder="123"
                                maxLength={3}
                                type="password"
                              />
                            </div>
                          </div>
                          
                          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <Lock className="w-4 h-4 mr-2 text-zostel-teal" />
                            Secured by SSL encryption. We do not store your card details.
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <RadioGroupItem value="cod" id="cod" className="mt-1" />
                    <div>
                      <Label htmlFor="cod" className="font-medium">Cash on Arrival</Label>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Pay at the property during check-in
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-white dark:bg-zostel-charcoal rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-semibold text-zostel-navy dark:text-white mb-4">Booking Summary</h3>
                
                <div className="mb-4">
                  <div className="flex items-start mb-2">
                    <div className="flex-shrink-0 w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden mr-3">
                      <img 
                        src={`https://images.unsplash.com/photo-${booking.hotelId === 1 ? '1512343879784-a960bf40e7f2' : '1626621341517-bbf3d9990a23'}`} 
                        alt={booking.hotelName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium">{booking.hotelName}</h4>
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <MapPin className="w-3 h-3 mr-1" />
                        {booking.hotelId === 1 ? 'Palolem Beach, Goa' : 'Old Manali, Himachal Pradesh'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                    <div className="flex items-center mb-1">
                      <Calendar className="w-4 h-4 mr-1 text-zostel-teal" />
                      <span>Check-in: {new Date(booking.date).toLocaleDateString('en-IN', { 
                        weekday: 'short',
                        day: 'numeric', 
                        month: 'short', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <div className="ml-5">1 night • {booking.guests} guests</div>
                    <div className="ml-5">{booking.roomType}</div>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                  <div className="flex justify-between">
                    <span>Room Charge</span>
                    <span>₹{booking.subtotal}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Tax (12%)</span>
                    <span>₹{booking.tax}</span>
                  </div>
                  
                  {booking.discount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount</span>
                      <span>-₹{booking.discount}</span>
                    </div>
                  )}
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-2 mt-2">
                    <div className="flex justify-between font-semibold text-base">
                      <span>Total</span>
                      <span>₹{booking.total}</span>
                    </div>
                  </div>
                </div>
                
                <Button 
                  onClick={handlePayment}
                  className="w-full zostel-btn-primary mt-6"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    `Pay ₹${booking.total}`
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PaymentPage;
