
import { Hotel } from "../types/hotel";

export const udaipurHotel: Hotel = {
  id: 6,
  name: "Holidayz Udaipur",
  location: "Lake Pichola, Udaipur",
  description: "Experience the romance of the City of Lakes at Holidayz Udaipur. Our lakeside property offers stunning views of palaces and mountains, creating an unforgettable backdrop for your stay.",
  images: [
    "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    "https://images.unsplash.com/photo-1623874228601-f4193c7b1818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    "https://images.unsplash.com/photo-1585116938581-d3c355b286a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
  ],
  rating: 4.9,
  reviews: 205,
  amenities: ["Free WiFi", "Lake Views", "Rooftop Restaurant", "Boat Tours", "Heritage Walks", "Air Conditioning"],
  rooms: [
    {
      id: 'udaipur-dorm-6',
      name: "6 Bed Mixed Dorm",
      price: 699,
      image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Comfortable 6-bed mixed dorm with lakeside views, artistic decor, and modern amenities."
    },
    {
      id: 'udaipur-dorm-4',
      name: "4 Bed Female Dorm",
      price: 799,
      image: "https://images.unsplash.com/photo-1520277739336-7bf67edfa768?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
      description: "Female-only 4-bed dorm with enhanced privacy, personal lockers, and lake views."
    },
    {
      id: 'udaipur-private',
      name: "Lakeside Private Room",
      price: 1699,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      description: "Elegant private room with panoramic views of Lake Pichola and the royal palaces of Udaipur."
    }
  ]
};
