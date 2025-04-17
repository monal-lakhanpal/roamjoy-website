
import { 
  UserStats, 
  BookingStats, 
  RevenueStats, 
  DestinationStats, 
  User, 
  Booking,
  DestinationDetail,
  HotelDetail
} from "@/types/admin";

// Stats for dashboard
export const userStats: UserStats = {
  totalUsers: 2458,
  newUsersThisMonth: 156,
  activeUsers: 1872,
  growth: 12.5
};

export const bookingStats: BookingStats = {
  totalBookings: 4782,
  completedBookings: 3890,
  pendingBookings: 245,
  cancelledBookings: 647
};

export const revenueStats: RevenueStats = {
  totalRevenue: 4582600,
  monthlyRevenue: 345800,
  averageBookingValue: 3600,
  yearlyGrowth: 24.8
};

export const destinationStats: DestinationStats = {
  totalDestinations: 15,
  topDestination: "Goa",
  totalHotels: 42,
  averageOccupancy: 72.4
};

// Monthly revenue data for charts
export const monthlyRevenueData = [
  { name: 'Jan', revenue: 290000 },
  { name: 'Feb', revenue: 310000 },
  { name: 'Mar', revenue: 325000 },
  { name: 'Apr', revenue: 370000 },
  { name: 'May', revenue: 390000 },
  { name: 'Jun', revenue: 420000 },
  { name: 'Jul', revenue: 460000 },
  { name: 'Aug', revenue: 450000 },
  { name: 'Sep', revenue: 410000 },
  { name: 'Oct', revenue: 380000 },
  { name: 'Nov', revenue: 345800 },
  { name: 'Dec', revenue: 430000 },
];

// Top destinations data
export const topDestinations = [
  { name: 'Goa', bookings: 842, revenue: 1240800 },
  { name: 'Manali', bookings: 654, revenue: 980600 },
  { name: 'Jaipur', bookings: 512, revenue: 715680 },
  { name: 'Rishikesh', bookings: 489, revenue: 684600 },
  { name: 'Udaipur', bookings: 423, revenue: 634500 },
];

// User data for users table
export const userData: User[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '+91 98765 43210',
    bookings: 5,
    joinDate: '2023-01-15',
    status: 'active'
  },
  {
    id: '2',
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    phone: '+91 87654 32109',
    bookings: 3,
    joinDate: '2023-02-22',
    status: 'active'
  },
  {
    id: '3',
    name: 'Amit Kumar',
    email: 'amit.kumar@example.com',
    phone: '+91 76543 21098',
    bookings: 8,
    joinDate: '2022-11-05',
    status: 'active'
  },
  {
    id: '4',
    name: 'Neha Singh',
    email: 'neha.singh@example.com',
    phone: '+91 65432 10987',
    bookings: 2,
    joinDate: '2023-04-10',
    status: 'inactive'
  },
  {
    id: '5',
    name: 'Vikram Mehta',
    email: 'vikram.mehta@example.com',
    phone: '+91 54321 09876',
    bookings: 6,
    joinDate: '2022-09-18',
    status: 'active'
  }
];

// Booking data for bookings table
export const bookingData: Booking[] = [
  {
    id: 'BK-001',
    guestName: 'Rahul Sharma',
    hotelName: 'Holidayz Goa',
    checkIn: '2023-11-20',
    checkOut: '2023-11-25',
    roomType: 'Deluxe Room',
    guests: 2,
    amount: 11990,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  {
    id: 'BK-002',
    guestName: 'Priya Patel',
    hotelName: 'Holidayz Jaipur',
    checkIn: '2023-12-05',
    checkOut: '2023-12-10',
    roomType: 'Premium Suite',
    guests: 4,
    amount: 24500,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  {
    id: 'BK-003',
    guestName: 'Amit Kumar',
    hotelName: 'Holidayz Manali',
    checkIn: '2023-11-28',
    checkOut: '2023-12-02',
    roomType: 'Mountain View Room',
    guests: 2,
    amount: 15750,
    status: 'pending',
    paymentStatus: 'pending'
  },
  {
    id: 'BK-004',
    guestName: 'Neha Singh',
    hotelName: 'Holidayz Udaipur',
    checkIn: '2023-12-15',
    checkOut: '2023-12-18',
    roomType: 'Lake View Suite',
    guests: 3,
    amount: 18000,
    status: 'confirmed',
    paymentStatus: 'paid'
  },
  {
    id: 'BK-005',
    guestName: 'Vikram Mehta',
    hotelName: 'Holidayz Rishikesh',
    checkIn: '2023-11-10',
    checkOut: '2023-11-15',
    roomType: 'River View Room',
    guests: 1,
    amount: 8500,
    status: 'completed',
    paymentStatus: 'paid'
  }
];

// Destinations data
export const destinationsData: DestinationDetail[] = [
  {
    id: '1',
    name: 'Goa',
    location: 'Palolem Beach',
    description: 'Experience the perfect blend of beach vibes and cultural richness in Goa.',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
    price: 'Starts at ₹549/night',
    hotels: 8,
    active: true
  },
  {
    id: '2',
    name: 'Manali',
    location: 'Old Manali',
    description: 'Discover the serene beauty of the mountains and adventure sports in Manali.',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 'Starts at ₹599/night',
    hotels: 6,
    active: true
  },
  {
    id: '3',
    name: 'Rishikesh',
    location: 'Laxman Jhula',
    description: 'Find spiritual connection and adventure in the yoga capital of the world.',
    image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    price: 'Starts at ₹499/night',
    hotels: 5,
    active: true
  },
  {
    id: '4',
    name: 'Jaipur',
    location: 'Old City',
    description: 'Explore the rich heritage and vibrant culture of the Pink City.',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 'Starts at ₹649/night',
    hotels: 7,
    active: true
  },
  {
    id: '5',
    name: 'Varanasi',
    location: 'Assi Ghat',
    description: 'Experience the spiritual heart of India on the banks of the Ganges.',
    image: 'https://images.unsplash.com/photo-1596097825168-c9b773f404ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    price: 'Starts at ₹449/night',
    hotels: 4,
    active: true
  }
];

// Hotels data
export const hotelsData: HotelDetail[] = [
  {
    id: '1',
    name: 'Holidayz Goa',
    location: 'Palolem Beach, Goa',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80'
    ],
    description: 'Enjoy the beach vibes at our Goa property with a perfect blend of comfort and adventure.',
    amenities: ['Free WiFi', '24/7 Reception', 'Cafe', 'Beach Views', 'Guided Tours'],
    rooms: [
      {
        id: 'R-001',
        name: 'Deluxe Dorm',
        description: 'Comfortable 6-bed mixed dorm with ocean views',
        price: 599,
        maxGuests: 6,
        amenities: ['Air Conditioning', 'Locker', 'Shared Bathroom'],
        images: ['https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2057&q=80'],
        available: true
      },
      {
        id: 'R-002',
        name: 'Private Room',
        description: 'Cozy private room with a queen bed and balcony',
        price: 1299,
        maxGuests: 2,
        amenities: ['Air Conditioning', 'Private Bathroom', 'Sea View'],
        images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'],
        available: true
      }
    ],
    rating: 4.7,
    reviews: 328
  },
  {
    id: '2',
    name: 'Holidayz Manali',
    location: 'Old Manali, Himachal Pradesh',
    images: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      'https://images.unsplash.com/photo-1604537466158-719b1972feb8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
    ],
    description: 'Experience the mountain magic at our cozy Manali property with stunning views.',
    amenities: ['Free WiFi', 'Mountain Views', 'Cafe', 'Trekking Tours', '24/7 Reception'],
    rooms: [
      {
        id: 'R-003',
        name: 'Mountain Dorm',
        description: '8-bed mixed dorm with mountain views and warm bedding',
        price: 549,
        maxGuests: 8,
        amenities: ['Heating', 'Locker', 'Shared Bathroom'],
        images: ['https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'],
        available: true
      },
      {
        id: 'R-004',
        name: 'Alpine Cabin',
        description: 'Cozy wooden cabin with a fireplace and mountain views',
        price: 1599,
        maxGuests: 3,
        amenities: ['Fireplace', 'Private Bathroom', 'Mountain View'],
        images: ['https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'],
        available: true
      }
    ],
    rating: 4.8,
    reviews: 256
  }
];
