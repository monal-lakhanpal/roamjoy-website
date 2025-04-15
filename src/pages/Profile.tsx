
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Camera, Edit, Trash } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { AuthProvider } from '@/hooks/useAuth';
import { toast } from "sonner";

interface Booking {
  id: string;
  hotelId: number;
  hotelName: string;
  roomType: string;
  date: string;
  guests: number;
  amount: number;
  status: 'confirmed' | 'cancelled' | 'completed';
  bookingDate: string;
}

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('');
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (user) {
      setName(user.name);
      
      // Mock bookings data
      const storedBookings = localStorage.getItem('userBookings');
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      } else {
        // Sample booking for demonstration
        const sampleBookings: Booking[] = [
          {
            id: 'book123',
            hotelId: 2,
            hotelName: 'Holidayz Manali',
            roomType: '6 Bed Mixed Dorm',
            date: '2025-04-15',
            guests: 2,
            amount: 1790,
            status: 'confirmed',
            bookingDate: '2025-03-30'
          }
        ];
        localStorage.setItem('userBookings', JSON.stringify(sampleBookings));
        setBookings(sampleBookings);
      }
    } else {
      navigate('/');
      toast.error("Please login to view your profile");
    }
  }, [user, navigate]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result as string);
        localStorage.setItem('userProfileImage', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveProfile = () => {
    // In a real app, this would send data to the server
    if (name.trim()) {
      toast.success("Profile updated successfully");
      setIsEditing(false);
    } else {
      toast.error("Name cannot be empty");
    }
  };

  const handleViewBooking = (bookingId: string) => {
    navigate(`/booking-confirmation/${bookingId}`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
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
            <div className="max-w-4xl mx-auto bg-white dark:bg-zostel-charcoal rounded-xl shadow-md overflow-hidden">
              {/* Profile Header */}
              <div className="p-8 bg-zostel-teal/10 dark:bg-zostel-navy/30 relative">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="w-28 h-28 rounded-full overflow-hidden bg-gray-200 border-4 border-white dark:border-zostel-navy">
                      {profileImage ? (
                        <img 
                          src={profileImage} 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zostel-teal/20 text-zostel-teal">
                          <User size={40} />
                        </div>
                      )}
                    </div>
                    <label 
                      htmlFor="profile-image" 
                      className="absolute bottom-0 right-0 w-8 h-8 bg-zostel-teal text-white rounded-full flex items-center justify-center cursor-pointer shadow-md"
                    >
                      <Camera size={14} />
                      <input 
                        type="file" 
                        id="profile-image" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    {isEditing ? (
                      <div className="space-y-3">
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="text-lg font-semibold"
                          placeholder="Your name"
                        />
                        <div className="flex gap-2">
                          <Button onClick={handleSaveProfile} className="zostel-btn-primary">
                            Save
                          </Button>
                          <Button onClick={() => setIsEditing(false)} variant="outline">
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <h1 className="text-2xl font-bold text-zostel-navy dark:text-white">{name}</h1>
                        <p className="text-gray-600 dark:text-gray-300">{user?.email}</p>
                        <Button 
                          onClick={() => setIsEditing(true)} 
                          variant="outline"
                          className="mt-3"
                        >
                          <Edit className="w-4 h-4 mr-2" /> Edit Profile
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Bookings Section */}
              <div className="p-8">
                <h2 className="text-xl font-semibold mb-4 text-zostel-navy dark:text-white">Your Bookings</h2>
                
                {bookings.length > 0 ? (
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <motion.div
                        key={booking.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col md:flex-row justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{booking.hotelName}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{booking.roomType} • {booking.guests} guests</p>
                            <p className="text-sm text-gray-500">
                              Booked on {formatDate(booking.bookingDate)} for {formatDate(booking.date)}
                            </p>
                          </div>
                          
                          <div className="mt-3 md:mt-0 flex items-center">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              booking.status === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 
                              booking.status === 'cancelled' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100' : 
                              'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100'
                            }`}>
                              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                            </span>
                            
                            <p className="ml-4 font-semibold">₹{booking.amount}</p>
                            
                            <Button 
                              variant="ghost" 
                              className="ml-2"
                              onClick={() => handleViewBooking(booking.id)}
                            >
                              View
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 dark:text-gray-400">You don't have any bookings yet.</p>
                    <Button 
                      onClick={() => navigate('/destinations')} 
                      className="zostel-btn-primary mt-4"
                    >
                      Explore Destinations
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default ProfilePage;
