
export interface AdminUser {
  id: string;
  email: string;
  name: string;
  role: string;
  avatar: string;
  lastLogin?: Date;
}

export interface UserStats {
  totalUsers: number;
  newUsersThisMonth: number;
  activeUsers: number;
  growth: number;
}

export interface BookingStats {
  totalBookings: number;
  completedBookings: number;
  pendingBookings: number;
  cancelledBookings: number;
}

export interface RevenueStats {
  totalRevenue: number;
  monthlyRevenue: number;
  averageBookingValue: number;
  yearlyGrowth: number;
}

export interface DestinationStats {
  totalDestinations: number;
  topDestination: string;
  totalHotels: number;
  averageOccupancy: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  bookings: number;
  joinDate: string;
  status: 'active' | 'inactive';
}

export interface Booking {
  id: string;
  guestName: string;
  hotelName: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: number;
  amount: number;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  paymentStatus: 'paid' | 'pending' | 'refunded' | 'failed';
}

export interface DestinationDetail {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  price: string;
  hotels: number;
  active: boolean;
}

export interface HotelDetail {
  id: string;
  name: string;
  location: string;
  images: string[];
  description: string;
  amenities: string[];
  rooms: RoomDetail[];
  rating: number;
  reviews: number;
}

export interface RoomDetail {
  id: string;
  name: string;
  description: string;
  price: number;
  maxGuests: number;
  amenities: string[];
  images: string[];
  available: boolean;
}
